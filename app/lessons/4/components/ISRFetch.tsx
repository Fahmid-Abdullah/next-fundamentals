export default async function ISRFetch() {
  const res = await fetch('http://localhost:3000/api/time', {
    next: { revalidate: 60 } as { revalidate: number }
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <p>🕒 <strong><code>{`next: { revalidate: 60 }`}</code></strong></p>
      <p><em>Cached and auto-refreshed after 60 seconds.</em></p>
      <p>✅ Use for: news, pricing, marketing — data that changes sometimes</p>
      <p className="mt-2">🕒 Time: <strong>{data.time}</strong></p>
    </div>
  );
}
