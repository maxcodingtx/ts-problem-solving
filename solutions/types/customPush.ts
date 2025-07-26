/*
Implement the generic version of Array.push
*/

type Push<A extends any[], B> = [...A, B];

// Example usage
function pushArray<T extends any[], U>(arr: T, any: U): Push<T, U> {
  return [...arr, any] as Push<T, U>;
}
