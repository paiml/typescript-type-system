// Contract: the cart type-checks with 0 errors, its receipt adds up, unknown
// quantities are checked, and each file in mistakes/ fails with its own error.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";
import { savings, toQuantity, total } from "./src/cart.ts";
import type { Cart } from "./src/types.ts";

// Step 1: the project type-checks with 0 errors.
const project = tsc("-p", "cart");
assert.equal(project.status, 0, project.stdout);
console.log("step 1: npx tsc -p cart, 0 errors");

// Step 2: the receipt adds up: 2 x 12.50 + 3 x 3.00 = 34.00, minus 10%.
const receipt = node("cart/src/main.ts");
assert.equal(receipt.status, 0, receipt.stderr);
assert.match(receipt.stdout, /^subtotal: 34\.00$/m);
assert.match(receipt.stdout, /^total: 30\.60$/m);
const cart: Cart = {
  lines: [{ product: { id: "p1", title: "Notebook", price: 10 }, quantity: 3 }],
  discount: { kind: "fixed", amount: 50 },
};
assert.equal(savings(cart.discount, 30), 30);
assert.equal(total(cart), 0);
console.log("step 2: total 30.60 (34.00 less 10%); a fixed discount stops at 0");

// Step 3: unknown quantities are checked before use.
assert.equal(toQuantity("2"), 2);
assert.equal(toQuantity(3), 3);
for (const bad of ["two", -1, 1.5, null]) {
  assert.throws(() => toQuantity(bad), /not a quantity/);
}
console.log('step 3: "2" and 3 are quantities; "two", -1, 1.5 and null are not');

// Step 4: each mistake fails with its own error code.
const mistakes = tsc("-p", "cart/mistakes");
assert.deepEqual(mistakes.codes, ["TS2540", "TS2322", "TS18048", "TS18046", "TS2820"], mistakes.stdout);
console.log("step 4: 5 mistakes, 5 errors: " + mistakes.codes.join(" "));

// Step 5: the contract line.
console.log("contract: shopping cart (typed, adds up, mistakes caught) OK");
