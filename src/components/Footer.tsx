import React from 'react';
import { profile } from '../data/profile';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      }}
      role="contentinfo"
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
              {profile.name}
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {profile.title} · {profile.employer}
            </div>
          </div>

          {/* Contact & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
              }}
            >
              <Mail size={14} style={{ color: 'var(--accent)' }} />
              <span>{profile.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{
                padding: '0.5rem 0.85rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
              }}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            © {currentYear} {profile.name}. All rights reserved.
          </div>
          <div>
            Designed with care. Built with code.
          </div>
        </div>
      </div>
    </footer>
  );
};
