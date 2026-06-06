"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const links = [
  { label: "Società", href: "#societa" },
  { label: "Mercato", href: "#mercato" },
  { label: "Fondi", href: "#fondi" },
  { label: "ESG", href: "#esg" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="hdr" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="Origine SGR — home">
          <BrandMark />
          <span className="wm">
            Origine<span className="sgr">SGR</span>
          </span>
        </a>

        <nav className={`navlinks ${open ? "open" : ""}`} id="menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Contatti
          </a>
        </nav>

        <button
          className={`burger ${open ? "x" : ""}`}
          id="burger"
          aria-label="Apri il menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
