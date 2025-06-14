export default class Enum<T> {
    #private;
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
    constructor(value: T);
    /** `Enum`객체 고유 값 */
    get value(): T;
    /** `value`를 고유 값으로 가지는 `Enum`객체를 반환한다. */
    static valueOf<T>(value: T): Enum<T>;
}
