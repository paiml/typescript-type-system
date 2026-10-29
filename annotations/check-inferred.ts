// Contract: inferred.ts has no annotations, yet tsc infers string and number
// from the first values and reports TS2322 on both reassignments. Node still
// runs it and prints the new values.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "annotations/inferred.ts");
assert.deepEqual(check.codes, ["TS2322", "TS2322"], check.stdout);
assert.match(check.stdout, /Type 'number' is not assignable to type 'string'/);
assert.match(check.stdout, /Type 'string' is not assignable to type 'number'/);
console.log("tsc:  2 errors, city is a string, visitors is a number");

const run = node("annotations/inferred.ts");
assert.equal(run.stdout, "42 a lot\n");
console.log("node: runs anyway, prints 42 a lot");

console.log("contract: inferred types (string and number, no annotations) OK");
