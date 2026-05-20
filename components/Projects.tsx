"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Car Wash System",
    category: "Fullstack",
    desc: "A full-featured online car wash with laravel and react-js.",
    tags: ["React.js", "Laravel", "MySQL", "Tailwind"],
    color: "#63b3ed",
    icon: "🚗",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Student Aspiration",
    category: "Fullstack",
    desc: "A full-featured for student aspiration in their school with laravel and tailwindcss.",
    tags: ["Laravel", "Tailwindcss", "MySQL", "Blade"],
    color: "#4fd1c5",
    icon: "🤓",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "My Portfolio",
    category: "Frontend",
    desc: "Jason Portfolio.",
    tags: ["Next.js", "Typescript", "React.js"],
    color: "#f6ad55",
    icon: "📚",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

type Filter = "All" | "Frontend" | "Fullstack" | "API Integration";
const filters: Filter[] = ["All", "Frontend", "Fullstack", "API Integration"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label reveal opacity-0">Portfolio</p>
          <h2 className="section-title reveal opacity-0">Projects I&apos;ve Built</h2>
          <div className="section-divider reveal opacity-0" />
          <p className={`${styles.subtitle} reveal opacity-0`}>
            A selection of projects from my studies and personal explorations.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`${styles.filters} reveal opacity-0`}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.featured : ""}`}
              style={{ animationDelay: `${i * 0.08}s`, "--card-accent": project.color } as React.CSSProperties}
            >
              {project.featured && (
                <span className={styles.featuredBadge}>Featured</span>
              )}
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}>
                  {project.icon}
                </div>
                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener" className={styles.iconBtn} title="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener" className={styles.iconBtn} title="Live Demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>

              <span className={styles.category} style={{ color: project.color }}>
                {project.category}
              </span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>

              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`${styles.githubCta} reveal opacity-0`}>
          <p>Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}