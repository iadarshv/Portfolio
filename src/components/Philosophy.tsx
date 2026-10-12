import React from 'react';
import { philosophies } from '../data/philosophy';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Engineering Philosophy</div>
          <h2 className="section-title">
            Good software is built in the details.
          </h2>
          <p className="section-description">
            Four guiding principles that shape my approach to building full-stack applications, designing databases, and writing maintainable code.
          </p>
        </div>

        {/* 4 Editorial Blocks Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
          {philosophies.map((item) => (
            <div
              key={item.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderTop: '2px solid var(--border-strong)',
                paddingTop: '1.5rem',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>
                {item.number} — {item.title.toUpperCase()}
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  lineHeight: 1.45,
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
              >
                “{item.quote}”
              </blockquote>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                {item.elaboration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
