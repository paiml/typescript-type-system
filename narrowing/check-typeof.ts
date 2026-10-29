// Contract: after typeof value === "string", tsc lets format call a string
// method, and a number method after it: 0 errors, prints A-7 and 3.14.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "narrowing/format.ts");
assert.equal(check.status, 0, check.stdout);
console.log("tsc:  0 errors, typeof narrows string | number");

assert.equal(node("narrowing/format.ts").stdout, "A-7\n3.14\n");
console.log("node: prints A-7 and 3.14");

console.log("contract: typeof narrowing (each branch has one type) OK");
