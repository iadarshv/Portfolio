import React, { useState, useRef } from 'react';
import { profile } from '../data/profile';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [tooltip, setTooltip] = useState<{
    nodeId: string;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const nodes = [
    {
      id: 'ui',
      label: 'React Frontend',
      tech: 'React · TypeScript · CSS Grid',
      desc: 'Modular single-page dashboards, component hierarchies, accessible state machines',
      x: 100,
      y: 110,
      color: '#6685FF',
    },
    {
      id: 'api',
      label: 'Express & REST APIs',
      tech: 'Node.js · Express · JWT/SSO',
      desc: 'Standardized response contracts, rate limits, enterprise authentication pipelines',
      x: 320,
      y: 110,
      color: '#6685FF',
    },
    {
      id: 'serverless',
      label: 'AWS Serverless',
      tech: 'Lambda · EventBridge · S3',
      desc: 'Asynchronous event triggers, background score rollups, decoupled serverless compute',
      x: 320,
      y: 280,
      color: '#3DD68C',
    },
    {
      id: 'db',
      label: 'Data Architecture',
      tech: 'PostgreSQL · MySQL · MongoDB',
      desc: 'Relational views & materialized views, normalized feedback models, time-series indexing',
      x: 540,
      y: 110,
      color: '#A3A5AA',
    },
    {
      id: 'ops',
      label: 'Operations & Sync',
      tech: 'PM2 · Offline Sync · Geofence',
      desc: 'Resilient cron workers, field connectivity queues, polygon coordinate calculations',
      x: 540,
      y: 280,
      color: '#6685FF',
    }
  ];

  const activeNodeData = tooltip ? nodes.find((n) => n.id === tooltip.nodeId) : null;

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background architectural grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: 0.25,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 65% 65% at 50% 40%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 40%, #000 30%, transparent 100%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Hero Left Content */}
          <div style={{ maxWidth: '640px' }}>
            {/* Eyebrow */}
            <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>
              {profile.eyebrow}
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.65rem, 5.2vw, 4.25rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
              }}
            >
              {profile.mainHeadline}
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
              }}
            >
              {profile.heroParagraph}
            </p>

            {/* Metadata Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '2.5rem',
              }}
            >
              {profile.metaTags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 1.6rem' }}>
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </a>

              <button
                onClick={onOpenResume}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.4rem' }}
                aria-label="Download or inspect resume"
              >
                <FileText size={15} style={{ color: 'var(--accent)' }} />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginLeft: '0.5rem',
                  padding: '0.5rem',
                }}
              >
                <span>Let's talk</span>
                <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} />
              </a>
            </div>
          </div>

          {/* Hero Right Visual: Interactive Connected Systems Diagram */}
          <div
            ref={containerRef}
            className="card-classic hero-visual-card"
            style={{
              padding: '1.75rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Header of Visual */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' }} className="animate-pulse-subtle" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  FULL_STACK_SYSTEM_TOPOLOGY
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                LATENCY ~24ms · 99.98% OK
              </span>
            </div>

            {/* SVG Interactive Architecture Map */}
            <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
              <svg
                viewBox="0 0 640 370"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                aria-label="Interactive architecture diagram showing connected frontend, API, serverless, and database layers"
              >
                <defs>
                  {/* Subtle connection glow */}
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6685FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3DD68C" stopOpacity="0.8" />
                  </linearGradient>

                  <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#6685FF" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* Connection lines between systems */}
                {/* UI -> API */}
                <line x1="180" y1="130" x2="260" y2="130" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="220" cy="130" r="3" fill="#6685FF">
                  <animate attributeName="cx" values="180; 260" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* API -> DB */}
                <line x1="400" y1="130" x2="480" y2="130" stroke="var(--border-strong)" strokeWidth="2" />
                <circle cx="440" cy="130" r="3" fill="#3DD68C">
                  <animate attributeName="cx" values="400; 480" dur="2.4s" repeatCount="indefinite" />
                </circle>

                {/* API -> Serverless Lambda */}
                <path d="M 340 160 L 340 250" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="340" cy="205" r="3" fill="#6685FF">
                  <animate attributeName="cy" values="160; 250" dur="2.8s" repeatCount="indefinite" />
                </circle>

                {/* Serverless Lambda -> Ops / S3 */}
                <path d="M 400 300 L 480 300" stroke="var(--border-strong)" strokeWidth="2" />
                <circle cx="440" cy="300" r="3" fill="#3DD68C">
                  <animate attributeName="cx" values="400; 480" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* DB -> Ops */}
                <line x1="560" y1="160" x2="560" y2="250" stroke="var(--border-subtle)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* System Nodes */}
                {nodes.map((node) => {
                  const isHovered = tooltip?.nodeId === node.id;
                  return (
                    <g
                      key={node.id}
                      onMouseEnter={(e) => {
                        const containerRect = containerRef.current?.getBoundingClientRect();
                        if (containerRect) {
                          setTooltip({
                            nodeId: node.id,
                            x: e.clientX - containerRect.left,
                            y: e.clientY - containerRect.top,
                          });
                        }
                      }}
                      onMouseMove={(e) => {
                        const containerRect = containerRef.current?.getBoundingClientRect();
                        if (containerRect) {
                          setTooltip({
                            nodeId: node.id,
                            x: e.clientX - containerRect.left,
                            y: e.clientY - containerRect.top,
                          });
                        }
                      }}
                      onMouseLeave={() => setTooltip(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Node Box */}
                      <rect
                        x={node.x - 60}
                        y={node.y - 35}
                        width="140"
                        height="70"
                        rx="8"
                        fill={isHovered ? 'var(--bg-elevated)' : 'var(--bg-card)'}
                        stroke={isHovered ? 'var(--accent)' : 'var(--border-strong)'}
                        strokeWidth="1.5"
                        filter={isHovered ? 'url(#subtleGlow)' : undefined}
                        style={{ transition: 'fill 0.15s ease, stroke 0.15s ease' }}
                      />

                      {/* Header small tag */}
                      <text
                        x={node.x - 45}
                        y={node.y - 14}
                        fill="var(--text-muted)"
                        fontSize="9.5"
                        fontFamily="var(--font-mono)"
                        fontWeight="600"
                        letterSpacing="0.08em"
                        pointerEvents="none"
                      >
                        {node.id.toUpperCase()}
                      </text>

                      {/* Node Label */}
                      <text
                        x={node.x - 45}
                        y={node.y + 6}
                        fill="var(--text-primary)"
                        fontSize="12.5"
                        fontFamily="var(--font-display)"
                        fontWeight="700"
                        letterSpacing="-0.02em"
                        pointerEvents="none"
                      >
                        {node.label}
                      </text>

                      {/* Tech stack subtitle */}
                      <text
                        x={node.x - 45}
                        y={node.y + 22}
                        fill="var(--text-secondary)"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        letterSpacing="-0.01em"
                        pointerEvents="none"
                      >
                        {node.tech.split('·')[0]}
                      </text>

                      {/* Status indicator dot */}
                      <circle cx={node.x + 65} cy={node.y - 20} r="3" fill={node.color} pointerEvents="none" />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Floating Tooltip Popup below Cursor (Zero Flickering) */}
            {tooltip && activeNodeData && (
              <div
                style={{
                  position: 'absolute',
                  left: `${Math.min(Math.max(tooltip.x, 150), (containerRef.current?.offsetWidth || 500) - 150)}px`,
                  top: `${tooltip.y + 18}px`,
                  transform: 'translateX(-50%)',
                  pointerEvents: 'none', // Crucial: cursor never collides with tooltip, preventing flicker
                  zIndex: 40,
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.75rem 1rem',
                  width: '270px',
                  boxShadow: '0 8px 28px rgba(0, 0, 0, 0.55)',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 600 }}>
                    {activeNodeData.id.toUpperCase()} LAYER
                  </span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: activeNodeData.color }} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {activeNodeData.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.45rem' }}>
                  {activeNodeData.tech}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                  {activeNodeData.desc}
                </p>
              </div>
            )}

            {/* Rock-solid Stable Bottom Info Bar (Fixed height prevents any layout shift) */}
            <div
              style={{
                marginTop: '1.25rem',
                padding: '0 1rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600 }}>
                  SYSTEM EXPLORER
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  · Hover any node for architecture popup
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                REST · SQL · AWS
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
