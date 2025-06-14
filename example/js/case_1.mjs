import { SEnum } from "@nuka9510/simple-enum";

class Enum extends SEnum {
  static #A = new Enum('A');

  static #B = new Enum('B');

  static get A() { return Enum.#A; }

  static get B() { return Enum.#B; }

  constructor(value) { super(value); }
}

const e = Enum.valueOf('A');

switch (e) {
  case Enum.A: console.log('A', e.value, Enum.A.value); break;
  case Enum.B: console.log('B', e.value, Enum.B.value); break;
}