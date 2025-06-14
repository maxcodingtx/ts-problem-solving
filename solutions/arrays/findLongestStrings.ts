/*
Given an  array of strings, return an array of the longest strings in said array

Have the function not throw an exception if the input array:
  - is empty
  - contains non-string elements.
*/

function findLargestInt(arr: any[]): string[] {
    if (arr.length === 0) {
        return [""];
    }

    let longestStringLength = 0;
    let longestStrings: string[] = [];
    for (const str of arr) {
        if (typeof str !== "string") {
            continue; // Skip non-string elements
        }
        const length = str.length;
        if (length > longestStringLength) {
            longestStringLength = length;
            longestStrings = [str];
        } else if (length === longestStringLength) {
            longestStrings.push(str);
        }
    }

    return longestStrings;
}

console.log(
    findLargestInt(["apple", "banana", "cherry", "date"]), // banana, cherry
    findLargestInt([]), // "" (empty array)
    findLargestInt(["single"]), // single
    findLargestInt([2, Symbol("symbol"), true, 0n, null]), // [] (no strings)
    findLargestInt(["test", 123, "example", true, "longest"]) // test, example, longest (skips non-string elements)
);
