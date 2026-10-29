// The same object shape, written both ways.
interface Point {
  x: number;
  y: number;
}
type PointAlias = { x: number; y: number };

const a: Point = { x: 1, y: "2" };
const b: PointAlias = { x: 1, y: "2" };

// A type alias can also name a union, which an interface can't.
type Status = "open" | "closed";
const state: Status = "open";
