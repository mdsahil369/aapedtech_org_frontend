"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FooterProps {
  logoUrl?: string;
  orgName?: string;
}

export default function Footer({
  logoUrl,
  orgName = "ORGAAPEDTECH",
}: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  const renderOrgName = () => {
    const firstThree = orgName.slice(0, 3);
    const rest = orgName.slice(3);

    return (
      <div className="text-lg font-semibold tracking-wide">
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
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              {renderBrand()}
            </Link>

            <p className="text-sm leading-relaxed text-foreground/70">
              A trusted educational platform providing quality learning
              resources, exams, and structured courses for students.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/60">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Classes
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

          {/* Policies */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/60">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-foreground/10 pt-5 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} {orgName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
