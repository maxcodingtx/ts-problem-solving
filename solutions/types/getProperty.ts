/*
Construct a function which takes two arguments; object and key.
Throw an error if the key passed in does not exist within the object also passed in.
Else, return the object property
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  if (!obj[key]) {
    throw new Error("Property does not exist within passed in object");
  }

  return obj[key];
}

var x = {
  firstName: "John",
  age: 28,
};

console.log(
  getProperty(x, "firstName"), // "John"
  getProperty(x, "LastName"), // "Property does not exist within passed in object"
  getProperty(x, "age") // 28
);
