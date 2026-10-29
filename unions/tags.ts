// Tags arrive as one string or as a list of strings.
function list(tags: string | string[]) {
  if (Array.isArray(tags)) {
    return tags.join(", ");
  }
  return tags.toUpperCase();
}

console.log(list("red"));
console.log(list(["red", "blue"]));
