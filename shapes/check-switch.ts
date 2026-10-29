// Contract: a switch on shape.kind handles both shapes, so area type-checks
// with 0 errors, and prints 12.57 and 9.00.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "shapes/area.ts");
assert.equal(check.status, 0, check.stdout);
console.log("tsc:  0 errors, each case knows its shape");

assert.equal(node("shapes/area.ts").stdout, "12.57\n9.00\n");
console.log("node: circle 12.57, square 9.00");

console.log("contract: switching on kind (every case typed) OK");
