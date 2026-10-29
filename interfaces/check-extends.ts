// Contract: Dog extends Animal, so a Dog needs name, legs and breed; rex has
// all three (prints Rex 4 Beagle), tiny has no legs and fails with TS2741.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "interfaces/dog.ts");
assert.deepEqual(check.codes, ["TS2741"], check.stdout);
assert.match(check.stdout, /Property 'legs' is missing in type .* but required in type 'Dog'/);
console.log("tsc:  TS2741, tiny is missing legs from Animal");

assert.equal(node("interfaces/dog.ts").stdout, "Rex 4 Beagle\n");
console.log("node: prints Rex 4 Beagle");

console.log("contract: extending an interface (Dog needs Animal's properties) OK");
