export interface Experience {
  role: string;
  company: string;
  period: string;
  sector: string;
  accent: "cyan" | "purple" | "emerald";
  summary: string;
  achievements: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Devup Consulting SAS",
    period: "Feb 2026 — Present",
    sector: "Open Source Telecommunications Platform",
    accent: "cyan",
    summary:
      "Development of key features on an open-source platform focused on telecommunications network management, covering everything from the data layer to the user interface.",
    achievements: [
      "Implementation of modern, responsive frontend interfaces with <strong>React.js, Relay, and Material UI</strong>.",
      "Architecture and development of an optimized backend using <strong>Go (Golang) and GraphQL</strong>.",
      "Advanced implementation of multi-tenant features controlled dynamically through <strong>feature flags</strong> per tenant.",
      "Fixing and optimization of backend filters alongside high-efficiency GraphQL queries.",
      "Global support through the deployment and implementation of internationalization (<strong>i18n</strong>).",
      "Continuous refactoring of critical components to improve maintainability and overall code consistency.",
      "Teamwork under agile methodology using <strong>Git, GitHub, and Jira</strong>.",
    ],
    stack: ["Go", "GraphQL", "React.js", "Relay", "Git"],
  },
  {
    role: "Full Stack Developer",
    company: "CIMA Ocupacional",
    period: "Nov 2025 — Dec 2025",
    sector: "Digital Health Sector",
    accent: "purple",
    summary:
      "Development of software solutions applied to digital health, integrating artificial intelligence to automate the capture of medical data.",
    achievements: [
      "Complete development of web modules focused on clinical history control and medical background registration.",
      "Design and deployment of <strong>Artificial Intelligence</strong> models and workflows specialized in clinical information analysis.",
      "Design of business logic for registration, query, and strict validation of medical data.",
      "End-to-end (Full Stack) integration prioritizing usability in low-tech-infrastructure environments.",
      "Participation in Full Stack architecture design to improve scalability and maintainability.",
    ],
    stack: ["Artificial Intelligence", "Python", "Architecture"],
  },
  {
    role: "Programming Instructor",
    company: "Algorithmics",
    period: "Mar 2025 - Apr 2026",
    sector: "EdTech",
    accent: "emerald",
    summary:
      "Technical mentoring and student training in software engineering fundamentals, advanced programming logic, and interactive development.",
    achievements: [
      "Hands-on teaching of structured logic and backend languages using <strong>Python and C#</strong>.",
      "Design of game development courses using the professional <strong>Unity</strong> engine.",
      "Mentoring students in the development of their final interactive projects.",
    ],
    stack: ["Python", "C#", "Unity"],
  },
];

export const accentClasses = {
  cyan: {
    company: "text-cyan-400",
    bullet: "text-cyan-500",
  },
  purple: {
    company: "text-purple-400",
    bullet: "text-purple-500",
  },
  emerald: {
    company: "text-emerald-400",
    bullet: "text-emerald-500",
  },
} as const;
