import type { Equal, Expect } from "../../utils/index";

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer R}${From}${infer L}` ? ReplaceAll<`${R}${To}${L}`, From, To> : S;

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]