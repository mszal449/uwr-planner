import NextAuth, { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GitHubProvider from 'next-auth/providers/github'


export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            profile(profile) {

            return {
                ...profile,
                id: profile.id.toString(),
            }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT, user:any }): Promise<JWT> {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }): Promise<Session> {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    }
      
}

export default NextAuth(options)
