import { randomUUID } from 'crypto'

export default function RenderingPractice() {
  const id = randomUUID()

  return (
    <div className="p-4 border rounded-md bg-gray-50 shadow">
      <h2 className="text-lg font-semibold mb-2">🧪 Rendering Output</h2>
      <p className="text-xl font-mono break-words">{id}</p>
      <p className="text-sm text-gray-500 mt-2">
        This ID is generated during render and should change depending on the strategy used.
      </p>
    </div>
  )
}