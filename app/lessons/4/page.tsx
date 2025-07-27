
// Welcome to the fourth lesson! Today we will cover Data Fetching & Caching
// NextJS already is very optimized and caches whenever it can. But we are also provided tools to really control what and how
// things are cached.

// We are already familiar with await fetch(). In NextJS, if something is fetched with the same parameters, NextJS will automatically
// deduplicate it (Request Memoization). This means that no matter how many times its called in one cycle, it will only be called once.
// This request is not persistent through page reloads, it is just a smart in-memory memoization technique.

// Now while that is the default, we can control the type of cache we want to use for these calls. Try it.
// NOTE: These strategies only work after building it. 
// So run: npm run start
// Then run: npm start
// Check out the components themselves in this lesson folder to see how things are working.
// There are 4 key caching parameters to look at 
// - cache: 'no-store'  
//   Always fetch fresh data, never cache (default for dynamic data).

// - cache: 'force-cache'  
//   The default. Always serve cached data if available, no revalidation until cache is invalidated (good for static data).

// - cache: 'no-cache'  
//   Cache data but always validate with the server before using cached data (conditionally refetch).

// - next: { revalidate: X }  
//   Incremental Static Regeneration (ISR): cache for X seconds, then the next request triggers a fresh fetch to update cache.

// There is also a lesser used one: ache-Control headers
// Cache-Control headers tell browsers and CDNs how to cache the response
// max-age=60: cache this response for 60 seconds
// stale-while-revalidate=30: after 60s, serve the stale response for up to 30 more seconds
// while in the background it fetches a fresh version to update the cache
//
// This gives fast responses even if the data is slightly stale, improving performance
// return Response.json(
//   { time: new Date().toISOString() },
//   {
//     headers: {
//       'Cache-Control': 'max-age=60, stale-while-revalidate=30',
//     },
//   }
// );


// Something that goes along with caching is router.refresh(). This tells Next.js to re-run the current route's Server Components
// It doesn't reload the whole page — just fetches fresh data and updates the UI
// Useful after submitting a form or updating data so the page reflects the changes

// Finally we have cache()
// React's cache() memoizes (remembers) the result of this function for the current request
// So if it's called multiple times with the same input, it only runs once
// Great for expensive operations like database queries or API calls shared across components
// Only works on the server — doesn't persist across page loads or refreshes
// Think needing userId multiple times in one page load, it would only run once. Check out 

// This is a lot and it's hard to grasp right away but these are things that will become simpler the more you use them. So,
// to jump start this learning, let's do a big challenge. Remember take your time and if you need a refresher on fetch() or
// anything else, find the documentation. Good luck :)

// Challenge: Create a new component called <ProductList />. In it, simulate fetching product data 
// (e.g., from a fake API like https://dummyjson.com/products) using different cache strategies.
// NOTE: To fetch time, in the API response, with your data, also return fetchTime: new Date().toISOString(),
// Once you have that working, try out the different fetching configurations taught (force-cache, no-store, revalidate)
// Bonus: Implement the router.refresh() button to test behavior

import React from 'react'
import NoStore from './components/NoStore';
import NoCache from './components/NoCache';
import ForceCache from './components/ForceCache';
import ISRFetch from './components/ISRFetch';
import OnDemandOnly from './components/OnDemand'; // add this import at top
import OnDemandButton from './components/OnDemandButton';
import ReactCache from './components/Cache()';
import NextButton from './nextLesson';

const Lesson4 = () => {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 4: Data Fetching and Caching</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <div className="space-y-4">
      {/* 🔄 Always fetches fresh data — no caching at all
      Good for real-time dashboards or user-specific info */}
      <NoStore />

      {/* 🔄 Checks if a cached version exists, but still revalidates with the server
      Good balance: users get a response fast, but it gets refreshed in background */}
      <NoCache />

      {/* ✅ Uses a cached version and NEVER refetches unless manually told to
      Best for static content like help pages or terms & conditions */}
      <ForceCache />

      {/* ⏱️ Caches the response for 60 seconds, then refreshes on the next request
      Ideal for data that changes occasionally (e.g. news, prices) */}
      <ISRFetch />

      {/* 👇 Only updates if YOU manually tell it to (via revalidateTag or revalidatePath)
      Best for admin dashboards or CMS: you control exactly when the data updates */}
      <OnDemandOnly />
      <OnDemandButton /> 

      {/* 🧠 Memoizes data within a single request to avoid redundant fetches—ideal for expensive or repeated API calls 
      Should be used carefully since it stays cached until process restart or manual invalidation.*/}

      <ReactCache />
      </div>
        <NextButton />
    </div>
    )
}

export default Lesson4
