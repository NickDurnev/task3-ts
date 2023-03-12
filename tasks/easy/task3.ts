import type { Equal, Expect } from '../../utils/index'

type MyExclude<T, U> = T extends U ? never : T;

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
