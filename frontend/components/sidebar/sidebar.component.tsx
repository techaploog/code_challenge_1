"use client";

import { SIDEBAR_ITEMS } from "@/constants";
import React from "react";
import { SidebarItem } from "./sidebar-item.component";
import { usePathname } from "next/navigation";
import { UserMenu } from "../user";

export const SidebarComponent = () => {
  const pathName = usePathname();
  return (
    <section className="dw-bg-gray-100 relative border-r border-[#D8E9E4] max-sm:hidden md:fixed md:left-0 md:top-[60px] md:h-[calc(100vh-60px)] md:w-[280px] md:shrink-0 md:pt-[32px]">
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.path}
          {...item}
          isActive={pathName === item.path}
        />
      ))}

      <div className="absolute bottom-4 left-0">
        <UserMenu />
      </div>
    </section>
  );
};
