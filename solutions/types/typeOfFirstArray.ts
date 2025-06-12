/*
Implement a a generic which captures the type of the first element of an array.
The type should be inferred from the first element of the array.
*/

type TypeOfFirstArray<T extends any[]> = T extends [infer U, ...any[]]
    ? U
    : never;

type arr1 = ["a", "b", "c"];
type firstElement1 = TypeOfFirstArray<arr1>; // 'a'
type arr2 = [1, 2, 3];
type firstElement2 = TypeOfFirstArray<arr2>; // 1
type arr3 = [true, 3n, true];
type firstElement3 = TypeOfFirstArray<arr3>; // boolean
type arr4 = [];
type firstElement4 = TypeOfFirstArray<arr4>; // never
