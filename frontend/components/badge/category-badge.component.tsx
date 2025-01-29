import React from "react";

export const CategoryBadge = ({ label }: { label: string }) => {
  return (
    <div className="flex-center dw-bg-badge h-[24px] w-fit rounded-[16px] px-[8px] py-[4px] text-xs">
      {label}
    </div>
  );
};
