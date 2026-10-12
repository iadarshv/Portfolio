import React from 'react';
import { educations } from '../data/education';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">
            Education.
          </h2>
          <p className="section-description">
            Academic foundation combining advanced computer applications with analytical scientific training.
          </p>
        </div>

        {/* Education Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {educations.map((item, idx) => (
            <div
              key={idx}
              className="card-classic"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--accent-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: item.status === 'Currently Pursuing' ? 'var(--success)' : 'var(--text-muted)',
                    backgroundColor: item.status === 'Currently Pursuing' ? 'var(--success-subtle)' : 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {item.status}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                  }}
                >
                  {item.degree}
                </h3>
                <div style={{ fontSize: '0.98rem', color: 'var(--accent)', fontWeight: 500 }}>
                  {item.institution}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={14} style={{ color: 'var(--accent)' }} />
                  <span>{item.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  <MapPin size={14} style={{ color: 'var(--accent)' }} />
                  <span>{item.location}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
