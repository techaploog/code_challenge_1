"use client";

// import { useSearchContext } from "@/context";
import React from "react";
import { SearchInput } from "./search-input.component";
import { SearchCategorySelect } from "./search-category.component";
import { SearchInputMobile } from "./search-input-mobile.component";
import { CreateBlogDialog } from "../manage-blog";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

export const SearchBarDesktop = () => {
  const { data: session } = useSession();
  // const { search } = useSearchContext();
  return (
    <div className="flex-between ">
      <SearchInput />
      <SearchInputMobile />
      <div className="flex w-[243px] items-center justify-end gap-[10px]">
        <SearchCategorySelect />
        {session ? (
          <CreateBlogDialog />
        ) : (
          <Link href="/sign-in">
            <Button className="h-[40px] bg-[#49A569] text-xs hover:bg-[#49A569]">
              Sign in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
