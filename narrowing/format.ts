function format(value: string | number): string {
  // typeof checks the value while the program runs.
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(format("a-7"));
console.log(format(3.14159));
