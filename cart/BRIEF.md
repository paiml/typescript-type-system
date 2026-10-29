# A typed shopping cart

Describe a small shopping cart with types, then let the compiler hold it to them.

- A product has a title, a price and an id that never changes.
- A cart has lines (a product and a quantity), one discount and maybe a coupon.
- A discount is none, a percent off, or a fixed amount off.
- Quantities arrive from a form as unknown values and are checked before use.

Done when:

1. `npx tsc -p cart` reports no errors.
2. `node cart/src/main.ts` prints a receipt that adds up.
3. Each file in `cart/mistakes/` fails with its own error.
