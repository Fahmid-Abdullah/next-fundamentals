"use client"

import { useRouter } from 'next/navigation'
import React, { use } from 'react'

const Page = ({ searchParams }: { searchParams: Promise<{ searchTerm: string }> }) => {
    const router = useRouter();
    const { searchTerm } = use(searchParams)

  return (
    <div className='p-4'>
      <button className='px-4 py-2 w-24 text-sm font-bold bg-green-700 hover:bg-green-800 hover:scale-105 cursor-pointer rounded-lg'
      onClick={() => router.push('/lessons/2')}>
        Back
      </button>
      <h1 className='mt-4 text-xl'>You Searched For: {searchTerm}</h1>
    </div>
  )
}

export default Page
