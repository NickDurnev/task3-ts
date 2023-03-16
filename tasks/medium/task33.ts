import type { Equal, Expect } from "../../utils/index";

// type Trim<S extends string> = S extends `${infer L}${infer R}` ? L extends ' '| "\n" | "\t" ? Trim<`${R}`> : `${L}${Trim<`${R}`>}` : S;
type Space = " " | "\n" | "\t";
type Trim<S> = S extends `${Space}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${Space}`
  ? Trim<L>
  : S;

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]