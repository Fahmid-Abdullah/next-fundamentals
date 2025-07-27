"use client"

// Welcome to Lesson 14. This is a quick lesson on the basics of bcrypt.

// Bcrypt is a one-way password hashing algorithm. You never store plain text passwords in your database. Instead:
// - You hash the password using bcrypt.hash().
// - When a user logs in, you compare the password they provided with the stored hash using bcrypt.compare().

// I've implemented a basic UI so you can see it in action.
// The first section, allows you to hash any string and the second section let's you compare it.
// Once you have played around with it, move to the server action to see what's actually happening.
// This should only be done on the server side. So let's head over to the server action under this lesson.

import { useRouter } from "next/navigation"
import { useState } from "react";
import { checkPassword, hashPassword } from "./actions/action";

const Lesson14 = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [isMatch, setIsMatch] = useState<boolean | null>(null);

  const hash = async () => {
    if (password) {
      const returnPass = await hashPassword(password);
      setHashedPassword(returnPass as string);
      setIsMatch(null); // reset match state
    } else {
      console.log("Enter a password to hash...");
    }
  };

  const compare = async () => {
    if (input && hashedPassword) {
      const returnMatch = await checkPassword(input, hashedPassword);
      setIsMatch(returnMatch);
    } else {
      console.log("Please provide both password and hashed password.");
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-6">
      <h2 className="text-2xl font-bold">Lesson 14: Bcrypt Mini Lesson</h2>
      <p className="text-sm text-red-400">
        Note: Majority of the lesson instructions will be in the page.tsx for this lesson.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Hash Form */}
        <div className="border p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-center">🔐 Hash a Password</h3>
          <p className="text-sm break-all">Hashed Password: {hashedPassword || "..."}</p>
          <input
            className="mt-4 w-full border rounded-lg px-4 py-2"
            placeholder="Enter password to hash"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button" // to avoid auto refresh
            className="mt-4 w-full px-4 py-2 text-white font-bold bg-blue-700 hover:bg-blue-800 rounded-lg"
            onClick={hash}
          >
            Hash
          </button>
        </div>

        {/* Compare Form */}
        <div className="border p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-center">🔍 Compare a Password</h3>
          <p className="text-sm">Do they match? <strong>{isMatch === null ? "..." : isMatch ? "✅ Yes" : "❌ No"}</strong></p>
          <input
            className="mt-4 w-full border rounded-lg px-4 py-2"
            placeholder="Password to check"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            className="mt-2 w-full border rounded-lg px-4 py-2"
            placeholder="Hashed password"
            value={hashedPassword}
            onChange={(e) => setHashedPassword(e.target.value)}
          />
          <button
            type="button"
            className="mt-4 w-full px-4 py-2 text-white font-bold bg-blue-700 hover:bg-blue-800 rounded-lg"
            onClick={compare}
          >
            Compare
          </button>
        </div>
      </div>

        <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
        onClick={() => router.push('/lessons/15')}>Next Lesson</button>
    </div>
  );
};

export default Lesson14;