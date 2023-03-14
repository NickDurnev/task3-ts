import type { Equal, Expect } from '../../utils/index';

type Tuple<T extends number, A extends string[] = []> = T extends A["length"] ? A : Tuple<T, [...A, 'a']>;
type MinusOne<T extends number> = Tuple<T> extends [...infer L, 'a'] ? L['length'] : never;

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
]
