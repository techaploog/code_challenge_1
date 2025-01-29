import { cn } from "@/lib/utils";
import React from "react";

export const BlogContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("dw-bg-white w-full rounded-[12px]", className)}>
      {children}
    </div>
  );
};
