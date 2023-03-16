import type { Equal, Expect } from "../../utils/index";

type TupleToUnion<T extends Array<any>> = T[number];

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]