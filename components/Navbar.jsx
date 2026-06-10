"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BrandMark from "./BrandMark";
import LocaleSwitcher from "./LocaleSwitcher";

const links = [
  { key: "societa", href: "/#societa" },
  { key: "fondi", href: "/#fondi" },
  { key: "team", href: "/#team" },
  { key: "portfolio", href: "/portfolio" },
  { key: "esg", href: "/#esg" },
  { key: "news", href: "/#news" },
  { key: "contatti", href: "/#contatti", cta: true },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: close on Escape, and close if the viewport grows
  // back to desktop (so it never gets stuck open behind the desktop nav).
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header id="hdr" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <Link
            href="/"
            className="brand"
            aria-label={t("brandHome")}
            onClick={close}
          >
            <BrandMark />
          </Link>

          <nav className="navlinks" aria-label={t("ariaMain")}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={link.cta ? "nav-cta" : undefined}
              >
                {t(link.key)}
              </Link>
            ))}
            <LocaleSwitcher />
          </nav>

          <button
            type="button"
            className={`burger ${open ? "x" : ""}`}
            aria-label={open ? t("menuClose") : t("menuOpen")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Rendered OUTSIDE <header> on purpose: the header's backdrop-filter (when
          scrolled) establishes a containing block for position:fixed descendants,
          which would clip a panel nested inside it to the header's height. */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu-backdrop" onClick={close} />
        <nav className="mobile-menu-panel" aria-label={t("ariaMenu")}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.cta ? "nav-cta" : undefined}
              onClick={close}
            >
              {t(link.key)}
            </Link>
          ))}
          <LocaleSwitcher />
        </nav>
      </div>
    </>
  );
}
