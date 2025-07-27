import { revalidateTag } from 'next/cache'

export async function POST() {
  revalidateTag('posts') // re-fetches any fetch tagged with 'posts'
  return Response.json({ revalidated: true })
}
