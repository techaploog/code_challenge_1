import React from "react";
import { SearchContextProvider, GeneralContextProvider } from "@/context";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GeneralContextProvider>
      <SearchContextProvider>{children}</SearchContextProvider>
    </GeneralContextProvider>
  );
};

export default HomeLayout;
