"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const ROLES = [
  "Fresh Graduate",
  "Frontend Developer",
  "React Enthusiast",
  "UI Builder",
  "Problem Solver",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70
        );
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          40
        );
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, roleIdx]);

  return (
    <section className={styles.hero} id="home">
      {/* Animated grid */}
      <div className={styles.grid} aria-hidden />

      {/* Floating orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      <div className="container">
        <div className={styles.content}>
          {/* Status badge */}
          <div className={`${styles.badge} opacity-0 animate-fade-up delay-1`}>
            <span className={styles.dot} />
            Available for opportunities
          </div>

          {/* Greeting */}
          <p className={`${styles.greeting} opacity-0 animate-fade-up delay-2`}>
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1 className={`${styles.name} opacity-0 animate-fade-up delay-3`}>
            Jason Lim
          </h1>

          {/* Typewriter */}
          <div className={`${styles.roleWrapper} opacity-0 animate-fade-up delay-4`}>
            <span className={styles.rolePrefix}>I&apos;m a </span>
            <span className={styles.role}>
              {displayed}
              <span className={styles.cursor} />
            </span>
          </div>

          {/* Description */}
          <p className={`${styles.desc} opacity-0 animate-fade-up delay-5`}>
            Passionate about building beautiful, functional web experiences.
            Currently seeking opportunities to grow and contribute to meaningful
            projects while applying my skills in modern web technologies.
          </p>

          {/* CTA */}
          <div className={`${styles.ctas} opacity-0 animate-fade-up delay-6`}>
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              View Projects
            </a>
            <a href="/cv.pdf" target="_blank" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className={`${styles.socials} opacity-0 animate-fade-up delay-7`}>
            <a href="https://github.com/JASONGODS" target="_blank" rel="noopener" className={styles.socialLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:your@email.com" className={styles.socialLink} aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        {/* Profile visual */}
        <div className={`${styles.visual} opacity-0 animate-fade-in delay-4`}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              <span className={styles.avatarInitials}>JS</span>
            </div>
            <div className={styles.ring1} />
            <div className={styles.ring2} />
          </div>
          {/* Floating skill chips */}
          <div className={`${styles.chip} ${styles.chip1}`}>React.js</div>
          <div className={`${styles.chip} ${styles.chip2}`}>Next.js</div>
          <div className={`${styles.chip} ${styles.chip3}`}>TypeScript</div>
          <div className={`${styles.chip} ${styles.chip4}`}>Tailwind</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  );
}