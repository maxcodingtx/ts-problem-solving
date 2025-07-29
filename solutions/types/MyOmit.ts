/*
Implement the built-in Omit<T, K> generic without using it.
Constructs a type by picking all properties from T and then removing K
*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Person {
  name: string;
  id: number;
  phone: number;
  age: number;
  employed: boolean;
  children: number;
}

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;
type PersonPreview = MyOmit<Person, "id" | "employed" | "children">;

const todo: TodoPreview = {
  //title: 'Laundry', - does not work, omitted by MyOmit
  completed: false,
};

const person: PersonPreview = {
  name: "John",
  phone: 123467890,
  age: 22,
  //children: 2 - does not work, omitted by MyOmit
};
