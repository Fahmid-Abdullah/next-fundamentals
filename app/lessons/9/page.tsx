"use client"

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React from 'react'

// Welcome to Lesson 9. In this lesson, we will discuss Dynamic Imports.
// As your app grows, loading everything up front slows things down. Next.js offers dynamic imports
// to help you split your code into smaller chunks and load them on demand.
// Suspense/React.lazy is used in traditional react, but Next uses next/dynamic since it
// works better with SSR and routing. Check out the example below.
// Now if you reload this lesson, you can see the loading state. If you look below, we are dynamically
// importing the heavy component and setting a loading indicator. The promise you see is just for
// simulating a heavy component by delaying it. For reference, I have provided an example of how you
// would normally do dynamic import:

// const DynamicHeavyComp = dynamic(() => import('./heavyComponent'), {
//   loading: () => (
//     <div className="animate-pulse text-yellow-300 font-mono text-lg">
//       ⏳ Heavy Component is Loading...
//     </div>
//   ),
//   ssr: false
// })

// One more thing you may notice is the ssr: false
// That needs to be added whenever you are importing to a client component (use client)
// to let Next.js know that it cannot be rendered on server.
// Challenge: Delete the dynamic imports from this page. Now dynamically import
// the same heavy component.
// The syntax itself is quote straight forward so once you have it down, you can move on :)

const DynamicHeavyComp = dynamic(() =>
  new Promise<typeof import('./heavyComponent')>((resolve) => {
    setTimeout(() => resolve(import('./heavyComponent')), 2000)
  }).then((mod) => mod.default), {
    loading: () => <p className="text-yellow-300">Heavy Component is Loading...</p>,
    ssr: false,
  }
)

const Lesson9 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 9: Dynamic Imports & Suspense</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>

      <h2 className="text-xl font-bold">Dynamic Import Example</h2>
      <DynamicHeavyComp />

      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/10')}>Next Lesson</button>
    </div>
  )
}

export default Lesson9
