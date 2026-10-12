export interface SkillItem {
  name: string;
  context: string;
  isCore?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages used for day-to-day full-stack application development and systems logic.",
    skills: [
      { name: "JavaScript", context: "Primary language across Node.js backend services and React frontend applications.", isCore: true },
      { name: "TypeScript", context: "Applied for type-safe serverless AWS Lambda functions and maintainable client interfaces.", isCore: true },
      { name: "HTML5", context: "Semantic document structures, accessibility markup, and responsive layouts." },
      { name: "CSS3", context: "Modern layouts (Grid, Flexbox), custom design systems, animations, and responsive styling." }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Engineering",
    description: "User-facing web development focusing on component reusability, state predictability, and clean interaction.",
    skills: [
      { name: "React.js", context: "Building modular enterprise single-page applications, multi-step assessment forms, and analytics dashboards.", isCore: true },
      { name: "Redux", context: "Global state management for complex application flows and predictable state transitions." },
      { name: "Tailwind CSS", context: "Rapid utility-first styling and customized token design systems." },
      { name: "Material UI", context: "Enterprise dashboard components, tabular data presentations, and design system integration." }
    ]
  },
  {
    id: "backend",
    name: "Backend Engineering",
    description: "Server-side services, API contract design, authentication protocols, and background job processing.",
    skills: [
      { name: "Node.js", context: "Event-driven runtime powering backend microservices, asynchronous workers, and serverless handlers.", isCore: true },
      { name: "Express.js", context: "Building scalable RESTful web services, routing, custom middleware, and authentication pipelines.", isCore: true },
      { name: "REST API Development", context: "Designing consistent endpoint contracts, status handling, request validation, and payload standardization.", isCore: true }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational, document, and cache storage solutions applied for enterprise transactional and analytical workloads.",
    skills: [
      { name: "MySQL", context: "Relational schema design, normalization, foreign-key relationships, and indexing for assessment platforms.", isCore: true },
      { name: "PostgreSQL", context: "Relational queries, database views, and materialized views for high-performance API consumption rollups.", isCore: true },
      { name: "MongoDB", context: "Document data modeling, compound indexing, and aggregation pipelines for time-series attendance records.", isCore: true },
      { name: "DynamoDB", context: "Key-value and document storage in serverless AWS environments." },
      { name: "Redis", context: "In-memory caching and session state management." }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Serverless compute, object storage, containerization, and developer tooling for production environments.",
    skills: [
      { name: "AWS Lambda", context: "Event-driven serverless computing for asynchronous task processing and lightweight APIs.", isCore: true },
      { name: "Amazon S3", context: "Static asset distribution, report file storage, and automated backups." },
      { name: "Amazon EventBridge", context: "Event bus routing for asynchronous multi-service feedback pipelines." },
      { name: "Docker", context: "Containerized development environments and service reproducibility." },
      { name: "Git", context: "Version control, branching strategies, code reviews, and collaborative workflows.", isCore: true },
      { name: "CI/CD", context: "Automated test runs, build pipelines, and production release workflows." }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Systems",
    description: "Architectural patterns guiding how enterprise applications remain maintainable, secure, and resilient.",
    skills: [
      { name: "Microservices", context: "Decoupled domain boundaries communicating via structured REST endpoints." },
      { name: "Multi-tenant Applications", context: "Isolating customer organizations at the database schema and application layer." },
      { name: "Serverless Applications", context: "Stateless compute patterns that scale on demand with minimal operational overhead." },
      { name: "API Integrations", context: "Third-party gateway connectors, response wrappers, and resilient retry routines." }
    ]
  }
];
