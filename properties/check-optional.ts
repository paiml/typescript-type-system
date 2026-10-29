// Contract: reading .length of an optional property fails with TS18048
// (possibly undefined); checking for undefined first type-checks and runs.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const unchecked = tsc("--noEmit", "properties/player.ts");
assert.deepEqual(unchecked.codes, ["TS18048"], unchecked.stdout);
assert.match(unchecked.stdout, /'player.nickname' is possibly 'undefined'/);
console.log("player.ts:         TS18048, nickname is possibly undefined");

const checked = tsc("--noEmit", "properties/player-checked.ts");
assert.equal(checked.status, 0, checked.stdout);
assert.equal(node("properties/player-checked.ts").stdout, "Ada: 0\nLinus: 3\n");
console.log("player-checked.ts: 0 errors, prints Ada: 0, Linus: 3");

console.log("contract: optional properties (checked before use) OK");
