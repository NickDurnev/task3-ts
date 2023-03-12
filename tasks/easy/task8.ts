import type { Equal, Expect } from '../../utils/index';

type Push<T extends Array<any>, U> = [...T, U]

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
