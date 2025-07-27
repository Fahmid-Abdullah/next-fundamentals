"use client"

// Error is the error that was caught. Reset is the function to re-render the route to attempt recovery.

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div role="alert" className="p-4 text-red-600">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="mt-2 px-3 py-1 bg-red-200 rounded">
        Try Again
      </button>
    </div>
  );
}