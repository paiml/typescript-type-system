// Contract: an interface and a type alias with the same shape give the same
// TS2322 for the same object; two interfaces with one name merge (TS2741 for
// the missing last), and two type aliases with one name fail with TS2300.
import assert from "node:assert/strict";
import { tsc } from "../support/run.ts";

const same = tsc("--noEmit", "interfaces/same-shape.ts");
assert.deepEqual(same.codes, ["TS2322", "TS2322"], same.stdout);
const messages = same.stdout.split("\n").filter(Boolean).map((line) => line.split(": ").slice(1).join(": "));
assert.equal(messages[0], messages[1]);
console.log("same-shape.ts: the same TS2322 both ways; Status is a type alias");

const merged = tsc("--noEmit", "interfaces/merging.ts");
assert.deepEqual(merged.codes, ["TS2741"], merged.stdout);
assert.match(merged.stdout, /Property 'last' is missing/);
console.log("merging.ts:    the two interfaces merge, TS2741 for last");

const duplicate = tsc("--noEmit", "interfaces/duplicate.ts");
assert.deepEqual(duplicate.codes, ["TS2300", "TS2300"], duplicate.stdout);
assert.match(duplicate.stdout, /Duplicate identifier 'Account'/);
console.log("duplicate.ts:  two type aliases, TS2300");

console.log("contract: interfaces and type aliases (same check, different rules) OK");
