"use client"

// Welcome to Lesson 11. In this lesson we will cover middleware. All the code for this will be in middleware.ts located in the root folder
// so to continue the lesson, please navigate to that file.

import { useRouter } from 'next/navigation';
import React from 'react'

const Lesson11 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 11: Middleware</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/12')}>Next Lesson</button>
    </div>
  )
}

export default Lesson11
