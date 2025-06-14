/*
Define a function that turns any string into a camelCased string.


Inside the function handle the following corner cases:
  - Empty or null input
  - Input empty of any characters

*/

function toCamelCase(input: string): string {
    // handle empty or null input
    if (!input) {
        return "";
    }

    const words = input.split(" ");

    // Handle empty input case
    if (words.length === 0) {
        return "";
    }

    // First word remains the same, rest have their first letter capitalized
    const camelCased = words.reduce((acc, word, index) => {
        if (index === 0) {
            return word;
        } else {
            if (word.length > 0) {
                return acc + word.charAt(0).toUpperCase() + word.slice(1);
            }
            return acc;
        }
    }, "");

    return camelCased;
}

console.log(
    toCamelCase("test string"), // testString
    toCamelCase("hello world"), // helloWorld
    toCamelCase(123), // fails due to 123 not being string
    toCamelCase(false), // fails due to false not being string
    toCamelCase(Symbol("symbol")) // fails due to symbol not being string
);
