import type { Discount } from "../src/types.ts";

// The fixed discount is not handled.
export function savings(discount: Discount, amount: number): number {
  switch (discount.kind) {
    case "none":
      return 0;
    case "percent":
      return (amount * discount.percent) / 100;
    default:
      const unhandled: never = discount;
      return unhandled;
  }
}
