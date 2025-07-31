import { Enum } from "@nuka9510/simple-enum";

class TestEnum extends Enum {
  static #A = new TestEnum('A');

  static #B = new TestEnum('B');

  static get A() { return TestEnum.#A; }

  static get B() { return TestEnum.#B; }

  constructor(value) { super(value); }
}

const e = TestEnum.valueOf('A');

switch (e) {
  case TestEnum.A: console.log('A', e.value, TestEnum.A.value); break;
  case TestEnum.B: console.log('B', e.value, TestEnum.B.value); break;
}