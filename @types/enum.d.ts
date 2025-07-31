import Enum from "../src/enum";

export interface SEPropertyDescriptor<T> extends PropertyDescriptor {
  value?: T;
  get?(): T;
  set?(v: T): void;
}

export interface __enum__<T> {
  value: T,
  enums: Enum<T>,
  id: string
}