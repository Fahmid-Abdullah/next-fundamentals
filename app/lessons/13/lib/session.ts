// This is our core functionality. To create and sign a JWT token we create a secret, encode it, then use it to sign
// the data we want to store (in our case, just the email).

// Encrypt: Takes the payload (email), encrypts it, and returns the encoded token.
//      .setProtectedHeader({ alg: 'HS256' }): 
//          Sets metadata in the JWT header to indicate the algorithm used for signing.
//          In this case, 'HS256' stands for HMAC using SHA-256, a symmetric algorithm where the same key is used to sign and verify.
//      
//      .setIssuedAt(): 
//          Adds an "iat" (Issued At) claim to the JWT, representing the timestamp at which the token was created.
//          This helps validate the token’s age and can be used to detect tokens issued too long ago.
//
//      .setExpirationTime('7d'): 
//          Adds an "exp" (Expiration Time) claim to the JWT, specifying how long the token should be valid.
//          Here, it means the token will expire 7 days after it was issued.
//      
//      .sign(encodedKey):  
//          Cryptographically signs the JWT using the encoded secret key and the specified algorithm.
//          This ensures that the token cannot be modified without detection and can later be verified by the server.

// Decrypt: Takes the token, and if it is valid (checks with the same algorithm as for encrypt), returns the
// decoded payload (in our case the email).

// Now let's go over to the middleware (in the root).

// Import necessary functions and types from the `jose` library
import { JWTPayload, jwtVerify, SignJWT } from "jose";

// Define the secret used to sign and verify JWTs
const JWTSecret = 'IJUDN3239UHNP9';
// Encode the secret string into a Uint8Array format suitable for crypto operations
const encodedKey = new TextEncoder().encode(JWTSecret);

// Extend the standard JWT payload to include a custom `email` field
export interface SessionPayload extends JWTPayload {
  email: string
}

// Function to create and sign a JWT with the provided session payload
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)                     // Create a new JWT with the payload
    .setProtectedHeader({ alg: 'HS256' })         // Specify the signing algorithm
    .setIssuedAt()                                // Add the "iat" (issued at) claim
    .setExpirationTime('7d')                      // Set the token to expire in 7 days
    .sign(encodedKey)                             // Sign the token using the secret key
}

// Function to verify and decode a JWT; returns the payload if valid, or null otherwise
export async function decrypt(token: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],                      // Ensure the token was signed using HS256
    })
    return payload                                // Return the decoded payload if verification passes
  } catch (error) {
    console.log('Failed to verify session')       // Log an error if verification fails
    return null                                   // Return null to indicate invalid or expired token
  }
}