const input: unknown = JSON.parse('"hello"');

if (typeof input === "string") {
  console.log(input.toUpperCase());
} else {
  console.log("not a string");
}
