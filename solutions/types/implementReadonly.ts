/*
Implement the built-in Readonly<T> generic without using it.

Construct a type with all properties of T set to readonly,
meaning the properties of the constructed type cannot be reassigned.
*/

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Person {
  name: string;
  phone: number;
  employed: boolean;
}

const myPerson: MyReadonly<Person> = {
  name: "John Smith",
  phone: 218,
  employed: true,
};

// Everything below fails due to myPerson being of MyReadonly type (setting them to readonly).
myPerson.name = "";
myPerson.phone = 100;
myPerson.employed = false;
