// Contract: Size allows exactly "small", "medium" and "large"; coffee.ts uses
// two of them, type-checks with 0 errors and prints both orders.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "literals/coffee.ts");
assert.equal(check.status, 0, check.stdout);
const run = node("literals/coffee.ts");
assert.equal(run.stdout, "One medium coffee\nOne large coffee\n");
console.log("coffee.ts: 0 errors, prints One medium coffee, One large coffee");

console.log("contract: a union of allowed values (three sizes) OK");
