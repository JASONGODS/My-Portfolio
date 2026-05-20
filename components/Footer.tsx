"use client";

import styles from "./Footer.module.css";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left */}
          <div className={styles.left}>
            <h2 className={styles.logo}>
              Jason<span>.</span>
            </h2>

            <p className={styles.desc}>
              Passionate frontend developer focused on creating modern,
              responsive, and user-friendly digital experiences.
            </p>
          </div>

          {/* Center */}
          <div className={styles.center}>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.link}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className={styles.right}>
            <a href="#" className={styles.social}>
              GitHub
            </a>

            <a href="#" className={styles.social}>
              LinkedIn
            </a>

            <a href="#" className={styles.social}>
              Instagram
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 Jason Lim. Crafted with passion ✦
          </p>
        </div>
      </div>
    </footer>
  );
}