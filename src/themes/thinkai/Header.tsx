"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../themetoggel";

interface HeaderProps {
  orgName?: string;
  logoUrl?: string;
}

export default function Header({
  orgName = "AAPEDTECH",
  logoUrl,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const renderOrgName = () => {
    const firstThree = orgName.slice(0, 3);
    const rest = orgName.slice(3);

    return (
      <span className="text-lg font-semibold tracking-wide">
        <span className="text-primary">{firstThree}</span>
        <span className="text-foreground">{rest}</span>
      </span>
    );
  };

  const renderBrand = () => {
    if (logoUrl && !logoError) {
      return (
        <Image
          src={logoUrl}
          alt={`${orgName} logo`}
          width={120}
          height={36}
          className="h-8 w-auto object-contain"
          priority
          onError={() => setLogoError(true)}
        />
      );
    }
    return renderOrgName();
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2">
              {renderBrand()}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
              <Link href="#" className="hover:text-primary transition">
                Home
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Classes
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Exams
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Resources
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Forum
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/login"
                className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(true)}
                className="rounded-md p-2 text-foreground hover:bg-foreground/5"
              >
                <FaBars size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[80%] max-w-xs
          bg-background border-r border-foreground/10
          transform transition-transform duration-300 ease-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex h-14 items-center justify-between px-4 border-b border-foreground/10">
          {renderBrand()}
          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-md p-2 text-foreground hover:bg-foreground/5"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Drawer Menu */}
        <nav className="flex flex-col gap-4 px-4 py-6 text-sm font-medium text-foreground/80">
          <Link href="#">Home</Link>
          <Link href="#">Classes</Link>
          <Link href="#">Exams</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Forum</Link>

          <div className="mt-6">
            <Link
              href="/login"
              className="block rounded-md bg-primary px-4 py-2 text-center font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
