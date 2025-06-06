/*
  Write a Function findMissingNumber which finds the missing number in a given array of integers.

  Edge cases: 
    -Empty array should return 0
    -Array with only 0 should return 1
    -Duplicates in provided array
*/

function findMissingNumber(nums: number[]): number {
    // handle edge cases
    if (nums.length < 1) {
        return 0;
    }
    if (nums.length == 1 && nums[0] == 0) {
        return 1;
    }

    // for duplicate checking
    const numsSet = new Set(nums);
    if (numsSet.size !== nums.length) {
        throw new Error("Duplicate Detected");
    }

    // checking for missing number
    // const n: number = Math.max(...nums);
    const n: number = nums.length;
    const expectedSum: number = (n * (n + 1)) / 2;
    const actualSum: number = nums.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}
