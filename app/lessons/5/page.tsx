"use client"

// This lesson covers two fundamental React hooks that you will use frequently in development.

// First, useState is a hook that lets you add state variables to your functional components. 
// State represents data that can change over time and affects what your UI displays. When you update 
// the state using the setter function provided by useState, React knows to re-render only the parts of 
// the UI that depend on that state, keeping the app efficient. 
// We'll demonstrate this with a simple counter example.

// Second, useEffect is a hook that lets you perform side effects in your components, such as fetching data, 
// subscribing to events, or manually changing the DOM. It runs after the component renders. You can control 
// when it runs by specifying dependencies — if the dependencies array is empty, the effect runs only once 
// when the component first mounts. This is especially useful for actions like fetching data when the page 
// loads or updating data in response to changes elsewhere. 
// We'll show this in action with a fetch example.

// Challenge: Extend the useEffect functionality to instead fetch from https://jsonplaceholder.typicode.com/posts/{counter}
// where number is the counter variable. Whenever counter variable is updated, it should refetch.
// Bonus: Implement error handling when nothing is returned by the fetch call.

import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

interface postProp {
  id: number 
  title: string
}

const Lesson5 = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState<postProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setPosts(data.slice(0, 10));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, []);

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h2 className="text-xl font-bold">Lesson 5: useState & useEffect</h2>
      <p className="text-red-300">
        Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.
      </p>

      <div>
        <h3 className="text-lg font-semibold mb-2">Counter example</h3>
        <button
          className="px-4 py-2 mr-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
        <span className="text-xl font-bold">{counter}</span>
        <button
          className="px-4 py-2 ml-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Posts fetched from JSONPlaceholder</h3>
        {loading && <p>Loading posts...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <ul className="list-disc list-inside max-h-64 overflow-auto border border-gray-300 rounded p-2">
            {posts.map(post => (
              <li key={post.id} className="mb-1">{post.title}</li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg transition-transform"
        onClick={() => router.push('/lessons/6')}
      >
        Next Lesson
      </button>
    </div>
  )
}

export default Lesson5