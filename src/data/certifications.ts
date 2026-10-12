export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "udemy-bootcamp",
    title: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy, Inc.",
    category: "Full Stack Development",
    description: "Comprehensive practical coursework covering modern web development, frontend frameworks, Node.js, Express, databases, REST APIs, and deployment pipelines."
  },
  {
    id: "ict-mern",
    title: "Certified Specialist in Full Stack Development (MERN)",
    issuer: "ICT Academy of Kerala",
    category: "Specialized Certification",
    description: "Industry-aligned intensive specialization program focusing on MongoDB, Express.js, React.js, and Node.js enterprise architectural patterns and real-world project delivery."
  },
  {
    id: "coursera-databases",
    title: "Software, Programming and Databases",
    issuer: "Coursera",
    category: "Computer Science & Data",
    description: "Foundational engineering program addressing software design patterns, structured programming paradigms, relational database querying, and schema normalization."
  }
];
