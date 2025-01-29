"use server";

import env from "@/env";

import { GET_CATEGORY_ENDPOINT } from "@/constants";

import { TCommunity } from "@/types/blog";

export async function getAllCategory() {
  try {
    const res = await fetch(`${env.API_URL}${GET_CATEGORY_ENDPOINT}`);
    const { communities } = await res.json();

    if (Array.isArray(communities)) {
      return communities.map((com) => ({
        ...com,
        id: com.id.toString(),
      })) as TCommunity[];
    } else {
      return [] as TCommunity[];
    }
  } catch (err: any) {
    console.error(
      "[ERROR]",
      err.message || "Cannot fetch category from backend"
    );
    return [] as TCommunity[];
  }
}
