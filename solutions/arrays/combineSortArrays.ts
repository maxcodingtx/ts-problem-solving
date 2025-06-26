/*
Given 2 arrays of numbers, combine them and 
sort them (without using concat() or sort() methods)
*/

// sort array using bubble sort
function sortCombinedArray(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Array destructuring for a cleaner swap
      }
    }
  }
  return arr;
}

function combineSortArrays(arr1: number[], arr2: number[]): number[] {
  const combinedArrays = [...arr1, ...arr2];
  const combinedSortedArray = sortCombinedArray(combinedArrays);
  return combinedSortedArray;
}
