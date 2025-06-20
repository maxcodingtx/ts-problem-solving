/*
  Write a function that reverses a string. 
  The input string is given a normal string (str).
*/

function reverseString(str: string): string {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i], i);
    reversedString += str[i];
  }

  return reversedString;
}
