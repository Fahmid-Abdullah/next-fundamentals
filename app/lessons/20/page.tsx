// Welcome to lesson 20. In this lesson, we will go over cache(), ISR vs full rebuilds.
// Before we start, if you ever see the next lesson button imported, that is because one or more things covered
// in the lesson requires server-side rendering.

// cache()
// The cache() function in Next.js 13+ allows manual caching of fetch requests or any async logic during server rendering. 
// It wraps your function and gives it a unique cache key based on its arguments. Wrap shared async functions with cache() unless 
// you explicitly need real-time, always-fresh data.
// If you look at the example below, getData is being called twice but since its memoized using cache(), it doesn't fetch twice.

// Since it is a fetch call, you can also use the usual parameters (e.g. tags: ['posts'], revalidate: 60, cache: 'force-cache)

// ISR vs full rebuilds
// This is a topic we already went over, but here is a quick revising.
// ISR (export const revalidate) - Lets Next.js serve a stale static page while it regenerates a fresh version in the 
// background—without rebuilding the whole app.
// Full Rebuild/Static Export (export const dynamic = 'force-dynamic') - The page is only updated when you redeploy. 
// No background regeneration.

// Use ISR when content updates regularly and can tolerate brief staleness, and use full rebuilds when content rarely changes 
// and only needs updating during deployments.

// Challenge:
// 1. Create an async function that fetches data from a public API (e.g., https://jsonplaceholder.typicode.com/users).
// 2. Wrap this async function with `cache()` from React to memoize the result per request.
// 5. Add a console.log inside the cached function to confirm that the fetch only happens once per page request.
// 6. Load the page and observe the server logs to verify the caching behavior.
// Bonus:
// - Add an API route or server action that simulates manual cache invalidation and create a button that invalidates and experiment.
// - Experiment with adding `next: { revalidate: 60 }` to the fetch options for ISR behavior.
// - Call the cached function with different arguments and observe how caching behaves with multiple inputs.

import { cache } from "react"
import NextButton from "./nextLesson"

  const getData = cache(async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log("getData was called.")
    return res.json()
  });

export default async function Lesson20() {
  let data = await getData("1");
  data = await getData("1");

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 20: Advanced Caching Logic</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>


      {/* cache() */}
      <div className="border p-4">
        <h2 className="text-lg font-bold">{data.title}</h2>
        <p>{data.body}</p>
      </div>


      <NextButton />
      <p className="text-red-300">This is currently the last lesson. Congratulations on getting this far!</p>
    </div>
  )
}
