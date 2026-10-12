import React from 'react';
import { Layers, Server, Cpu, Cloud, Database, KeyRound, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Enterprise Application Development",
      description: "Contributing to multi-tenant software platforms handling workforce operations and leadership feedback cycles.",
      icon: Layers
    },
    {
      title: "Frontend & Backend Engineering",
      description: "Bridging responsive React interfaces with performant Node.js and Express service layers.",
      icon: Server
    },
    {
      title: "API Integration & Service Development",
      description: "Standardizing REST endpoint contracts, external gateway connectors, and consistent response formats.",
      icon: Cpu
    },
    {
      title: "Serverless Application Workflows",
      description: "Building event-driven AWS Lambda functions and EventBridge schedules to decouple heavy background computations.",
      icon: Cloud
    },
    {
      title: "Database Design & Query Optimization",
      description: "Working across MySQL, PostgreSQL views/materialized views, and indexed MongoDB document collections.",
      icon: Database
    },
    {
      title: "Authentication & Enterprise Integrations",
      description: "Implementing JSON Web Tokens, corporate Single Sign-On (SSO), and Active Directory user synchronization.",
      icon: KeyRound
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Professional Overview</div>
          <h2 className="section-title">
            Engineering products from interface to infrastructure.
          </h2>
          <p className="section-description" style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.75 }}>
            I'm a full-stack software developer with over two years of professional experience enhancing existing codebases and building application features across the frontend and backend. At Innoval Digital Solutions, I work on enterprise platforms involving leadership assessments, API management, and workforce operations.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            My work includes developing React interfaces, building Node.js and Express services, integrating third-party APIs, working with relational and NoSQL databases, and implementing serverless workflows on AWS.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            I enjoy understanding how systems fit together, writing maintainable code, solving practical engineering problems, and continuously improving my skills.
          </p>
        </div>

        {/* Professional Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-classic"
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--accent-muted)',
                      border: '1px solid var(--accent-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} style={{ color: 'var(--success)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Verified Production Focus
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
