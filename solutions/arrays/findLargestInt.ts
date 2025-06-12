/*
Given an unsorted array of integers, 
return the largest integer in said array (without sort())
*/

function findLargestInt(arr: number[]): number {
    let currentLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > currentLargest) {
            currentLargest = arr[i];
        }
    }
    return currentLargest;
}

findLargestInt([1, 2, 3, 4, 6, 4, 41, 2, 3, 4, 33, 5, 3, 1, 2, 5, 6]); // returns 41
findLargestInt(["foo", "bar", "baz"]); // fails because input is  an array of strings
findLargestInt([null, undefined, false, Symbol("foo")]); // fails because input is an array of non-integers
