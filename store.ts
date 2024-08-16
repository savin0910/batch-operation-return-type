export type Store = {
  a: string;
  b: number;
  c: boolean;
  d: Date;
};

export type Operation = keyof Store;

export type Result<T = Operation> = T extends Operation ? Store[T] : never;

export const store: Store = {
  a: "a",
  b: 1,
  c: false,
  d: new Date(),
};
