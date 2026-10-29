// Contract: with --noUncheckedIndexedAccess, colors[2] is string | undefined
// and colors.ts fails with TS18048; colors-checked.ts checks for undefined,
// type-checks with 0 errors and prints no third color.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const flag = "--noUncheckedIndexedAccess";
const unchecked = tsc("--noEmit", flag, "indexing/colors.ts");
assert.deepEqual(unchecked.codes, ["TS18048"], unchecked.stdout);
assert.match(unchecked.stdout, /'third' is possibly 'undefined'/);
console.log("colors.ts:         TS18048, third is possibly undefined");

const checked = tsc("--noEmit", flag, "indexing/colors-checked.ts");
assert.equal(checked.status, 0, checked.stdout);
assert.equal(node("indexing/colors-checked.ts").stdout, "no third color\n");
console.log("colors-checked.ts: 0 errors, prints no third color");

console.log("contract: checked index access (TS18048 where node throws) OK");
