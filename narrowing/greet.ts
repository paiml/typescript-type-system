function greet(first: string | null): string {
  return "Hello, " + first.toUpperCase();
}

console.log(greet("ada"));
