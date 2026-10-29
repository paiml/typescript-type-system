// Contract: shape.radius on Circle | Square fails with TS2339 (a Square has
// none); after shape.kind === "circle" it type-checks and runs.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const unchecked = tsc("--noEmit", "shapes/tagged.ts");
assert.deepEqual(unchecked.codes, ["TS2339"], unchecked.stdout);
assert.match(unchecked.stdout, /Property 'radius' does not exist on type 'Square'/);
console.log("tagged.ts:         TS2339, a Square has no radius");

const checked = tsc("--noEmit", "shapes/tagged-checked.ts");
assert.equal(checked.status, 0, checked.stdout);
const run = node("shapes/tagged-checked.ts");
assert.equal(run.stdout, "circle with radius 2\nsquare with side 3\n");
console.log("tagged-checked.ts: 0 errors, the kind field picks the shape");

console.log("contract: a tag field (kind tells the shapes apart) OK");
