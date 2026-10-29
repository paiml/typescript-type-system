// A read-only array can be read, but not changed.
const months: readonly string[] = ["Jan", "Feb", "Mar"];
console.log(months.length, months[0]);

months.push("Apr");
months[0] = "January";

console.log(months);
