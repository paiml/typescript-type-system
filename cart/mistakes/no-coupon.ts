import type { Cart } from "../src/types.ts";

// A cart may have no coupon.
export function couponCode(cart: Cart): string {
  return cart.coupon.toUpperCase();
}
