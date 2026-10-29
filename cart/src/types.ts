// A product's id is set once; the other fields can change.
export type Product = {
  readonly id: string;
  title: string;
  price: number;
};

export type Line = { product: Product; quantity: number };

// Three kinds of discount, told apart by their kind field.
export type Discount =
  | { kind: "none" }
  | { kind: "percent"; percent: number }
  | { kind: "fixed"; amount: number };

export type Cart = {
  lines: Line[];
  discount: Discount;
  coupon?: string;
};
