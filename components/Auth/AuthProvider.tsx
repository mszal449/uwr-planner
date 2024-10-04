'use client'
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

const AuthProvider = ({ children } : { children : ReactNode}) => {
    return (
        <SessionProvider refetchOnWindowFocus={false}>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider