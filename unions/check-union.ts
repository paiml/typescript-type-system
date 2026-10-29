// Contract: showId accepts a string or a number; passing true fails with
// TS2345, while Node prints all three ids.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "unions/ids.ts");
assert.deepEqual(check.codes, ["TS2345"], check.stdout);
assert.match(check.stdout, /'boolean' is not assignable to parameter of type 'string \| number'/);
console.log("tsc:  TS2345, a boolean is not string | number");

assert.equal(node("unions/ids.ts").stdout, "id: 42\nid: A-7\nid: true\n");
console.log("node: prints id: 42, id: A-7, id: true");

console.log("contract: string or number (anything else caught) OK");
