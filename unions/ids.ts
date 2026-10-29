// An id can be a string or a number: the | means "or".
function showId(id: string | number): string {
  return "id: " + id;
}

console.log(showId(42));
console.log(showId("A-7"));
console.log(showId(true));
