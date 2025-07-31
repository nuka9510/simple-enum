import { Enum } from "@nuka9510/simple-enum";

class TestEnum extends Enum {
  static #A = new TestEnum('A');

  static #B = new TestEnum('B');

  static get A() { return TestEnum.#A; }

  static get B() { return TestEnum.#B; }

  get test1() { return `#${ this.value }`; }

  constructor(value) { super(value); }

  test2(str) { return `${ this.test1 }: ${ str }`; }

}

const e = TestEnum.valueOf('A');

switch (e) {
  case TestEnum.A: console.log('A', e.test1, e.test2('test'), TestEnum.A.test1, TestEnum.A.test2('test')); break;
  case TestEnum.B: console.log('B', e.test1, e.test2('test'), TestEnum.B.test1, TestEnum.B.test2('test')); break;
}