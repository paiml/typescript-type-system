// Contract: "medum" as an argument fails with TS2345 and "extra large" as a
// value fails with TS2322; Node runs both without complaint.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "literals/typo.ts");
assert.deepEqual(check.codes, ["TS2345", "TS2322"], check.stdout);
assert.match(check.stdout, /'"medum"' is not assignable to parameter of type 'Size'/);
assert.match(check.stdout, /'"extra large"' is not assignable to type 'Size'/);
console.log("tsc:  TS2345 for medum, TS2322 for extra large");

const run = node("literals/typo.ts");
assert.equal(run.stdout, "One medum coffee\nextra large\n");
console.log("node: prints One medum coffee");

console.log("contract: values outside the union (both caught) OK");
