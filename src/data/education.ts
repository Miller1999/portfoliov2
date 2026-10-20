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
    title: "Ingeniería Electrónica",
    date: "2019 — 2027",
    institution: "Universidad Nacional de Colombia",
    detail: "Énfasis en Robótica y Mecatrónica",
    accent: "cyan",
    description:
      "Formación analítica y profunda basada en la resolución de problemas complejos, automatización, diseño de hardware y fundamentos de ciencias de la computación.",
  },
  {
    title: "Especializaciones Full Stack & Front End",
    date: "2022 — 2023",
    institution: "Plataformas Tecnológicas",
    detail: "Platzi & Alura Latam",
    accent: "emerald",
    description:
      "Rutas formativas de nivel profesional enfocadas en ecosistemas modernos de desarrollo web, arquitectura de software basada en JavaScript (Next.js, React, Node.js) y flujos DevOps (Docker).",
  },
  {
    title: "Aptitud Profesional de Inglés (C1)",
    date: "Certificado",
    institution: "Centro Colombo Americano Bogotá",
    detail: "Dominio Avanzado",
    accent: "purple",
  },
];

export const certCategories = [
  {
    label: "Backend & Logic",
    accent: "text-cyan-400",
    tech: "Python, Go, C# y Arquitectura",
    detail:
      "Manejo avanzado de estructuras de datos, lógica orientada a objetos y algoritmos eficientes.",
  },
  {
    label: "Frontend Systems",
    accent: "text-emerald-400",
    tech: "React, Next.js, Relay & UI",
    detail:
      "Construcción de interfaces interactivas, renderizado del lado del servidor y consumo óptimo de datos.",
  },
  {
    label: "Data & Storage",
    accent: "text-purple-400",
    tech: "SQL, MySQL & GraphQL",
    detail:
      "Diseño de bases de datos relacionales, optimización de queries complejas y modelado de datos.",
  },
  {
    label: "AI & Hardware",
    accent: "text-neutral-400",
    tech: "Modelos de IA, IoT y Robótica",
    detail:
      "Automatización de captura de información clínica y flujos inteligentes aplicados al negocio.",
  },
] as const;

export const featuredCourses = [
  "Python: Comprehensions & Errores",
  "Curso Práctico de SQL y MySQL",
  "Algoritmia y Estructuras de Datos",
  "Programación Asíncrona con JS",
  "Git y GitHub Avanzado",
  "React.js & Manejo de Estado Profesional",
  "Diseño de Arquitectura de Software",
  "Estrategias de Optimización en Bases de Datos",
  "Introducción Práctica a Modelos de IA",
  "Unity 2D/3D Engine Core",
];

export const accentText = {
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
} as const;
