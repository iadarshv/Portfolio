import React, { useEffect } from 'react';
import { profile } from '../data/profile';
import { X, Download, Printer, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(10, 11, 13, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Actions */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={18} style={{ color: 'var(--accent)' }} />
            <h2 id="resume-modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Curriculum Vitae · Adarsh V
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href="/Adarsh_V_Resume.pdf"
              download="Adarsh_V_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}
              title="Print Resume"
            >
              <Printer size={15} />
            </button>

            <button
              onClick={onClose}
              className="btn btn-ghost"
              style={{ padding: '0.45rem', border: '1px solid var(--border-subtle)' }}
              aria-label="Close resume viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--border-strong)', paddingBottom: '1.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {profile.name}
            </h1>
            <div style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
              {profile.title} · {profile.designation}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <span>📍 {profile.location}</span>
              <span>✉️ {profile.email}</span>
              <span>📞 {profile.phoneFormatted}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Full-stack software developer with over two years of professional software development experience enhancing existing codebases and building enterprise features across frontend and backend. At Innoval Digital Solutions, contributing to leadership assessments, API management, and workforce operations.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Professional Experience
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    Innoval Digital Solutions — Junior Software Engineer
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    June 2024 – Present | Thiruvananthapuram, India
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.75rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      SmartLeader (SLD) Platform (React, Node.js, Express, MySQL, AWS Lambda, EventBridge)
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      Developed full-stack application features for 360 assessment workflows and built asynchronous background scoring workflows using AWS Lambda and EventBridge.
                    </p>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      API Hub Platform (Node.js, TypeScript, AWS Lambda, PostgreSQL, React, REST APIs)
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      Developed serverless backend services, implemented standardized API response contracts, built React dashboards, and accelerated PostgreSQL query performance using views and materialized views.
                    </p>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      Welspun Project Hub (Node.js, Express, MongoDB, REST APIs, JWT, SSO, Active Directory, PM2)
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      Engineered REST APIs, SSO & Active Directory authentication, GPS geofencing perimeter checks, offline attendance sync, and automated scheduled Excel reporting with PM2.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', fontSize: '0.86rem' }}>
              <div><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3</div>
              <div><strong>Frontend:</strong> React.js, Redux, Tailwind CSS, Material UI</div>
              <div><strong>Backend:</strong> Node.js, Express.js, REST APIs</div>
              <div><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, DynamoDB, Redis</div>
              <div><strong>Cloud & DevOps:</strong> AWS Lambda, Amazon S3, EventBridge, Docker, Git</div>
              <div><strong>Architecture:</strong> Microservices, Multi-tenant, Serverless</div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="resume-edu-grid">
            <div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Education
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Master of Computer Applications (MCA)</div>
                  <div style={{ color: 'var(--text-secondary)' }}>Manipal Academy of Higher Education (Oct 2025 – Present)</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Bachelor of Science in Chemistry</div>
                  <div style={{ color: 'var(--text-secondary)' }}>SN College Chempazhanthy, University of Kerala (2017 – 2020)</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Certifications
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <div>• The Complete 2023 Web Development Bootcamp (Udemy)</div>
                <div>• Certified Specialist in Full Stack Development MERN (ICT Academy)</div>
                <div>• Software, Programming and Databases (Coursera)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.75rem',
            backgroundColor: 'var(--bg-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            PDF verified at /Adarsh_V_Resume.pdf
          </span>
          <a
            href="/Adarsh_V_Resume.pdf"
            download="Adarsh_V_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem' }}
          >
            <Download size={14} />
            <span>Download Official Resume</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .resume-edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
