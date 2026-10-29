type User = { id: number; first: string };

const users: User[] = [
  { id: 1, first: "Ada" },
  { id: 2, first: "Linus" },
];

// find returns the user it finds, or undefined.
const found = users.find((user) => user.id === 3);
console.log(found.first);
