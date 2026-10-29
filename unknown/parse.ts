// JSON.parse could return anything, so we call it unknown.
const input: unknown = JSON.parse('"hello"');

console.log(input.toUpperCase());
