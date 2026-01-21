"use client";

import { FOOTER_THEME_REGISTRY } from "./registry";

type FooterTheme = "modern" | "thinkai" | "default";

interface FooterResolverProps {
  theme: FooterTheme;
  orgName?: string;
  logoUrl?: string;
}

export default function FooterResolver({
  theme,
  orgName,
  logoUrl,
}: FooterResolverProps) {
  const FooterComponent =
    FOOTER_THEME_REGISTRY[theme] ?? FOOTER_THEME_REGISTRY.default;

  return <FooterComponent orgName={orgName} logoUrl={logoUrl} />;
}
