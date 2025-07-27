"use client"

// Welcome to lesson 13. On this lesson, we will go over JSON web tokens.

// Next.js JSON Web Tokens (JWTs) are a way to securely store and transmit user authentication data 
// (like a user ID or email) between the client and server, often used in modern web apps—including 
// those built with Next.js—for session management and API protection.

// Don't get this confused with password hashing. This is how authentication flow works:
// 1. When the user registers, hash the password (using libraries like bcrypt) then store in DB.
// 2. When user logs in, authenticate if credentials are correct then create a JWT token.
// 3. Whenever authentication has to be verified, one can just check check if token is valid.

// In this lesson, we will be specifically focusing on JWTs. On the next lesson, it will be a mini lesson
// that goes over bcrypt.

// In the example below, you will see a basic login screen with hard coded creds (this is for showcasing
// purposes. Obviously you don't want to do this for projects). Now let's take a look at the login server action.

// Challenge: In lesson 12, we will created a basic login that creates a cookie if login is successful.
// For our challenge, we will expand on that lesson by implementing JWT tokens.

import { useRouter } from 'next/navigation';
import React from 'react'
import { login } from './actions/login';

const Lesson13 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 13: JSON Web Tokens</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      
      <form className='p-5 space-y-4 w-lg border-2 rounded-lg'>
        <div className='text-center'>
          <h2 className='text-xl font-bold'>Log In</h2>
          <p className='text-gray-500'>Hint: bob@gmail.com|abc123</p>
        </div>

        <div className='grid grid-cols-5'>
        <label className='col-span-1'>
          Email: 
        </label>
        <input id='email' name='email' type='email' required placeholder='bob@gmail.com'
        className='px-2 py-1 border rounded-lg col-span-4' />
        </div>

        <div className='grid grid-cols-5'>
        <label className='col-span-1'>
          Password: 
        </label>
        <input id='password' name='password' type='password' required
        className='px-2 py-1 border rounded-lg col-span-4' />
        </div>
        <button className="px-4 py-2 w-full text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg cursor-pointer"
        formAction={login}>Log In</button>
      </form>
      
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/14')}>Next Lesson</button>
    </div>
  )
}

export default Lesson13
