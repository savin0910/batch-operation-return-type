import { store, type Operation } from "./store";

const batch = (operations: Operation[]) =>
  operations.map((operation) => store[operation]);

// typeof result1 === (string | number | boolean | Date)[]
export const result1 = batch(["a", "b", "c", "d"]);
