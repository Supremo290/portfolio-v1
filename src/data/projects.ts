import type { Project } from "../types";
import heroImage from "../assets/hero.png";

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description:
      "A full-stack web application with authentication, dashboards, and real-time data.",
    image: heroImage,
    tech: ["React", "TypeScript", "Node.js", "Tailwind"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "project-two",
    title: "Project Two",
    description:
      "An e-commerce storefront with cart management and a custom checkout flow.",
    image: heroImage,
    tech: ["React", "Redux", "Stripe"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "project-three",
    title: "Project Three",
    description:
      "A developer productivity tool with animated dashboards and API integrations.",
    image: heroImage,
    tech: ["React", "Framer Motion", "REST API"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
];
