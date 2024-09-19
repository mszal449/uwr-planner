import NextAuth, { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GitHubProvider from 'next-auth/providers/github'


export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            profile(profile) {

                console.log(`Profile github: ${profile}`)
                let userRole = "Github User"

                if (profile?.email === "admin") {
                    userRole = "Admin"
                }
                
                return {
                    ...profile,
                    id: profile.id.toString(), // konwersja id na string
                    role: userRole
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT, user:any }): Promise<JWT> {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }): Promise<Session> {
            if (session?.user) {
                session.user.role = token.role;
            }
            return session;
        }
    }
      
}

export default NextAuth(options)
