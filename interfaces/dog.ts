interface Animal {
  name: string;
  legs: number;
}

// A Dog is an Animal, plus a breed.
interface Dog extends Animal {
  breed: string;
}

const rex: Dog = { name: "Rex", legs: 4, breed: "Beagle" };
console.log(rex.name, rex.legs, rex.breed);

const tiny: Dog = { name: "Tiny", breed: "Pug" };
