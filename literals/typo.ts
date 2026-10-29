type Size = "small" | "medium" | "large";

function orderCoffee(size: Size): string {
  return "One " + size + " coffee";
}

console.log(orderCoffee("medum"));

const usual: Size = "extra large";
console.log(usual);
