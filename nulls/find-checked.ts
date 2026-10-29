type User = { id: number; first: string };

const users: User[] = [
  { id: 1, first: "Ada" },
  { id: 2, first: "Linus" },
];

const found = users.find((user) => user.id === 3);
if (found === undefined) {
  console.log("no user with id 3");
} else {
  console.log(found.first);
}
