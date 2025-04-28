export interface Education {
  school: string;
  location: string;
  degree: string;
  period: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  description: string[];
  tools: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string[];
  tools: string[];
  year: string;
  image: string;
  github?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ExtraCurricular {
  organization: string;
  role: string;
  year: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
}