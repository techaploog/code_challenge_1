/* eslint-disable */

import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    sub: string; // accessToken
    uid: string; // user's id
    // email: string;
    // name: string;
  }
}
