import { NavbarComponent } from "@/components/navbar";
import { SidebarComponent } from "@/components/sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-screen">
      <NavbarComponent />
      <div className="relative flex h-full pt-[72px] md:pt-[60px]">
        <SidebarComponent />
        {/* Scrollable Children */}
        <div className="custom-scrollbar flex-1 overflow-y-auto md:ml-[280px]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
