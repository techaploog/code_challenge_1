import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export const { signIn, signOut, auth, handlers } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    // Add the accessToken to the session
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.sub;
        token.uid = user.uid;
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.sub = token.sub;
        session.user.uid = token.uid as string;
      }

      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
