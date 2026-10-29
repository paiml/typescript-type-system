type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function describe(shape: Shape): string {
  if (shape.kind === "circle") {
    return "circle with radius " + shape.radius;
  }
  return "square with side " + shape.side;
}

console.log(describe({ kind: "circle", radius: 2 }));
console.log(describe({ kind: "square", side: 3 }));
