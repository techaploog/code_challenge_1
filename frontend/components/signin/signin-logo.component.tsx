import Image from "next/image";
import React from "react";
import { BrandLabel } from "../brand";

export const SignInLogo = async () => {
  return (
    <div className="flex-center dw-bg-green-300 h-[362px] w-full flex-col gap-4 rounded-b-[36px] md:h-full md:w-[632px] md:rounded-l-[36px]">
      <Image
        className="md:hidden"
        src="/assets/images/paper.png"
        alt="paper"
        width={171.46}
        height={131.62}
      />
      <Image
        className="max-sm:hidden"
        src="/assets/images/paper.png"
        alt="paper"
        width={299.61}
        height={230}
      />
      <BrandLabel className="text-[24px] md:text-[28px]" />
    </div>
  );
};
