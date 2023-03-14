import type { Equal, Expect } from "../../utils/index";

type Pop<T extends any[]> = T extends [...infer R, infer _] ? [...R] : [];

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]