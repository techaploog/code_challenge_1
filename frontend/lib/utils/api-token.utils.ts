"use server";

import { signOut } from "@/auth";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

export async function checkApiAccessToken(token: string) {
  const data = jwtDecode(token);
  const exp = moment.unix(data.exp || 0);

  if (moment().isSameOrAfter(exp)) {
    await signOut({ redirectTo: "/sign-in?error=Token expired" });
  }
}
