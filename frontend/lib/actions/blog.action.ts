"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

import {
  CreateBlogPostSchema,
  UpdateBlogPostSchema,
} from "../validations/blog.validation";

import { BLOG_ENDPOINT } from "@/constants";
import { checkApiAccessToken } from "../utils";

import env from "@/env";
import { auth } from "@/auth";

// Create blog post by call backend api.
export async function createBlogPost(
  params: z.infer<typeof CreateBlogPostSchema>,
  path: string = "/"
) {
  const session = await auth();

  const apiToken = session?.user?.sub || "";

  if (apiToken.length === 0) {
    throw new Error("Unauthorized");
  }

  // if invalid -> force sign-out
  await checkApiAccessToken(apiToken);

  try {
    const validData = CreateBlogPostSchema.safeParse(params);
    if (!validData.success) {
      throw new Error("Invalid request data");
    }
    const res = await fetch(`${env.API_URL}${BLOG_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify(validData.data),
    });

    if (res.ok) {
      revalidatePath(path);
    } else {
      const data = await res.json();
      console.log("[DEBUG]", JSON.stringify(data));
      throw new Error(data.error || "Response error : Create Blog");
    }
  } catch (err: any) {
    console.error("[ERROR]", err.message || "Fetch error : Create Blog");
    throw err;
  }
}

// Update blog content
export async function updateBlogPost(
  params: z.infer<typeof UpdateBlogPostSchema>,
  path: string = "/"
) {
  const session = await auth();

  const apiToken = session?.user?.sub || "";

  if (apiToken.length === 0) {
    throw new Error("Unauthorized");
  }

  // if invalid -> force sign-out
  await checkApiAccessToken(apiToken);

  try {
    const validData = UpdateBlogPostSchema.safeParse(params);
    if (!validData.success) {
      throw new Error("Invalid request data");
    }

    const { id, ...data } = validData.data;

    const res = await fetch(`${env.API_URL}${BLOG_ENDPOINT}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      revalidatePath(path);
    } else {
      const data = await res.json();
      console.log("[DEBUG]", JSON.stringify(data));
      throw new Error(data.error || "Response error : Update Blog");
    }
  } catch (err: any) {
    console.error("[ERROR]", err.message || "Fetch error : Update Blog");
    throw err;
  }
}

// Delete blog by id
export async function deleteBlogPost(blogId: string, path: string = "/") {
  const session = await auth();

  const apiToken = session?.user?.sub || "";

  if (apiToken.length === 0) {
    throw new Error("Unauthorized");
  }

  // if invalid -> force sign-out
  await checkApiAccessToken(apiToken);

  try {
    if (!blogId || blogId.length === 0) {
      throw new Error("blogId is required.");
    }

    const res = await fetch(`${env.API_URL}${BLOG_ENDPOINT}/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (res.ok) {
      revalidatePath(path);
    } else {
      const data = await res.json();
      console.log("[DEBUG]", JSON.stringify(data));
      throw new Error(data.error || "Response error : Delete Blog");
    }
  } catch (err: any) {
    console.error("[ERROR]", err.message || "Fetch error : Delete Blog");
    throw err;
  }
}

// TODO: getBlogs

// TODO: getBlogById
