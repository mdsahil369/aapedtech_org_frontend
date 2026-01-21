import { HEADER_THEME_REGISTRY } from "./registry";

interface HeaderResolverProps {
  theme: string; // JSON / DB / API friendly
  orgName?: string;
  logoUrl?: string;
}

export default function HeaderResolver({
  theme,
  orgName,
  logoUrl,
}: HeaderResolverProps) {
  const HeaderComponent =
    HEADER_THEME_REGISTRY[theme] ?? HEADER_THEME_REGISTRY.default;

  return <HeaderComponent orgName={orgName} logoUrl={logoUrl} />;
}
