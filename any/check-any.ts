// Contract: with any, a method call, an assignment to number and a property
// that isn't there all have 0 errors, and Node prints HELLO and then throws;
// JSON.parse returns any, so a number goes into a string and Node throws.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

assert.equal(tsc("--noEmit", "any/input.ts").status, 0);
const input = node("any/input.ts");
assert.equal(input.stdout, "HELLO\n");
assert.match(input.stderr, /TypeError: Cannot read properties of undefined \(reading 'here'\)/);
console.log("input.ts:   0 errors; prints HELLO, then a TypeError");

assert.equal(tsc("--noEmit", "any/spreads.ts").status, 0);
const spreads = node("any/spreads.ts");
assert.notEqual(spreads.status, 0);
assert.match(spreads.stderr, /TypeError: total\.toUpperCase is not a function/);
console.log("spreads.ts: 0 errors; a TypeError");

console.log("contract: the any type (no checks, crashes at runtime) OK");
