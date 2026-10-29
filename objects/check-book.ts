// Contract: book.ts matches its Book type (0 errors, prints Dune 412); in
// book-mistakes.ts a string for pages fails with TS2322, and an object with
// only a title fails with TS2739, naming the missing pages and available.
import assert from "node:assert/strict";
import { node, tsc } from "../support/run.ts";

const clean = tsc("--noEmit", "objects/book.ts");
assert.equal(clean.status, 0, clean.stdout);
assert.equal(node("objects/book.ts").stdout, "Dune 412\n");
console.log("book.ts:          0 errors, prints Dune 412");

const wrong = tsc("--noEmit", "objects/book-mistakes.ts");
assert.deepEqual(wrong.codes, ["TS2322", "TS2739"], wrong.stdout);
assert.match(wrong.stdout, /missing the following properties from type 'Book': pages, available/);
console.log("book-mistakes.ts: TS2322 for pages, TS2739 for missing properties");

console.log("contract: object types (every property checked) OK");
