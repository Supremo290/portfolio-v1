import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";
import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
];
