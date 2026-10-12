import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import { Moon, Sun, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard escape listener for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    // { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled
          ? 'var(--bg-primary)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all var(--transition-normal)',
      }}
      role="banner"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Wordmark Brand */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          aria-label="Adarsh V - Return to Top"
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            {profile.wordmark}
          </span>
          <span
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.2rem 0.55rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--success-subtle)',
              border: '1px solid rgba(61, 214, 140, 0.3)',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--success)',
            }}
            className="brand-status-badge"
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--success)',
              }}
              className="animate-pulse-subtle"
            />
            {profile.status.label}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                position: 'relative',
                padding: '0.25rem 0',
                transition: 'color var(--transition-fast)',
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--accent)',
                    borderRadius: '1px',
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Resume Action */}
          <button
            onClick={onOpenResume}
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
            }}
            title="View or download Adarsh's Resume"
            aria-label="Open Resume dialog"
          >
            <FileText size={14} style={{ color: 'var(--accent)' }} />
            <span>Resume</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="btn btn-ghost"
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
            }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={17} style={{ color: 'var(--text-secondary)' }} />
            ) : (
              <Moon size={17} style={{ color: 'var(--text-secondary)' }} />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost mobile-menu-btn"
            style={{
              display: 'inline-flex',
              padding: '0.5rem',
              border: '1px solid var(--border-subtle)',
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '4.5rem',
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 49,
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--success)',
                  backgroundColor: 'var(--success-subtle)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
                {profile.status.label} · {profile.designation}
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: activeSection === link.id ? 'var(--accent)' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                }}
              >
                {link.label}
                <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
              </a>
            ))}
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <FileText size={16} />
              <span>Download / View Resume</span>
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
              {profile.email} · {profile.location}
            </p>
          </div>
        </div>
      )}

      {/* Responsive inline CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .brand-status-badge {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
