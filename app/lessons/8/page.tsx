"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import useDebounce from './hooks/useDebounce';

// In this lesson, we will learn about debouncing.
// Debouncing is a technique used to limit how often a function runs. 
// Instead of firing on every single input change, we wait until the user 
// stops typing for a moment (e.g., 1000ms) before doing something — like 
// sending an API call.

// I have written out an intuitive example to showcase this. Once you are familiar with it,
// check out the custom hook useDebounce.ts (same concept, just reusable). Get familiar
// with it, you will need to understand it for the challenges below.

// Challenge: Create a new route with a simple input box and a header. The header will display
// the debounced value. I want you to make use of the custom hook to update the debounced value
// with a delay of 300 seconds.

// Challenge: Recreate the custom hook useDebounce in an empty ts file. (You can look over it 
// a few times. You are completed with this lesson once you can do it without looking.)

const Lesson8 = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [manualDebouncedValue, setManualDebouncedValue] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Manual debouncing logic
  const handleChange = (val: string) => {
    setText(val);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setManualDebouncedValue(val);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Custom hook version
  const customDebouncedValue = useDebounce(text, 1000);

  return (
    <div className="flex flex-col space-y-6 p-4 text-white">
      <h2 className="text-xl font-bold">Lesson 8: Debouncing</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>

      {/* Intuitive Manual Debounce */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold">1. Manual Debouncing</h3>
        <input
          className="border border-white bg-black px-2 py-1 rounded"
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Type here..."
        />
        <p className="text-sm">Live value: {text}</p>
        <p className="text-sm text-green-300">Debounced (manual): {manualDebouncedValue}</p>
      </section>

      {/* Custom Hook Debounce */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold">2. Using the useDebounce Hook</h3>
        <input
          className="border border-white bg-black px-2 py-1 rounded"
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Same input — shows custom hook result"
        />
        <p className="text-sm text-blue-300">Debounced (hook): {customDebouncedValue}</p>
      </section>

      <button
        className="mt-6 px-4 py-2 text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
        onClick={() => router.push('/lessons/9')}
      >
        Next Lesson
      </button>
    </div>
  );
};

export default Lesson8;
