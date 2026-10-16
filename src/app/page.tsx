
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Menu,
  Monitor,
  X,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    category: "Frontend",
    number: "01",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    number: "02",
    items: ["Node.js", "REST APIs", "Authentication", "Server-side development"],
  },
  {
    category: "Database",
    number: "03",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Data modeling"],
  },
  {
    category: "Tools & Workflow",
    number: "04",
    items: ["Git", "GitHub", "Docker", "VS Code", "Vercel"],
  },
];

const projects = [
  {
    number: "01",
    title: "University Management System",
    category: "Full-Stack Application",
    description:
      "A modular university platform concept for managing students, academic programs, courses, administration, and campus operations.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    codeUrl: "https://https://github.com/gemedakefa6-rgb",
    demoUrl: "",
    featured: true,
  },
  {
    number: "02",
    title: "Developer Portfolio",
    category: "Frontend Development",
    description:
      "A responsive developer portfolio featuring a distinctive dark interface, project showcases, and direct contact links.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://https://github.com/gemedakefa6-rgb",
    demoUrl: "",
    featured: false,
  },
  {
    number: "03",
    title: "Business Dashboard",
    category: "Web Application",
    description:
      "A dashboard concept for presenting business information, organizing records, and making important data easier to understand.",
    stack: ["React", "TypeScript", "REST APIs"],
    codeUrl: "https://https://github.com/gemedakefa6-rgb",
    demoUrl: "",
    featured: false,
  },
];

function GithubIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.97 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.97.72.78 1.16 1.78 1.16 3 0 4.28-2.61 5.22-5.1 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.73H4.97V9.2h2.96v9.53ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.28 10.83h-2.96v-4.64c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.72H9.48V9.2h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.57 1.98 3.57 4.55v5.22Z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
  href="https://github.com/gemedakefa6-rgb"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub profile"
  title="Visit my GitHub profile"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-400 hover:text-blue-400"
>
  <GithubIcon />
