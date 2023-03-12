import type { Alike, Expect } from '../../utils/index';

type Chainable<acc = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<K extends keyof acc ? Omit<acc, K> & Record<K, V> : acc & {[P in K]: V}>;
  get(): acc;
};

/* _____________ Test Cases _____________ */
declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}