import { cn } from "@/lib/utils";
import { TSidebarItem } from "@/types/share";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TSidebarItemProps = TSidebarItem & {
  isActive?: boolean;
  isLight?: boolean;
};

export const SidebarItem = ({
  label,
  icon,
  iconLight,
  path,
  isActive,
  isLight,
}: TSidebarItemProps) => {
  return (
    <Link
      href={path}
      className="mx-auto flex w-[248px] items-center gap-[12px] px-[12px] py-[8px] hover:underline"
    >
      <Image
        src={isLight ? iconLight : icon}
        alt={label}
        width={24}
        height={24}
      />
      <span
        className={cn(
          isActive ? "font-bold" : "",
          isLight ? "dw-text-green-100" : ""
        )}
      >
        {label}
      </span>
    </Link>
  );
};
