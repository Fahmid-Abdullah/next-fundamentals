export default function Page() {
  throw new Error("Simulated server error to trigger error.tsx");
  return <div>This will never render</div>;
}