"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ModernFooterProps {
  logoUrl?: string;
  orgName?: string;
}

export default function Footer({
  logoUrl,
  orgName = "ORGAAPEDTECH",
}: ModernFooterProps) {
  const [logoError, setLogoError] = useState(false);

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
    <footer className="w-full border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              {renderBrand()}
            </Link>

            <p className="text-sm leading-relaxed text-foreground/70">
              A modern digital learning platform designed for students,
              combining courses, exams, and smart resources in one place.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Platform
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Live Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Exams
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    PDF Library
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-foreground/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {orgName}. All rights reserved.
          </p>

          <p className="text-foreground/40">
            Powered by AAPEdtech
          </p>
        </div>
      </div>
    </footer>
  );
}
