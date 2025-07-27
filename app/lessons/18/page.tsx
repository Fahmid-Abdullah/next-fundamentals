"use client"

// Welcome to lesson 18. In this lesson, we will take a look at useSWR.

import { useRouter } from "next/navigation"
import useSWR from "swr"

// SWR (Stale-While-Revalidate) is a React hook library for client-side data fetching.
// It gives you:
// - Instant cache (stale data shown immediately)
// - Background revalidation (refresh in background)
// - Built-in error handling, retrying, and refetch on focus or reconnect

// Step 1: Define the fetcher function
// Step 2: Call useSWR with:
// (1) The API endpoint
// (2) The fetcher function
// (3) Optional config: revalidation + fallback data

// 🧪 Challenge:
// 1. Create a GET request that fetches *all posts* (e.g., from `/api/get-posts` or an external API).
// 2. Use `useSWR` to fetch that data on the client side.
// 3. Map through the array of posts and display each post’s title and body.

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Lesson18 = () => {
  const router = useRouter()


  const { data, error, isLoading } = useSWR(
    '/api/get-post',
    fetcher,
    {
      fallbackData: { id: 1, title: 'Loading...', body: '' },
      refreshInterval: 5000,          // Revalidate every 5 seconds
      revalidateOnFocus: true,        // Revalidate when tab is focused
      revalidateOnReconnect: true     // Revalidate on reconnect
    }
  )

  if (isLoading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-500">Failed to load post.</p>

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 18: SWR & Client Data Fetching</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>

      {/* 📝 Post Preview */}
      <div className="bg-gray-100 p-4 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-green-600">📝 Post #{data.id}</h3>
        <h4 className="text-md font-medium mb-2">{data.title}</h4>
        <p className="text-gray-700">{data.body || '...'}</p>
      </div>

      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/19')}>Next Lesson</button>
    </div>
  )
}

export default Lesson18
