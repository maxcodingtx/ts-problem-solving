// Get the middle element of the array by implementing a GetMiddleElement method, represented by an array

type GetMiddleElement<T extends any[]> = T extends [any, ...infer M, any]
  ? M extends []
    ? T
    : GetMiddleElement<M>
  : T;

type example1 = GetMiddleElement<[1, 2, 3, 4, 5]>; // expected to be [3]
type example2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]>; // expected to be [3, 4]
type example3 = GetMiddleElement<[1]>; // expected to be [1]
type example4 = GetMiddleElement<[1, 2]>; // expected to be [1, 2]
type example5 = GetMiddleElement<[1, 2, true, 4, 5]>; // expected to be [true]
