export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  featured?: boolean;
  overview: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  outcomes: string[];
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface FooterLink {
  label: string;
  path?: string;
  href?: string;
}

export interface FooterData {
  heading: { headingP1: string; headingP2: string };
  subHeading: string;
  sections: {
    quick: { heading: string; links: FooterLink[] };
    services: { heading: string; links: FooterLink[] };
    getInTouch: { heading: string; links: FooterLink[] };
  };
  disclaimer: string;
  social: Array<{ label: string; url: string }>;
}

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
