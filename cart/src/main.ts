import { receipt, toQuantity } from "./cart.ts";
import type { Cart, Product } from "./types.ts";

const notebook: Product = { id: "p1", title: "Notebook", price: 12.5 };
const pen: Product = { id: "p2", title: "Pen", price: 3 };

// Quantities arrive as text from a form, so they start out unknown.
const fromForm: unknown[] = ["2", 3];

const cart: Cart = {
  lines: [
    { product: notebook, quantity: toQuantity(fromForm[0]) },
    { product: pen, quantity: toQuantity(fromForm[1]) },
  ],
  discount: { kind: "percent", percent: 10 },
  coupon: "WELCOME10",
};

for (const row of receipt(cart)) {
  console.log(row);
}
