import React from "react";
import Link from "next/link";
import { CategoryBadge } from "@/components/badge";
import { BlogCommentCounter, BlogCreator } from "@/components/blog";
import { TBlogSummary } from "@/types/blog";
import { Button } from "../ui/button";
import { MoreVertical } from "lucide-react";

interface IBlogCardProps {
  blog: TBlogSummary;
  options?: boolean;
}

export const BlogCard = async ({ blog, options }: IBlogCardProps) => {
  return (
    <div className="flex w-full flex-col gap-[5px] border-b border-[#BBC2C0] p-[20px]">
      <div className="flex-between">
        <BlogCreator
          size={31}
          name={blog.creatorName}
          image={blog.creatorImage}
        />
        {options ? (
          <Button
            className="flex-center size-[31px] text-slate-400"
            variant="outline"
          >
            <MoreVertical />
          </Button>
        ) : null}
      </div>
      <div className="mt-[15px]">
        <CategoryBadge label={blog.communityName} />
      </div>

      <div className="space-y-[5px]">
        <Link href={`/blog/${blog.blogId}`}>
          <h3 className="text-[16px] font-semibold text-[#101828] hover:underline">
            {blog.title}
          </h3>
        </Link>
        <p className="line-clamp-2 text-[12px] text-[#101828]">
          {blog.details}
        </p>
      </div>

      <BlogCommentCounter className="mt-[10px]" value={blog.commentCount} />
    </div>
  );
};
