import React from 'react';
import { GraduationCap, Code2, Palette, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Bridging Code and Creative Design</h2>
          <p className="section-subtitle">
            Dedicated student in Computer Science &amp; Design passionate about modern software
            technologies, intuitive user interfaces, and continuous growth.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio Card */}
          <div className="about-bio-card">
            <p className="about-text">
              I am a Computer Science and Design student at SNS College of Technology with a strong interest in software development, programming, and creative design.
            </p>
            <p className="about-text">
              I enjoy learning different programming languages, exploring new technologies, and developing my technical knowledge. I am also interested in website design, user-friendly interfaces, and visual creativity.
            </p>
            <p className="about-text">
              My goal is to build a successful career in software development while continuing to develop my creative skills. In the future, I also aspire to establish my own beauty parlour business.
            </p>

            {/* Quick Stat Highlights */}
            <div className="about-highlights">
              <div className="about-stat">
                <div className="stat-icon">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="stat-title">Institution</div>
                  <div className="stat-val">{personalInfo.college}</div>
                </div>
              </div>

              <div className="about-stat">
                <div className="stat-icon">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="stat-title">Degree Course</div>
                  <div className="stat-val">{personalInfo.course}</div>
                </div>
              </div>

              <div className="about-stat">
                <div className="stat-icon">
                  <Palette size={20} />
                </div>
                <div>
                  <div className="stat-title">Primary Focus</div>
                  <div className="stat-val">Software &amp; UI/UX</div>
                </div>
              </div>

              <div className="about-stat">
                <div className="stat-icon">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="stat-title">Long-Term Goal</div>
                  <div className="stat-val">Software Dev &amp; Business</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Career Goals & Direction */}
          <div className="goals-card">
            <div className="goals-header">
              <Sparkles size={24} color="#C4B5FD" />
              <h3 className="goals-title">Core Aspirations &amp; Goals</h3>
            </div>

            <ul className="goals-list">
              {personalInfo.careerGoals.map((goal, idx) => (
                <li key={idx} className="goal-item">
                  <span className="goal-bullet">
                    <CheckCircle2 size={14} />
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
                ACADEMIC &amp; PROFESSIONAL OUTLOOK
              </div>
              <p style={{ fontSize: '0.92rem', color: '#CBD5E1', marginBottom: 0, lineHeight: '1.6' }}>
                Combining solid foundational computer science logic with aesthetic design thinking enables me to build software solutions that are technically resilient and delightful to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
