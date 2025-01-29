import { TBlogComment } from "@/types/share";
import React from "react";
import { BlogCreator } from "./blog-creator.component";

export const BlogCommentCard = ({ comment }: { comment: TBlogComment }) => {
  return (
    <div className="w-full space-y-[8px] ">
      <BlogCreator
        size={40}
        name={comment.userName}
        image={comment.userImage}
      />
      <p className="dw-text-default hyphens-auto text-pretty pl-[50px] text-[12px]">
        {comment.comment}
      </p>
    </div>
  );
};
