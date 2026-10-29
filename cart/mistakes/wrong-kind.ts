import type { Discount } from "../src/types.ts";

// A kind the Discount union does not have.
export const discount: Discount = { kind: "percentage", percent: 10 };
