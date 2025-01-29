"use client";

import React from "react";

import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useGeneralContext, useSearchContext } from "@/context";

export const SearchCategorySelect = () => {
  const { category, selectCategory } = useSearchContext();
  const { categoryList } = useGeneralContext();
  return (
    <Select
      value={category ? category.id : ""}
      onValueChange={(val) => selectCategory(val)}
    >
      <SelectTrigger className="w-[128px] border-0 bg-[#BBC2C0] px-[8px] focus:ring-0 focus:ring-offset-0">
        <div className="dw-text-default w-full text-center text-xs font-bold">
          Community
        </div>
      </SelectTrigger>
      <SelectContent>
        {categoryList.length === 0 ? (
          <div className="py-2 text-center text-xs italic text-slate-300">
            -- No data --
          </div>
        ) : (
          categoryList.map((category) => (
            <SelectItem
              key={category.id}
              value={category.id}
              className="data-[state=checked]:bg-[#D8E9E4]"
            >
              {category.value}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
};
