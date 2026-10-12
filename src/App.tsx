import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [theme, toggleTheme] = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Probe Express backend API health on startup
  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API non-200 response');
      })
      .then((data) => {
        console.log('[FullStack] Connected to Express API service:', data);
      })
      .catch((err) => {
        console.warn('[FullStack] Express backend offline or starting up:', err.message);
      });
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
