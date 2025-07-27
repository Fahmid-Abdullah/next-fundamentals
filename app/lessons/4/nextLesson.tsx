"use client"

import { useRouter } from "next/navigation"

const NextButton = () => {
    const router = useRouter();
    
    return (
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/5')}>Next Lesson</button>
    )
}

export default NextButton