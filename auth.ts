import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db, usersTable } from "./lib/db";
import { eq } from "drizzle-orm";

export const {handlers, signIn, signOut, auth} = NextAuth({
    pages: {
      signIn: '/auth/signin',
    },
    providers: [Credentials({
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "username@example.com",
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "********",
          },
        },
        async authorize(credentials) {
          const response = await db.select().from(usersTable).where(eq(usersTable.email, credentials.email as string))

          const user = response[0]
          const passwordCorrect = await bcrypt.compare(credentials?.password as string, user?.password || '')

          if (passwordCorrect) {
            return {
              name: user.name,
              email: user.email,
            }
          }
          return null
        }
      }),],
})