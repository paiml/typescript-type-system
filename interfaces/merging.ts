// Two interfaces with the same name merge into one.
interface Member {
  first: string;
}
interface Member {
  last: string;
}
const ada: Member = { first: "Ada" };
