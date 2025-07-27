
// We covered caching when fetching an API but now we will look at how you
// set it up for route handlers.

export async function GET() {
  return new Response(JSON.stringify({ message: 'Cache-Control example' }), {
    status: 200,
    headers: {
      // Cache-Control header defines how and how long the response can be cached.
      // This example allows public caching for 60 seconds and serves stale content for 30 seconds during revalidation.
      // Alternatives:
      // - 'no-store' (no caching at all)
      // - 'private, max-age=3600' (cache only in the browser for 1 hour)
      // - 'max-age=0, must-revalidate' (cache but always revalidate before use)
      // - 'public, max-age=86400, immutable' (cache for 1 day, content won't change)
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=30',

      // Standard content type header indicating JSON response
      'Content-Type': 'application/json',
    },
  });
}
