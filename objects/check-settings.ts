// Contract: an object literal with a misspelled property fails with TS2561
// (did you mean to write 'fontSize'?), and one with an extra property fails
// with TS2353.
import assert from "node:assert/strict";
import { tsc } from "../support/run.ts";

const check = tsc("--noEmit", "objects/settings.ts");
assert.deepEqual(check.codes, ["TS2561", "TS2353"], check.stdout);
assert.match(check.stdout, /Did you mean to write 'fontSize'\?/);
assert.match(check.stdout, /'color' does not exist in type 'Settings'/);
console.log("fontsize: TS2561, did you mean fontSize");
console.log("color:    TS2353, not in Settings");

console.log("contract: excess properties (typo and extra both caught) OK");
