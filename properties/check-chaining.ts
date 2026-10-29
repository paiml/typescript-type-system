// Contract: profile.ts reads an optional address with ?. and falls back with
// ??, type-checks with 0 errors, and prints London, unknown, 0 and no age.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "properties/profile.ts");
assert.equal(check.status, 0, check.stdout);
console.log("tsc:  0 errors");

assert.equal(node("properties/profile.ts").stdout, "London\nunknown\n0\nno age\n");
console.log("node: London, unknown, 0 with ??, no age with ||");

console.log("contract: optional chaining (missing values handled) OK");
