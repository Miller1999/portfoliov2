export interface ProjectCard {
  title: string;
  tag: string;
  tagAccent: "cyan" | "purple";
  description: string;
  stack: string[];
  href: string;
  transitionName: string;
  span: string;
  featured?: boolean;
  category?:
    | "AI/ML"
    | "Mobile"
    | "Full Stack"
    | "Tools"
    | "Backend"
    | "Data Engineering";
  repoUrl?: string;
  demoUrl?: string;
  year?: string;
}

export const projectCards: ProjectCard[] = [
  {
    title: "Edge AI Tutor Sandbox",
    tag: "RAG Architecture",
    tagAccent: "cyan",
    description:
      "100% offline AI tutoring platform with isolated Docker evaluation, RAG over Python documentation, and Socratic feedback with guardrails to avoid revealing solutions.",
    stack: ["FastAPI", "Ollama", "ChromaDB", "Docker", "SQLite"],
    href: "/proyectos/edge-ai-tutor",
    transitionName: "card-project-edge",
    span: "md:col-span-2 lg:col-span-2",
    featured: true,
    category: "AI/ML",
    year: "2026",
    repoUrl: "https://github.com/Miller1999/Offline-AI-Tutoring-Engine",
  },
  {
    title: "Appointment Management API",
    tag: "Full Stack",
    tagAccent: "purple",
    description:
      "Appointment scheduling and management system with an enterprise backend in ASP.NET Core 8, a React + TypeScript SPA frontend, dual validation, and native pagination with PostgreSQL/EF Core.",
    stack: ["ASP.NET Core", "React", "TypeScript", "PostgreSQL", "EF Core"],
    href: "/proyectos/appointment-api",
    transitionName: "card-project-appointment",
    span: "md:col-span-1 lg:col-span-2",
    featured: true,
    category: "Full Stack",
    year: "2024",
    repoUrl: "https://github.com/Miller1999/Bookly",
  },
  {
    title: "Crevia",
    tag: "Mobile App",
    tagAccent: "cyan",
    description:
      "Cross-platform mobile app with a local-first approach for client management and tracking. End-to-end typed architecture with SQLite + Drizzle, biometric security, encrypted storage, and native UI with Expo Router.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Zod",
    ],
    href: "/proyectos/crevia",
    transitionName: "card-project-crevia",
    span: "md:col-span-1 lg:col-span-1",
    featured: true,
    category: "Mobile",
    year: "2026",
  },
  {
    title: "Gymia App",
    tag: "Fitness Tech",
    tagAccent: "purple",
    description:
      "Mobile workout app with AI-assisted routine generation, real-time session tracking, a local exercise bank, a substitute system, and a hybrid client-server architecture with typed global state.",
    stack: [
      "React Native",
      "Expo",
      "Express",
      "TypeScript",
      "Drizzle ORM",
      "Zustand",
      "Zod",
    ],
    href: "/proyectos/gymia-app",
    transitionName: "card-project-gymia",
    span: "md:col-span-1 lg:col-span-2",
    featured: false,
    category: "Mobile",
    year: "2026",
  },
  {
    title: "Job Search Engine",
    tag: "Data Pipeline",
    tagAccent: "cyan",
    description:
      "Local-first job search pipeline: multi-board scraping with JobSpy, fit evaluation using a local LLM (Ollama), automated generation of tailored CVs and cover letters, PDF conversion, and full application tracking without paid APIs.",
    stack: [
      "Python",
      "uv",
      "Ollama",
      "JobSpy",
      "SQLite",
      "Pandas",
      "WeasyPrint",
    ],
    href: "/proyectos/job-search",
    transitionName: "card-project-jobsearch",
    span: "md:col-span-1 lg:col-span-1",
    featured: false,
    category: "Data Engineering",
    year: "2026",
    repoUrl: "https://github.com/Miller1999/job-search",
  },
  {
    title: "Price Scraper Web App",
    tag: "Web Scraping",
    tagAccent: "purple",
    description:
      "Streamlit web app for price scraping across multiple online stores (Amazon, Mercado Libre Colombia, Falabella). Dynamic JSON configuration, CSV/Excel export, robust logging, and a modular structure for easily adding new stores.",
    stack: ["Python", "Streamlit", "BeautifulSoup", "Pandas", "OpenPyXL"],
    href: "/proyectos/price-scraper",
    transitionName: "card-project-pricescraper",
    span: "md:col-span-1 lg:col-span-1",
    featured: false,
    category: "Data Engineering",
    year: "2025",
    repoUrl: "https://github.com/Miller1999/price-scraper",
  },
];

export const badgeAccent = {
  cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  purple: "text-purple-400 border-purple-500/20 bg-purple-500/5",
} as const;
