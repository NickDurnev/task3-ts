import type { Equal, Expect } from '../../utils/index';

type MyReadonly<T> = { readonly [Key in keyof T]: T[Key] };

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}