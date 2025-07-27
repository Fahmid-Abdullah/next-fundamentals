"use server"

// Again we are just using hardcoded creds to showcase. We get the form data and check if it matches with the creds
// we have. If so, we create a JSON web token and store that as a cookie.
// Let's go over to lib/session to take a look at how encrypt/decrypt works.

import { cookies } from "next/headers";
import { encrypt } from "../lib/session";
import { redirect } from "next/navigation";

const hardCodedCred = {
    email: "bob@gmail.com",
    password: "abc123"
}

export async function login(formData: FormData) {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
        throw new Error("Failed to receive email/password.")
    }

    if (email === hardCodedCred.email && password === hardCodedCred.password) {
        const token = await encrypt({ email });
        const cookieStore = await cookies();
        cookieStore.set("token", token);
        console.log("Successful!");
        redirect("/lessons/13/dashboard");
    } else {
        console.error("Invalid credentials :(");
    }
}