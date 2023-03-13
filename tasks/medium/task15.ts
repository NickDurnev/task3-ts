import type { Equal, Expect } from '../../utils/index';

type Last<T extends any[]> = T extends [...infer _, infer L] ? L :never;

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]