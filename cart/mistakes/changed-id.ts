import type { Product } from "../src/types.ts";

const notebook: Product = { id: "p1", title: "Notebook", price: 12.5 };

// A product's id is read-only.
notebook.id = "p9";
