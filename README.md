# Everyday Types: examples

The code and commands from the Everyday Types terminal demos. Everything you see run in
a video runs here, from the root of this repository.

Every version is pinned: **typescript 7.0.2**, at the exact version in `package.json`,
with `package-lock.json` committed, so you install what the videos show. Each example has
a small check program that proves a **contract**: a statement about its result, checked
with assertions before it prints `contract: … OK`. If the contract does not hold, the
program stops with an error.

Many of the files here have type errors on purpose: they are the mistakes the videos
show the compiler catching. The file next to each one (`-checked`, `-typed`, `complete`)
is the fixed version.

## Requirements

- Node.js 22.18 or later (the videos use 25.1.0), which runs `.ts` files directly
- npm (comes with Node.js)

## Setup

```bash
npm ci        # the pinned packages, from package-lock.json
npm test      # every check program, and its contract
```

Most examples are single files, checked with `npx tsc --noEmit <file>`: no
`tsconfig.json` is needed, and `--noEmit` means nothing is written next to the file.
Only the shopping cart (`cart/`) is a project with its own `tsconfig.json`, checked with
`npx tsc -p cart`.

## Lessons

Every command each lesson types is in [LESSONS.md](LESSONS.md), in order.

| Lesson | Files | Check program |
|---|---|---|
| 1.1.1 Strings, numbers and booleans | `annotations/profile.ts`, `wrong-type.ts` | `annotations/check-basics.ts` |
| 1.1.2 Letting TypeScript infer the type | `annotations/inferred.ts` | `annotations/check-inferred.ts` |
| 1.1.3 When to write the type yourself | `annotations/greet.ts`, `greet-typed.ts` | `annotations/check-explicit.ts` |
| 1.2.1 Typed arrays | `arrays/scores.ts` | `arrays/check-arrays.ts` |
| 1.2.2 Tuples and their length | `arrays/point.ts` | `arrays/check-tuples.ts` |
| 1.2.3 Read-only arrays | `arrays/months.ts` | `arrays/check-readonly.ts` |
| 1.3.1 What a literal type is | `literals/direction.ts`, `answer.ts` | `literals/check-literal.ts` |
| 1.3.2 A union of allowed values | `literals/coffee.ts` | `literals/check-union.ts` |
| 1.3.3 Catching a value that isn't allowed | `literals/typo.ts` | `literals/check-typo.ts` |
| 1.3.4 Constant assertions and literal inference | `literals/widen.ts`, `as-const.ts` | `literals/check-as-const.ts` |
| 2.1.1 Describing an object | `objects/book.ts`, `book-mistakes.ts` | `objects/check-book.ts` |
| 2.1.2 A property that doesn't exist | `objects/user.ts` | `objects/check-user.ts` |
| 2.1.3 Excess properties catch typos | `objects/settings.ts` | `objects/check-settings.ts` |
| 2.2.1 Interfaces or type aliases? | `interfaces/same-shape.ts`, `merging.ts`, `duplicate.ts` | `interfaces/check-alias.ts` |
| 2.2.2 Extending an interface | `interfaces/dog.ts` | `interfaces/check-extends.ts` |
| 2.2.3 Combining types with intersections | `interfaces/post.ts` | `interfaces/check-intersection.ts` |
| 2.3.1 Optional properties | `properties/player.ts`, `player-checked.ts` | `properties/check-optional.ts` |
| 2.3.2 Read-only properties | `properties/order.ts` | `properties/check-readonly.ts` |
| 2.3.3 Optional chaining and nullish coalescing | `properties/profile.ts` | `properties/check-chaining.ts` |
| 3.1.1 A value that is a string or a number | `unions/ids.ts` | `unions/check-union.ts` |
| 3.1.2 Why a string method fails on a union | `unions/shout.ts` | `unions/check-method.ts` |
| 3.1.3 What narrowing means | `unions/tags.ts`, `tags-swapped.ts` | `unions/check-narrowing.ts` |
| 3.2.1 Checking a value's type at runtime | `narrowing/format.ts` | `narrowing/check-typeof.ts` |
| 3.2.2 Checking for properties and class instances | `narrowing/pets.ts`, `dates.ts` | `narrowing/check-in-instanceof.ts` |
| 3.2.3 Truthiness and equality checks | `narrowing/greet.ts`, `greet-checked.ts` | `narrowing/check-truthiness.ts` |
| 3.3.1 A shared tag field on each shape | `shapes/tagged.ts`, `tagged-checked.ts` | `shapes/check-tagged.ts` |
| 3.3.2 Switching on the tag field | `shapes/area.ts` | `shapes/check-switch.ts` |
| 3.3.3 Catching a missing case at compile time | `shapes/missing.ts`, `complete.ts` | `shapes/check-never.ts` |
| 4.1.1 Strict null checks in practice | `nulls/find.ts`, `find-checked.ts` | `nulls/check-null.ts` |
| 4.1.2 Array indexing is unchecked by default | `indexing/colors.ts` | `indexing/check-unchecked.ts` |
| 4.1.3 Turning on checked index access | `indexing/colors.ts`, `colors-checked.ts` | `indexing/check-checked.ts` |
| 4.2.1 Why the any type switches checking off | `any/input.ts`, `spreads.ts` | `any/check-any.ts` |
| 4.2.2 Unknown values must be narrowed | `unknown/parse.ts`, `parse-checked.ts` | `unknown/check-unknown.ts` |
| 4.2.3 The never type for impossible states | `never/fail.ts`, `mistakes.ts` | `never/check-never.ts` |
| 4.3.1–4.3.3 Project: a typed shopping cart | `cart/` (`BRIEF.md`, `src/`, `mistakes/`) | `cart/check-brief.ts`, `cart/check-model.ts`, `cart/check.ts` |

`support/run.ts` holds the two helpers every check program uses: it runs `npx tsc` or
`node` on a file and collects the error codes and output.
