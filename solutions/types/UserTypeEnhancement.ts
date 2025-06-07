/*
TypeScript Problem: Enhancing a Basic User Type

You're building a small application, and you have a basic User type defined. You need to expand its capabilities and ensure type safety.

This basic User type currently has only three properties: 
id, name, and email. 

Your task is to enhance this type by making the following changes:
  1. Make the age property optional.
  2. Make the id property read-only.
You also have to create a new 'AdminUser' type that extends the User type and adds an additional property 'role' of type string.
Finally, write a function called `createUser` that takes an object of type User or AdminUser and returns a greeting string.
*/

type User = {
    readonly id: string;
    name: string;
    email: string;
    age?: number;
};

type AdminUser = User & {
    role: string;
};

function greetUser(user: User | AdminUser): string {
    const greeting = `Hello, ${user.name}`;

    if (user.age) {
        if ("role" in user) {
            return `${greeting}! Your email is ${user.email}, you are ${user.age} years old, and you have the role of ${user.role}.`;
        }
        return `${greeting}! Your email is ${user.email} and you are ${user.age} years old.`;
    }
    return greeting;
}

// (Your solution code will go here)

const normalUser: User = {
    id: "user_123",
    name: "Alice",
    email: "alice@example.com",
    // age: 30, // This should be optional
};

const olderUser: User = {
    id: "user_456",
    name: "Bob",
    email: "bob@example.com",
    age: 45,
};

const admin: AdminUser = {
    id: "admin_789",
    name: "Charlie",
    email: "charlie@example.com",
    age: 35,
    role: "admin",
};

console.log(greetUser(normalUser)); //"Hello, Alice!"

console.log(greetUser(olderUser)); //"Hello, Bob! Your email is bob@example.com and you are 45 years old."

console.log(greetUser(admin)); //"Hello, Charlie! Your email is charlie@example.com, you are 35 years old, and you have the role of admin."
