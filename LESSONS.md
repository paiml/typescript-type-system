# The commands from each lesson

Every command typed in the lesson videos, in order. Run them from the root of
this repository, after the setup in README.md.

## 1.1.1 Strings, numbers and booleans

```bash
cat annotations/profile.ts
node annotations/profile.ts
npx tsc --noEmit annotations/profile.ts
npx tsc --noEmit annotations/wrong-type.ts
node annotations/check-basics.ts
```

## 1.1.2 Letting TypeScript infer the type

```bash
cat annotations/inferred.ts
npx tsc --noEmit annotations/inferred.ts
node annotations/inferred.ts
node annotations/check-inferred.ts
```

## 1.1.3 When to write the type yourself

```bash
cat annotations/greet.ts
npx tsc --noEmit annotations/greet.ts
cat annotations/greet-typed.ts
npx tsc --noEmit annotations/greet-typed.ts
node annotations/greet-typed.ts
node annotations/check-explicit.ts
```

## 1.2.1 Typed arrays

```bash
cat arrays/scores.ts
npx tsc --noEmit arrays/scores.ts
node arrays/scores.ts
node arrays/check-arrays.ts
```

## 1.2.2 Tuples and their length

```bash
cat arrays/point.ts
npx tsc --noEmit arrays/point.ts
node arrays/point.ts
node arrays/check-tuples.ts
```

## 1.2.3 Read-only arrays

```bash
cat arrays/months.ts
npx tsc --noEmit arrays/months.ts
node arrays/months.ts
node arrays/check-readonly.ts
```

## 1.3.1 What a literal type is

```bash
cat literals/direction.ts
npx tsc --noEmit literals/direction.ts
cat literals/answer.ts
npx tsc --noEmit literals/answer.ts
node literals/answer.ts
node literals/check-literal.ts
```

## 1.3.2 A union of allowed values

```bash
cat literals/coffee.ts
npx tsc --noEmit literals/coffee.ts
node literals/coffee.ts
node literals/check-union.ts
```

## 1.3.3 Catching a value that isn't allowed

```bash
cat literals/typo.ts
npx tsc --noEmit literals/typo.ts
node literals/typo.ts
node literals/check-typo.ts
```

## 1.3.4 Constant assertions and literal inference

```bash
cat literals/widen.ts
npx tsc --noEmit literals/widen.ts
cat literals/as-const.ts
npx tsc --noEmit literals/as-const.ts
node literals/check-as-const.ts
```

## 2.1.1 Describing an object

```bash
cat objects/book.ts
npx tsc --noEmit objects/book.ts
node objects/book.ts
npx tsc --noEmit objects/book-mistakes.ts
node objects/check-book.ts
```

## 2.1.2 A property that doesn't exist

```bash
cat objects/user.ts
node objects/user.ts
npx tsc --noEmit objects/user.ts
node objects/check-user.ts
```

## 2.1.3 Excess properties catch typos

```bash
cat objects/settings.ts
npx tsc --noEmit objects/settings.ts
node objects/check-settings.ts
```

## 2.2.1 Interfaces or type aliases?

```bash
cat interfaces/same-shape.ts
npx tsc --noEmit interfaces/same-shape.ts
cat interfaces/merging.ts
npx tsc --noEmit interfaces/merging.ts
cat interfaces/duplicate.ts
npx tsc --noEmit interfaces/duplicate.ts
node interfaces/check-alias.ts
```

## 2.2.2 Extending an interface

```bash
cat interfaces/dog.ts
npx tsc --noEmit interfaces/dog.ts
node interfaces/dog.ts
node interfaces/check-extends.ts
```

## 2.2.3 Combining types with intersections

```bash
cat interfaces/post.ts
npx tsc --noEmit interfaces/post.ts
node interfaces/post.ts
node interfaces/check-intersection.ts
```

## 2.3.1 Optional properties

```bash
cat properties/player.ts
npx tsc --noEmit properties/player.ts
cat properties/player-checked.ts
node properties/player-checked.ts
node properties/check-optional.ts
```

## 2.3.2 Read-only properties

```bash
cat properties/order.ts
npx tsc --noEmit properties/order.ts
node properties/order.ts
node properties/check-readonly.ts
```

## 2.3.3 Optional chaining and nullish coalescing

```bash
cat properties/profile.ts
npx tsc --noEmit properties/profile.ts
node properties/profile.ts
node properties/check-chaining.ts
```

