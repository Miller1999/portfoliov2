# 👨‍💻 Miller Arias | Software Engineer Portfolio

Portafolio personal moderno, ultrarrápido y responsivo construido con **Astro** y **Tailwind CSS**, con una interfaz basada en el patrón de diseño **Bento Grid**.

![Astro](https://img.shields.io/badge/Astro-0C111A?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Producción:** https://miller-arias-dev.vercel.app/

## ✨ Características principales

- **Bento Grid UI:** arquitectura visual asimétrica que prioriza el escaneo rápido de la información.
- **Transiciones nativas:** `ClientRouter` (View Transitions API de Astro) con `transition:name` entre tarjetas y páginas, sin el peso de un framework de cliente.
- **Performance first:** cero JavaScript innecesario en el cliente; la interactividad mínima se resuelve con Vanilla JS inline.
- **Diseño oscuro minimalista:** paleta `neutral-950` con acentos `cyan-500`.
- **Responsive:** cuadrícula auto-adaptable de 1 a 4 columnas.
- **Assets self-hosted:** CV en PDF y favicons servidos localmente.

## 🛠️ Tech Stack

| Tecnología         | Rol en el proyecto                                   |
| :----------------- | :--------------------------------------------------- |
| **Astro 7**        | Framework principal, enrutamiento estático y layout. |
| **Tailwind CSS 4** | Sistema de utilidades (config CSS-first, `@theme`).  |
| **TypeScript**     | Tipado estricto (`astro/tsconfigs/strict`).          |
| **Vanilla JS**     | Interactividad ligera (copiar correo, acordeón).     |
| **Vercel**         | Hosting y despliegue continuo (CI/CD desde GitHub).  |

> **Nota:** Tailwind CSS 4 no usa `tailwind.config.cjs`; la configuración vive en `src/styles/global.css` mediante directivas `@theme`/`@layer`.

## 📂 Estructura del proyecto

```text
/
├── public/                      # Assets estáticos servidos en la raíz
│   ├── favicon.svg              # Monograma SVG
│   ├── favicon.ico
│   ├── og-image.png             # Imagen Open Graph 1200×630
│   ├── robots.txt               # Directivas de rastreo + sitemap
│   └── CV_Miller_Arias.pdf      # Currículum para descarga directa
├── src/
│   ├── components/
│   │   └── BentoCard.astro       # Tarjeta reutilizable (link o article)
│   ├── data/                     # Fuente única de verdad (tipada)
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── projects.ts
│   ├── layouts/
│   │   └── Layout.astro         # Layout único (head, ClientRouter, body)
│   ├── pages/                   # Enrutamiento basado en archivos
│   │   ├── index.astro          # Bento Grid principal
│   │   ├── educacion.astro      # Educación y certificaciones
│   │   ├── experiencia.astro    # Historial laboral
│   │   ├── experiencia/devup.astro
│   │   ├── contacto.astro
│   │   └── proyectos/           # Casos de estudio técnicos
│   └── styles/
│       └── global.css           # Tailwind + estilos base globales
├── .github/workflows/ci.yml     # CI: format, typecheck, build
├── astro.config.mjs             # Configuración del framework
├── vercel.json                  # Redirects y cabeceras del deploy
└── package.json
```

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Acción                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Instala las dependencias.                         |
| `npm run dev`          | Servidor de desarrollo en `localhost:4321`.       |
| `npm run build`        | Genera el sitio de producción en `./dist/`.       |
| `npm run preview`      | Previsualiza el build de producción.              |
| `npm run format`       | Formatea con Prettier (plugins Astro + Tailwind). |
| `npm run format:check` | Verifica el formato sin modificar archivos.       |
| `npm run typecheck`    | Ejecuta `astro check` (TypeScript estricto).      |

## ✅ Calidad y CI

El workflow de GitHub Actions (`.github/workflows/ci.yml`) valida en cada push/PR a `main`: formato (Prettier), tipos (`astro check`), auditoría de dependencias y build. Requiere Node ≥ 22.22.

## 🔍 SEO y seguridad

- **Metadatos por página:** `canonical`, `description` única, Open Graph y Twitter Card, generados desde `Layout.astro`.
- **Imagen social:** `public/og-image.png` (1200×630) como `og:image`.
- **Datos estructurados:** JSON-LD `Person` (schema.org) en todas las páginas.
- **Sitemap:** `@astrojs/sitemap` genera `sitemap-index.xml` en el build; `robots.txt` lo referencia.
- **Cabeceras (`vercel.json`):** CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` y cacheo de assets.

## ⚠️ Deuda técnica conocida

- **Sin vulnerabilidades conocidas:** `npm audit` reporta 0 vulnerabilidades. El CI falla ante cualquier advisory de severidad `high` o superior (`npm audit --audit-level=high`).
