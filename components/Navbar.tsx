"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>SHARON<span>.</span></a>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href={`mailto:${profile.email}`}>LET&apos;S CONNECT <ArrowUpRight size={14} /></a>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
