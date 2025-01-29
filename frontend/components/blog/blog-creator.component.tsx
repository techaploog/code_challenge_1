import React from "react";
import Image from "next/image";

import { MOCK_USR_IMG } from "@/constants/mock.constant";

interface IBlogCreatorProps {
  name: string;
  size: number;
  image?: string | null;
  strong?: boolean;
}

export const BlogCreator = async ({
  name,
  image,
  size,
  strong,
}: IBlogCreatorProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <Image
        src={image || MOCK_USR_IMG}
        alt={name}
        width={size}
        height={size}
        className="rounded-full"
      />
      <span className={strong ? "dw-text-default" : "dw-text-gray-300"}>
        {name}
      </span>
    </div>
  );
};
