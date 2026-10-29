// Contract: found.first fails with TS18048 under the default strict mode and
// passes with --strictNullChecks false, where Node throws a TypeError; with
// an undefined check it type-checks and prints no user with id 3.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const strict = tsc("--noEmit", "nulls/find.ts");
assert.deepEqual(strict.codes, ["TS18048"], strict.stdout);
assert.match(strict.stdout, /'found' is possibly 'undefined'/);
const loose = tsc("--noEmit", "--strictNullChecks", "false", "nulls/find.ts");
assert.equal(loose.status, 0, loose.stdout);
console.log("find.ts:         TS18048 strict, 0 errors without strictNullChecks");

assert.match(node("nulls/find.ts").stderr, /TypeError: Cannot read properties of undefined/);
console.log("node:            TypeError at runtime");

const checked = tsc("--noEmit", "nulls/find-checked.ts");
assert.equal(checked.status, 0, checked.stdout);
assert.equal(node("nulls/find-checked.ts").stdout, "no user with id 3\n");
console.log("find-checked.ts: 0 errors, prints no user with id 3");

console.log("contract: strict null checks (TS18048 where node throws) OK");
