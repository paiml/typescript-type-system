// Contract: calling a method on an unknown value fails with TS18046; after a
// typeof check it type-checks with 0 errors and prints HELLO.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const unchecked = tsc("--noEmit", "unknown/parse.ts");
assert.deepEqual(unchecked.codes, ["TS18046"], unchecked.stdout);
assert.match(unchecked.stdout, /'input' is of type 'unknown'/);
console.log("parse.ts:         TS18046, input is unknown");

const checked = tsc("--noEmit", "unknown/parse-checked.ts");
assert.equal(checked.status, 0, checked.stdout);
assert.equal(node("unknown/parse-checked.ts").stdout, "HELLO\n");
console.log("parse-checked.ts: 0 errors, prints HELLO");

console.log("contract: unknown values (narrowed before use) OK");
