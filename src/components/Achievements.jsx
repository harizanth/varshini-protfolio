import React from 'react';
import { Trophy, Star, CheckCircle } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements = () => {
  const achievement = achievements[0];

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic Excellence</span>
          <h2 className="section-title">Honors &amp; Achievements</h2>
          <p className="section-subtitle">
            A milestone recognizing rigorous academic preparation and mastery in Computer Science.
          </p>
        </div>

        {/* Featured Achievement Banner */}
        <div className="achievement-banner">
          <div className="achievement-layout">
            {/* Trophy Icon */}
            <div className="trophy-badge">
              <Trophy size={44} />
            </div>

            {/* Achievement Text Info */}
            <div className="achievement-info">
              <div className="achievement-tag">
                State Board Examination Honor
              </div>
              <h3>{achievement.title}</h3>
              <p className="achievement-desc">
                "{achievement.description}"
              </p>
            </div>

            {/* Centum Score Highlight Box */}
            <div className="achievement-score-box">
              <div className="score-num">100</div>
              <div className="score-label">Out of 100 Marks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
