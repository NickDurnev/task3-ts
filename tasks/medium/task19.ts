import type { Equal, Expect } from "../../utils/index";

type Mutable<T extends Record<string, any>> = {
   -readonly [P in keyof T]: T[P] extends Record<string, any>
    ? T[P] extends Function
      ? T[P]
      : Mutable<T[P]>
    : T[P];
};

/* _____________ Test Cases _____________ */
interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]