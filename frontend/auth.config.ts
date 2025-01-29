import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

const API_URL = process.env.API_URL || "http://backend:4000";
const LOGIN_ENDPOINT = "/api/v1/auth/login";

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== "string") {
          throw new Error("Invalid credential");
        }

        try {
          const { email } = credentials;

          const loginUrl = `${API_URL}${LOGIN_ENDPOINT}`;

          const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
            }),
          });

          const { accessToken } = await response.json();

          if (!accessToken) {
            throw new Error("No access token received");
          }

          // Decode JWT token to extract user information
          const decodedToken: { sub: string; email: string; name: string } =
            jwtDecode(accessToken);

          // Return the user object (email and name)
          return {
            uid: decodedToken.sub,
            email: decodedToken.email,
            name: decodedToken.name,
            sub: accessToken,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw error;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
