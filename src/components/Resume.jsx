import React from 'react';
import { Download, FileText, CheckCircle2, Eye, Info, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Resume = ({ onOpenResume }) => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Curriculum Vitae</span>
          <h2 className="section-title">Professional Resume</h2>
          <p className="section-subtitle">
            A comprehensive summary of academic education, software development projects, technical skills,
            and internship experience.
          </p>
        </div>

        <div className="resume-card">
          <div className="resume-grid">
            {/* Left Column: Summary & Actions */}
            <div className="resume-summary-box">
              <div>
                <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9', marginBottom: '0.75rem' }}>
                  Candidate Profile
                </span>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>
                  {personalInfo.name}
                </h3>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#7C3AED', marginBottom: '0.25rem' }}>
                  {personalInfo.course}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  {personalInfo.college}
                </div>
              </div>

              <ul className="resume-feature-list">
                <li className="resume-feature-item">
                  <CheckCircle2 size={18} className="resume-check" />
                  <span><strong>Education:</strong> B.E. in Computer Science and Design at SNS College of Technology</span>
                </li>
                <li className="resume-feature-item">
                  <CheckCircle2 size={18} className="resume-check" />
                  <span><strong>Internship:</strong> Full Stack Development Intern at EduSpine (15 Days)</span>
                </li>
                <li className="resume-feature-item">
                  <CheckCircle2 size={18} className="resume-check" />
                  <span><strong>Core Skills:</strong> C, C++, Java, Python, HTML, CSS, Responsive Web Design, Excel</span>
                </li>
                <li className="resume-feature-item">
                  <CheckCircle2 size={18} className="resume-check" />
                  <span><strong>Design Focus:</strong> UI/UX, Graphic Design, Website Design, Branding &amp; Identity</span>
                </li>
                <li className="resume-feature-item">
                  <CheckCircle2 size={18} className="resume-check" />
                  <span><strong>Academic Distinction:</strong> Scored 100/100 Centum in Computer Science (Class 12)</span>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <a
                  href={personalInfo.resumePath}
                  download="S_Varshini_Resume.pdf"
                  className="btn btn-primary"
                >
                  <Download size={18} />
                  Download Resume
                </a>

                <button
                  className="btn btn-secondary"
                  onClick={onOpenResume}
                >
                  <Eye size={18} />
                  View Resume
                </button>
              </div>
            </div>

            {/* Right Column: Visual Preview Container */}
            <div className="resume-preview-container">
              <div className="resume-doc-icon">
                <FileText size={32} />
              </div>
              <h4 className="resume-doc-title">Varshini_S_Resume.pdf</h4>
              <p className="resume-doc-sub">
                Official PDF Document Placeholder
              </p>

              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '0.85rem 1.25rem',
                border: '1px solid #E2E8F0',
                fontSize: '0.85rem',
                color: 'var(--text-body)',
                maxWidth: '360px',
                textAlign: 'left',
                display: 'flex',
                gap: '0.6rem',
                alignItems: 'flex-start'
              }}>
                <Info size={18} color="#7C3AED" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>How to upload your resume:</strong> Save your resume PDF as <code>Varshini_S_Resume.pdf</code> inside the project's <code>public/assets/</code> folder. The download button is configured to download it immediately.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
