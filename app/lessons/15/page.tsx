"use client"

// Welcome to lesson 15. In this lesson, we will cover Headers and Security.

// Setting headers in next.config.ts
// Next.js allows you to configure HTTP headers via the next.config.ts file or 
// by adding custom headers in API routes or middleware.
// Head over to next.config.ts.

// CORS
// In Next.js you manually set CORS headers and respond to preflight OPTIONS requests.
// Head over to /api/cors/route.ts

// Setting Cache Headers
// Head over to /api/cacheheaders/route.ts

// Middleware
// Next.js allows you to configure HTTP headers via the next.config.js file or by adding 
// custom headers in API routes or middleware. Here is an example:
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const response = NextResponse.next();

//   response.headers.set('X-Content-Type-Options', 'nosniff');
//   response.headers.set('X-Frame-Options', 'DENY');
//   response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
//   response.headers.set('Content-Security-Policy', "default-src 'self'");

//   return response;
// }

// Setting them in next.config.ts vs middleware
// next.config.ts headers:
// Set static headers globally based on URL patterns; same headers apply to every request without inspecting it.
// Use case: Adding site-wide security headers or cache controls that don’t change per user.

// Middleware headers:
// Set or modify headers dynamically on every request by inspecting details like method, cookies, or headers.
// Use case: Applying CORS selectively, handling authentication, or customizing responses per user or request.

// No challenge this time. Just something to keep in mind when developing production-ready web apps.

import { useRouter } from "next/navigation"

const Lesson15 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 15: HTTP Headers & Security</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/16')}>Next Lesson</button>
    </div>
  )
}

export default Lesson15
