import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import React from "react";

export const BlogCommentCounter = ({
  className,
  value,
}: {
  className?: string;
  value: number;
}) => {
  return (
    <div
      className={cn(
        "dw-text-gray-300 flex items-center gap-[5px] text-[12px]",
        className
      )}
    >
      <MessageCircle width={16} height={16} />
      <span>{value}</span>
      <span>Comments</span>
    </div>
  );
};
