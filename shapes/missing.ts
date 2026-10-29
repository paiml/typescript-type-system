type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Triangle = { kind: "triangle"; base: number; height: number };
type Shape = Circle | Square | Triangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const unhandled: never = shape;
      return unhandled;
  }
}
