export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  problem: string;
  process: string;
  wireframes: string[];
  results: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
