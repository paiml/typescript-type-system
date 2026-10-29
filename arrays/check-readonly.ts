// Contract: a readonly string[] has no push (TS2339) and its index is
// read-only (TS2542); only tsc enforces it, Node changes the array.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "arrays/months.ts");
assert.deepEqual(check.codes, ["TS2339", "TS2542"], check.stdout);
assert.match(check.stdout, /Property 'push' does not exist on type 'readonly string\[\]'/);
console.log("tsc:  TS2339, no push; TS2542, index is read-only");

const run = node("arrays/months.ts");
assert.match(run.stdout, /\[ 'January', 'Feb', 'Mar', 'Apr' \]/);
console.log("node: changes it anyway, readonly is checked by tsc");

console.log("contract: read-only arrays (no push, no assignment) OK");
