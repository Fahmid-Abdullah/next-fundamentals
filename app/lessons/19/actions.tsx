'use client'
import { useRouter } from 'next/navigation'

export default function Actions() {
  const router = useRouter()

  const refresh = () => router.refresh()

  const revalidatePathAPI = async () => {
    await fetch('/api/revalidate-path', { method: 'POST' })
    alert("Path revalidated")
  }

  const revalidateTagAPI = async () => {
    await fetch('/api/revalidate-tag', { method: 'POST' })
    alert("Tag revalidated")
  }

  return (
    <div className='flex gap-4'>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg" onClick={refresh}>🔁 router.refresh()</button>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg" onClick={revalidatePathAPI}>📄 revalidatePath('/posts')</button>
      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg" onClick={revalidateTagAPI}>🏷️ revalidateTag('posts')</button>
    </div>
  )
}
