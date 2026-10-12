import React, { useState } from 'react';
import { profile } from '../data/profile';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

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
                fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
              }}
            >
              {profile.mainHeadline}
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
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
                  const isHovered = activeNode === node.id;
                  return (
                    <g
                      key={node.id}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
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
                        strokeWidth={isHovered ? '2' : '1.5'}
                        filter={isHovered ? 'url(#subtleGlow)' : undefined}
                      />

                      {/* Header small tag */}
                      <text
                        x={node.x - 45}
                        y={node.y - 14}
                        fill="var(--text-muted)"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        fontWeight="600"
                        letterSpacing="0.05em"
                      >
                        {node.id.toUpperCase()}
                      </text>

                      {/* Node Label */}
                      <text
                        x={node.x - 45}
                        y={node.y + 6}
                        fill="var(--text-primary)"
                        fontSize="11.5"
                        fontFamily="var(--font-display)"
                        fontWeight="600"
                      >
                        {node.label}
                      </text>

                      {/* Tech stack subtitle */}
                      <text
                        x={node.x - 45}
                        y={node.y + 22}
                        fill="var(--text-secondary)"
                        fontSize="8.5"
                        fontFamily="var(--font-mono)"
                      >
                        {node.tech.split('·')[0]}
                      </text>

                      {/* Status indicator dot */}
                      <circle cx={node.x + 65} cy={node.y - 20} r="3" fill={node.color} />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Interactive Detail Box on Hover / Default */}
            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                minHeight: '62px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>
                  {activeNode
                    ? `NODE: ${nodes.find(n => n.id === activeNode)?.label.toUpperCase()}`
                    : 'INTERACTIVE ARCHITECTURE TOPOLOGY'}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.4 }}>
                  {activeNode
                    ? nodes.find(n => n.id === activeNode)?.desc
                    : 'Hover or tap nodes to inspect data flows across Adarsh’s full-stack enterprise layers.'}
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {activeNode ? nodes.find(n => n.id === activeNode)?.tech : 'REST · SQL · AWS'}
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
