import React from 'react';
import { certifications } from '../data/certifications';
import { Award, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <div className="section-eyebrow">Professional Credentials</div>
          <h2 className="section-title">
            Certifications.
          </h2>
          <p className="section-description">
            Recognized industry credentials in full-stack engineering, MERN architecture, and software design principles.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card-classic"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--accent-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                    }}
                  >
                    <Award size={18} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {cert.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.35,
                  }}
                >
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.85rem' }}>
                  {cert.issuer}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {cert.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Credential Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
