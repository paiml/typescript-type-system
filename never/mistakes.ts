// No value can be stored in never.
const nothing: never = "anything";

// A function that returns never must not finish.
function fail(message: string): never {
  console.log(message);
}
