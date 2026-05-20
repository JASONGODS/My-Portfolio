"use client";
import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const categories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML & CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Laravel (PHP)", level: 70 },
      { name: "REST API", level: 72 },
      { name: "MySQL", level: 68 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Linux / Terminal", level: 60 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "JavaScript", "PHP",
  "Laravel", "MySQL", "Git", "Tailwind", "Node.js",
  "HTML5", "CSS3", "Figma", "REST API", "GitHub",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal cards
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
              el.classList.add("animate-fade-up");
              el.classList.remove("opacity-0");
            });
            // Animate progress bars
            entry.target.querySelectorAll<HTMLElement>("[data-width]").forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + "%";
              }, 300 + i * 60);
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
    <section id="skills" ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label reveal opacity-0">Tech Stack</p>
          <h2 className="section-title reveal opacity-0">Skills & Technologies</h2>
          <div className="section-divider reveal opacity-0" />
          <p className={`${styles.subtitle} reveal opacity-0`}>
            A collection of tools and technologies I&apos;ve worked with
            during my studies and personal projects.
          </p>
        </div>

        {/* Skill cards with progress bars */}
        <div className={styles.cardsGrid}>
          {categories.map((cat, ci) => (
            <div key={cat.title} className={`card reveal opacity-0`} style={{ animationDelay: `${ci * 0.15}s` }}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillRow}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        data-width={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling tech badge marquee */}
        <div className={`${styles.marqueeWrapper} reveal opacity-0`}>
          <p className={styles.marqueeLabel}>Technologies I use</p>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...techBadges, ...techBadges].map((t, i) => (
                <span key={i} className={styles.marqueeBadge}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}