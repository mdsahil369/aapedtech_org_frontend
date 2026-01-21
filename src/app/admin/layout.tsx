"use client";

import { useState } from "react";

import Header from "./(components)/(header)/Header";
import Sidebar from "./(components)/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* HEADER */}
      <Header
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-0">
          {children}
        </main>
      </div>
    </div>
  );
}
