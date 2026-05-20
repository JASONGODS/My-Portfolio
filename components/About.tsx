"use client";
import { useEffect, useRef } from "react";
import styles from "./About.module.css";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "3+", label: "Technologies" },
  { value: "2024", label: "Graduate Year" },
  { value: "∞", label: "Willingness to Learn" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
              el.classList.add("animate-fade-up");
              el.classList.remove("opacity-0");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: text */}
          <div className={styles.left}>
            <p className="section-label reveal opacity-0">About Me</p>
            <h2 className="section-title reveal opacity-0">
              Who I Am &<br />What I Do
            </h2>
            <div className="section-divider reveal opacity-0" />

            <p className={`${styles.body} reveal opacity-0`}>
              I&apos;m a passionate fresh graduate with a strong foundation in
              web development technologies. My journey into tech started with
              curiosity and has grown into a genuine passion for building
              digital experiences that are both beautiful and functional.
            </p>
            <p className={`${styles.body} reveal opacity-0`}>
              I enjoy turning complex problems into simple, elegant solutions.
              When I&apos;m not coding, you&apos;ll find me exploring the
              latest in tech, contributing to open-source projects, or
              designing UI concepts.
            </p>

            {/* Info grid */}
            <div className={`${styles.infoGrid} reveal opacity-0`}>
              {[
                { label: "Name", value: "Jason Lim" },
                { label: "Location", value: "Indonesia" },
                { label: "Education", value: "Computer Science" },
                { label: "Status", value: "Open to Work ✦" },
              ].map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className={`btn-primary reveal opacity-0`} style={{ marginTop: "0.5rem" }}>
              Let&apos;s Connect
            </a>
          </div>

          {/* Right: stats + visual */}
          <div className={styles.right}>
            <div className={`${styles.statsCard} reveal opacity-0`}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={`${styles.codeBlock} reveal opacity-0`}>
              <div className={styles.codeHeader}>
                <span className={styles.dot1} /><span className={styles.dot2} /><span className={styles.dot3} />
                <span className={styles.fileName}>about.ts</span>
              </div>
              <pre className={styles.code}>{`const developer = {
  name: "Jason Lim",
  role: "Fresh Graduate",
  education: {
    degree: "Computer Science",
    year: 2024,
  },
  skills: ["React", "Next.js",
           "TypeScript", "Git"],
  goal: "Build amazing things",
  coffee: true, // always ☕
};`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}