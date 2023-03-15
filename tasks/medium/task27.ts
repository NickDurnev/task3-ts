import type { Equal, Expect } from "../../utils/index";

type LiteralOnly<T> = string extends T ? never : number extends T ? never : symbol extends T ? never : T; 
type RemoveIndexSignature<T> = {[K in keyof T as LiteralOnly<K>]: T[K]}

/* _____________ Test Cases _____________ */
type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]