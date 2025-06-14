import { SEnum } from "@nuka9510/simple-enum";

class Enum extends SEnum {
  get test1() { return `#${ this.value }`; }

  constructor(value) { super(value); }

  test2(str) { return `${ this.test1 }: ${ str }`; }

}

class SubEnum extends Enum {
  static #A = new SubEnum('A');

  static #B = new SubEnum('B');

  static get A() { return SubEnum.#A; }

  static get B() { return SubEnum.#B; }

  constructor(value) { super(value); }

}

const e = SubEnum.valueOf('A');

switch (e) {
  case SubEnum.A: console.log('A', e.test1, e.test2('test'), SubEnum.A.test1, SubEnum.A.test2('test')); break;
  case SubEnum.B: console.log('B', e.test1, e.test2('test'), SubEnum.B.test1, SubEnum.B.test2('test')); break;
}