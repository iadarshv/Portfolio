import React, { useState } from 'react';
import { CheckCircle2, Terminal, Server, MapPin, RefreshCw, BarChart3 } from 'lucide-react';

// Project 01: SmartLeader (SLD) HR Analytics & 360 Assessment Visual
export const SmartLeaderVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'pipeline'>('metrics');

  const competencies = [
    { name: 'Strategic Vision & Planning', score: 4.7, pct: 94 },
    { name: 'Cross-Functional Execution', score: 4.3, pct: 86 },
    { name: 'People Mentorship & Culture', score: 4.6, pct: 92 },
    { name: 'Technical Problem Solving', score: 4.8, pct: 96 }
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        fontSize: '0.85rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Illustrative watermark */}
      <div
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--text-muted)',
          padding: '0.15rem 0.45rem',
          backgroundColor: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        ILLUSTRATIVE PREVIEW
      </div>

      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '4px', backgroundColor: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
          <BarChart3 size={16} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            SLD Competency Evaluation Hub
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            Cohort: Leadership 360 · Tenant ID: #ORG-884
          </div>
        </div>
      </div>

      {/* Tab Selector */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveTab('metrics')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: activeTab === 'metrics' ? 'var(--accent-muted)' : 'transparent',
            color: activeTab === 'metrics' ? 'var(--accent)' : 'var(--text-secondary)',
            fontWeight: 500,
          }}
        >
          Assessment Metrics
        </button>
        <button
          onClick={() => setActiveTab('pipeline')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: activeTab === 'pipeline' ? 'var(--accent-muted)' : 'transparent',
            color: activeTab === 'pipeline' ? 'var(--accent)' : 'var(--text-secondary)',
            fontWeight: 500,
          }}
        >
          EventBridge Async Pipeline
        </button>
      </div>

      {activeTab === 'metrics' ? (
        <div>
          {/* Summary KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>PARTICIPANTS</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>184 / 196</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>COMPLETION</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--success)' }}>93.8%</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>AVG COMPOSITE</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)' }}>4.6 / 5.0</div>
            </div>
          </div>

          {/* Competency Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {competencies.map((c, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                  <span style={{ color: 'var(--text-primary)' }}>{c.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{c.score}</span>
                </div>
                <div style={{ height: '5px', backgroundColor: 'var(--bg-surface)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${c.pct}%`,
                      backgroundColor: 'var(--accent)',
                      borderRadius: '3px',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--success)', marginBottom: '0.35rem' }}>
              <CheckCircle2 size={13} />
              <span>EventBridge Rule Triggered: assessment.completed</span>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Event Payload: &#123; tenantId: 884, cohortId: "L360-Q3" &#125;</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', marginBottom: '0.35rem' }}>
              <Server size={13} />
              <span>AWS Lambda: calculateScoreRollup()</span>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Duration: 134ms · Memory: 128MB · MySQL Write OK</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Project 02: API Hub Management & Inspector Visual
export const ApiHubVisual: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<'tokens' | 'tenants'>('tokens');

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        fontSize: '0.85rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--text-muted)',
          padding: '0.15rem 0.45rem',
          backgroundColor: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        ILLUSTRATIVE PREVIEW
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '4px', backgroundColor: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
          <Terminal size={16} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            API Gateway Catalog & Inspector
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            PostgreSQL Materialized View · Node/TS Lambda
          </div>
        </div>
      </div>

      {/* Endpoint Selector */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setSelectedEndpoint('tokens')}
          style={{
            flex: 1,
            textAlign: 'left',
            padding: '0.5rem 0.65rem',
            borderRadius: '4px',
            backgroundColor: selectedEndpoint === 'tokens' ? 'var(--bg-elevated)' : 'var(--bg-surface)',
            border: `1px solid ${selectedEndpoint === 'tokens' ? 'var(--accent)' : 'var(--border-subtle)'}`,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
            <span style={{ color: '#3DD68C', fontWeight: 600 }}>POST</span>
            <span style={{ color: 'var(--text-primary)' }}>/v1/auth/tokens</span>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>Latency: 32ms · 200 OK</div>
        </button>

        <button
          onClick={() => setSelectedEndpoint('tenants')}
          style={{
            flex: 1,
            textAlign: 'left',
            padding: '0.5rem 0.65rem',
            borderRadius: '4px',
            backgroundColor: selectedEndpoint === 'tenants' ? 'var(--bg-elevated)' : 'var(--bg-surface)',
            border: `1px solid ${selectedEndpoint === 'tenants' ? 'var(--accent)' : 'var(--border-subtle)'}`,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
            <span style={{ color: '#6685FF', fontWeight: 600 }}>GET</span>
            <span style={{ color: 'var(--text-primary)' }}>/v2/usage/metrics</span>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>Latency: 48ms · Mat. View</div>
        </button>
      </div>

      {/* JSON Payload Inspector Box */}
      <div
        style={{
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.35rem', marginBottom: '0.5rem' }}>
          <span>STANDARDIZED RESPONSE ENVELOPE</span>
          <span style={{ color: 'var(--success)' }}>STATUS: 200 SUCCESS</span>
        </div>
        <pre style={{ margin: 0, overflowX: 'auto', color: 'var(--text-primary)' }}>
          {selectedEndpoint === 'tokens' ? (
`{
  "success": true,
  "requestId": "req_847f920a",
  "data": {
    "tier": "enterprise_tier",
    "rateLimit": 5000,
    "remaining": 4820,
    "expiresAt": "2026-10-12T18:00:00Z"
  }
}`
          ) : (
`{
  "success": true,
  "source": "mv_tenant_aggregate_usage",
  "data": {
    "period": "current_month",
    "totalInvocations": 412890,
    "cacheHitRatio": "98.4%",
    "avgLatencyMs": 38.2
  }
}`
          )}
        </pre>
      </div>
    </div>
  );
};

// Project 03: Welspun Project Hub Workforce & Geofence Visual
export const WelspunVisual: React.FC = () => {
  const [syncStatus, setSyncStatus] = useState<'synced' | 'pending'>('synced');

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        fontSize: '0.85rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--text-muted)',
          padding: '0.15rem 0.45rem',
          backgroundColor: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        ILLUSTRATIVE PREVIEW
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '4px', backgroundColor: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
          <MapPin size={16} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            Workforce Geofence & Shift Telemetry
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            GPS Boundary Math · MongoDB Time-Series · PM2
          </div>
        </div>
      </div>

      {/* Visual Layout: Geofence Polygon + Sync Telemetry */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', alignItems: 'center' }}>
        {/* Stylized Geofence Map Box */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px',
            padding: '0.75rem',
            position: 'relative',
            height: '135px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Radar circle */}
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              border: '1.5px dashed var(--accent)',
              backgroundColor: 'rgba(102, 133, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Center worker pin */}
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--success)',
                boxShadow: '0 0 10px var(--success)',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '0.4rem',
              left: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--text-muted)',
            }}
          >
            Zone: Facility Perimeter (Radius: 250m) · Validated
          </div>
        </div>

        {/* Sync Status & Offline Queue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '0.55rem',
              borderRadius: '4px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>OFFLINE SYNC</span>
              <button
                onClick={() => setSyncStatus(syncStatus === 'synced' ? 'pending' : 'synced')}
                style={{ fontSize: '0.65rem', color: 'var(--accent)', textDecoration: 'underline' }}
              >
                Toggle
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 600 }}>
              {syncStatus === 'synced' ? (
                <>
                  <CheckCircle2 size={13} style={{ color: 'var(--success)' }} />
                  <span style={{ color: 'var(--success)' }}>All Field Records Synced</span>
                </>
              ) : (
                <>
                  <RefreshCw size={13} style={{ color: 'var(--warning)' }} className="animate-pulse-subtle" />
                  <span style={{ color: 'var(--warning)' }}>3 Buffered Shifts Queued</span>
                </>
              )}
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '0.55rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
            }}
          >
            <div style={{ color: 'var(--text-muted)' }}>PM2 AUTOMATION WORKER</div>
            <div style={{ color: 'var(--text-primary)', marginTop: '0.15rem' }}>
              Shift_Report_Worker: 0 errors (PID #4812)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
