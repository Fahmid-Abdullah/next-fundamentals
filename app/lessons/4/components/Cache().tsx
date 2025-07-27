// components/ReactCache.tsx
import { cache } from 'react';

// 🧠 Memoizes the result of this function per request
const getCachedTime = cache(async () => {
  console.log('⏱️ Fetching time (React cache)');
  const res = await fetch('http://localhost:3000/api/time', {
    cache: 'force-cache',
  });
  return res.json();
});

export default async function ReactCache() {
  const time1 = await getCachedTime();
  const time2 = await getCachedTime(); // won't re-fetch

  return (
    <div className="p-4 border rounded">
      <p>🧠 <strong><code>React cache()</code></strong></p>
      <p><em>Memoizes fetches within a single request. Avoids duplicate calls.</em></p>
      <p>✅ Use for: expensive lookups (DB/API) reused across Server Components</p>
      <p className="mt-2">🕒 Time 1: <strong>{time1.time}</strong></p>
      <p>🕒 Time 2: <strong>{time2.time}</strong> <span className="text-sm text-gray-500">(same result)</span></p>
    </div>
  );
}
