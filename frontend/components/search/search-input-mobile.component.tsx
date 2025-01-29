import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const SearchInputMobile = () => {
  return (
    <Popover>
      <PopoverTrigger className="md:hidden">
        <Search width={24} height={24} className="dw-text-search" />
      </PopoverTrigger>
      <PopoverContent
        side="bottom" // Position below the trigger
        align="center" // Align center with trigger
        sideOffset={-40} // Remove any offset
        className="w-screen rounded-none border-0 bg-[#BBC2C0] py-1 shadow-lg"
        // avoidCollisions={false} // Avoid repositioning
      >
        <div className="flex-center mx-auto h-[40px] w-full max-w-[350px] gap-2 rounded-[8px] border border-[#D8E9E4] px-[14px] py-[10px]">
          <Search width={24} height={24} className="dw-text-search" />
          <Input
            className="dw-text-search placeholder:dw-text-placeholder no-focus no-active h-fit border-0 bg-[#BBC2C0] p-0"
            placeholder="Search"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
