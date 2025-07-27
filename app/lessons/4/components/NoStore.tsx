// components/NoStore.tsx
export default async function NoStore() {
  const res = await fetch('http://localhost:3000/api/time', {
    cache: 'no-store'
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <p>🟡 <strong><code>{`cache: 'no-store'`}</code></strong></p>
      <p><em>Always fetches fresh data. No caching at all.</em></p>
      <p>✅ Use for: real-time updates, live dashboards, or per-user data</p>
      <p className="mt-2">🕒 Time: <strong>{data.time}</strong></p>
    </div>
  );
}
