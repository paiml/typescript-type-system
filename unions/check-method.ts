// Contract: toUpperCase on string | number fails with TS2339 (it does not
// exist on number); Node prints A-7, then throws a TypeError on 42.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "unions/shout.ts");
assert.deepEqual(check.codes, ["TS2339"], check.stdout);
assert.match(check.stdout, /Property 'toUpperCase' does not exist on type 'number'/);
console.log("tsc:  TS2339, toUpperCase does not exist on number");

const run = node("unions/shout.ts");
assert.equal(run.stdout, "A-7\n");
assert.match(run.stderr, /TypeError: id.toUpperCase is not a function/);
console.log("node: A-7, then TypeError for 42");

console.log("contract: a string method on a union (TS2339 where node throws) OK");
