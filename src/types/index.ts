import type { IconType } from "react-icons";

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  image: string;
  viewUrl: string;
  downloadUrl: string;
}
