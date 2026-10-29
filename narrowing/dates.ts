function show(when: Date | string): string {
  // instanceof checks which class made the value.
  if (when instanceof Date) {
    return when.toDateString();
  }
  return when;
}

console.log(show(new Date(2026, 9, 20)));
console.log(show("tomorrow"));
