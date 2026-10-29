type Profile = {
  first: string;
  address?: { city: string };
  age?: number;
};

const ada: Profile = { first: "Ada", address: { city: "London" }, age: 0 };
const linus: Profile = { first: "Linus" };

console.log(ada.address?.city ?? "unknown");
console.log(linus.address?.city ?? "unknown");
console.log(ada.age ?? "no age");
console.log(ada.age || "no age");
