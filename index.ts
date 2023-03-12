
//Middle 1
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`

//Middle 2
type False = 0 | "" | false | null | undefined | [] | { [P in any]: never };

type AnyOf<T extends readonly any[]> = T extends [infer H, ...infer T]
  ? H extends False
    ? AnyOf<T>
    : true
    : false;

//Middle 3 Resolved
type AppendArgument<Fn extends (...args: any[]) => any, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>

//Middle 4 Resolved

type AppendToObject<T, U extends string | number | symbol, V> = { [K in keyof T| U]: K extends keyof T? T[K]:V};

//Middle 5 Resolved

type MyCapitalize<S extends string> = S extends `${infer U}${infer R}` ? `${Uppercase<U>}${R}` : '';