</a>

      <a
        href="https://www.linkedin.com/in/gemeda-kefa-87942a423"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        title="Replace YOUR_USERNAME with your LinkedIn username"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-400 hover:text-blue-400"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
      <span>{number}</span>
      <span className="h-px w-9 bg-blue-400/60" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "gemedakefa6@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090f] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07090f]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
              <Code2 size={21} />
            </span>
            <span className="text-sm font-bold tracking-wide">
              DEV<span className="text-blue-400">.PORTFOLIO</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-blue-400/40 px-5 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-500/10 sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0b0e16] px-5 py-4 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/[0.06] py-4 text-sm text-gray-300 transition hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Contact me <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate flex min-h-[calc(100svh-76px)] items-center"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/[0.10] blur-[140px]" />
          <div className="absolute -left-64 bottom-0 h-[400px] w-[500px] rounded-full bg-indigo-600/[0.07] blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.2) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:gap-20 lg:px-12">
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              FULL-STACK DEVELOPER
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Building digital
              <br />
              products that
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                make a difference.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I&apos;m a full-stack developer with 4 years of development
              experience, focused on building modern web applications,
              reliable backend systems, and intuitive digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Explore my work
                <ArrowDownRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-gray-200 transition hover:border-blue-400/50 hover:text-blue-300"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <SocialLinks />
              <div className="h-8 w-px bg-white/10" />
              <p className="text-xs leading-5 text-gray-500">
                Open to opportunities
                <br />
                and meaningful projects
              </p>
            </div>
          </div>

          {/* Code-inspired visual */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e16]/95 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[11px] text-gray-500">
                  developer.tsx
                </span>
                <Code2 size={16} className="text-blue-400" />
              </div>

              <div className="overflow-x-auto p-5 font-mono text-[12px] leading-[2.2] sm:p-7 sm:text-[13px]">
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">1</span>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = {"{"}
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">2</span>
                  <span className="pl-5 text-gray-300">name:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;Gemeda Kefa&quot;
                  </span>
                  ,
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">3</span>
                  <span className="pl-5 text-gray-300">role:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  ,
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">4</span>
                  <span className="pl-5 text-gray-300">experience:</span>{" "}
                  <span className="text-orange-300">4</span>,
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">5</span>
                  <span className="pl-5 text-gray-300">passionate:</span>{" "}
                  <span className="text-orange-300">true</span>,
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">6</span>
                  <span className="pl-5 text-gray-300">stack:</span> [
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">7</span>
                  <span className="pl-10 text-emerald-300">
                    &quot;React&quot;
                  </span>
                  ,
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">8</span>
                  <span className="pl-10 text-emerald-300">
                    &quot;Next.js&quot;
                  </span>
                  ,
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">9</span>
                  <span className="pl-10 text-emerald-300">
                    &quot;TypeScript&quot;
                  </span>
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">10</span>
                  <span className="pl-5">],</span>
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">11</span>
                  <span className="pl-5 text-gray-300">mindset:</span>{" "}
                  <span className="text-emerald-300">
                    &quot;Always learning&quot;
                  </span>
                </div>
                <div className="text-gray-600">
                  <span className="mr-5 inline-block w-3 text-right">12</span>
                  {"}"};
                </div>
              </div>

              <div className="border-t border-white/[0.07] p-4 sm:p-5">
                <div className="flex items-center gap-3 rounded-xl border border-blue-400/15 bg-blue-400/[0.05] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                    <Braces size={21} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-200">
                      Turning ideas into code
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Design · Develop · Deliver
                    </p>
                  </div>
                  <span className="ml-auto text-blue-400">
                    <Check size={19} />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-16 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#101521] px-4 py-3 shadow-xl sm:flex lg:-right-8">
              <Monitor size={17} className="text-blue-400" />
              <span className="text-xs font-medium text-gray-300">
                Modern web apps
              </span>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#101521] px-4 py-3 shadow-xl sm:flex lg:-left-8">
              <Code2 size={17} className="text-sky-300" />
              <span className="text-xs font-medium text-gray-300">
                Clean, maintainable code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12">
          <div>
            <SectionLabel number="01" >About me</SectionLabel>
            <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Thoughtful code.
              <br />
              <span className="text-gray-500">Useful products.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300">
              I enjoy solving problems through software and building
              applications that are useful, accessible, and easy to maintain.
              My work spans frontend interfaces, backend services, and the
              systems that connect them.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My development approach combines careful problem-solving,
              continuous learning, and attention to the details that make
              software reliable. I value clear architecture, readable code,
              responsive design, and a smooth user experience.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <span className="text-3xl font-bold tracking-tight text-white">
                  4<span className="text-blue-400">+</span>
                </span>
                <p className="mt-2 text-sm text-gray-400">
                  Years of development experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <span className="text-3xl font-bold tracking-tight text-white">
                  Full<span className="text-blue-400">-stack</span>
                </span>
                <p className="mt-2 text-sm text-gray-400">
                  Frontend and backend development
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Let&apos;s work together <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/[0.06] bg-[#0a0d14] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="02">Technical skills</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tools of the trade<span className="text-blue-400">.</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-gray-400">
              Technologies and tools I use to build modern web applications
              and maintainable software systems.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <article
                key={skill.number}
                className="group rounded-2xl border border-white/[0.08] bg-[#0d111a] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07] text-blue-300">
                    {skill.number === "01" && <Monitor size={21} />}
                    {skill.number === "02" && <Braces size={21} />}
                    {skill.number === "03" && <Code2 size={21} />}
                    {skill.number === "04" && <Check size={21} />}
                  </span>
                  <span className="font-mono text-xs text-gray-600">
                    /{skill.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {skill.category}
                </h3>

                <ul className="mt-5 space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="03">Selected projects</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Ideas into reality<span className="text-blue-400">.</span>
              </h2>
            </div>
            <a
              href="https://https://github.com/gemedakefa6-rgb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-blue-400"
            >
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0e16] transition duration-300 hover:border-blue-400/30 ${
                  project.featured ? "lg:row-span-2" : ""
                }`}
              >
                <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#101a2d] via-[#0c1220] to-[#0b0e16] p-8 sm:min-h-[260px]">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(96,165,250,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.13) 1px, transparent 1px)",
                        backgroundSize: "35px 35px",
                      }}
                    />
                  </div>

                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

                  <div className="relative w-full max-w-sm rounded-xl border border-white/10 bg-[#080c14]/90 p-5 shadow-2xl transition duration-300 group-hover:-translate-y-1">
                    <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                        <span className="font-mono text-[10px] text-gray-400">
                          PROJECT_{project.number}
                        </span>
                      </div>
                      <Code2 size={15} className="text-blue-400" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-2 w-2/3 rounded-full bg-blue-400/40" />
                      <div className="h-2 w-full rounded-full bg-white/[0.08]" />
                      <div className="h-2 w-4/5 rounded-full bg-white/[0.08]" />
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-lg border border-white/[0.07] bg-white/[0.025]" />
                      <div className="h-12 rounded-lg border border-blue-400/15 bg-blue-400/[0.05]" />
                      <div className="h-12 rounded-lg border border-white/[0.07] bg-white/[0.025]" />
                    </div>
                  </div>

                  <span className="absolute right-5 top-5 font-mono text-xs text-gray-500">
                    {project.number} / 03
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-white/[0.07] pt-5">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-blue-400"
                    >
                      <GithubIcon size={16} /> Repository
                      <ArrowUpRight size={14} />
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-blue-400"
                      >
                        Live demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-gray-500">
            Portfolio note: these project descriptions are starter examples.
            Update them to accurately represent your real projects and
            link to their actual repositories before publishing.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/[0.06] bg-[#0a0d14] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/15 bg-[#0d1320] px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/[0.12] blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-indigo-500/[0.08] blur-[100px]" />

            <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <SectionLabel number="04">Get in touch</SectionLabel>
                <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Have a project
                  <br />
                  in mind?
                  <span className="text-blue-400"> Let&apos;s build it.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-gray-400">
                  Whether you have an idea to explore, a product to develop,
                  or an opportunity to discuss, I&apos;d be happy to hear from
                  you.
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Send me an email <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#080c14]/60 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Contact details
                </p>

                <div className="mt-5 border-b border-white/[0.08] pb-5">
                  <p className="text-xs text-gray-500">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-2 block break-all text-base font-medium text-gray-200 transition hover:text-blue-400"
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-3 inline-flex items-center gap-2 text-xs text-blue-400 transition hover:text-blue-300"
                  >
                    {emailCopied ? (
                      <>
                        <Check size={14} /> Copied
                      </>
                    ) : (
                      <>Copy email address <ArrowRight size={13} /></>
                    )}
                  </button>
                </div>

                <div className="pt-5">
                  <p className="mb-4 text-xs text-gray-500">
                    Find me online
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#home" className="flex items-center gap-2 text-sm font-bold">
            <Code2 size={18} className="text-blue-400" />
            DEV<span className="text-blue-400">.PORTFOLIO</span>
          </a>

          <p className="text-xs text-gray-500">
            © 2026 Gemeda Kefa. Built with care.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-gray-400 transition hover:text-blue-400"
          >
            Back to top <ArrowDown size={14} className="rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
