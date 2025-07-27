"use client"

import { useRouter } from 'next/navigation'
import React, { use, useState } from 'react'

const Page = ({ params }: { params: Promise<{ category: string }> }) => {
    const [categoryPage, setCategoryPage] = useState<string>();
    const router = useRouter();
    const { category } = use(params);

  return (
    <div className='p-4'>
      <button className='px-4 py-2 w-24 text-sm font-bold bg-green-700 hover:bg-green-800 hover:scale-105 cursor-pointer rounded-lg'
      onClick={() => router.push('/lessons/2')}>
        Back
    </button>
    <h1 className='mt-4 text-xl'>Your Category: {category}</h1>

    <div className="hidden space-x-2">
        <h2 className="mt-4 text-xl font-bold">Page Number</h2>
        <input name="page" type="string" value={categoryPage} onChange={(e) => setCategoryPage(e.target.value)} className="w-xl py-2 px-1 border border-white rounded-lg" />
        <button className="px-4 py-2 text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 cursor-pointer rounded-lg"
        onClick={() => router.push(``)}>Submit</button>
    </div>
    </div>
  )
}

export default Page
