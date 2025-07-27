
// OPTIONS handler for CORS preflight requests in a Next.js App Router API route.

// When a browser makes a cross-origin request with custom methods or headers, 
// it first sends an OPTIONS request to check what is allowed.

// The server must reply with a 204 No Content status and appropriate CORS headers 
// to indicate which origins, methods, and headers are permitted for the actual request.
export async function OPTIONS() {
  return new Response(null, {
    status: 204, // No response body needed for preflight
    headers: {
      // Specifies allowed origins for cross-origin requests.
      // Use '*' to allow all origins (not recommended if credentials are sent).
      // Or specify a domain to restrict access.
      'Access-Control-Allow-Origin': 'https://your-allowed-domain.com',

      // Lists HTTP methods permitted when accessing this resource.
      // Adjust based on your API capabilities.
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',

      // Lists headers the client is allowed to send in the actual request.
      // Include headers your client may use.
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// Handles the actual GET request.

// The response includes the CORS header to allow the browser 
// to accept and expose the response to frontend code.
export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello with CORS!' }), {
    status: 200, // Successful response
    headers: {
      // Matches the allowed origin(s) from the OPTIONS preflight.
      'Access-Control-Allow-Origin': 'https://your-allowed-domain.com',

      // Defines the media type of the response.
      'Content-Type': 'application/json',
    },
  });
}
