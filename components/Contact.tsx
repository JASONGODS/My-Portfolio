"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send — replace with real email service (e.g. Resend, EmailJS)
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactLinks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      ),
      label: "GitHub",
      value: "github.com/JASONGODS",
      href: "https://github.com/JASONGODS",
      color: "#e8edf5",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/JasonGods",
      href: "https://www.linkedin.com/in/jason-gods-500745389/",
      color: "#63b3ed",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      ),
      label: "Email",
      value: "gtgusion@gmail.com",
      href: "mailto:gtgusion@gmail.com",
      color: "#4fd1c5",
    },
  ];

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label reveal opacity-0">Get In Touch</p>
          <h2 className="section-title reveal opacity-0">Let&apos;s Work Together</h2>
          <div className="section-divider reveal opacity-0" />
          <p className={`${styles.subtitle} reveal opacity-0`}>
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: contact info */}
          <div className={styles.left}>
            <div className={`${styles.infoCards} reveal opacity-0`}>
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon} style={{ color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className={styles.contactLabel}>{c.label}</p>
                    <p className={styles.contactValue}>{c.value}</p>
                  </div>
                  <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              ))}
            </div>

            <div className={`${styles.availBox} reveal opacity-0`}>
              <div className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>Currently Available</p>
                <p className={styles.availSub}>Open to full-time, internship, or freelance roles</p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <form className={`${styles.form} reveal opacity-0`} onSubmit={handleSubmit}>
            {sent && (
              <div className={styles.successBanner}>
                ✅ Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Hi! I'd like to discuss..."
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}