import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


import { getUserByEmail } from './data/user'
import { LoginSchema } from './schemas'

export default {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials){
                const validateFields = LoginSchema.safeParse(credentials)

                if(validateFields.success) {
                    const {email, password} = validateFields.data
                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    )
                    if(passwordsMatch) return user
                }
                return null
            }
        })
    ],
} satisfies NextAuthConfig