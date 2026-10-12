import React, { useEffect } from 'react';
import type { Project } from '../data/projects';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SmartLeaderVisual, ApiHubVisual, WelspunVisual } from './ProjectIllustrations';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
      case 'hr-analytics':
        return <SmartLeaderVisual />;
      case 'api-hub':
        return <ApiHubVisual />;
      case 'workforce-ops':
        return <WelspunVisual />;
      default:
        return null;
    }
  };

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
      aria-labelledby="modal-case-study-title"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
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
        {/* Sticky Header Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.08em' }}>
              PROJECT {project.number} · CASE STUDY DEEP DIVE
            </div>
            <h2
              id="modal-case-study-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '0.2rem',
              }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="btn btn-ghost"
            style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}
            aria-label="Close case study modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Top overview & illustrative interactive visual */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="case-study-top-grid">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                {project.category}
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {project.overview}
              </p>

              {/* Technologies */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag active">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enterprise Disclosure Callout */}
              <div
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  gap: '0.75rem',
                }}
              >
                <ShieldCheck size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  <strong>Proprietary Enterprise Notice:</strong> {project.disclosure}
                </p>
              </div>
            </div>

            {/* Visual Box */}
            <div>
              {renderVisual()}
            </div>
          </div>

          {/* Section: Problem Domain & Product Context */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Product Context & Problem Domain
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              {project.caseStudy.productContext}
            </p>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {project.problemDomain}
            </p>
          </div>

          {/* Section: My Engineering Contributions */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              My Specific Engineering Contributions
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {project.caseStudy.myContributionsDetail.map((contrib, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Architecture & Technical Stack */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              System Architecture & Implementation
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {project.caseStudy.techArchitecture.map((arch, idx) => {
                const [layer, ...rest] = arch.split(': ');
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1rem',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.35rem' }}>
                      {layer}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {rest.join(': ')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Key Engineering Considerations & Challenges */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Engineering Considerations & Challenges Handled
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {project.caseStudy.engineeringConsiderations.map((consideration, idx) => {
                const [label, ...desc] = consideration.split(': ');
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.9rem 1.15rem',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {label}:
                    </span>{' '}
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {desc.join(': ')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: What I Learned */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Key Technical Takeaways
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.caseStudy.whatILearned.map((learned, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.6rem',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem' }}>0{idx + 1}.</span>
                  <span>{learned}</span>
                </div>
              ))}
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
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Enterprise Case Study · Adarsh V
          </div>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.55rem 1.25rem' }}>
            Close Case Study
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 840px) {
          .case-study-top-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </div>
  );
};
