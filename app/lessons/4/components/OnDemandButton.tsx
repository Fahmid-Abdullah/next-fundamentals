'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OnDemandButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleRevalidate() {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/revalidate-on-demand');
      const json = await res.json();

      if (res.ok) {
        setMessage('Revalidation triggered!');
        router.refresh(); // Refresh page to get fresh data
      } else {
        setMessage(`Error: ${json.message || 'Failed to revalidate'}`);
      }
    } catch (e) {
      setMessage(`Error: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleRevalidate}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        {loading ? 'Revalidating...' : 'Trigger On-Demand Revalidation'}
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
