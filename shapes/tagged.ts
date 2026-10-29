// Each shape has a kind field, with its own literal value.
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function describe(shape: Shape): string {
  return shape.kind + " with radius " + shape.radius;
}
