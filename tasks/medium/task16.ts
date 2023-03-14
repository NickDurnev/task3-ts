import type { Equal, Expect } from '../../utils/index';

type LengthOfString<S extends string, A extends Array<string> = []> = S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [First, ...A]> : A["length"];

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
    Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]