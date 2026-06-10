import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers. `usePathname` here returns the path WITHOUT
// the locale prefix, and `Link` with a `locale` prop re-prefixes it — which is
// exactly what the language switcher needs to swap locales in place.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
