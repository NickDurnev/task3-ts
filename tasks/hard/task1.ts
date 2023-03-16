import type { Equal, Expect } from "../../utils/index";

type FirstPart<S extends string> = S extends Uppercase<S> ? Lowercase<S> : S;

type SecondPart<S extends string> = S extends `${infer L}${infer R}${infer C}`
    ? L extends '_'
    ? `${L}${Uppercase<R>}${Lowercase<C>}` :`${Uppercase<L>}${Lowercase<R>}${Lowercase<C>}` : S;

type CamelCase<S extends string> = S extends `${infer L}_${infer R}` ? R extends `_${infer C}` ? `${CamelCase<`${FirstPart<L>}`>}_${SecondPart<C>}`  : CamelCase<`${FirstPart<L>}${SecondPart<R>}`> 
    : S extends Uppercase<S> ? Lowercase<S> : S;

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]