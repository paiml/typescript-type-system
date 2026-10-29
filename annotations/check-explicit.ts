// Contract: a parameter with no type fails with TS7006 (implicit any, which
// strict mode refuses); with ": string" written out it type-checks and runs.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const untyped = tsc("--noEmit", "annotations/greet.ts");
assert.deepEqual(untyped.codes, ["TS7006"], untyped.stdout);
assert.match(untyped.stdout, /Parameter 'person' implicitly has an 'any' type/);
console.log("greet.ts:       TS7006, person has no type");

const typed = tsc("--noEmit", "annotations/greet-typed.ts");
assert.equal(typed.status, 0, typed.stdout);
assert.equal(node("annotations/greet-typed.ts").stdout, "Hello, ADA\n");
console.log("greet-typed.ts: 0 errors, prints Hello, ADA");

console.log("contract: parameter types (written out, not inferred) OK");
