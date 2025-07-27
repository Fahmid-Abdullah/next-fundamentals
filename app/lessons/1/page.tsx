"use client"

import { useRouter } from "next/navigation"


// Welcome to the first lesson. This will just be an introduction to NextJS

// So starting NextJS 13, /app replaced /pages. So now to create a new route you can just create a folder and place a page.tsx inside
// to make it a route.

// Challenge: Try it now! Under app directory, create a folder with any name and create a page.tsx and just paste the following default
// code inside:
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//      <p>Hello There!</p>
//     </div>
//   )
// }

// export default page

// Now if you go to that route, you will be able to see Hello There!

// What using the new app router also means is that now you can make layouts easily.
// layout.tsx wraps all child routes. Imagine navbars, sidebars. Persistent UI if you may.
// By default, there is a layout.tsx file in the root of the app directory. To persistently 
// display components like navbars, footers, etc., import and render them inside this layout.

// This layout.tsx can be added to any directory to create sub layouts. For instance, the navbar you
// see now is rendered through layout.tsx inside this lesson.

// Challenge: Try it yourself! On the route you created earlier, render CustomNavbar I have already created for you.
// Hint: Copy the structure of layout.tsx to make it easier


const Lesson1 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 1: Intro to Next.js App Router</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/2')}>Next Lesson</button>
    </div>
  )
}

export default Lesson1
