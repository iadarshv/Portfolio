export interface ProfileData {
  name: string;
  wordmark: string;
  title: string;
  designation: string;
  employer: string;
  period: string;
  experienceYears: string;
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  resumeUrl: string;
  status: {
    label: string;
    detail: string;
    isAvailable: boolean;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  eyebrow: string;
  mainHeadline: string;
  heroParagraph: string;
  metaTags: string[];
}

export const profile: ProfileData = {
  name: "Adarsh V",
  wordmark: "ADARSH V",
  title: "Full Stack Software Engineer",
  designation: "Junior Software Engineer",
  employer: "Innoval Digital Solutions",
  period: "June 2024 – Present",
  experienceYears: "2+ Years Experience",
  location: "Thiruvananthapuram, Kerala, India",
  email: "iadarshvijayan@gmail.com",
  phone: "+91 91888 93666",
  phoneFormatted: "+91 91888 93666",
  resumeUrl: "/Adarsh_V_Resume.pdf",
  status: {
    label: "Innoval Digital Solutions",
    detail: "Full-Stack Engineer · Open to engineering conversations",
    isAvailable: true
  },
  social: {
    // Left undefined to truthfully hide until valid profile URLs are provided by user
    github: undefined,
    linkedin: undefined,
    twitter: undefined
  },
  eyebrow: "FULL STACK SOFTWARE ENGINEER · INDIA",
  mainHeadline: "Building thoughtful digital products and the systems behind them.",
  heroParagraph: "I'm Adarsh, a full-stack developer at Innoval Digital Solutions. I build and enhance enterprise applications across frontend experiences, backend services, REST APIs, serverless infrastructure, and data-driven platforms.",
  metaTags: [
    "2+ YEARS EXPERIENCE",
    "REACT · NODE.JS · AWS",
    "THIRUVANANTHAPURAM, INDIA"
  ]
};
