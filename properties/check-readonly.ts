// Contract: assigning a readonly id fails with TS2540, while the plain state
// property can change; Node, which skips the types, changes both.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const check = tsc("--noEmit", "properties/order.ts");
assert.deepEqual(check.codes, ["TS2540"], check.stdout);
assert.match(check.stdout, /Cannot assign to 'id' because it is a read-only property/);
console.log("tsc:  TS2540 for id, state can change");

assert.equal(node("properties/order.ts").stdout, "{ id: 2, state: 'shipped' }\n");
console.log("node: id changed to 2, readonly is checked by tsc");

console.log("contract: read-only properties (only tsc enforces them) OK");
