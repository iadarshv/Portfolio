export interface ProjectRoleHighlight {
  projectName: string;
  technologies: string[];
  responsibilities: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  projectHighlights: ProjectRoleHighlight[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Innoval Digital Solutions",
    role: "Junior Software Engineer",
    location: "Thiruvananthapuram, Kerala, India",
    period: "June 2024 – Present",
    summary: "Contributing to enterprise software products across leadership assessments, API management, and workforce operations, working on frontend features, backend services, integrations, databases, and serverless workflows.",
    projectHighlights: [
      {
        projectName: "SmartLeader (SLD)",
        technologies: ["React", "Node.js", "Express.js", "MySQL", "AWS Lambda", "Amazon EventBridge"],
        responsibilities: [
          "Developed end-to-end full-stack features for corporate leadership assessment cycles.",
          "Implemented multi-step survey submission forms and evaluation review matrices in React.",
          "Built asynchronous event pipelines with AWS Lambda and Amazon EventBridge to calculate scoring aggregates without blocking web clients.",
          "Optimized relational MySQL queries and schema relationships for multi-tenant assessment runs."
        ]
      },
      {
        projectName: "API Hub",
        technologies: ["Node.js", "TypeScript", "AWS Lambda", "PostgreSQL", "React", "REST APIs"],
        responsibilities: [
          "Authored type-safe serverless backend microservices using TypeScript and AWS Lambda.",
          "Integrated third-party APIs and established standardized JSON response wrappers and error codes across services.",
          "Developed React administrative dashboards for monitoring API catalog items, quotas, and invocation logs.",
          "Accelerated reporting query speeds in PostgreSQL using database views and materialized views."
        ]
      },
      {
        projectName: "Welspun Project Hub",
        technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "SSO", "Active Directory", "PM2"],
        responsibilities: [
          "Engineered robust RESTful backend APIs for workforce operations, attendance, and task assignments.",
          "Implemented secure authentication integrating corporate Single Sign-On (SSO), Active Directory sync, and JSON Web Tokens.",
          "Built GPS geofencing perimeter checks and resilient offline attendance caching logic for field teams.",
          "Automated daily Excel shift reporting through scheduled background cron workers orchestrated via PM2.",
          "Streamlined MongoDB document lookups with compound indexes across high-traffic attendance collections."
        ]
      }
    ]
  }
];
