"use client"

// This lesson introduces two important React hooks: useRef and useContext.

// useRef lets you create a mutable reference that persists across renders without causing re-renders when changed.
// It's commonly used to reference DOM elements directly or to keep any mutable value around without triggering updates.
// Check out the counter example.

// useContext allows components to subscribe to React context, enabling easy sharing of data 
// (like themes, user info, or settings) across the component tree without prop drilling.
// The Post Context example showcases this by passing the count variable as well as the increment function.



// Challenge: Now we will connect the two examples. 

// Create a React context called CountContext that uses:
// - countRef (a mutable ref storing the count), and 
// - handleClick (a function that increments countRef).

// Build a CountProvider component that sets up this context and wraps a new component called CountControls.

// Move the "Click Me" button and "Show Click Count" button UI into CountControls,
// and connect their functionality through the context.

// If done correctly, the app should behave exactly the same as before,
// with "Click Me" updating the countRef without re-render, and "Show Click Count" forcing a re-render to display the updated count.


import { useRouter } from 'next/navigation'
import React, { createContext, useRef, useState } from 'react'
import Posts from './posts';

interface PostContextProp {
  count: number;
  incrementCount: () => void;
}

export const PostContext = createContext<PostContextProp>({
  count: 1,
  incrementCount: () => {}
})

const Lesson6 = () => {
  const router = useRouter();
  const countRef = useRef(0); // store click count, doesn't cause re-render
  const [renderCount, setRenderCount] = useState(0); // to show renders
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleClick = () => {
    countRef.current += 1; // update ref value (no re-render)
    console.log(`Button clicked ${countRef.current} times`);
  };

  const forceRender = () => {
    setRenderCount((prev) => prev + 1); // triggers re-render to show updated count
  };

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 6: useRef and useContext</h2>
      <p className="text-red-300">
        Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.
      </p>

      <div className="rounded-md shadow-md">
        <button
          onClick={handleClick}
          className="px-4 py-2 mr-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Click Me (does NOT re-render)
        </button>
        <button
          onClick={forceRender}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Show Click Count
        </button>
        <p className="mt-4">
          Button was clicked <span className="font-semibold">{countRef.current}</span> times (only updates on re-render)
        </p>
        <p>Render count: <span className="font-semibold">{renderCount}</span></p>
      </div>

      <div>
      <PostContext.Provider value={{ count, incrementCount }}>
        <Posts />
      </PostContext.Provider>
      </div>


      <button
        className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg transition-transform"
        onClick={() => router.push('/lessons/7')}
      >
        Next Lesson
      </button>
    </div>
  )
}

export default Lesson6
