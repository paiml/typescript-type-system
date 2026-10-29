function shout(id: string | number): string {
  return id.toUpperCase();
}

console.log(shout("a-7"));
console.log(shout(42));
