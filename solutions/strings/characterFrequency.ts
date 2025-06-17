/**
Write a JavaScript function called characterFrequency that takes a single string as input.
The function should return an object where the keys are the unique characters in the string and the values are the number of times each character appears in the string. The function should be case-insensitive, meaning 'A' and 'a' should be counted as the same character. Punctuation and spaces should also be counted.


Constraints:
    The input will always be a string.
    The function should handle empty strings.
    The function should be case-insensitive.
    All characters (letters, numbers, punctuation, spaces) should be counted.
*/

function characterFrequency(str: string): Record<string, number> {
  const frequency: Record<string, number> = {};

  // convert the string to lowercase to make it case-insensitive
  const lowerStr = str.toLowerCase();

  for (const char of lowerStr) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

console.log(
  characterFrequency("hello world"),
  // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

  characterFrequency("Good morning, Vietnam!"),
  // { g: 1, o: 2, d: 1, ' ': 2, m: 1, r: 1, n: 2, i: 1, v: 1, e: 1, t: 1, a: 1, h: 1 }

  characterFrequency("AaBbCc"),
  // { a: 2, b: 2, c: 2 }

  characterFrequency("")
  // {}
);
