// Contract: pushing a string into number[] and a number into the inferred
// string[] both fail with TS2345; Node runs it and mixes the types.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "arrays/scores.ts");
assert.deepEqual(check.codes, ["TS2345", "TS2345"], check.stdout);
assert.match(check.stdout, /'string' is not assignable to parameter of type 'number'/);
assert.match(check.stdout, /'number' is not assignable to parameter of type 'string'/);
console.log("tsc:  2 errors, TS2345 on both pushes");

const run = node("arrays/scores.ts");
assert.match(run.stdout, /'100'/);
assert.match(run.stdout, /'Grace', 42/);
console.log("node: runs anyway, a string among the numbers");

console.log("contract: typed arrays (each push checked) OK");
