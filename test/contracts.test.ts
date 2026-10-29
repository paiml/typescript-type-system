// Every check program must exit 0 and print its `contract: … OK` line. A demo
// can only be recorded when its contract holds, so this is the same gate, run
// for all of them at once with `npm test`.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { test } from "node:test";

// [check program, start of its contract line]
const checks: [string, string][] = [
  ["annotations/check-basics.ts", "contract: basic types"],
  ["annotations/check-inferred.ts", "contract: inferred types"],
  ["annotations/check-explicit.ts", "contract: parameter types"],
  ["arrays/check-arrays.ts", "contract: typed arrays"],
  ["arrays/check-tuples.ts", "contract: tuples"],
  ["arrays/check-readonly.ts", "contract: read-only arrays"],
  ["literals/check-literal.ts", "contract: literal types"],
  ["literals/check-union.ts", "contract: a union of allowed values"],
  ["literals/check-typo.ts", "contract: values outside the union"],
  ["literals/check-as-const.ts", "contract: as const"],
  ["objects/check-book.ts", "contract: object types"],
  ["objects/check-user.ts", "contract: missing properties"],
  ["objects/check-settings.ts", "contract: excess properties"],
  ["interfaces/check-alias.ts", "contract: interfaces and type aliases"],
  ["interfaces/check-extends.ts", "contract: extending an interface"],
  ["interfaces/check-intersection.ts", "contract: intersections"],
  ["properties/check-optional.ts", "contract: optional properties"],
  ["properties/check-readonly.ts", "contract: read-only properties"],
  ["properties/check-chaining.ts", "contract: optional chaining"],
  ["unions/check-union.ts", "contract: string or number"],
  ["unions/check-method.ts", "contract: a string method on a union"],
  ["unions/check-narrowing.ts", "contract: narrowing"],
  ["narrowing/check-typeof.ts", "contract: typeof narrowing"],
  ["narrowing/check-in-instanceof.ts", "contract: in and instanceof"],
  ["narrowing/check-truthiness.ts", "contract: truthiness and equality"],
  ["shapes/check-tagged.ts", "contract: a tag field"],
  ["shapes/check-switch.ts", "contract: switching on kind"],
  ["shapes/check-never.ts", "contract: a missing case"],
  ["nulls/check-null.ts", "contract: strict null checks"],
  ["indexing/check-unchecked.ts", "contract: unchecked indexing"],
  ["indexing/check-checked.ts", "contract: checked index access"],
  ["any/check-any.ts", "contract: the any type"],
  ["unknown/check-unknown.ts", "contract: unknown values"],
  ["never/check-never.ts", "contract: the never type"],
  ["cart/check-brief.ts", "contract: cart brief"],
  ["cart/check-model.ts", "contract: cart model"],
  ["cart/check.ts", "contract: shopping cart"],
];

for (const [program, contract] of checks) {
  test(program, () => {
    const out = execFileSync("node", [program], { encoding: "utf8" });
    assert.match(out, new RegExp(`^${contract}.* OK$`, "m"));
  });
}
