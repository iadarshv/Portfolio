import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Code2, Layout, Server, Database, Cloud, Network } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code2 size={16} />,
    frontend: <Layout size={16} />,
    backend: <Server size={16} />,
    databases: <Database size={16} />,
    'cloud-devops': <Cloud size={16} />,
    architecture: <Network size={16} />,
  };

  const displayedCategories = activeCategoryId === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategoryId);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-eyebrow">Technical Capabilities</div>
          <h2 className="section-title">
            My engineering toolkit.
          </h2>
          <p className="section-description">
            A practical overview of languages, frameworks, databases, and cloud technologies I utilize in enterprise development. Each item reflects actual production usage and engineering context rather than arbitrary ratings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '1rem',
          }}
          role="tablist"
          aria-label="Skill category filter"
        >
          <button
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            onClick={() => setActiveCategoryId('all')}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: activeCategoryId === 'all' ? 'var(--accent-muted)' : 'transparent',
              color: activeCategoryId === 'all' ? 'var(--accent)' : 'var(--text-secondary)',
              border: `1px solid ${activeCategoryId === 'all' ? 'var(--accent)' : 'transparent'}`,
              fontWeight: 500,
            }}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategoryId === cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeCategoryId === cat.id ? 'var(--accent-muted)' : 'transparent',
                color: activeCategoryId === cat.id ? 'var(--accent)' : 'var(--text-secondary)',
                border: `1px solid ${activeCategoryId === cat.id ? 'var(--accent)' : 'transparent'}`,
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="card-classic"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ color: 'var(--accent)' }}>{categoryIcons[cat.id]}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {cat.name}
                  </h3>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {cat.skills.length} TECHNOLOGIES
                </span>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {cat.description}
              </p>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 0.9rem',
                      transition: 'border-color var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      {skill.isCore && (
                        <span
                          style={{
                            fontSize: '0.65rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--accent)',
                            backgroundColor: 'var(--accent-muted)',
                            padding: '0.15rem 0.45rem',
                            borderRadius: '2px',
                          }}
                        >
                          Core Stack
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
