import React from "react";
import { Castoro } from "next/font/google";

const castoro = Castoro({ weight: "400", style: "italic", subsets: ["latin"] });

type TBrandLable = {
  className?: string;
};

export const BrandLabel = ({ className }: TBrandLable) => {
  return (
    <span
      className={`${castoro.className} dw-text-white text-[20px] ${className}`}
    >
      a Board
    </span>
  );
};
