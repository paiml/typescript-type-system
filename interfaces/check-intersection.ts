// Contract: SavedPost = Post & Timestamps needs all four properties; saved has
// them, unsaved lacks createdAt and updatedAt and fails with TS2322.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "interfaces/post.ts");
assert.deepEqual(check.codes, ["TS2322"], check.stdout);
assert.match(check.stdout, /missing the following properties from type 'Timestamps': createdAt, updatedAt/);
console.log("tsc:  TS2322, unsaved is missing createdAt, updatedAt");

assert.equal(node("interfaces/post.ts").stdout, "Hello 2026-10-01\n");
console.log("node: prints Hello 2026-10-01");

console.log("contract: intersections (both types' properties required) OK");
