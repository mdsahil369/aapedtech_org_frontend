import React from "react";

/* ---------------- Header ---------------- */
import ModernHeader from "./modern/Header";
import ThinkaiHeader from "./thinkai/Header";
import DefaultHeader from "./default/Header";

/* ---------------- Footer ---------------- */
import ModernFooter from "./modern/Footer";
import ThinkaiFooter from "./thinkai/Footer";
import DefaultFooter from "./default/Footer";

export const HEADER_THEME_REGISTRY: Record<
  string,
  React.ComponentType<any>
> = {
  modern: ModernHeader,
  thinkai: ThinkaiHeader,
  default: DefaultHeader,
};

export const FOOTER_THEME_REGISTRY: Record<
  string,
  React.ComponentType<any>
> = {
  modern: ModernFooter,
  thinkai: ThinkaiFooter,
  default: DefaultFooter,
};
