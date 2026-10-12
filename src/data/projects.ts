export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  type: string;
  overview: string;
  problemDomain: string;
  technologies: string[];
  contributions: string[];
  keyChallenges: string[];
  featuresWorkedOn: string[];
  caseStudy: {
    productContext: string;
    domainDetails: string;
    myContributionsDetail: string[];
    techArchitecture: string[];
    engineeringConsiderations: string[];
    whatILearned: string[];
  };
  disclosure: string;
  visualType: 'hr-analytics' | 'api-hub' | 'workforce-ops';
}

export const projects: Project[] = [
  {
    id: "smartleader-platform",
    number: "01",
    title: "SmartLeader (SLD) Platform",
    shortTitle: "SmartLeader SLD",
    category: "Leadership Assessment · HR Analytics · Enterprise SaaS",
    type: "Enterprise Web Application",
    overview: "A multi-tenant leadership assessment platform designed to support 360-degree feedback, HR analytics, and automated reporting.",
    problemDomain: "Enterprise leadership development requires structured multi-rater evaluation frameworks (360-degree feedback) with strict tenant isolation, asynchronous aggregation of qualitative and quantitative ratings, and automated report generation without blocking active assessment sessions.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "AWS Lambda", "Amazon EventBridge"],
    contributions: [
      "Developed full-stack application features using React, Node.js, Express, and MySQL.",
      "Worked on features supporting leadership assessment workflows and rating submissions.",
      "Built asynchronous workflows using AWS Lambda and Amazon EventBridge for background aggregation.",
      "Contributed to frontend interactive experiences and robust backend API endpoints."
    ],
    keyChallenges: [
      "Decoupling intensive assessment scoring computations from active survey form submissions.",
      "Ensuring clean multi-tenant data boundaries across diverse organizational hierarchies.",
      "Maintaining state consistency across multi-step evaluation forms with dynamic question logic."
    ],
    featuresWorkedOn: [
      "360-degree feedback submission pipelines with real-time field validation.",
      "Event-driven background scoring triggers powered by Amazon EventBridge.",
      "Interactive assessment summary tables and score distribution visualizations in React.",
      "Relational schema indexing and query optimization for high-concurrency evaluation cycles."
    ],
    caseStudy: {
      productContext: "At Innoval Digital Solutions, SmartLeader (SLD) serves corporate clients running structured competency assessments across executive, managerial, and team cohorts.",
      domainDetails: "Leadership assessment systems require handling varying reviewer roles (self, peers, managers, direct reports), aggregated anonymity thresholds, and customized competency models without degrading survey response speeds.",
      myContributionsDetail: [
        "Implemented reusable React interface components for evaluation surveys, rating matrices, and aggregate score summaries.",
        "Created Express.js REST API routes handling assessment initialization, participant progress tracking, and batch submissions.",
        "Configured AWS Lambda functions triggered by Amazon EventBridge to process asynchronous feedback calculations and scoring rollups.",
        "Collaborated with backend peers on MySQL schema design, foreign key relationships, and query routines."
      ],
      techArchitecture: [
        "Frontend: Modular React single-page architecture with state-driven assessment steps.",
        "API Layer: Node.js & Express.js REST endpoints adhering to consistent JSON response contracts.",
        "Asynchronous Pipeline: AWS Lambda functions executed asynchronously via Amazon EventBridge events upon assessment completion.",
        "Database: MySQL relational storage structured with tenant isolation and normalized assessment models."
      ],
      engineeringConsiderations: [
        "Reliability: Background event triggers guarantee score aggregation completes even during peak employee appraisal windows.",
        "Security & Anonymity: API contracts ensure peer reviewer identities are decoupled from published score aggregates.",
        "Maintainability: Modular component design enables quick adaptation to varying enterprise competency scales."
      ],
      whatILearned: [
        "How event-driven serverless architectures (EventBridge + Lambda) prevent frontend latency spikes during compute-heavy scoring.",
        "Best practices for managing complex multi-step form state in React.",
        "The importance of thoughtful database normalization when modeling multi-tier enterprise feedback."
      ]
    },
    disclosure: "Professional enterprise project developed at Innoval Digital Solutions. Proprietary system; source code and internal client assessments are strictly confidential. Metrics and visuals presented are illustrative representations.",
    visualType: "hr-analytics"
  },
  {
    id: "api-hub-platform",
    number: "02",
    title: "API Hub Platform",
    shortTitle: "API Hub",
    category: "API Management · Serverless Backend · Enterprise Integrations",
    type: "Serverless Integration Platform",
    overview: "An enterprise API marketplace supporting multi-tenant API management, subscription billing, and third-party integrations.",
    problemDomain: "Enterprises distributing internal and external microservices require a unified gateway and catalog to govern API endpoints, track developer subscriptions, standardize response formats, and monitor traffic across distributed tenants.",
    technologies: ["React", "Node.js", "TypeScript", "AWS Lambda", "PostgreSQL", "REST APIs"],
    contributions: [
      "Developed serverless backend services using Node.js, TypeScript, AWS Lambda, and PostgreSQL.",
      "Integrated third-party APIs with resilient payload mapping.",
      "Implemented standardized API response handling and error contracts across microservices.",
      "Developed React dashboards for API browsing, key provisioning, and activity monitoring.",
      "Improved PostgreSQL query performance using database views and materialized views."
    ],
    keyChallenges: [
      "Enforcing uniform response envelopes and error structures across diverse external and internal service contracts.",
      "Handling analytical queries for API usage activity without imposing query overhead on transactional tables.",
      "Creating modular TypeScript serverless functions with rapid cold-start times."
    ],
    featuresWorkedOn: [
      "Interactive API catalog interface featuring endpoint filters, method tags, and parameter schemas.",
      "TypeScript AWS Lambda handlers for subscriber authentication and quota verification.",
      "Materialized view routines in PostgreSQL for consolidated API consumption analytics.",
      "Developer dashboard for inspecting request payloads, status codes, and mock responses."
    ],
    caseStudy: {
      productContext: "API Hub was engineered to serve as an enterprise-grade API marketplace and portal, simplifying how developer teams discover, subscribe to, and consume business services.",
      domainDetails: "The platform addresses multi-tenant isolation, subscription tier governance, rate limits, and integration with third-party service providers while presenting a unified developer experience.",
      myContributionsDetail: [
        "Authored strongly-typed TypeScript handlers on AWS Lambda powering catalog exploration and subscription lifecycle management.",
        "Established standardized API response wrapper utilities ensuring uniform error codes, timestamps, and request identifiers.",
        "Built responsive React dashboards displaying available endpoints, subscription statuses, and request metrics.",
        "Architected PostgreSQL views and refreshed materialized views to accelerate multi-tenant analytics queries."
      ],
      techArchitecture: [
        "Frontend: React single-page dashboard with interactive API documentation explorer.",
        "Serverless Core: Modular AWS Lambda functions written in TypeScript using decoupled event handlers.",
        "Data Layer: PostgreSQL database leveraging indexed foreign keys, views, and materialized views for usage rollups.",
        "Integration: External third-party gateway connectors with resilient error handling and response normalization."
      ],
      engineeringConsiderations: [
        "Consistency: Universal API response conventions cut client-side integration bugs dramatically.",
        "Performance: Materialized views allowed instant dashboard analytics rendering without locking operational tables.",
        "Type Safety: End-to-end TypeScript types minimized schema drift between serverless functions and database models."
      ],
      whatILearned: [
        "Architecting serverless Node.js and TypeScript microservices for scalable cloud deployment on AWS.",
        "Practical query tuning in PostgreSQL using database views to abstract complex JOIN structures.",
        "How standardized contract design reduces maintenance friction across growing full-stack engineering teams."
      ]
    },
    disclosure: "Professional enterprise project developed at Innoval Digital Solutions. Proprietary system; client endpoints, API credentials, and internal schemas are confidential. Visualizations feature illustrative sample data.",
    visualType: "api-hub"
  },
  {
    id: "welspun-project-hub",
    number: "03",
    title: "Welspun Project Hub",
    shortTitle: "Welspun Hub",
    category: "Workforce Management · Geofencing · Enterprise Operations",
    type: "Enterprise Operations Platform",
    overview: "An enterprise workforce management platform supporting attendance, GPS-based geofencing, and task management.",
    problemDomain: "Large-scale industrial and manufacturing operations require dependable attendance capture, location-verified check-ins within physical site boundaries, and operational continuity even in poor connectivity field environments.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "SSO", "Active Directory", "PM2"],
    contributions: [
      "Developed REST APIs using Node.js, Express.js, and MongoDB.",
      "Implemented SSO and JWT-based authentication mechanisms.",
      "Worked on Active Directory synchronization for enterprise staff directories.",
      "Built GPS geofencing functionality to validate field check-ins within authorized geographic boundaries.",
      "Implemented offline attendance synchronization for field staff experiencing intermittent connectivity.",
      "Developed automated Excel reporting routines for operational shift summaries.",
      "Improved background processing reliability using PM2 and scheduled cron jobs.",
      "Worked on MongoDB performance improvements through targeted indexing."
    ],
    keyChallenges: [
      "Handling offline-first attendance transactions and reconciling conflicts upon field device reconnection.",
      "Calculating coordinate distance math efficiently to validate attendance against perimeter polygons.",
      "Synchronizing enterprise Active Directory user directories reliably on scheduled cadences without system interruption."
    ],
    featuresWorkedOn: [
      "Haversine and polygonal geofence validation endpoints in Express.js.",
      "Offline sync queue processor with duplicate-entry prevention and timestamp verification.",
      "Scheduled PM2 workers generating formatted Excel attendance and shift reports.",
      "Enterprise authentication pipelines integrating Active Directory with signed JWT tokens."
    ],
    caseStudy: {
      productContext: "Developed for enterprise workforce operations, Welspun Project Hub manages daily employee attendance, location compliance, and shift tracking across manufacturing facilities.",
      domainDetails: "The operational challenge centered on verifying that personnel are physically present within assigned project zones, maintaining real-time task status, and generating executive reports automatically.",
      myContributionsDetail: [
        "Engineered RESTful endpoints in Express.js for shift registration, geofenced clock-ins, and task assignments.",
        "Integrated corporate Single Sign-On (SSO) and LDAP / Active Directory synchronization routines.",
        "Implemented offline attendance caching logic allowing field workers to log entries which sync when connection restores.",
        "Configured PM2 process managers to orchestrate scheduled jobs that generate and distribute formatted Excel operational summaries.",
        "Identified slow aggregation queries in MongoDB and applied compound indexes on employeeId and timestamp fields."
      ],
      techArchitecture: [
        "Backend: Node.js and Express.js REST application deployed with PM2 cluster management.",
        "Database: MongoDB document store with compound indexing for time-series attendance records.",
        "Security: JWT bearer token architecture integrated with corporate Active Directory protocols.",
        "Background Workers: Scheduled cron workers executing automated Excel report generation and sync sweeps."
      ],
      engineeringConsiderations: [
        "Fault Tolerance: Offline sync logic ensures zero lost clock-ins during plant cellular dead zones.",
        "Location Accuracy: Server-side geofence checks verify device GPS coordinates against site boundaries.",
        "Process Stability: PM2 process monitoring ensures automated reporting scripts recover gracefully from unexpected faults."
      ],
      whatILearned: [
        "Techniques for resolving synchronization conflicts when dealing with offline-first field data.",
        "Implementing enterprise identity federation with Active Directory and JWT token lifecycles.",
        "Optimizing MongoDB document aggregations and background job execution in high-reliability environments."
      ]
    },
    disclosure: "Professional enterprise project developed at Innoval Digital Solutions. Proprietary system; employee records, precise facility coordinates, and internal shift configurations are confidential. Data displayed is illustrative.",
    visualType: "workforce-ops"
  }
];
