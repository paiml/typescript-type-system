type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

console.log(area({ kind: "circle", radius: 2 }).toFixed(2));
console.log(area({ kind: "square", side: 3 }).toFixed(2));
