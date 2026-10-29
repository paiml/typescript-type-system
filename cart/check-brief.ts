// Contract: cart/BRIEF.md lists four rules and three "Done when" goals,
// cart/src holds the three files the cart is built from, and main.ts prints a
// receipt that adds up: 2 x 12.50 + 3 x 3.00 = 34.00, less 10% is 30.60.
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { node } from "../support/run.ts";

const brief = readFileSync("cart/BRIEF.md", "utf8");
const [rules, goals] = brief.split("Done when:");
assert.equal(rules.match(/^- /gm)?.length, 4, "the brief should list four rules");
assert.equal(goals.match(/^\d+\. /gm)?.length, 3, "Done when: should list three goals");
console.log("BRIEF.md:     4 rules, 3 goals");

const files = readdirSync("cart/src").sort();
assert.deepEqual(files, ["cart.ts", "main.ts", "types.ts"]);
console.log("cart/src:     " + files.join(", "));

const receipt = node("cart/src/main.ts");
assert.equal(receipt.status, 0, receipt.stderr);
assert.match(receipt.stdout, /^subtotal: 34\.00$/m);
assert.match(receipt.stdout, /^discount \(percent\): -3\.40$/m);
assert.match(receipt.stdout, /^total: 30\.60$/m);
console.log("main.ts:      subtotal 34.00, less 3.40, total 30.60");

console.log("contract: cart brief (four rules, three goals, a receipt that adds up) OK");
