export interface ProjectCard {
  title: string;
  tag: string;
  tagAccent: "cyan" | "purple";
  description: string;
  stack: string[];
  href: string;
  transitionName: string;
  span: string;
}

export const projectCards: ProjectCard[] = [
  {
    title: "Edge AI Tutor Sandbox",
    tag: "RAG Architecture",
    tagAccent: "cyan",
    description:
      "Arquitectura híbrida de IA generativa local y RAG para evaluación automatizada.",
    stack: ["FastAPI", "Ollama"],
    href: "/proyectos/edge-ai-tutor",
    transitionName: "card-project-edge",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Appointment Management API",
    tag: "Full Stack",
    tagAccent: "purple",
    description:
      "Sistema robusto de gestión de citas médicas con arquitectura desacoplada.",
    stack: ["ASP.NET Core", "React"],
    href: "/proyectos/appointment-api",
    transitionName: "card-project-appointment",
    span: "md:col-span-1 lg:col-span-2",
  },
];

export const badgeAccent = {
  cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  purple: "text-purple-400 border-purple-500/20 bg-purple-500/5",
} as const;
