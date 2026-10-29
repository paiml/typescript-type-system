// Contract: with Triangle added and no case for it, the never assignment
// fails with TS2322; with the case added, 0 errors and the area is 6.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const missing = tsc("--noEmit", "shapes/missing.ts");
assert.deepEqual(missing.codes, ["TS2322"], missing.stdout);
assert.match(missing.stdout, /Type 'Triangle' is not assignable to type 'never'/);
console.log("missing.ts:  TS2322, Triangle is not never");

const complete = tsc("--noEmit", "shapes/complete.ts");
assert.equal(complete.status, 0, complete.stdout);
assert.equal(node("shapes/complete.ts").stdout, "triangle area: 6\n");
console.log("complete.ts: 0 errors, triangle area 6");

console.log("contract: a missing case (caught at compile time) OK");
