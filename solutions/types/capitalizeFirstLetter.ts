// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

type CapitalizeFirstLetter<S extends string> =
  S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;

// Test cases
type capitalizeTest1 = CapitalizeFirstLetter<"hello world">; // expected to be 'Hello world'
type capitalizeTest2 = CapitalizeFirstLetter<"typescript">; // expected to be 'Typescript'
type capitalizeTest3 = CapitalizeFirstLetter<"A">; // expected to be 'A' (remain the same)
type capitalizeTest4 = CapitalizeFirstLetter<"">; // expected to be '' (remain the same)
type capitalizeTest5 = CapitalizeFirstLetter<123>; // does not work, not a string
