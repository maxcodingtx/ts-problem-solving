/*
Implement the JavaScript Array.concat function in the type system. 
A type takes the two arguments. The output should be a new array that includes inputs in ltr order
*/

type Concat<A extends any[], B extends any[]> = [...A, ...B];

// Example usage
function concatenateArrays<T extends any[], U extends any[]>(
  arrA: T,
  arrB: U
): Concat<T, U> {
  return [...arrA, ...arrB] as Concat<T, U>;
}

concatenateArrays([123], ["abc"]); //[123, "abc"]
concatenateArrays([true, false], [123]); //[true, false, 123]
concatenateArrays(["Hello"], ["World"]); //["Hello", "World"]
concatenateArrays([], []); //[]
