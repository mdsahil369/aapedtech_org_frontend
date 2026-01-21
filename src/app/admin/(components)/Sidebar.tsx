"use client";

// External imports
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// UI imports
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
// Component imports
import { sidebarMenu } from "./SidebarMenu";

export default function Sidebar({
  collapsed,
  mobileOpen,
  setMobileOpen,
}: {
  collapsed: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const touchStartX = useRef<number | null>(null);

  /* LOCK BODY SCROLL ON MOBILE */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* SWIPE TO CLOSE (MOBILE) */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 60) setMobileOpen(false);
    touchStartX.current = null;
  };

  return (
    <>
      {/* ===== MOBILE GLASS BACKDROP ===== */}
      <div
        onClick={() => setMobileOpen(false)}
        className={clsx(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen
            ? "bg-black/40 backdrop-blur-md opacity-100"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* ===== SIDEBAR ===== */}
      <aside
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={clsx(
          "fixed md:static top-0 left-0 z-50 h-screen",
          "flex flex-col",
          "bg-card backdrop-blur-xl",
          "text-foreground",
          "border-transparent",
          "shadow-aap",
          "transition-[transform,width] duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* ===== LOGO ===== */}
        {/* <div className="h-16 shrink-0 flex items-center justify-center border-b border-border px-4">
          <Link
            href="/"
            className={clsx(
              "font-semibold tracking-tight",
              collapsed ? "text-sm" : "text-lg"
            )}
          >
            AAP<span className="text-primary">Edtech</span>
          </Link>
        </div> */}

        {/* ===== MENU (SCROLLABLE) ===== */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="px-2 py-4 space-y-6">
              {sidebarMenu.map((section) => (
                <div key={section.group}>
                  {/* GROUP TITLE */}
                  <p
                    className={clsx(
                      "px-3 mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                      collapsed && "opacity-0 h-0 overflow-hidden",
                    )}
                  >
                    {section.group}
                  </p>

                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href;

                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={clsx(
                            "relative flex items-center gap-3",
                            "px-3 py-2 rounded-lg text-sm font-medium",
                            "transition-colors",
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted/60",
                          )}
                        >
                          {/* ACTIVE DOT */}
                          {active && (
                            <span className="absolute left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
                          )}

                          <Icon
                            size={18}
                            className={clsx(
                              "shrink-0",
                              active ? "text-primary" : "text-muted-foreground",
                            )}
                          />

                          <span
                            className={clsx(
                              "whitespace-nowrap transition-all duration-300",
                              collapsed
                                ? "opacity-0 w-0 overflow-hidden"
                                : "opacity-100",
                            )}
                          >
                            {item.name}
                          </span>

                          {item.badge && !collapsed && (
                            <span className="ml-auto text-[10px] bg-destructive text-white px-2 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* ===== USER ===== */}
        <div className="shrink-0 border-t border-border p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>

            <div
              className={clsx(
                "transition-all duration-300",
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100",
              )}
            >
              <p className="text-sm font-medium leading-tight">MD Sahil</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
