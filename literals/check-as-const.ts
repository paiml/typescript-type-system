// Contract: a const string keeps its literal type and a let is widened to
// string, so ship(slow) fails with TS2345, as does an object's property;
// with as const the call has 0 errors and the property is read-only (TS2540).
import assert from "node:assert/strict";
import { tsc } from "../support/run.ts";

const widened = tsc("--noEmit", "literals/widen.ts");
assert.deepEqual(widened.codes, ["TS2345", "TS2345"], widened.stdout);
assert.match(widened.stdout, /widen\.ts\(10,/);
assert.match(widened.stdout, /widen\.ts\(13,/);
console.log("widen.ts:    ship(fast) fits; ship(slow) and order.method TS2345");

const fixed = tsc("--noEmit", "literals/as-const.ts");
assert.deepEqual(fixed.codes, ["TS2540"], fixed.stdout);
assert.match(fixed.stdout, /as-const\.ts\(11,/);
console.log("as-const.ts: the call fits; changing method TS2540");

console.log("contract: as const (literals kept, read-only) OK");
