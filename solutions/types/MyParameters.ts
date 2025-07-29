//Implement the built-in Parameters generic without using it.

type MyParameters<T> = T extends (...unknown: infer S) => unknown ? S : any;

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: symbol, arg3: () => void): void => {};

// example usage
type FooParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
type BarParamsType = MyParameters<typeof bar>; // [arg1: boolean, arg2: symbol, arg3: () => void]
type BazParamsType = MyParameters<() => void>; // []
