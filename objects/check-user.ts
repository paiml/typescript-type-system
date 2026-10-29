// Contract: reading user.frist fails with TS2551 (did you mean 'first'?) and
// user.email with TS2339; Node prints undefined for both.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const run = node("objects/user.ts");
assert.equal(run.stdout, "Ada\nundefined\nundefined\n");
console.log("node: Ada, then undefined twice");

const check = tsc("--noEmit", "objects/user.ts");
assert.deepEqual(check.codes, ["TS2551", "TS2339"], check.stdout);
assert.match(check.stdout, /Did you mean 'first'\?/);
assert.match(check.stdout, /Property 'email' does not exist/);
console.log("tsc:  TS2551 for frist, TS2339 for email");

console.log("contract: missing properties (caught before they are undefined) OK");
