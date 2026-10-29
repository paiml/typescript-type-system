// No annotations: TypeScript infers each type from its first value.
let city = "Lima";
let visitors = 250;

city = 42;
visitors = "a lot";

console.log(city, visitors);
