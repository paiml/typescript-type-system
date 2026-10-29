// Contract: "swim" in pet narrows Fish | Bird, and instanceof Date narrows
// Date | string: both files type-check with 0 errors and print each branch.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "narrowing/pets.ts", "narrowing/dates.ts");
assert.equal(check.status, 0, check.stdout);
console.log("tsc:      0 errors in pets.ts and dates.ts");

assert.equal(node("narrowing/pets.ts").stdout, "splash\nflap\n");
console.log("pets.ts:  in, prints splash and flap");
assert.equal(node("narrowing/dates.ts").stdout, "Tue Oct 20 2026\ntomorrow\n");
console.log("dates.ts: instanceof, prints Tue Oct 20 2026 and tomorrow");

console.log("contract: in and instanceof (both narrow) OK");
