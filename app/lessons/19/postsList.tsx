// Server Component
export default async function PostsList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { tags: ['posts'] }, // enables tag-based revalidation
  })
  const posts = await res.json()

  return (
    <ul className="border w-1/2">
      <h2 className="text-xl font-bold">Posts</h2>
      {posts.slice(0, 5).map((post: any) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
        </li>
      ))}
    </ul>
  )
}
