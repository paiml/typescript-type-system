// Contract: colors[2] is typed string, so colors.ts type-checks with 0 errors
// by default, yet Node throws a TypeError reading it.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "indexing/colors.ts");
assert.equal(check.status, 0, check.stdout);
console.log("tsc:  0 errors by default");

const run = node("indexing/colors.ts");
assert.match(run.stderr, /TypeError: Cannot read properties of undefined/);
console.log("node: TypeError, there is no colors[2]");

console.log("contract: unchecked indexing (0 errors, then a TypeError) OK");
