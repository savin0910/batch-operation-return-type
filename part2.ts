import { store, type Operation, type Result } from "./store";

type BatchResult<T extends ReadonlyArray<Operation>> = {
  [key in keyof T]: T[key] extends Operation ? Result<T[key]> : never;
};

const batch = <T extends ReadonlyArray<Operation>>(
  operations: T
): BatchResult<T> =>
  operations.map((operation) => store[operation]) as BatchResult<T>;

// typeof result2 === readonly [string, number, boolean, Date]
export const result2 = batch(["a", "b", "c", "d"] as const);
