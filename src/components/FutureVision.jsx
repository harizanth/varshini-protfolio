import React from 'react';
import { Code, Sparkles, CheckCircle2, Rocket, HeartHandshake } from 'lucide-react';
import { careerVision } from '../data/portfolioData';

export const FutureVision = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Forward Momentum</span>
          <h2 className="section-title">My Future Vision</h2>
          <p className="section-subtitle">
            Pursuing technical mastery as my primary software engineering journey, while nurturing
            entrepreneurial ambitions in creative enterprise.
          </p>
        </div>

        {/* Two Vision Cards */}
        <div className="vision-grid">
          {/* Card 1: Software Development (Primary) */}
          <div className="vision-card primary">
            <span className="vision-category-tag">
              <Rocket size={14} />
              Primary Professional Career
            </span>

            <h3 className="vision-title">{careerVision[0].title}</h3>
            <p className="vision-desc">{careerVision[0].description}</p>

            <ul className="vision-points">
              {careerVision[0].points.map((pt, i) => (
                <li key={i} className="vision-point">
                  <CheckCircle2 size={16} color="#C4B5FD" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#E2E8F0' }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Entrepreneurship (Long-Term Dream) */}
          <div className="vision-card secondary">
            <span className="vision-category-tag">
              <Sparkles size={14} />
              Long-Term Entrepreneurship
            </span>

            <h3 className="vision-title">{careerVision[1].title}</h3>
            <p className="vision-desc">{careerVision[1].description}</p>

            <ul className="vision-points">
              {careerVision[1].points.map((pt, i) => (
                <li key={i} className="vision-point">
                  <CheckCircle2 size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-body)' }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
