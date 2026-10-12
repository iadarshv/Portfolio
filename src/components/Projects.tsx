import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { ShieldCheck } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'Enterprise SaaS' },
    { id: 'serverless', label: 'Serverless & APIs' },
    { id: 'workforce', label: 'Workforce Operations' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'saas') return p.category.includes('SaaS') || p.category.includes('HR');
    if (selectedCategory === 'serverless') return p.technologies.includes('AWS Lambda') || p.technologies.includes('PostgreSQL');
    if (selectedCategory === 'workforce') return p.category.includes('Workforce') || p.technologies.includes('MongoDB');
    return true;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title">
            Enterprise platforms engineered for scale and reliability.
          </h2>
          <p className="section-description">
            A selection of production systems I have built and enhanced at Innoval Digital Solutions. Each case study details real full-stack architecture, asynchronous serverless pipelines, and database optimizations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '1rem',
          }}
          role="tablist"
          aria-label="Project category filters"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selectedCategory === tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: selectedCategory === tab.id ? 'var(--accent-muted)' : 'transparent',
                color: selectedCategory === tab.id ? 'var(--accent)' : 'var(--text-secondary)',
                border: `1px solid ${selectedCategory === tab.id ? 'var(--accent)' : 'transparent'}`,
                fontWeight: 500,
                transition: 'all var(--transition-fast)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)}
            />
          ))}
        </div>

        {/* Enterprise Context Footer Note */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.25rem 1.75rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <ShieldCheck size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <strong>Authenticity & Intellectual Property Note:</strong> The projects highlighted above represent real enterprise software systems developed at Innoval Digital Solutions. Because these applications are proprietary, live instances, client credentials, and company source codes are withheld. Visuals and schemas are illustrative representations created to communicate system design.
          </p>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
