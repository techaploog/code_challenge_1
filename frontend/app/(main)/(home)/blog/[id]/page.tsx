import { CommentDesktop, CommentMobile } from "@/components/add-comment";
import { CategoryBadge } from "@/components/badge";
import {
  BlogCommentCard,
  BlogCommentCounter,
  BlogCreator,
} from "@/components/blog";
import { BLOG_ENDPOINT } from "@/constants";
import { TBlogComment, TBlogSummary } from "@/types/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { env } from "process";
import React from "react";

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  if (params.id.length === 0) {
    redirect("/404");
  }

  const blogReq = await fetch(`${env.API_URL}${BLOG_ENDPOINT}/${params.id}`, {
    cache: "no-cache",
  });

  let blogComments = [] as TBlogComment[];
  const { blog } = (await blogReq.json()) as { blog: TBlogSummary };

  if (!blog) {
    redirect("/404");
  }

  if (blog.commentCount > 0) {
    const comntReq = await fetch(
      `${env.API_URL}${BLOG_ENDPOINT}/${params.id}/comment`,
      {
        cache: "no-cache",
      }
    );
    const { comments } = await comntReq.json();
    blogComments = comments;
  }

  return (
    <div className="mx-auto w-full max-w-[343px] pt-[32px] md:max-w-[800px]">
      <Link href="/">
        <div className="flex-center dw-bg-green-100 size-[44px] rounded-full">
          <ArrowLeft size={24} className="dw-text-green-500" />
        </div>
      </Link>
      <div className="mt-[40px]">
        <BlogCreator
          size={48}
          name={blog.creatorName}
          image={blog.creatorImage}
          strong
        />
      </div>
      <div className="mt-[10px]">
        <CategoryBadge label={blog.communityName} />
      </div>

      {/* Blog Title */}
      <h1 className="dw-text-default mt-[16px] text-[28px] font-bold">
        {blog.title}
      </h1>

      {/* Blog details */}
      <p className="dw-text-default mt-[16px] hyphens-auto text-pretty text-[12px]">
        {blog.details}
      </p>

      {/* Comment Counter */}
      <BlogCommentCounter value={blog.commentCount} className="mt-[28px]" />

      <div className="mt-[20px]">
        <CommentDesktop />
        <CommentMobile />
      </div>

      {/* Comment List */}
      <div className="mt-[24px] w-full space-y-[24px]">
        {blogComments.map((comment) => (
          <BlogCommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
