import { revalidatePath } from 'next/cache'

export async function POST() {
  revalidatePath('/posts') // re-fetches page and its data
  return Response.json({ revalidated: true })
}
