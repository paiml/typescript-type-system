// The same function with the two methods swapped.
function list(tags: string | string[]) {
  if (Array.isArray(tags)) {
    return tags.toUpperCase();
  }
  return tags.join(", ");
}
