import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prisma } from "./lib/db";
import { getUserById } from "./lib/user";
import NextAuth, { type DefaultSession } from "next-auth"
declare module "next-auth" {
  interface Session {
    user: {
      role: "ADMIN" | "USER";
    }& DefaultSession["user"]}}
export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if(token.role && session.user){
        session.user.role = token.role;
      }

      console.log(session);
      return session;
    },
    async jwt({ token }) {
      console.log("jwt token: ", token);
      if (!token.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.role = existingUser.role ?? "USER";
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
