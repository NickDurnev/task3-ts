import type { Equal, Expect } from "../../utils/index";

type Space = " " | "\n" | "\t";
type TrimLeft<S> = S extends `${Space}${infer R}`
    ? TrimLeft<R>
    : S;
    
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]