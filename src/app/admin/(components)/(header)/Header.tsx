"use client";

// External imports
import { useTheme } from "@/context/theme-context";
import { useState } from "react";
import Link from "next/link";
// UI imports
import {
  PanelLeft,
  Search,
  Bell,
  Settings,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Component imports
import HeaderSearchModal from "./HeaderSearchModal";

export default function Header({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const [openSearch, setOpenSearch] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(true);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      <header
        className="
          sticky top-0 z-40
          h-14 sm:h-16
          bg-card backdrop-blur
          border-transparent
          px-3 sm:px-6
          shadow-aap
        "
      >
        <div className="h-full flex items-center justify-between gap-3">
          {/* left site */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <PanelLeft size={20} />
            </Button>

            <Link
              href="/"
              className="font-semibold tracking-tight text-base sm:text-lg"
            >
              AAP<span className="text-primary">Edtech</span>
            </Link>
          </div>

          {/* desktop search box */}
          <button
            onClick={() => setOpenSearch(true)}
            className="
              hidden md:flex items-center gap-2
              bg-muted/70 backdrop-blur
              px-4 py-2
              rounded-full w-[320px]
              text-sm text-muted-foreground
              hover:bg-muted transition  cursor-pointer
            "
          >
            <Search size={16} />
            Search…
          </button>

          {/* right site */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* mobile search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden cursor-pointer"
              onClick={() => setOpenSearch(true)}
            >
              <Search size={18} />
            </Button>

            {/* theme toggle icon */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            <Button variant="ghost" size="icon">
              <Bell size={18} />
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Settings size={18} />
            </Button>

            {/* profile section */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 outline-none cursor-pointer bg-muted p-1.5 rounded-full">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                  <AvatarImage src="https://i.pravatar.cc/40" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">
                  Maxine K.
                </span>
                <ChevronDown size={14} />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                <DropdownMenuLabel>
                  <p className="text-sm font-semibold">Musharof Chowdhury</p>
                  <p className="text-xs text-muted-foreground">
                    admin@aapedtech.com
                  </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Account settings</DropdownMenuItem>

                <DropdownMenuItem className="text-red-600">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* SEARCH MODAL */}
      <HeaderSearchModal
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
    </>
  );
}
