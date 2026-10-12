import React from 'react';
import { Calendar, Briefcase, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { internshipExperience } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Practical Experience</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on industry exposure and real-world software engineering learning.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="experience-card">
          <div className="exp-header">
            <div className="exp-company-group">
              <div className="exp-company-logo">ES</div>
              <div className="exp-role-info">
                <h3 className="exp-role">{internshipExperience.role}</h3>
                <span className="exp-company-name">{internshipExperience.company}</span>
              </div>
            </div>

            <div className="exp-duration-badge">
              <Calendar size={16} color="#7C3AED" />
              <span>{internshipExperience.duration} ({internshipExperience.period})</span>
            </div>
          </div>

          <p className="exp-summary">
            "{internshipExperience.summary}"
          </p>

          {/* Core Learning Areas Grid */}
          <div>
            <h4 className="learning-areas-title">
              <BookOpen size={18} color="#7C3AED" />
              Core Learning &amp; Focus Areas:
            </h4>

            <div className="learning-grid">
              {internshipExperience.learningAreas.map((area, idx) => (
                <div key={idx} className="learning-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <CheckCircle2 size={15} color="#10B981" />
                    <h5 className="learning-item-title">{area.title}</h5>
                  </div>
                  <p className="learning-item-desc">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
