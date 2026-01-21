import type { Metadata } from "next";
import HeaderResolver from "@/themes/HeaderResolver";
import FooterResolver from "@/themes/FooterResolver";
import themeConfig from "@/config/theme.json";

type HeaderTheme = "modern" | "thinkai" | "default";
type FooterTheme = "modern" | "thinkai" | "default";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderResolver
        theme={themeConfig.header as HeaderTheme}
        orgName="AAPEdtech"
        logoUrl="/assets/aapathshala_logo.png"
      />

      <main>{children}</main>

      <FooterResolver
        theme={themeConfig.footer as FooterTheme}
        orgName="AAPEdtech"
        logoUrl="/assets/aapathshala_logo.png"
      />
    </>
  );
}
