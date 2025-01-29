import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

export const SearchInput = () => {
  return (
    <div className="flex-center h-[40px] w-full gap-2 rounded-[8px] border border-[#D8E9E4] px-[14px] py-[10px] max-sm:hidden">
      <Search width={24} height={24} className="dw-text-search" />
      <Input
        className="dw-text-search placeholder:dw-text-placeholder no-focus no-active h-fit border-0 bg-[#BBC2C0] p-0"
        placeholder="Search"
      />
    </div>
  );
};
