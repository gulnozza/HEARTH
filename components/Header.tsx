"use client";

import { useState } from "react";
import { Brand } from "./Brand";

const links = [
  ["Home", "#home"],
  ["Map", "#map"],
  ["Community", "#community"],
  ["Chatbot", "#chatbot"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Primary navigation">
      <Brand />
      <div className={`navlinks ${open ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
    </nav>
  );
}
