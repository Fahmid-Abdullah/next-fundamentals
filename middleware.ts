// IF YOU ARE LESSON 13, GO TO LINE 50.

// Welcome. So Middleware in Next.js is code that runs before a request is completed. It acts like a gatekeeper between the 
// request and the response. It is mainly used for loggers, authentication, and redirection. For instance, to protect the dashboard
// route, you can create a middleware that checks if the user is authenticated at the route. If not, they can be redirected to login
// screen.

// So first let's look at the middleware we have now. It is a simple function that takes request as a parameter then logs the request
// path at the time it was requested on specifically /lessons. Following that we have NextResponse.next(), which tells Next.js to 
// continue the processing.

// NextRequest gives you access to the URL, cookies, headers, and anything else sent with in the request.
// NextResponse allows you to return responses, redirect, rewrite URLs, or add headers.

// Some common concepts that you will need:
// request.nextUrl is a special object that represents parsed URL.
// NextResponse.redirect() redirects the user to another route.

// Below the middleware you can see we are also exporting a config. This is the matcher. It is used to limit the middleware to specific
// routes. Currently it only works with /lessons as that is what we have set. The format is /route/path*. 

// Now just for an example, comment out the return NextResponse.next(); and uncomment the redirect.

// Challenge: Once you are familiar with the structure of the middleware. Delete the component and the matcher. Create
// a middleware that runs on all lesson routes that checks if the pathname starts with /lessons/10. If so, it redirects them
// to /lessons/11.
// Hint: You will need the following request.nextUrl.pathname commands:
// .startsWith() → checks if a string begins with a specific substring
// .replace() → replaces part of a string with another value
// .clone() → creates a modifiable copy of a read-only URL object

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./app/lessons/13/lib/session";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const time = new Date().toISOString();

    console.log(`Path ${path} was requested at ${time}.`);

    // Uncomment this line to force a redirect to /lessons/10
    // return NextResponse.redirect(new URL("/lessons/10", request.url));

    // This tells Next.js to continue as normal without redirecting




    // // UNCOMMENT THIS PART WHEN YOU ARE ON LESSON 13
    // // Here is where we set up our protected routes. For showcasing, we just check
    // // if the path starts with lessons/13/dashboard, and if so we check for the token
    // // decrypt if exists, and check if there is an email. If so, we log a success message
    // // If not, we are redirected to the login screen.
    // // Once you are comfortable with how this works. Let's do the challenge.
    // // Go back to lesson 13 page.tsx.
    // if (request.nextUrl.pathname.startsWith("/lessons/13/dashboard")) {
    //     const cookieStore = await cookies();
    //     const token = cookieStore.get("token")?.value;

    //     if (token) {
    //         const session = await decrypt(token);
    //         if (session?.email) {
    //             console.log("User validated!");
    //         } else {
    //             return NextResponse.redirect(new URL("/lessons/13", request.url));
    //         }
    //     } else {
    //         return NextResponse.redirect(new URL("/lessons/13", request.url));
    //     }
    // }



    return NextResponse.next();
}

// Limit this middleware to routes that start with /lessons/
export const config = {
    matcher: "/lessons/:path*",
}