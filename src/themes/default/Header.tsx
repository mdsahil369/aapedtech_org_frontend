"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

interface DefaultHeaderProps {
  logoUrl?: string;
  orgName?: string;
}

export default function Header({
  logoUrl,
  orgName = "ORGAAPEDTECH",
}: DefaultHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const renderOrgName = () => {
    const firstThree = orgName.slice(0, 3);
    const rest = orgName.slice(3);

    return (
      <div className="text-xl font-bold tracking-wide">
        <span className="text-primary">{firstThree}</span>
        <span className="text-foreground">{rest}</span>
      </div>
    );
  };

  const renderBrand = () => {
    if (logoUrl && !logoError) {
      return (
        <Image
          src={logoUrl}
          alt={`${orgName} logo`}
          width={140}
          height={40}
          className="h-10 w-auto object-contain"
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
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2">
              {renderBrand()}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {[
                "প্রশ্নব্যাংক",
                "ক্লাস",
                "পরীক্ষা",
                "PDF",
                "কোর্স",
                "ফোরাম",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <FaUser className="h-5 w-5 text-muted-foreground" />

              <Link
                href="/login"
                className="
                  rounded-md border border-border
                  px-4 py-1.5 text-sm font-medium
                  hover:bg-muted transition
                "
              >
                Log In
              </Link>

              <Link
                href="/register"
                className="
                  rounded-md bg-primary
                  px-4 py-1.5 text-sm font-medium
                  text-primary-foreground
                  hover:opacity-90 transition
                "
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden rounded-md p-2 text-foreground hover:bg-muted"
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[80%] max-w-xs
          bg-background border-r border-border
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          {renderBrand()}
          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-md p-2 hover:bg-muted"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Drawer Menu */}
        <nav className="flex flex-col gap-4 px-4 py-6 text-sm font-medium">
          {[
            "প্রশ্নব্যাংক",
            "ক্লাস",
            "পরীক্ষা",
            "PDF",
            "কোর্স",
            "ফোরাম",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              {item}
            </Link>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              className="rounded-md border border-border px-4 py-2 text-center"
            >
              Log In
            </Link>

            <Link
              href="/register"
              className="rounded-md bg-primary px-4 py-2 text-center font-medium text-primary-foreground"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
