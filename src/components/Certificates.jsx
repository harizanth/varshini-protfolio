import React from 'react';
import { Award, Eye, ExternalLink, FileBadge } from 'lucide-react';
import { certificates } from '../data/portfolioData';

export const Certificates = ({ onSelectCertificate }) => {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Verified Credentials</span>
          <h2 className="section-title">Certificates &amp; Coursework</h2>
          <p className="section-subtitle">
            Demonstrated academic learning and structured certifications in computer programming,
            web technologies, and analytical computing.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-preview-box">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-img"
                  loading="lazy"
                />
              </div>

              <div className="certificate-content">
                <span className="cert-category-badge">{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-actions">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Course Completion
                  </span>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onSelectCertificate(cert)}
                  >
                    <Eye size={15} />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Upload / Replacement Note */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.75rem',
          backgroundColor: '#F8FAFC',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.88rem',
          color: 'var(--text-muted)'
        }}>
          <FileBadge size={22} color="#7C3AED" style={{ flexShrink: 0 }} />
          <div>
            <strong>Certificate Image Management:</strong> Clean vector placeholders are currently displayed. You can add your certificates by placing your image/PDF files in the <code>public/certificates/</code> folder.
          </div>
        </div>
      </div>
    </section>
  );
};
