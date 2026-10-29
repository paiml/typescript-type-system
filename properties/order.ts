// readonly: set once, when the object is created.
type Order = {
  readonly id: number;
  state: string;
};

const order: Order = { id: 1, state: "new" };

order.state = "shipped";
order.id = 2;

console.log(order);
