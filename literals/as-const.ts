type Shipping = "standard" | "express";

function ship(method: Shipping) {
  return "shipping " + method;
}

// as const keeps the literal, and makes the property read-only.
const order = { method: "express" } as const;
console.log(ship(order.method));

order.method = "standard";
