// components/ForceCache.tsx
export default async function ForceCache() {
  const res = await fetch('http://localhost:3000/api/time', {
    cache: 'force-cache'
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <p>🟢 <strong><code>{`cache: force-cache`}</code></strong> (default)</p>
      <p><em>Cached forever (until redeploy or manual revalidation).</em></p>
      <p>✅ Use for: static pages, rarely-changing content</p>
      <p className="mt-2">🕒 Time: <strong>{data.time}</strong></p>
    </div>
  );
}
