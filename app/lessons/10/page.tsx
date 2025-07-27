"use client"

// Welcome to Lesson 10. In this lesson, we will talk about Next.js's built in loading and error files.
// In any route folder (even the root), you can place:
// loading.tsx: When a route or data segment is loading, the UI from loading.tsx is rendered.
// error.tsx: When an error happens, Next.js renders this fallback UI.
// I have added loading.tsx and error.tsx to this route. Check them out.
// If you reload the page, you will see the custom loading component that was simulated.
// If you click the Simulate button, you will see the custom error component was simulated.

// No challenge, this time around. If you want to practice something, practice writing out
// the structure for error.tsx.

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from './loading';

const Lesson10 = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateDelay = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(simulateDelay);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 10: Loading UI & Error Boundaries</h2>
      <p className="text-red-300">
        Note: Majority of the lesson instructions will be in the page.tsx for the
        corresponding lesson.
      </p>
      <button
        className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg"
        onClick={() => router.push("/lessons/10/throwerror")}
      >
        Simulate Error
      </button>
      <button
        className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
        onClick={() => router.push("/lessons/11")}
      >
        Next Lesson
      </button>
    </div>
  );
};

export default Lesson10;