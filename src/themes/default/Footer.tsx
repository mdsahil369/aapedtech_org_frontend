"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DefaultFooterProps {
  logoUrl?: string;
  orgName?: string;
}

export default function Footer({
  logoUrl,
  orgName = "ORGAAPEDTECH",
}: DefaultFooterProps) {
  const [logoError, setLogoError] = useState(false);

  // Highlight first 3 characters
  const renderOrgName = () => {
    const firstThree = orgName.slice(0, 3);
    const rest = orgName.slice(3);

    return (
      <div className="text-lg font-bold tracking-wide">
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
          onError={() => setLogoError(true)}
        />
      );
    }
    return renderOrgName();
  };

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            {renderBrand()}
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-3 text-sm">
            {[
              "About",
              "Courses",
              "Privacy Policy",
              "Terms",
              "Support",
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
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {orgName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
