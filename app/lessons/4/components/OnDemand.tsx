// components/OnDemandOnly.tsx
// 📦 This component shows data cached by default (static, no automatic refresh).
// When on-demand revalidation is triggered via the button:
// 1. The server marks this page's cache as stale (using revalidatePath).
// 2. The next request fetches fresh data from the API.
// 3. router.refresh() triggers the client to reload fresh data without a full page reload.

export default async function OnDemandOnly() {
  const res = await fetch('http://localhost:3000/api/time');

  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <p>📦 <strong>Static by Default (No ISR)</strong></p>
      <p><em>This content is static unless revalidated manually.</em></p>
      <p>🕒 Time: <strong>{data.time}</strong></p>
    </div>
  );
}
