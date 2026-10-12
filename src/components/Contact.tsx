import React, { useState } from 'react';
import { profile } from '../data/profile';
import { Mail, Copy, Check, Phone, MapPin, Send, MessageSquare, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showDirectForm, setShowDirectForm] = useState(false);

  // Form State for Express API connection
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = profile.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
        setStatusMessage(data.error || 'Failed to submit. Please use direct email instead.');
      }
    } catch {
      setFormStatus('error');
      setStatusMessage('Unable to reach server. Please email directly at ' + profile.email);
    }
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent("Engineering Inquiry / Opportunity")}&body=${encodeURIComponent("Hi Adarsh,\n\nI reviewed your portfolio and would like to connect regarding...")}`;

  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">
            Have an interesting problem to solve?
          </h2>
          <p className="section-description">
            I'm always interested in connecting with people who care about building useful, thoughtful software.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="contact-main-grid">
          {/* Left Column: Direct Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Primary Email Card */}
            <div
              className="card-classic"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--accent-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    DIRECT EMAIL
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    {profile.email}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
                <a
                  href={mailtoLink}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.25rem' }}
                >
                  <Mail size={15} />
                  <span>Email Me</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '0.65rem 1.25rem' }}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={15} style={{ color: 'var(--success)' }} />
                      <span style={{ color: 'var(--success)' }}>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {copied && (
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--success)',
                  }}
                >
                  ✓ Copied {profile.email} to your clipboard.
                </div>
              )}
            </div>

            {/* Phone & Location Metadata Card */}
            <div
              className="card-classic"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  <Phone size={14} style={{ color: 'var(--accent)' }} />
                  <span>PHONE</span>
                </div>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  style={{
                    fontSize: '0.98rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  {profile.phoneFormatted}
                </a>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  <MapPin size={14} style={{ color: 'var(--accent)' }} />
                  <span>LOCATION</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {profile.location}
                </div>
              </div>
            </div>

            {/* Toggle Direct Web Inquiry */}
            <div>
              <button
                onClick={() => setShowDirectForm(!showDirectForm)}
                className="btn btn-ghost"
                style={{
                  padding: '0.6rem 0.9rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent)',
                  border: '1px dashed var(--accent-border)',
                }}
              >
                <MessageSquare size={14} />
                <span>{showDirectForm ? 'Hide Web Inquiry Form' : 'Or send a quick message via Express API →'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Form (Express Backend API) */}
          {showDirectForm && (
            <div
              className="card-classic"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Send an Inquiry
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)' }}>
                  POST /api/contact
                </span>
              </div>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    YOUR EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full Stack Opportunity / Engineering Discussion"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {statusMessage && (
                  <div
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: formStatus === 'success' ? 'var(--success-subtle)' : 'rgba(239, 68, 68, 0.12)',
                      border: `1px solid ${formStatus === 'success' ? 'var(--success)' : 'rgba(239, 68, 68, 0.3)'}`,
                      color: formStatus === 'success' ? 'var(--success)' : '#EF4444',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {formStatus === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}
                >
                  <Send size={15} />
                  <span>{formStatus === 'submitting' ? 'Submitting to Express API...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-main-grid {
            grid-template-columns: ${showDirectForm ? '1fr 1fr' : '1fr'} !important;
          }
        }
      `}</style>
    </section>
  );
};