## 3.1.1 A value that is a string or a number

```bash
cat unions/ids.ts
npx tsc --noEmit unions/ids.ts
node unions/ids.ts
node unions/check-union.ts
```

## 3.1.2 Why a string method fails on a union

```bash
cat unions/shout.ts
npx tsc --noEmit unions/shout.ts
node unions/shout.ts
node unions/check-method.ts
```

## 3.1.3 What narrowing means

```bash
cat unions/tags.ts
npx tsc --noEmit unions/tags.ts
node unions/tags.ts
cat unions/tags-swapped.ts
npx tsc --noEmit unions/tags-swapped.ts
node unions/check-narrowing.ts
```

## 3.2.1 Checking a value's type at runtime

```bash
cat narrowing/format.ts
npx tsc --noEmit narrowing/format.ts
node narrowing/format.ts
node narrowing/check-typeof.ts
```

## 3.2.2 Checking for properties and class instances

```bash
cat narrowing/pets.ts
node narrowing/pets.ts
cat narrowing/dates.ts
node narrowing/dates.ts
npx tsc --noEmit narrowing/pets.ts narrowing/dates.ts
node narrowing/check-in-instanceof.ts
```

## 3.2.3 Truthiness and equality checks

```bash
cat narrowing/greet.ts
npx tsc --noEmit narrowing/greet.ts
cat narrowing/greet-checked.ts
node narrowing/greet-checked.ts
node narrowing/check-truthiness.ts
```

## 3.3.1 A shared tag field on each shape

```bash
cat shapes/tagged.ts
npx tsc --noEmit shapes/tagged.ts
cat shapes/tagged-checked.ts
node shapes/tagged-checked.ts
node shapes/check-tagged.ts
```

## 3.3.2 Switching on the tag field

```bash
cat shapes/area.ts
npx tsc --noEmit shapes/area.ts
node shapes/area.ts
node shapes/check-switch.ts
```

## 3.3.3 Catching a missing case at compile time

```bash
cat shapes/missing.ts
npx tsc --noEmit shapes/missing.ts
grep -n -A1 triangle shapes/complete.ts
npx tsc --noEmit shapes/complete.ts
node shapes/complete.ts
node shapes/check-never.ts
```

## 4.1.1 Strict null checks in practice

```bash
cat nulls/find.ts
npx tsc --noEmit nulls/find.ts
npx tsc --noEmit --strictNullChecks false nulls/find.ts
node nulls/find.ts
cat nulls/find-checked.ts
node nulls/find-checked.ts
node nulls/check-null.ts
```

## 4.1.2 Array indexing is unchecked by default

```bash
cat indexing/colors.ts
npx tsc --noEmit indexing/colors.ts
node indexing/colors.ts
node indexing/check-unchecked.ts
```

## 4.1.3 Turning on checked index access

```bash
cat indexing/colors.ts
npx tsc --noEmit --noUncheckedIndexedAccess indexing/colors.ts
cat indexing/colors-checked.ts
npx tsc --noEmit --noUncheckedIndexedAccess indexing/colors-checked.ts
node indexing/colors-checked.ts
node indexing/check-checked.ts
```

## 4.2.1 Why the any type switches checking off

```bash
cat any/input.ts
npx tsc --noEmit any/input.ts
node any/input.ts
cat any/spreads.ts
npx tsc --noEmit any/spreads.ts
node any/spreads.ts
node any/check-any.ts
```

## 4.2.2 Unknown values must be narrowed

```bash
cat unknown/parse.ts
npx tsc --noEmit unknown/parse.ts
cat unknown/parse-checked.ts
node unknown/parse-checked.ts
node unknown/check-unknown.ts
```

## 4.2.3 The never type for impossible states

```bash
cat never/fail.ts
node never/fail.ts
npx tsc --noEmit never/mistakes.ts
node never/check-never.ts
```

## 4.3.1 Project brief

```bash
cat cart/BRIEF.md
ls cart cart/src
node cart/src/main.ts
node cart/check-brief.ts
```

## 4.3.2 Modeling it with unions and objects

```bash
cat cart/src/types.ts
grep -n -A11 switch cart/src/cart.ts
npx tsc -p cart
npx tsc -p cart/mistakes
node cart/check-model.ts
```

## 4.3.3 The contract line

```bash
grep -n Step cart/check.ts
grep -n contract: cart/check.ts
node cart/check.ts
```
