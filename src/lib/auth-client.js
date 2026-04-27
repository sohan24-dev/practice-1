import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

// use from SAME instance
export const { signIn, signUp, useSession } = authClient