import React, { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { X, Download, FileText, ExternalLink, RefreshCw } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'embed' | 'text'>('embed');

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
        padding: '1rem',
        backgroundColor: 'rgba(10, 11, 13, 0.88)',
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
          maxWidth: '960px',
          height: '92vh',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Actions */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={18} style={{ color: 'var(--accent)' }} />
            <div>
              <h2 id="resume-modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                Adarsh V — Resume
              </h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                Official PDF Document (400 KB)
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {/* View Mode Toggle */}
            <button
              onClick={() => setViewMode(viewMode === 'embed' ? 'text' : 'embed')}
              className="btn btn-ghost"
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', border: '1px solid var(--border-subtle)' }}
              title="Toggle between PDF document viewer and quick text summary"
            >
              <RefreshCw size={12} />
              <span>{viewMode === 'embed' ? 'Text Summary' : 'Original PDF'}</span>
            </button>

            {/* Open in New Tab */}
            <a
              href="/Adarsh_V_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}
              title="Open full PDF in a new browser tab"
            >
              <ExternalLink size={13} />
              <span>Open Tab</span>
            </a>

            {/* Download PDF button */}
            <a
              href="/Adarsh_V_Resume.pdf"
              download="Adarsh_V_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
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

        {/* Modal Body */}
        <div style={{ flex: 1, backgroundColor: '#1A1C20', overflow: 'hidden', position: 'relative' }}>
          {viewMode === 'embed' ? (
            <iframe
              src="/Adarsh_V_Resume.pdf#view=FitH"
              title="Adarsh V Resume"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#2A2C30',
              }}
            />
          ) : (
            <div style={{ height: '100%', overflowY: 'auto', padding: '2.5rem 2rem', backgroundColor: 'var(--bg-surface)' }}>
              {/* Formatted Text Version */}
              <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ borderBottom: '2px solid var(--border-strong)', paddingBottom: '1.25rem' }}>
                  <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {profile.name}
                  </h1>
                  <div style={{ fontSize: '1.05rem', color: 'var(--accent)', fontWeight: 500, margin: '0.25rem 0 0.5rem 0' }}>
                    {profile.title} · {profile.employer}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <span>📍 {profile.location}</span>
                    <span>✉️ {profile.email}</span>
                    <span>📞 {profile.phoneFormatted}</span>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Professional Summary
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {profile.heroParagraph}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Enterprise Experience — Innoval Digital Solutions
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    June 2024 – Present · Full-stack development across SmartLeader (SLD) 360 leadership assessments, API Hub serverless microservices & PostgreSQL views, and Welspun Project Hub geofencing & offline attendance pipelines.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Education
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div>• <strong>Master of Computer Applications (MCA)</strong> — Manipal Academy of Higher Education (Oct 2025 – Present)</div>
                    <div>• <strong>Bachelor of Science in Chemistry</strong> — SN College Chempazhanthy, University of Kerala (2017 – 2020)</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--bg-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Filename: Adarsh V.pdf · Verified & Ready
          </span>
          <a
            href="/Adarsh_V_Resume.pdf"
            download="Adarsh_V_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.78rem' }}
          >
            <Download size={13} />
            <span>Download Original File</span>
          </a>
        </div>
      </div>
    </div>
  );
};
