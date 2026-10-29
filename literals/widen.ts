type Shipping = "standard" | "express";

function ship(method: Shipping) {
  return "shipping " + method;
}

const fast = "express";
let slow = "standard";
console.log(ship(fast));
console.log(ship(slow));

const order = { method: "express" };
console.log(ship(order.method));
