// Only these three strings are allowed.
type Size = "small" | "medium" | "large";

function orderCoffee(size: Size): string {
  return "One " + size + " coffee";
}

console.log(orderCoffee("medium"));
console.log(orderCoffee("large"));
