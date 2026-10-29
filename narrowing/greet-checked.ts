function greet(first: string | null): string {
  // Truthiness: null and "" both count as false.
  if (first) {
    return "Hello, " + first.toUpperCase();
  }
  return "Hello, stranger";
}

function initial(first: string | null): string {
  // Equality: after this check, first can't be null.
  if (first === null) {
    return "?";
  }
  return first.charAt(0);
}

console.log(greet("ada"), greet(null), greet(""));
console.log(initial("ada"), initial(null));
