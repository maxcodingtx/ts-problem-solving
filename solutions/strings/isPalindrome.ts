/*
  Write a function which checks if a given string is a palindrome (read the same fowards and backwards).

  In this function you will have to do the following:
    - Ignore spaces, punctuation, and capitalization
    - Return a boolean indicating whether or not the given string is a palindrome

*/

function isPalindrome(userString: string): boolean {
    const fixedString = userString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverseString = fixedString.split("").reverse().join("");

    return fixedString === reverseString;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("silent")); // false
console.log(isPalindrome("raceCar")); // true
console.log(isPalindrome(123)); // not allowed due to type being number
console.log(isPalindrome(true)); // not allowed due to type being boolean
