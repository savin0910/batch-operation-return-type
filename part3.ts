import { store, type Operation, type Result } from "./store";

type BatchOperation<T> = {
  [key in keyof T]: T[key] extends Operation ? T[key] : never;
};

type BatchResult<T> = {
  [key in keyof T]: T[key] extends Operation ? Result<T[key]> : never;
};

const batch = <T extends Operation[]>(
  operations: BatchOperation<T>
): BatchResult<T> =>
  operations.map((operation) => store[operation]) as BatchResult<T>;

// typeof result3 === [string, number, boolean, Date]
export const result3 = batch(["a", "b", "c", "d"]);
