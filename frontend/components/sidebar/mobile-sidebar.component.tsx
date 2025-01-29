"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { SIDEBAR_ITEMS } from "@/constants";
import { SidebarItem } from "./sidebar-item.component";
import { usePathname } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import { UserMenu } from "../user";

export const MobileSidebar = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[280px] rounded-l-[12px] border-[#243831] bg-[#243831] text-white">
        <DialogTitle className="hidden">menu</DialogTitle>
        <div className="flex-center mt-[32px] w-full flex-col gap-[36px]">
          <div className="w-full">
            <SheetClose>
              <ArrowRight size={28} className="dw-text-green-100" />
            </SheetClose>
          </div>
          <div>
            {SIDEBAR_ITEMS.map((item) => (
              <SidebarItem
                key={item.path}
                {...item}
                isActive={pathName === item.path}
                isLight={true}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-0">
          <UserMenu mobile />
        </div>
      </SheetContent>
    </Sheet>
  );
};
