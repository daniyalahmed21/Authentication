import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prisma } from "./lib/db";
import NextAuth, { DefaultSession } from "next-auth";
import { getUserById } from "./lib/user";
import { UserRoles } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRoles;
    } & DefaultSession["user"];
  }
}


export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRoles;
        console.log(token.role)
      }
      return session;
    },

    async jwt({ token}) {

      if (!token.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
