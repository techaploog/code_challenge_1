"use client";

import { TCommunity } from "@/types/blog";
import React, { useContext, useState } from "react";
import { useGeneralContext } from "./general.context";

interface ISearchContext {
  category: TCommunity | null;
  search: string;
  setSearch: (s: string) => void;
  selectCategory: (cKey: string) => void;
}

const SearchContext = React.createContext<ISearchContext | undefined>(
  undefined
);

export function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { categoryList } = useGeneralContext();
  const [category, setCategory] = useState<TCommunity | null>(null);
  const [search, setSearch] = useState("");

  const selectCategory = (idStr: string) => {
    try {
      const item = categoryList.find((c) => c.id.toString() === idStr);
      setCategory(item || null);
    } catch (err: any) {
      setCategory(null);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        category,
        setSearch,
        selectCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }

  return context;
}
