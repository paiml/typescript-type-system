// Contract: fail() returns never, so half type-checks and prints half of 10 is 5; storing a
// string in never fails with TS2322, and a never function that finishes fails
// with TS2534.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const clean = tsc("--noEmit", "never/fail.ts");
assert.equal(clean.status, 0, clean.stdout);
assert.equal(node("never/fail.ts").stdout, "half of 10 is 5\n");
console.log("fail.ts:     0 errors, prints half of 10 is 5");

const wrong = tsc("--noEmit", "never/mistakes.ts");
assert.deepEqual(wrong.codes, ["TS2322", "TS2534"], wrong.stdout);
assert.match(wrong.stdout, /A function returning 'never' cannot have a reachable end point/);
console.log("mistakes.ts: TS2322, nothing is never; TS2534, fail must not finish");

console.log("contract: the never type (no value, no return) OK");
