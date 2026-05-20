"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoAngle}>&lt;</span>
          JS
          <span className={styles.logoAngle}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "0.55rem 1.2rem", fontSize: "0.82rem" }}>
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.drawerLink}
            style={{ animationDelay: `${i * 0.07}s` }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
          Hire Me
        </a>
      </div>
    </header>
  );
}