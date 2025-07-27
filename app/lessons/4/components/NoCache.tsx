// components/NoCache.tsx
export default async function NoCache() {
  const res = await fetch('http://localhost:3000/api/time', {
    cache: 'no-cache'
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <p>🔵 <strong><code>{`cache: 'no-cache'`}</code></strong></p>
      <p><em>Uses cache if available, but always revalidates with the server.</em></p>
      <p>✅ Use for: semi-fresh data — validate but don’t block on new response</p>
      <p className="mt-2">🕒 Time: <strong>{data.time}</strong></p>
    </div>
  );
}
