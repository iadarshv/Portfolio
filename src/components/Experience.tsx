import React, { useState } from 'react';
import { experiences } from '../data/experience';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<number>(0);

  const exp = experiences[0];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Career Timeline</div>
          <h2 className="section-title">
            Where I've been building.
          </h2>
          <p className="section-description">
            Professional engineering tenure at Innoval Digital Solutions, contributing across enterprise platforms, serverless AWS architectures, and multi-tenant systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          className="card-classic"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            position: 'relative',
          }}
        >
          {/* Header of Experience */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--success)',
                    backgroundColor: 'var(--success-subtle)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-pill)',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
                  Current Employment
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {exp.role}
                </h3>
                <div style={{ fontSize: '1.15rem', color: 'var(--accent)', fontWeight: 500 }}>
                  {exp.company}
                </div>
              </div>

              {/* Metadata Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={15} style={{ color: 'var(--accent)' }} />
                  <span>{exp.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  <MapPin size={15} style={{ color: 'var(--accent)' }} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '0.5rem' }}>
              {exp.summary}
            </p>
          </div>

          {/* Project Area Tabs */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Enterprise Project Areas
              </div>
            </div>

            {/* Tab Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '1.75rem',
              }}
              role="tablist"
              aria-label="Experience project areas"
            >
              {exp.projectHighlights.map((proj, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={activeProjectTab === idx}
                  onClick={() => setActiveProjectTab(idx)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: activeProjectTab === idx ? 'var(--accent-muted)' : 'var(--bg-card)',
                    color: activeProjectTab === idx ? 'var(--accent)' : 'var(--text-secondary)',
                    border: `1px solid ${activeProjectTab === idx ? 'var(--accent)' : 'var(--border-subtle)'}`,
                    fontWeight: 500,
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {proj.projectName}
                </button>
              ))}
            </div>

            {/* Active Project Highlight Card */}
            {exp.projectHighlights[activeProjectTab] && (
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {exp.projectHighlights[activeProjectTab].projectName}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.projectHighlights[activeProjectTab].technologies.map((t, tidx) => (
                      <span key={tidx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {exp.projectHighlights[activeProjectTab].responsibilities.map((resp, ridx) => (
                    <div
                      key={ridx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
