// Contract: a [number, number] tuple refuses three values (TS2322) and has no
// index 2 (TS2493); Node prints undefined for that index.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "arrays/point.ts");
assert.deepEqual(check.codes, ["TS2322", "TS2493"], check.stdout);
assert.match(check.stdout, /Source has 3 element\(s\) but target allows only 2/);
assert.match(check.stdout, /of length '2' has no element at index '2'/);
console.log("tsc:  TS2322, 3 elements for 2; TS2493, no index 2");

const run = node("arrays/point.ts");
assert.equal(run.stdout, "3 4\nundefined\n");
console.log("node: prints undefined for point[2]");

console.log("contract: tuples (length checked) OK");
