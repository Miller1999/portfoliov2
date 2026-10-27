export interface EducationItem {
  title: string;
  date: string;
  institution: string;
  detail?: string;
  accent: "cyan" | "emerald" | "purple";
  description?: string;
}

export const education: EducationItem[] = [
  {
    title: "Electronic Engineering",
    date: "2019 — 2027",
    institution: "Universidad Nacional de Colombia",
    detail: "Emphasis in Robotics and Mechatronics",
    accent: "cyan",
    description:
      "Analytical and in-depth training based on complex problem-solving, automation, hardware design, and computer science fundamentals.",
  },
  {
    title: "Full Stack & Front-End Specializations",
    date: "2022 — 2023",
    institution: "Online Learning Platforms",
    detail: "Platzi & Alura Latam",
    accent: "emerald",
    description:
      "Professional-level learning paths focused on modern web development ecosystems, JavaScript-based software architecture (Next.js, React, Node.js), and DevOps workflows (Docker).",
  },
  {
    title: "Professional English Proficiency (C1)",
    date: "Certified",
    institution: "Centro Colombo Americano Bogotá",
    detail: "Advanced Proficiency",
    accent: "purple",
  },
];

export const certCategories = [
  {
    label: "Backend & Logic",
    accent: "text-cyan-400",
    tech: "Python, Go, C# & Architecture",
    detail:
      "Advanced handling of data structures, object-oriented logic, and efficient algorithms.",
  },
  {
    label: "Frontend Systems",
    accent: "text-emerald-400",
    tech: "React, Next.js, Relay & UI",
    detail:
      "Building interactive interfaces, server-side rendering, and optimal data consumption.",
  },
  {
    label: "Data & Storage",
    accent: "text-purple-400",
    tech: "SQL, MySQL & GraphQL",
    detail:
      "Relational database design, optimization of complex queries, and data modeling.",
  },
  {
    label: "AI & Hardware",
    accent: "text-neutral-400",
    tech: "AI Models, IoT & Robotics",
    detail:
      "Automation of clinical information capture and intelligent workflows applied to business.",
  },
] as const;

export const featuredCourses = [
  "Python: Comprehensions & Errors",
  "Practical SQL & MySQL Course",
  "Algorithms & Data Structures",
  "Asynchronous Programming with JS",
  "Advanced Git & GitHub",
  "React.js & Professional State Management",
  "Software Architecture Design",
  "Database Optimization Strategies",
  "Practical Introduction to AI Models",
  "Unity 2D/3D Engine Core",
];

export const accentText = {
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
} as const;
