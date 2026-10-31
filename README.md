# Everyday Types in TypeScript 7

Learn the types you reach for every day in TypeScript 7, and let the compiler catch
your mistakes before your code ever runs.

This repository holds every example from the **Everyday Types** video lessons. Each
example is a small, runnable file: you read it, check it with the TypeScript compiler,
run it with Node.js, and then confirm what you saw with a short check program. You
finish by modeling a typed shopping cart that puts every idea together.

<details>
  <summary><b>Table of Contents</b></summary>
  <br>

* [What you will learn](#what-you-will-learn)
* [Who this is for](#who-this-is-for)
* [Get set up](#get-set-up)
* [How each lesson works](#how-each-lesson-works)
* [Learning path](#learning-path)
  * [1. Typing everyday values](#1-typing-everyday-values)
  * [2. Describing objects](#2-describing-objects)
  * [3. Unions and narrowing](#3-unions-and-narrowing)
  * [4. Stricter checks and special types](#4-stricter-checks-and-special-types)
  * [5. Project: a typed shopping cart](#5-project-a-typed-shopping-cart)
* [Check your progress](#check-your-progress)
* [Troubleshooting](#troubleshooting)
* [Where to go next](#where-to-go-next)

</details>

## What you will learn

By the end of these lessons you will be able to:

* Annotate strings, numbers, booleans, arrays and tuples, and know when to let
  TypeScript infer the type for you
* Restrict a value to a fixed set of choices with literal types and unions
* Describe the shape of an object with type aliases and interfaces, including
  optional and read-only properties
* Narrow a union with `typeof`, `in`, `instanceof`, truthiness and equality checks
* Model data as tagged (discriminated) unions and have the compiler tell you when a
  case is missing
* Turn on stricter checks such as `strictNullChecks` and `noUncheckedIndexedAccess`,
  and explain the bugs they catch
* Choose between `any`, `unknown` and `never`, and say why `any` is a last resort
* Put it all together in a small typed project with its own `tsconfig.json`

> [!NOTE]
> **Diversity Statement:** We share a commitment to diversity and equity, removing
> barriers to learning so that everyone can participate fully. These lessons are meant
> to be useful to people with a wide range of backgrounds, identities, and learning
> styles, whether you found them through a course or on your own on GitHub.

## Who this is for

You have written some JavaScript (variables, functions, arrays and objects) and want
to start using TypeScript with confidence. No prior TypeScript experience is needed.

You will also need to be comfortable running commands in a terminal. Every command in
these lessons runs from the root of this repository.

## Get set up

You need:

* **Node.js 22.18 or later**, which can run `.ts` files directly. The lessons were
  recorded with Node.js 25.1.0.
* **npm**, which comes with Node.js.

Clone the repository and install the pinned packages:

```bash
git clone https://github.com/paiml/typescript-type-system.git
cd typescript-type-system
npm ci        # installs TypeScript 7.0.2, exactly as pinned in package-lock.json
npm test      # runs every check program; all of them should pass
```

TypeScript is pinned to **7.0.2**, so the errors and messages you see match the ones
in the videos.

## How each lesson works

Every lesson follows the same loop, using four commands:

```bash
cat literals/coffee.ts                 # 1. Read the example
npx tsc --noEmit literals/coffee.ts    # 2. Type-check it (--noEmit: no .js files are written)
node literals/coffee.ts                # 3. Run it
node literals/check-union.ts           # 4. Confirm the lesson's contract
```

A few conventions help you find your way:

* **Some files are wrong on purpose.** They contain the mistakes the compiler is meant
  to catch. Look for the fixed version next to them: a file ending in `-checked`,
  `-typed`, or named `complete`.
* **Every lesson has a check program** (`check-*.ts`). It runs the compiler and Node.js
  for you, asserts what should happen (which file passes, which error code a broken
  file produces, what gets printed) and ends with a `contract: … OK` line. If anything
  is different, it stops with an error that tells you what changed.
* **[LESSONS.md](LESSONS.md)** lists every command typed in every video, in order.
  Use it to follow along, or to replay a lesson without the video.

## Learning path

Work through the sections in order: each one builds on the one before it. For every
lesson, the table lists the files to study and the check program that confirms what
you learned.

### 1. Typing everyday values

Start with the basics: annotating values, letting the compiler infer types, and
limiting a value to a few allowed choices.

**You will be able to:** annotate primitives and arrays, decide when an annotation is
worth writing, use tuples and read-only arrays, and build unions of literal values.

| Lesson | Study | Check |
|---|---|---|
| Strings, numbers and booleans | [`profile.ts`](annotations/profile.ts), [`wrong-type.ts`](annotations/wrong-type.ts) | [`check-basics.ts`](annotations/check-basics.ts) |
| Letting TypeScript infer the type | [`inferred.ts`](annotations/inferred.ts) | [`check-inferred.ts`](annotations/check-inferred.ts) |
| When to write the type yourself | [`greet.ts`](annotations/greet.ts) → [`greet-typed.ts`](annotations/greet-typed.ts) | [`check-explicit.ts`](annotations/check-explicit.ts) |
| Typed arrays | [`scores.ts`](arrays/scores.ts) | [`check-arrays.ts`](arrays/check-arrays.ts) |
| Tuples and their length | [`point.ts`](arrays/point.ts) | [`check-tuples.ts`](arrays/check-tuples.ts) |
| Read-only arrays | [`months.ts`](arrays/months.ts) | [`check-readonly.ts`](arrays/check-readonly.ts) |
| What a literal type is | [`direction.ts`](literals/direction.ts), [`answer.ts`](literals/answer.ts) | [`check-literal.ts`](literals/check-literal.ts) |
| A union of allowed values | [`coffee.ts`](literals/coffee.ts) | [`check-union.ts`](literals/check-union.ts) |
| Catching a value that isn't allowed | [`typo.ts`](literals/typo.ts) | [`check-typo.ts`](literals/check-typo.ts) |
| Constant assertions and literal inference | [`widen.ts`](literals/widen.ts), [`as-const.ts`](literals/as-const.ts) | [`check-as-const.ts`](literals/check-as-const.ts) |

**Try it yourself:** in [`literals/coffee.ts`](literals/coffee.ts), order an
`"extra-large"` coffee and type-check the file. Read the error, then add
`"extra-large"` to the `Size` union and check again.

**Read more:** [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
in the TypeScript Handbook.

### 2. Describing objects

Objects are where most of your data lives. Here you describe their shape and let the
compiler hold every object to it.

**You will be able to:** write object types, catch missing and misspelled properties,
choose between an interface and a type alias, extend and combine types, and use
optional and read-only properties safely.

| Lesson | Study | Check |
|---|---|---|
| Describing an object | [`book.ts`](objects/book.ts), [`book-mistakes.ts`](objects/book-mistakes.ts) | [`check-book.ts`](objects/check-book.ts) |
| A property that doesn't exist | [`user.ts`](objects/user.ts) | [`check-user.ts`](objects/check-user.ts) |
| Excess properties catch typos | [`settings.ts`](objects/settings.ts) | [`check-settings.ts`](objects/check-settings.ts) |
| Interfaces or type aliases? | [`same-shape.ts`](interfaces/same-shape.ts), [`merging.ts`](interfaces/merging.ts), [`duplicate.ts`](interfaces/duplicate.ts) | [`check-alias.ts`](interfaces/check-alias.ts) |
| Extending an interface | [`dog.ts`](interfaces/dog.ts) | [`check-extends.ts`](interfaces/check-extends.ts) |
| Combining types with intersections | [`post.ts`](interfaces/post.ts) | [`check-intersection.ts`](interfaces/check-intersection.ts) |
| Optional properties | [`player.ts`](properties/player.ts) → [`player-checked.ts`](properties/player-checked.ts) | [`check-optional.ts`](properties/check-optional.ts) |
| Read-only properties | [`order.ts`](properties/order.ts) | [`check-readonly.ts`](properties/check-readonly.ts) |
| Optional chaining and nullish coalescing | [`profile.ts`](properties/profile.ts) | [`check-chaining.ts`](properties/check-chaining.ts) |

**Try it yourself:** [`objects/settings.ts`](objects/settings.ts) has two mistakes.
Fix both until `npx tsc --noEmit objects/settings.ts` reports no errors.

**Read more:** [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
in the TypeScript Handbook.

### 3. Unions and narrowing

A value that can be one of several types is only useful once you can tell which one
you have. This section shows how TypeScript follows your checks to narrow a type.

**You will be able to:** explain why a method fails on a union, narrow with `typeof`,
`in`, `instanceof`, truthiness and equality, and model data as a tagged union that the
compiler checks for completeness.

| Lesson | Study | Check |
|---|---|---|
| A value that is a string or a number | [`ids.ts`](unions/ids.ts) | [`check-union.ts`](unions/check-union.ts) |
| Why a string method fails on a union | [`shout.ts`](unions/shout.ts) | [`check-method.ts`](unions/check-method.ts) |
| What narrowing means | [`tags.ts`](unions/tags.ts), [`tags-swapped.ts`](unions/tags-swapped.ts) | [`check-narrowing.ts`](unions/check-narrowing.ts) |
| Checking a value's type at runtime | [`format.ts`](narrowing/format.ts) | [`check-typeof.ts`](narrowing/check-typeof.ts) |
| Checking for properties and class instances | [`pets.ts`](narrowing/pets.ts), [`dates.ts`](narrowing/dates.ts) | [`check-in-instanceof.ts`](narrowing/check-in-instanceof.ts) |
| Truthiness and equality checks | [`greet.ts`](narrowing/greet.ts) → [`greet-checked.ts`](narrowing/greet-checked.ts) | [`check-truthiness.ts`](narrowing/check-truthiness.ts) |
| A shared tag field on each shape | [`tagged.ts`](shapes/tagged.ts) → [`tagged-checked.ts`](shapes/tagged-checked.ts) | [`check-tagged.ts`](shapes/check-tagged.ts) |
| Switching on the tag field | [`area.ts`](shapes/area.ts) | [`check-switch.ts`](shapes/check-switch.ts) |
| Catching a missing case at compile time | [`missing.ts`](shapes/missing.ts) → [`complete.ts`](shapes/complete.ts) | [`check-never.ts`](shapes/check-never.ts) |

**Try it yourself:** fix [`unions/shout.ts`](unions/shout.ts) so it works for both a
string and a number, using a `typeof` check.

**Read more:** [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
in the TypeScript Handbook.

### 4. Stricter checks and special types

Some bugs only show up when you ask the compiler to look harder. This section turns on
stricter settings and introduces the three special types: `any`, `unknown` and `never`.

**You will be able to:** explain what `strictNullChecks` and `noUncheckedIndexedAccess`
catch, recognize how `any` hides errors, narrow `unknown` values before using them, and
use `never` to mark states that should be impossible.

| Lesson | Study | Check |
|---|---|---|
| Strict null checks in practice | [`find.ts`](nulls/find.ts) → [`find-checked.ts`](nulls/find-checked.ts) | [`check-null.ts`](nulls/check-null.ts) |
| Array indexing is unchecked by default | [`colors.ts`](indexing/colors.ts) | [`check-unchecked.ts`](indexing/check-unchecked.ts) |
| Turning on checked index access | [`colors.ts`](indexing/colors.ts) → [`colors-checked.ts`](indexing/colors-checked.ts) | [`check-checked.ts`](indexing/check-checked.ts) |
| Why the `any` type switches checking off | [`input.ts`](any/input.ts), [`spreads.ts`](any/spreads.ts) | [`check-any.ts`](any/check-any.ts) |
| Unknown values must be narrowed | [`parse.ts`](unknown/parse.ts) → [`parse-checked.ts`](unknown/parse-checked.ts) | [`check-unknown.ts`](unknown/check-unknown.ts) |
| The `never` type for impossible states | [`fail.ts`](never/fail.ts), [`mistakes.ts`](never/mistakes.ts) | [`check-never.ts`](never/check-never.ts) |

**Try it yourself:** run [`indexing/colors.ts`](indexing/colors.ts) with Node.js and
watch it crash, even though `npx tsc --noEmit indexing/colors.ts` reported nothing.
Now check it again with `--noUncheckedIndexedAccess` and see the compiler point at the
bug.

**Read more:** [`strictNullChecks`](https://www.typescriptlang.org/tsconfig/#strictNullChecks)
and [`noUncheckedIndexedAccess`](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess)
in the TSConfig reference.

### 5. Project: a typed shopping cart

Bring everything together by describing a small shopping cart with types and letting
the compiler hold it to them. Start with the brief in [`cart/BRIEF.md`](cart/BRIEF.md).

**You will be able to:** model a real problem with object types, read-only fields,
optional properties and a tagged union, accept untrusted input as `unknown`, and check a
multi-file project with its own `tsconfig.json`.

| Lesson | Study | Check |
|---|---|---|
| The project brief | [`BRIEF.md`](cart/BRIEF.md), [`main.ts`](cart/src/main.ts) | [`check-brief.ts`](cart/check-brief.ts) |
| Modeling it with unions and objects | [`types.ts`](cart/src/types.ts), [`cart.ts`](cart/src/cart.ts), [`mistakes/`](cart/mistakes) | [`check-model.ts`](cart/check-model.ts) |
| The contract line | [`check.ts`](cart/check.ts) | [`check.ts`](cart/check.ts) |

Unlike the single-file examples, the cart is a project. Check it with its
[`tsconfig.json`](cart/tsconfig.json) instead of naming a file:

```bash
npx tsc -p cart             # the working cart: no errors
node cart/src/main.ts       # prints a receipt that adds up
npx tsc -p cart/mistakes    # each file here fails with its own error
```

**Try it yourself:** add a fourth kind of discount to `Discount` in
[`cart/src/types.ts`](cart/src/types.ts) and run `npx tsc -p cart`. The compiler points
you at the `switch` in [`cart/src/cart.ts`](cart/src/cart.ts) that doesn't handle it
yet. Handle it, then extend [`cart/src/main.ts`](cart/src/main.ts) to use it.

## Check your progress

Run every check program at once:

```bash
npm test
```

Each check program must print its `contract: … OK` line for the test to pass. If you
have been experimenting with the examples, a failing check tells you exactly which
file no longer behaves the way the lesson describes. Use `git diff` to see what you
changed and `git checkout -- <file>` to put a file back.

Both helpers that the check programs use, one that runs `npx tsc` and one that runs
`node` on a file, live in [`support/run.ts`](support/run.ts).

## Troubleshooting

* **`node` refuses to run a `.ts` file:** your Node.js is older than 22.18. Check with
  `node --version` and upgrade.
* **`.js` files appeared next to the examples:** you ran `npx tsc <file>` without
  `--noEmit`. They are ignored by git and safe to delete.
* **Your error messages look different from the videos:** run `npm ci` so you have
  TypeScript 7.0.2 from `package-lock.json`, and call it through `npx tsc` rather than
  a globally installed `tsc`.

## Where to go next

Keep learning with more courses from Pragmatic AI Labs, on whichever platform you
prefer:

* [**Pragmatic AI Labs platform**](https://ds500.paiml.com): the full catalog of
  courses and hands-on programs
* [**Pragmatic AI Labs on Coursera**](https://www.coursera.org/partners/pragmatic-ai-labs)
* [**Pragmatic AI Labs on edX**](https://www.edx.org/school/ai)

Then put what you learned here into practice:

* Add types to a JavaScript file you have already written, one annotation at a time,
  and run it through `npx tsc --noEmit`.
* Turn on [`strict`](https://www.typescriptlang.org/tsconfig/#strict) and
  [`noUncheckedIndexedAccess`](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess)
  in a project of your own, and fix what the compiler finds.
* Keep reading the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html):
  generics, functions and type manipulation build directly on what you learned here.
