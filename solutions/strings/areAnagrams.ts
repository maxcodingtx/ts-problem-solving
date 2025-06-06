/*
  Write a function areAnagrams() that determines if two given strings are anagrams of each other

  Write checks for the following:
    -Case sensitivity
    -If either string is falsy
    -If either string contains unicode characters

  */

function areAnagrams(str1: string, str2: string): boolean {
    // early exit if necessary
    if (str1.length !== str2.length) {
        return false;
    }

    const finalString = [str1, str2].map((s: string) =>
        s
            .normalize("NFC")
            .replace(/[^a-z]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("")
    );
    const [newString1, newString2] = finalString;
    return newString1 === newString2;
}
