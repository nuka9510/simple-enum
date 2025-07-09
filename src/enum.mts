import { JUtil } from "@nuka9510/js-util";
import { __enum__, SEPropertyDescriptor } from "../@types/enum";

export default class Enum<T> {
  /** `Enum`객체 고유 값 */
  #value: T;

  /**
   * `Enum`객체 
   * 
   * ```
   * import { SEnum } from "@nuka9510/simple-enum";
   * 
   * class Enum extends SEnum {
   *   static #A = new Enum('A');
   * 
   *   static #B = new Enum('B');
   * 
   *   static get A() { return Enum.#A; }
   * 
   *   static get B() { return Enum.#B; }
   * 
   *   constructor(value) { super(value); }
   * }
   * 
   * const e = Enum.valueOf('A');
   * 
   * switch (e) {
   *   case Enum.A: console.log('A', e.value, Enum.A.value); break;
   *   case Enum.B: console.log('B', e.value, Enum.B.value); break;
   * }
   * ```
   */
  constructor(value: T) {
    this.#value = value;

    Enum.#setEnums<T>(value, this);
  }

  /** `Enum`객체 고유 값 */
  get value(): T | null {
    if (this.#value?.constructor != Object) { return this.#value; }

    const __enums__ = Enum.#getIterator<T>(this.constructor as typeof Enum<T>);

    for (const enums of __enums__) {
      if (enums.value == this.#value) {
        const property: SEPropertyDescriptor<string> = { value: enums.id },
        value = JUtil.copy(this.#value) as T;

        Object.defineProperty(value, '__enums_id__', property);

        return value;
      }
    }

    return null;
  }

  /** `Enum`객체의 `property`를 설정한다. */
  static #setEnums<T>(
    value: T,
    enums: Enum<T>
  ): void {
    const __constructor__ = enums.constructor,
    __enums__ = (Object.getOwnPropertyDescriptor(__constructor__, '__enums__') ?? {}) as SEPropertyDescriptor<__enum__<T>[]>,
    __value__ = (__enums__.value ?? []);

    if (__value__.some((...arg) => arg[0].value == value)) { throw new Error('이미 등록된 값 입니다.'); }

    Object.defineProperty(
      __constructor__,
      '__enums__',
      {
        ...__enums__,
        value: [
          ...__value__,
          {
            value: value,
            enums: enums,
            id: `${ __constructor__.name }-${ Date.now() }-${ __value__.length }`
          }
        ],
        configurable: true
      }
    );
  }

  /** `value`를 고유 값으로 가지는 `Enum`객체를 반환한다. */
  static valueOf<T>(value: T): Enum<T> {
    const __enums__ = Enum.#getIterator<T>(this);

    for (const enums of __enums__) {
      if (value?.constructor != Object) {
        if (enums.value == value) { return enums.enums; }
      } else {
        if (
          value.hasOwnProperty('__enums_id__')
            ? enums.id == Object.getOwnPropertyDescriptor(value, '__enums_id__')?.value
            : enums.value == value
        ) { return enums.enums; }
      }
    }

    return null;
  }

  /** `Enum`객체에 정의된 `enum`들을 `Generator`객체로 반환한다. */
  static * values<T>(): Generator<Enum<T>, void, unknown> {
    const __enums__ = Enum.#getIterator<T>(this);

    for (const enums of __enums__) { yield enums.enums; }
  }

  /** `Enum`객체에 정의된 `__enum__`들을 `Generator`객체로 반환한다. */
  static * #getIterator<T>(enums: typeof Enum<T>): Generator<__enum__<T>, void, unknown> {
    const __enums__ = (Object.getOwnPropertyDescriptor(enums, '__enums__') ?? {}) as SEPropertyDescriptor<__enum__<T>[]>;

    for (const enums of (__enums__.value ?? []).values()) { yield enums; }
  }

}