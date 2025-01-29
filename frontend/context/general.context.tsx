"use client";

import { getAllCategory } from "@/lib/actions";
import { TCommunity } from "@/types/blog";
import React, { useContext, useEffect, useState } from "react";

interface IGeneralContext {
  categoryList: TCommunity[];
}

const GeneralContext = React.createContext<IGeneralContext | undefined>(
  undefined
);

export function GeneralContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categoryList, setCategoryList] = useState<TCommunity[]>([]);

  const fetchCategory = async () => {
    try {
      const cList = await getAllCategory();
      setCategoryList(cList);
    } catch (err: any) {
      console.error("[ERROR]", err.message || "Fetch category error");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        categoryList,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export function useGeneralContext() {
  const context = useContext(GeneralContext);

  if (context === undefined) {
    throw new Error(
      "useGeneralContext must be used within a GeneralContextProvider"
    );
  }

  return context;
}
