export interface Language {
  name: string;
  level: string;
  accent?: boolean;
}

export interface Profile {
  name: string;
  tagline: string;
  role: string;
  company: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cvPath: string;
  techStack: string[];
  languages: Language[];
}

export const profile: Profile = {
  name: "Miller Arias",
  tagline:
    "Electronic Engineer & Full Stack Developer specialized in modern applications with React, GraphQL, and Go.",
  role: "Full Stack Developer",
  company: "Devup Consulting SAS",
  location: "Bogotá, Colombia",
  availability: "Available",
  email: "millerjavierarias@gmail.com",
  phone: "573138220202",
  github: "https://github.com/Miller1999",
  linkedin:
    "https://www.linkedin.com/in/miller-javier-arias-quintero/?locale=en-US",
  cvPath: "/CV_Miller_Arias.pdf",
  techStack: ["Go (Golang)", "TypeScript", "React.js", "GraphQL"],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1", accent: true },
    { name: "Deutsch", level: "A2" },
  ],
};
