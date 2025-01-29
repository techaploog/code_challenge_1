import React from "react";
import { BrandLabel } from "../brand";
import { MobileSidebar } from "../sidebar";

export const NavbarComponent = () => {
  return (
    <section className="flex-between dw-bg-green-500 dw-text-white fixed left-0 top-0 z-10 h-[72px] w-full px-4 md:h-[60px] md:px-8">
      <BrandLabel />
      <MobileSidebar />
    </section>
  );
};
