/*
Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
*/

type Arr1 = ["1", "2", "3"];
type Arr2 = [1, 2, 3];
type Arr3 = [true, null, false];
type Arr4 = [];

type TupleToUnion<T extends any[]> = T[number];

type Test1 = TupleToUnion<Arr1>; // '1' | '2' | '3'
type Test2 = TupleToUnion<Arr2>; // 3 | 1 | 2
type Test3 = TupleToUnion<Arr3>; // boolean | null
type Test4 = TupleToUnion<Arr4>; // never
