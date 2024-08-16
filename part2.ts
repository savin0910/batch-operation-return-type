import { store, type Operation, type Result } from "./store";

type BatchResult<T extends Operation[]> = {
  [key in keyof T]: T[key] extends Operation ? Result<T[key]> : never;
};

const batch = <T extends Operation[]>(operations: T): BatchResult<T> =>
  operations.map((operation) => store[operation]) as BatchResult<T>;

// typeof result2 === [string, number, boolean, Date]
export const result2 = batch(["a", "b", "c", "d"] as const);
