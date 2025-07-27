"use client"

// Welcome to Lesson 12. In this lesson, we are going to talk about cookies.
// cookies() API i used in Next.js server components or server actions to read, set, and delete cookies.
// Open up accessCookies.tsx. You will see code snippets of all the functions of cookies() that you will need,
// as well as some other options you should know about.
// Now, let's see it in action. If you look at the lesson 12 page, you will see a form that allows you enter a value
// then set it as a cookie. Then the Get Cookie button logs the cookie.
// You can also go to inspect element and go to Storage to view cookies.
// NOTE:
// This example is for demonstration purposes only. In real applications, you should never store or display sensitive 
// data in cookies directly. Always encrypt sensitive information before setting it in cookies, and decrypt it securely 
// when reading, to protect user privacy and prevent security risks. We will look at this in the next lesson.

// Challenge: As covered earlier, you've learned various features of the cookies() API.
// Combine that knowledge with middleware to build a basic login flow.

// To Do:
// 1. Create a login form that sends a hardcoded email and password to a server action.
// 2. In the server action, validate the credentials and set a cookie if they're correct.
// 3. Use middleware to protect the /lessons/12/dashboard route:
//    - If a valid cookie exists, allow access.
//    - If not, redirect the user to the login page.

// Bonus:
// After a successful login, redirect the user to the dashboard.
// Add a logout button that clears the cookie and redirects the user back to login.


import { useRouter } from 'next/navigation';
import React from 'react'
import { getCookie, setCookie } from './actions/accessCookies';

const Lesson12 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 12: Cookies</h2>
      <div className='flex flex-col gap-2'>
        <form className='flex flex-col space-y-2'>
          <label className="flex items-center space-x-2">
            <span className="w-24">Key:</span>
            <input id="key" name="key" placeholder="authToken" className="border rounded-lg px-2 py-1" />
          </label>          
          <label className="flex items-center space-x-2">
            <span className="w-24">Value:</span>
            <input id="value" name="value" placeholder="58970" className="border rounded-lg px-2 py-1" />
          </label>
          <button className="px-4 py-2 w-xs text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg"
          formAction={setCookie}>Set Cookie</button>
        </form>
        <form className='mt-4 flex flex-col space-y-2'>
          <label className="flex items-center space-x-2">
            <span className="w-24">Key:</span>
            <input id="key" name="key" placeholder="authToken" className="border rounded-lg px-2 py-1" />
          </label>          
          <button className="px-4 py-2 w-xs text-xl font-bold bg-green-700 hover:bg-green-800 hover:scale-105 rounded-lg"
          formAction={getCookie}>Get Cookie</button>
        </form>

      </div>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/13')}>Next Lesson</button>
    </div>
  )
}

export default Lesson12
