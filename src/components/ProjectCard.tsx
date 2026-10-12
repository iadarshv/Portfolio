import type { Project } from '../data/projects';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SmartLeaderVisual, ApiHubVisual, WelspunVisual } from './ProjectIllustrations';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
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
    <article
      className="card-classic"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        alignItems: 'center',
        position: 'relative',
        transition: 'border-color var(--transition-normal), box-shadow var(--transition-normal)',
      }}
    >
      {/* Left Column: Project Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em' }}>
            PROJECT {project.number} · {project.type.toUpperCase()}
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-card)',
              padding: '0.2rem 0.55rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <ShieldCheck size={12} style={{ color: 'var(--accent)' }} />
            Enterprise System
          </span>
        </div>

        {/* Project Title */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '0.4rem',
            }}
          >
            {project.title}
          </h3>
          <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
            {project.category}
          </div>
        </div>

        {/* Concise Overview */}
        <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {project.overview}
        </p>

        {/* Highlighted Contributions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {project.contributions.slice(0, 3).map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ paddingTop: '0.5rem' }}>
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              padding: '0.7rem 1.25rem',
            }}
            aria-label={`View full case study for ${project.title}`}
          >
            <span>View Case Study</span>
            <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} />
          </button>
        </div>
      </div>

      {/* Right Column: Original Illustrative Visual Preview */}
      <div>
        {renderVisual()}
        <div
          style={{
            marginTop: '0.75rem',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}
        >
          Proprietary enterprise system · Illustrative preview
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .project-card-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </article>
  );
};
