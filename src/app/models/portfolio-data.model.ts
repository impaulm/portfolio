export interface SocialLink {
  socialName: string;
  url: string;
}

export interface HeaderData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  profilePicture: string;
  socialLinks: SocialLink[];
}

export interface AboutMeData {
  title: string;
  description: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  companyLogo: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

export interface Education {
  school: string;
  schoolLogo: string;
  startYear: number;
  endYear: number | null;
  degree: string;
}

export interface SkillsData {
  technicalSkills: string[];
  softwareSkills: string[];
}

export interface Language {
  name: string;
  level: string;
  flag: string;
}

export interface Work {
  name: string;
  image: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
}

export interface PortfolioData {
  header: HeaderData;
  aboutMe: AboutMeData;
  experiences: Experience[];
  educations: Education[];
  skills: SkillsData;
  languages: Language[];
  works: Work[];
}