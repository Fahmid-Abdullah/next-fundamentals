"use client"

import { useRouter } from 'next/navigation'

// For lesson 3, we will look at rendering modes and when to use them.

/*
1. SSG (Static Site Generation)
   - How: export const dynamic = 'force-static'; 
     OR omit dynamic and use only static data fetching
   - Explanation: Page is generated at build time and reused on every request.
   - When to use: For mostly static pages that rarely change, like blogs, docs, marketing pages.

2. SSR (Server Side Rendering)
   - How: export const dynamic = 'force-dynamic';
   - Explanation: Page renders fresh on every request (no caching).
   - When to use: For pages that need up-to-date data on every request, like dashboards or user-specific content.

3. ISR (Incremental Static Regeneration)
   - How: export const revalidate = 10;
   - Explanation: Page is static but regenerates on the server after 10 seconds on requests.
   - When to use: For pages that need periodic updates but can be mostly static, like product catalogs or news sites.

4. CSR (Client Side Rendering)
   - How: Add 'use client' at the top of your component or page.
   - Explanation: Component runs fully in the browser, rendering happens client-side.
   - When to use: For highly interactive parts or pages that rely on client-only APIs or dynamic state.
*/

// That was a lot but they are much simpler than they look. Let's first see it in action. 
// NOTE: These strategies only work after building it. 
// So run: npm run start
// Then run: npm start
// You can see try each in action by click the corresponding buttons.
// In lamens terms,
// - SSG is for content like blogs and portfolios that are not interactive. The content is only updated when you redeploy.
// - SSR is for content like admin dashboards since the content is always up to date. The content is updated on every request.
// - ISR is less used for components. It's used for things like inventory. The content is periodically updated.
// - CSR is used for interactive elements like buttons. All the work happens on the browser though so client components should be
// refactored into separate components instead of making the entire page client sided.

// Challenge: Go to Rendering Practice. I have made a component here that randomly changes on each render.
// Try it inside SSG, SSR, and ISR pages one by one.
// NOTE: Remember these strategies only work after building it. 

import React from 'react'

const Lesson3 = () => {
    const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 3: Rendering Strategies</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <h2 className='mt-4 text-xl font-bold'>Rendering Modes</h2>
      <div className='flex space-x-4'>
        <button className='bg-blue-800 px-4 py-1 rounded-lg hover:scale-105 cursor-pointer' onClick={() => router.push('/lessons/3/ssg')}>SSG</button>
        <button className='bg-blue-800 px-4 py-1 rounded-lg hover:scale-105 cursor-pointer' onClick={() => router.push('/lessons/3/ssr')}>SSR</button>
        <button className='bg-blue-800 px-4 py-1 rounded-lg hover:scale-105 cursor-pointer' onClick={() => router.push('/lessons/3/isr')}>ISR</button>
        <button className='bg-blue-800 px-4 py-1 rounded-lg hover:scale-105 cursor-pointer' onClick={() => router.push('/lessons/3/csr')}>CSR</button>
      </div>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/4')}>Next Lesson</button>
    </div>
    )
}

export default Lesson3
