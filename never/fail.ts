// never: this function never returns, it always throws.
function fail(message: string): never {
  throw new Error(message);
}

function half(value: number): number {
  if (value % 2 !== 0) {
    fail("not an even number: " + value);
  }
  return value / 2;
}

console.log("half of 10 is", half(10));
