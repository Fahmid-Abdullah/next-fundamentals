// Welcome to lesson 19. In this lesson, we are going to look at router.refresh, revalidatePath, and revalidateTag.

// Router Refresh
// Re-runs the layout.tsx + page.tsx server components for the current route. It’s useful after actions like 
// creating/updating/deleting a resource.
// Re-fetches any data from:
//     fetch() calls with cache: 'force-cache', cache: 'no-store', or next: { revalidate: ... }
//     Server Actions
//     Loading data in Server Components
// Preserves client-side component state (like input fields, useState, etc.)


// Revalidate Path (We already went over this, but it aligns with the content so we are briefly going over it again.)
// Server-side function to revalidate the cache for a specific path.
// revalidatePath() is a server-side function that manually clears the cached content of a specific route or 
// path in the Next.js App Router. It works by invalidating the static or incremental cache (ISR) associated 
// with that route, forcing the next request to re-render the page on the server and regenerate the cache.

// This is especially useful when a page uses fetch() with caching options like force-cache or ISR (e.g., revalidate: 60), 
// and you need to programmatically ensure users see updated content without waiting for the next revalidation interval.


// Revalidate Tag
// revalidateTag() is a server-side function that manually invalidates all cached data associated with a specific cache tag. 
// When you fetch data in a Server Component using fetch() with the next: { tags: ['your-tag'] } option, that response is cached 
// and linked to the given tag. Calling revalidateTag('your-tag') clears all such cached responses across routes, ensuring the 
// next request to any of those fetches results in a fresh server re-fetch. 

// This is especially powerful for shared data // (like posts, products, or user profiles) that appear on multiple pages — allowing 
// a single revalidation call to update them everywhere they’re used.

// No challenge this time around. Just look through the 3 functions and play around with it.

import PostsList from "./postsList";
import Actions from "./actions";
import NextButton from "./nextLesson";

const Lesson19 = () => {

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 19: Router Refresh & Manual Revalidation</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <PostsList />
      <Actions />
      <NextButton />
    </div>
  )
}

export default Lesson19
