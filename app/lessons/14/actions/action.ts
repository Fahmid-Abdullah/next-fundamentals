
// Welcome. We will look at two key things:
// - How to hash (encrypt) a password: This means converting a plain-text password into a secure string using an algorithm like bcrypt. 
//   The hashed password is what we store in the database instead of the original password.
// - How to validate a password: This means checking whether the plain-text password provided by the user matches the stored hashed password 
//   using bcrypt’s comparison function.

import { compare, hash } from "bcryptjs";

// To hash a password,
// - Step 1: Take the user’s plain-text password (e.g., from a signup form).
// - Step 2: Use bcrypt's `hash(password, saltRounds)` function to generate a secure hash.
// - Step 3: Store the resulting hashed password in the database.
// - Example: `const hashed = await hash(password, 12);`

// To validate a password,
// - Step 1: Retrieve the hashed password for the user from the database (e.g., using their email).
// - Step 2: Use bcrypt's `compare(plainPassword, hashedPassword)` function to see if they match.
// - Step 3: If it matches, allow login or authentication to proceed; otherwise, reject with an error.
// - Example: `const isMatch = await compare(inputPassword, storedHashedPassword);`

// Pretty simple right? Now it's your turn.
// Challenge: In our previous lesson, we saw how we can use middleware and JWTs for authentication and protected routes. You
// will now implement bcrypt. Create a json with the following:
// export const user = { email: bob@gmail.com, password: $2b$14$gv8ltelr9Dkatu4xRS6EI.7x3kjDFds2ZkBeewEpE3Bm2jQMuPbvm }
// The password there is "password" hashed. When user logs in, use bcrypt to compare.

export async function hashPassword(password: string) {
    if (!password) {
        console.log("Error receiving password");
        return;
    }

    // The second parameter you see is salt rounds.
    // Salt rounds = number of times bcrypt rehashes the password (e.g., 12 means 2^12 = 4096 rounds); 
    // Higher = more secure but slower. 12 is a good balance.
    const hashedPassword = await hash(password, 12);
    return hashedPassword as string;
}

export async function checkPassword(password: string, hashedPassword: string) {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
}