import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Bio & College */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="brand-monogram" style={{ width: '36px', height: '36px', fontSize: '1rem' }}>SV</div>
              <h3 className="footer-brand-name" style={{ margin: 0 }}>{personalInfo.name}</h3>
            </div>
            <p className="footer-brand-desc">
              {personalInfo.course} student at {personalInfo.college}. Aspiring software developer combining clean logic and creative visual interfaces.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Professional Profiles */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)' }}
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)' }}
                title="GitHub"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)' }}
                title="Email"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
              Email: <a href={`mailto:${personalInfo.email}`} style={{ color: '#C4B5FD' }}>{personalInfo.email}</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-outline-white btn-sm"
            style={{ borderRadius: '9999px', padding: '0.4rem 1rem' }}
          >
            Back to Top
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
