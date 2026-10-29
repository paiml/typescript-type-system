// Contract: types.ts gives a product a read-only id, three kinds of discount
// told apart by kind, and a cart an optional coupon; savings ends its switch
// in never; the cart has 0 errors, and each of the five files in mistakes/
// fails once, with its own error code.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { tsc } from "../support/run.ts";

const types = readFileSync("cart/src/types.ts", "utf8");
assert.match(types, /readonly id: string;/);
assert.match(types, /coupon\?: string;/);
const kinds = [...types.matchAll(/\| \{ kind: "(\w+)"/g)].map((m) => m[1]);
assert.deepEqual(kinds, ["none", "percent", "fixed"]);
console.log("types.ts:  readonly id, kinds " + kinds.join(" "), "and coupon?");

const cart = readFileSync("cart/src/cart.ts", "utf8");
assert.match(cart, /default:\s+const unhandled: never = discount;/);
console.log("cart.ts:   savings ends its switch in never");

const project = tsc("-p", "cart");
assert.equal(project.status, 0, project.stdout);
console.log("cart:      0 errors");

const mistakes = tsc("-p", "cart/mistakes");
const files = mistakes.stdout.match(/^cart\/mistakes\/[\w-]+\.ts/gm) ?? [];
assert.equal(new Set(files).size, 5, mistakes.stdout);
assert.equal(new Set(mistakes.codes).size, 5, mistakes.stdout);
console.log("mistakes:  5 files, 5 codes: " + mistakes.codes.join(" "));

console.log("contract: cart model (typed, each mistake its own error) OK");
