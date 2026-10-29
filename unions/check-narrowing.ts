// Contract: with an Array.isArray check, join and toUpperCase both type-check
// (0 errors, prints RED and red, blue); with the methods swapped, both lines
// fail with TS2339, one on string[] and one on string.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const narrowed = tsc("--noEmit", "unions/tags.ts");
assert.equal(narrowed.status, 0, narrowed.stdout);
assert.equal(node("unions/tags.ts").stdout, "RED\nred, blue\n");
console.log("tags.ts:         0 errors, prints RED and red, blue");

const swapped = tsc("--noEmit", "unions/tags-swapped.ts");
assert.deepEqual(swapped.codes, ["TS2339", "TS2339"], swapped.stdout);
assert.match(swapped.stdout, /'toUpperCase' does not exist on type 'string\[\]'/);
assert.match(swapped.stdout, /'join' does not exist on type 'string'/);
console.log("tags-swapped.ts: TS2339 on both lines");

console.log("contract: narrowing (each branch has its own type) OK");
