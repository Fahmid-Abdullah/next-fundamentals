"use server";

import { cookies } from "next/headers";

export async function setCookie(formData: FormData) {
  const key = formData.get("key");
  const value = formData.get("value");
  const cookieStore = await cookies();
  if (typeof key === "string" && typeof value === "string") {
    cookieStore.set(key, value);
    console.log("Cookie Set.");
  } else {
    console.warn("Key or value is not a string or is missing.");
  }
}

export async function isCookie(value: string): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.has(value);
}

export async function getCookie(formData: FormData) {
  const key = formData.get("key");
  const cookieStore = await cookies();
  
  if (typeof key === "string") {
    if (await isCookie(key)) {
      const cookie = cookieStore.get(key);
      console.log(`Cookie Received: ${cookie?.value}`);
    } else {
      console.log("Cookie Not Found.");
    }
  } else {
    console.warn("Key is not a string or is missing.");
  }
}


export async function getAllcookies() {
  const cookieStore = await cookies();
  const cookiesData = cookieStore.getAll();
  console.log(cookiesData);
  return cookiesData;
}

export async function clearCookie(value: string) {
  const cookieStore = await cookies();
  cookieStore.delete(value);
  console.log(`Cookie Cleared: ${value}`);
}

// Some other options for setting Cookies
// 1. Basic cookie available site-wide:
// 	path: Limits cookie scope to a specific path or directory. Use '/' to make cookie available site-wide.
// cookieStore.set('user', 'alice', { path: '/' });

// 2. Secure HTTP-only session cookie:
// httpOnly: Prevents client JS access (for security). Use for sensitive cookies like auth tokens.
// secure: Sends cookie only over HTTPS. Use in production for security, especially if SameSite='none'.
// sameSite: Controls cross-site sending. lax allows safe cross-site, strict restricts all cross-site, none allows all but requires secure.
// cookieStore.set('sessionId', 'abc123', {
//   httpOnly: true,
//   secure: true,
//   sameSite: 'lax',
// });

// // 3. Persistent cookie valid for 30 days:
// maxAge: Cookie expiration in seconds. Use for persistent cookies (e.g., sessions lasting days/weeks).
// cookieStore.set('theme', 'dark', {
//   maxAge: 60 * 60 * 24 * 30, // 30 days
// });

// 4. Cookie valid until specific date:
// expires: Explicit expiry date. Overrides maxAge if set. Use if you want specific expiration date/time.
// const expiryDate = new Date(Date.UTC(2025, 11, 31, 0, 0, 0));
// cookieStore.set('holiday', 'celebration', {
//   path: '/',
//   expires: expiryDate,
//   httpOnly: true,
//   secure: true,
//   sameSite: 'lax',
// });

// 5. Cookie scoped to subdomain:
// domain: Defines valid cookie domain (e.g., .example.com to share across subdomains). Useful for multi-subdomain sites.
// cookieStore.set('sub', 'value', {
//   domain: '.example.com',
//   path: '/',
// });

