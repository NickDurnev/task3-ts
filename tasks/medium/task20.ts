type a = 'description' | 'invalid';

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K> = Pick<T,Exclude<keyof T, K>>

type res = MyOmit<Todo, a>

type b = keyof Todo;