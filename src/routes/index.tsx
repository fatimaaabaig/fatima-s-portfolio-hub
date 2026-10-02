import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
} from "lucide-react";

const portraitUrl = "/fatima-baig-portrait.png";

const skills = [
  "JavaScript",
  "Python",
  "C++",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Git",
  "Linux",
];

const projects = [
  {
    number: "01",
    title: "Flight Booking System",
    description:
      "A user-friendly web application that allows customers to search flights, book tickets, modify bookings, and cancel reservations easily.",
    type: "Software",
  },
  {
    number: "02",
    title: "Grocery Management System",
    description:
      "A system to manage inventory, sales tracking, and order processing for grocery stores.",
    type: "Software",
  },
  {
    number: "03",
    title: "Water Level Indicator",
    description: "A sensor-based device to monitor water levels and provide alerts.",
    type: "Hardware",
  },
  {
    number: "04",
    title: "Screen Distance Measurement",
    description:
      "A hybrid hardware-software project that measures distance between user and screen.",
    type: "Hybrid",
  },
  {
    number: "05",
    title: "Soil Moisture Detector",
    description: "A system to monitor soil moisture and improve irrigation efficiency.",
    type: "Hardware",
  },
  {
    number: "06",
    title: "Hybrid CPU Scheduling Simulator",
    description: "A simulation tool to visualize CPU scheduling algorithms.",
    type: "Ongoing · Hybrid",
  },
];

const education = [
  {
    date: "2028 (Expected)",
    qualification: "B.Tech in Computer Science Engineering",
    institution: "Vidyalankar Institute of Technology",
  },
  { date: "2024", qualification: "HSC", institution: "K.J. Somaiya College" },
  {
    date: "2022",
    qualification: "SSC",
    institution: "Al Barkat M.M.I. English School",
  },
];

const navItems = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fatima Baig — Software & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Fatima Baig, a Computer Science Engineering student and aspiring software and AI developer.",
      },
      { property: "og:title", content: "Fatima Baig — Software & AI Developer" },
      {
        property: "og:description",
        content:
          "Explore Fatima Baig's education, technical skills, software and hardware projects, and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <p className="section-index">{index}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Fatima Baig, back to top">
          FB<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-status">
          <span className="status-dot" aria-hidden="true" />
          Open to opportunities
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-kicker reveal">
          <span>Software engineering</span>
          <span>Portfolio · 2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="hero-intro">Hello, I’m</p>
            <h1 id="hero-title">
              Fatima
              <br />
              <em>Baig.</em>
            </h1>
            <p className="hero-summary">
              Computer Science Engineering student and aspiring software &amp; AI developer,
              building thoughtful solutions across code and hardware.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                Explore my work <ArrowDown aria-hidden="true" />
              </a>
              <a className="text-action" href="#resume">
                Resume <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="portrait-wrap reveal">
            <div className="portrait-number">01 / PROFILE</div>
            <img src={portraitUrl} alt="Fatima Baig" />
            <p>A curious builder at the intersection of software and hardware.</p>
          </div>
        </div>
        <p className="hero-footnote">Portfolio · 2026</p>
      </section>

      <section id="about" className="page-section about-section">
        <SectionHeading index="01" eyebrow="Profile" title="About me" />
        <div className="about-grid reveal">
          <p className="about-lead">
            I’m fascinated by the moment a complex problem becomes a clear, useful solution.
          </p>
          <div className="about-body">
            <p>
              I&apos;m an enthusiastic software engineer currently pursuing my B.Tech in
              Computer Science Engineering. I&apos;m fascinated by both software and hardware
              projects and love creating solutions that combine the two.
            </p>
            <p>
              Though I am at the start of my professional journey, I&apos;m eager to learn,
              collaborate, and grow by taking on challenging projects and contributing my best.
            </p>
            <div className="availability-note">
              <span className="status-dot" aria-hidden="true" />
              <p>
                <strong>Currently open to internships and opportunities.</strong>
                Ready to contribute, learn, and grow with a thoughtful team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="page-section">
        <SectionHeading index="02" eyebrow="Foundation" title="Education" />
        <div className="timeline reveal">
          {education.map((item) => (
            <article key={item.date + item.qualification} className="timeline-row">
              <p className="timeline-date">{item.date}</p>
              <h3>{item.qualification}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="page-section skills-section">
        <SectionHeading index="03" eyebrow="Toolkit" title="Skills & technologies" />
        <div className="skills-layout reveal">
          <p className="skills-copy">
            A growing technical toolkit grounded in programming fundamentals, web development,
            databases, and practical systems work.
          </p>
          <ul className="skills-list" aria-label="Technical skills">
            {skills.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects" className="page-section projects-section">
        <SectionHeading index="04" eyebrow="Selected work" title="Projects" />
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card reveal">
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="page-section">
        <SectionHeading index="05" eyebrow="Continued learning" title="Certifications" />
        <div className="placeholder-panel reveal">
          <div>
            <p className="eyebrow">Details to be added</p>
            <h3>Certification records</h3>
          </div>
          <p>
            Add verified certificate names, issuing organizations, dates, and credential links
            here when available.
          </p>
        </div>
      </section>

      <section id="resume" className="page-section resume-section">
        <div className="resume-inner reveal">
          <div>
            <p className="eyebrow">The full story</p>
            <h2>Resume</h2>
          </div>
          <p>
            A downloadable resume file has not been provided yet. Add the verified PDF to enable
            this download.
          </p>
          <span className="disabled-action" aria-disabled="true">
            <Download aria-hidden="true" /> PDF coming soon
          </span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-heading reveal">
          <p className="eyebrow">Have a project, internship, or idea?</p>
          <h2>
            Let’s build
            <br />
            <em>something useful.</em>
          </h2>
        </div>
        <div className="contact-links reveal">
          <a href="mailto:fatimashahidbaig781@gmail.com">
            <Mail aria-hidden="true" />
            <span>
              <small>Email</small>
              fatimashahidbaig781@gmail.com
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/fatima-s-baig-162110325"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin aria-hidden="true" />
            <span>
              <small>LinkedIn</small>
              Fatima Baig
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://github.com/fatimaaabaig" target="_blank" rel="noreferrer">
            <Github aria-hidden="true" />
            <span>
              <small>GitHub</small>
              fatimaaabaig
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <footer>
          <p>© 2026 Fatima Baig</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
