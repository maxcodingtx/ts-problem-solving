/*

    You're building a simple application that displays user profiles. Each user profile needs to store the following information:
        id: (number).
        username: (string).
        isActive: (boolean).
        email: (string).

    Your task is to: 
        1. Define a Type (using type or interface), name it UserProfile
        2. Create an Object from the UserProfile type.
        3. Demonstrate Type safety
*/

type UserProfile = {
    id: number;
    username: string;
    isActive: boolean;
    email: string;
};

const myUserProfile: UserProfile = {
    id: 100,
    username: "myUserName",
    isActive: true,
    email: "myEmail@TS.com",
};

// myUserProfile.username = 123         - Error due to 123 not matching type assigned to username
// myUserProfile.x = 100                - Error due to 'x' not being defined in UserProfile type
// myUserProfile.id = 200               - Overwrite is allowed due to 200 matching type assigned to id

console.log(`User ID: ${myUserProfile.id}`);
console.log(`Username: ${myUserProfile.username}`);
console.log(`Active: ${myUserProfile.isActive}`);
console.log(`Email: ${myUserProfile.email}`);
