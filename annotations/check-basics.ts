// Contract: profile.ts, with a string, a number and a boolean annotation,
// type-checks with 0 errors and prints its values; wrong-type.ts, a string
// given to a number, fails with TS2322.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const clean = tsc("--noEmit", "annotations/profile.ts");
assert.equal(clean.status, 0, clean.stdout);
const run = node("annotations/profile.ts");
assert.equal(run.stdout, "Engineer 12 true\n");
console.log("profile.ts:    0 errors, prints Engineer 12 true");

const wrong = tsc("--noEmit", "annotations/wrong-type.ts");
assert.deepEqual(wrong.codes, ["TS2322"], wrong.stdout);
assert.match(wrong.stdout, /Type 'string' is not assignable to type 'number'/);
console.log("wrong-type.ts: TS2322, a string is not a number");

console.log("contract: basic types (string, number, boolean checked) OK");
