/*
Given an integer n, return an array (result) where:

  result[i] == "FizzBuzz" if i is divisible by 3 and 5.
  result[i] == "Fizz" if i is divisible by 3.
  result[i] == "Buzz" if i is divisible by 5.
  result[i] == i (as a string) if none of the above conditions are true.

*/

function FizzBuzz(n: number): (number | string)[] {
  let result: (number | string)[] = [];

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(FizzBuzz(15));
