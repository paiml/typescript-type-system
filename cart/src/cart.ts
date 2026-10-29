import type { Cart, Discount, Line } from "./types.ts";

export function subtotal(lines: Line[]): number {
  return lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
}

export function savings(discount: Discount, amount: number): number {
  switch (discount.kind) {
    case "none":
      return 0;
    case "percent":
      return (amount * discount.percent) / 100;
    case "fixed":
      return Math.min(discount.amount, amount);
    default:
      const unhandled: never = discount;
      return unhandled;
  }
}

export function toQuantity(value: unknown): number {
  if (typeof value === "string") {
    value = Number(value);
  }
  if (typeof value === "number" && Number.isInteger(value) && value > 0) {
    return value;
  }
  throw new Error("not a quantity: " + String(value));
}

export function total(cart: Cart): number {
  const amount = subtotal(cart.lines);
  return amount - savings(cart.discount, amount);
}

export function receipt(cart: Cart): string[] {
  const amount = subtotal(cart.lines);
  const rows = cart.lines.map(
    (line) => `${line.quantity} x ${line.product.title}: ${(line.product.price * line.quantity).toFixed(2)}`,
  );
  rows.push(`subtotal: ${amount.toFixed(2)}`);
  rows.push(`discount (${cart.discount.kind}): -${savings(cart.discount, amount).toFixed(2)}`);
  rows.push(`coupon: ${cart.coupon ?? "none"}`);
  rows.push(`total: ${total(cart).toFixed(2)}`);
  return rows;
}
