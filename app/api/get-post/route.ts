
export async function GET() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    return Response.json(data); // assuming this is for a Next.js API route or similar
  } catch (err) {
    return new Response("Error fetching data", { status: 500 });
  }
}
