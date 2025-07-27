"use client"

// Welcome to lesson 17. In this lesson we will talk about Edge functions as well as CDN caching
//  and force-dynamic in route handlers.

// Edge Runtime
// The Edge Runtime lets your server logic execute geographically closer to users, 
// improving response time and reducing latency.
// - Runs on V8 engine, not Node.js.
// - Limited APIs — no native Node modules like fs.
// - Lightweight and fast — ideal for authentication, personalization, and geolocation tasks.
// - Edge functions have no cold starts, making them perfect for global applications.
// - To use it, you simply have to add the following to the top of your route:
//      export const runtime = 'edge;

// Use Edge Runtime for:
// - Fast, global tasks like geolocation-based content (Details: https://vercel.com/guides/geo-ip-headers-geolocation-vercel-functions)
// - Lightweight caching at the CDN edge
// - Reading and setting cookies quickly
// - A/B testing and personalization without heavy server work

// Use Node.js runtime for:
// - Database access and complex queries with Supabase
// - Authentication flows and secure token handling
// - Payment processing and transaction management
// - File uploads, processing, or any code needing Node APIs like fs


// CDN Caching and force-dynamic
// We previously covered these for page rendering, but here we apply them to route handlers (API routes).
// They work the same way:
// - export const revalidate = 3600; // Cache response at the CDN edge for 1 hour
// - export const dynamic = 'force-dynamic'; // Disable caching, always fetch fresh data
// Note: force-static is NOT supported in route handlers (API routes).

// Challenge:
// 1. Create an API route at /api/hello that runs on the Edge Runtime.
// 2. Make the route return a JSON response with a greeting and the current timestamp.
// 3. Use export const revalidate = 60 to cache the response for 60 seconds at the CDN edge.
// 4. Test the route locally or deploy to see how the timestamp updates only once per minute due to caching.


import { useRouter } from "next/navigation"

const Lesson17 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 17: CDN & Edge Runtime</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/18')}>Next Lesson</button>
    </div>
  )
}

export default Lesson17
