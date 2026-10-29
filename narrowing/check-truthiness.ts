// Contract: first.toUpperCase() on string | null fails with TS18047; checked
// with if (first) and with first === null it type-checks, and the empty
// string counts as false.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const unchecked = tsc("--noEmit", "narrowing/greet.ts");
assert.deepEqual(unchecked.codes, ["TS18047"], unchecked.stdout);
assert.match(unchecked.stdout, /'first' is possibly 'null'/);
console.log("greet.ts:         TS18047, first is possibly null");

const checked = tsc("--noEmit", "narrowing/greet-checked.ts");
assert.equal(checked.status, 0, checked.stdout);
const run = node("narrowing/greet-checked.ts");
assert.equal(run.stdout, "Hello, ADA Hello, stranger Hello, stranger\na ?\n");
console.log("greet-checked.ts: 0 errors, an empty string is a stranger");

console.log("contract: truthiness and equality (both narrow out null) OK");
