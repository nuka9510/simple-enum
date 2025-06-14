import { SEnum } from "@nuka9510/simple-enum";

class Enum extends SEnum {
  static #A = new Enum('A');

  static #B = new Enum('B');

  static get A() { return Enum.#A; }

  static get B() { return Enum.#B; }

  get test1() { return `#${ this.value }`; }

  constructor(value) { super(value); }

  test2(str) { return `${ this.test1 }: ${ str }`; }

}

const e = Enum.valueOf('A');

switch (e) {
  case Enum.A: console.log('A', e.test1, e.test2('test'), Enum.A.test1, Enum.A.test2('test')); break;
  case Enum.B: console.log('B', e.test1, e.test2('test'), Enum.B.test1, Enum.B.test2('test')); break;
}