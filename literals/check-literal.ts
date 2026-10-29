// Contract: a string variable accepts the typo "nrth" with 0 errors; a literal
// type allows only its one value, so "no" for "yes" and 7 for 6 both fail
// with TS2322; Node prints every value anyway.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const loose = tsc("--noEmit", "literals/direction.ts");
assert.equal(loose.status, 0, loose.stdout);
assert.equal(node("literals/direction.ts").stdout, "nrth\n");
console.log("direction.ts: 0 errors, prints nrth");

const exact = tsc("--noEmit", "literals/answer.ts");
assert.deepEqual(exact.codes, ["TS2322", "TS2322"], exact.stdout);
assert.match(exact.stdout, /Type '"no"' is not assignable to type '"yes"'/);
assert.match(exact.stdout, /Type '7' is not assignable to type '6'/);
assert.equal(node("literals/answer.ts").stdout, "no 7\n");
console.log('answer.ts:    TS2322 for "no" and for 7; Node prints no 7');

console.log("contract: literal types (one exact value each) OK");
