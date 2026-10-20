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
    role: "Desarrollador Full Stack",
    company: "Devup Consulting SAS",
    period: "Feb 2026 — Actualidad",
    sector: "Plataforma Open Source de Telecomunicaciones",
    accent: "cyan",
    summary:
      "Desarrollo de funcionalidades clave en la plataforma open source orientada a la gestión de redes de telecomunicaciones, abarcando desde la capa de datos hasta la interfaz de usuario.",
    achievements: [
      "Implementación de interfaces frontend modernas y responsivas con <strong>React.js, Relay y Material UI</strong>.",
      "Arquitectura y desarrollo backend optimizado utilizando <strong>Go (Golang) y GraphQL</strong>.",
      "Implementación avanzada de funcionalidades multi-tenant controladas dinámicamente mediante <strong>feature flags</strong> por tenant.",
      "Corrección y optimización de filtros en el backend junto a consultas GraphQL de alta eficiencia.",
      "Soporte global mediante el despliegue e implementación de internacionalización (<strong>i18n</strong>).",
      "Refactoring continuo de componentes críticos para mejorar la mantenibilidad y consistencia general del código.",
      "Trabajo en equipo bajo metodología ágil utilizando <strong>Git, GitHub y Jira</strong>.",
    ],
    stack: ["Go", "GraphQL", "React.js", "Relay", "Git"],
  },
  {
    role: "Desarrollador Full Stack",
    company: "CIMA Ocupacional",
    period: "Nov 2025 — Dic 2025",
    sector: "Sector Salud Digital",
    accent: "purple",
    summary:
      "Desarrollo de soluciones de software aplicadas a la salud digital, integrando inteligencia artificial para automatizar la captura de datos médicos.",
    achievements: [
      "Desarrollo completo de módulos web orientados al control de historial clínico y registro de antecedentes médicos.",
      "Diseño y despliegue de modelos y flujos de <strong>Inteligencia Artificial</strong> especializados en el análisis de información clínica.",
      "Diseño de la lógica de negocio para los procesos de registro, consulta y validación estricta de datos médicos.",
      "Integración de extremo a extremo (Full Stack) priorizando la usabilidad en entornos de baja infraestructura tecnológica.",
      "Participación en el diseño de arquitectura Full Stack para mejorar la escalabilidad y mantenibilidad.",
    ],
    stack: ["Inteligencia Artificial", "Python", "Architecture"],
  },
  {
    role: "Instructor de Programación",
    company: "Algorithmics",
    period: "Mar 2025 - Abr 2026",
    sector: "Educación Tecnológica",
    accent: "emerald",
    summary:
      "Mentoría técnica y formación de estudiantes en fundamentos de ingeniería de software, lógica de programación avanzada y desarrollo interactivo.",
    achievements: [
      "Enseñanza práctica de lógica estructurada y lenguajes backend utilizando <strong>Python y C#</strong>.",
      "Diseño de cursos de desarrollo de videojuegos con el motor profesional <strong>Unity</strong>.",
      "Mentoría a estudiantes en el desarrollo de sus proyectos interactivos finales.",
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
