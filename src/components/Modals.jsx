import React from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2, Award, Info, Sparkles } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Modals = ({
  selectedProject,
  onCloseProject,
  selectedCert,
  onCloseCert,
  isResumeOpen,
  onCloseResume
}) => {
  return (
    <>
      {/* ----------------- Project Details Modal ----------------- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={onCloseProject}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge" style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: '#EDE9FE',
                  color: '#7C3AED',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  display: 'inline-block',
                  marginBottom: '0.3rem'
                }}>
                  {selectedProject.nature}
                </span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              <button className="modal-close-btn" onClick={onCloseProject} aria-label="Close dialog">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {/* Preview image */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0F172A',
                marginBottom: '1.25rem',
                border: '1px solid #E2E8F0'
              }}>
                <img
                  src={selectedProject.imagePlaceholder}
                  alt={selectedProject.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                  Project Overview
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.6rem' }}>
                  Key Architectural &amp; Design Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                      <CheckCircle2 size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools Used */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Tools &amp; Technologies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tools.map((t, idx) => (
                    <span key={idx} className="tool-tag" style={{ backgroundColor: '#F1F5F9', color: 'var(--primary-navy)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <GitHubIcon size={16} />
                  View GitHub Repository
                </a>
              )}
              <button className="btn btn-primary btn-sm" onClick={onCloseProject}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- Certificate Modal ----------------- */}
      {selectedCert && (
        <div className="modal-overlay" onClick={onCloseCert}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', textTransform: 'uppercase' }}>
                  Credential Preview
                </span>
                <h3 className="modal-title">{selectedCert.title}</h3>
              </div>
              <button className="modal-close-btn" onClick={onCloseCert} aria-label="Close dialog">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0B192C',
                marginBottom: '1.25rem',
                border: '1.5px solid #E2E8F0',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#F8FAFC',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                fontSize: '0.88rem',
                color: 'var(--text-body)',
                lineHeight: 1.5
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
                  <Award size={16} color="#7C3AED" />
                  Verified Coursework Record
                </div>
                Credential Title: <strong>{selectedCert.title}</strong> ({selectedCert.category}).
                To attach your official certificate scan or PDF, place the file inside <code>public/certificates/</code>.
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary btn-sm" onClick={onCloseCert}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- Resume Modal ----------------- */}
      {isResumeOpen && (
        <div className="modal-overlay" onClick={onCloseResume}>
          <div className="modal-dialog" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', textTransform: 'uppercase' }}>
                  Resume Document
                </span>
                <h3 className="modal-title">S. Varshini — Curriculum Vitae</h3>
              </div>
              <button className="modal-close-btn" onClick={onCloseResume} aria-label="Close dialog">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {/* Structured Resume Content Preview */}
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {/* Header */}
                <div style={{ borderBottom: '2px solid #0B192C', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.8rem', color: '#0B192C', marginBottom: '0.2rem' }}>
                    S. VARSHINI
                  </h2>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#7C3AED', marginBottom: '0.4rem' }}>
                    Computer Science &amp; Design | SNS College of Technology
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
                    Email: {personalInfo.email} • LinkedIn: in/varshini-senthilkumar-7839ba38
                  </div>
                </div>

                {/* Section 1: Education */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B192C', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                    Education
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <strong>B.E. Computer Science and Design</strong>
                    <span style={{ color: '#64748B', fontSize: '0.9rem' }}>SNS College of Technology</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.6rem' }}>
                    <strong>Class 12 Higher Secondary (State Board)</strong>
                    <span style={{ color: '#059669', fontWeight: 600, fontSize: '0.9rem' }}>100/100 in Computer Science</span>
                  </div>
                </div>

                {/* Section 2: Internship */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B192C', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                    Internship Experience
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <strong>Full Stack Development Intern</strong>
                    <span style={{ color: '#64748B', fontSize: '0.9rem' }}>EduSpine (15 Days)</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, marginTop: '0.3rem' }}>
                    Exposure to front-end development, back-end integration, network designing, and real-time AI-based projects including model training and testing.
                  </p>
                </div>

                {/* Section 3: Technical & Design Skills */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B192C', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                    Skills &amp; Competencies
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '0.3rem' }}>
                    <strong>Programming:</strong> C, C++, Java, Python, HTML, CSS, Responsive Web Design, Microsoft Excel
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0 }}>
                    <strong>Design &amp; Creativity:</strong> Graphic Design, UI/UX Design, Website Design, Typography, Branding &amp; Identity, Creative Visual Design
                  </p>
                </div>

                {/* Section 4: Projects */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B192C', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                    Highlighted Projects
                  </h4>
                  <div style={{ marginBottom: '0.6rem' }}>
                    <strong>LoanX:</strong> AI-powered commercial loan underwriting and operations (document processing, financial analysis, covenant monitoring).
                  </div>
                  <div style={{ marginBottom: '0.6rem' }}>
                    <strong>TECHNOVA 2027:</strong> Technical symposium branding, visual identity, and event promotional design.
                  </div>
                  <div style={{ marginBottom: '0.6rem' }}>
                    <strong>NatureGold Organic Honey:</strong> Organic packaging layout, identity, and typography.
                  </div>
                  <div>
                    <strong>Aerospace Share:</strong> Autonomous navigation and airspace coordination website concept.
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={personalInfo.resumePath}
                download="S_Varshini_Resume.pdf"
                className="btn btn-primary btn-sm"
              >
                <Download size={16} />
                Download PDF
              </a>
              <button className="btn btn-secondary btn-sm" onClick={onCloseResume}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
