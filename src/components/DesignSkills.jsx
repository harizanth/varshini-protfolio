import React from 'react';
import { 
  Palette, 
  Layers, 
  Monitor, 
  Type, 
  Sparkles, 
  Eye, 
  Smile, 
  Compass 
} from 'lucide-react';
import { designSkills } from '../data/portfolioData';

export const DesignSkills = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Palette': return <Palette size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Monitor': return <Monitor size={24} />;
      case 'Type': return <Type size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'Eye': return <Eye size={24} />;
      case 'Smile': return <Smile size={24} />;
      default: return <Compass size={24} />;
    }
  };

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9' }}>
            Creative Direction
          </span>
          <h2 className="section-title">Design Skills &amp; Creative Interests</h2>
          <p className="section-subtitle">
            Exploring visual aesthetics, brand storytelling, typography, and human-centered user experiences
            as a Computer Science and Design student.
          </p>
        </div>

        {/* Design Grid */}
        <div className="design-skills-grid">
          {designSkills.map((skill) => (
            <div key={skill.name} className="design-card">
              <div className="design-icon-wrap">
                {getIcon(skill.icon)}
              </div>
              <h3 className="design-name">{skill.name}</h3>
              <p className="design-desc">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Intersection Highlight Banner */}
        <div style={{
          marginTop: '3.5rem',
          padding: '2rem 2.5rem',
          background: 'linear-gradient(135deg, #0B192C 0%, #15243D 50%, #2E1065 100%)',
          borderRadius: '20px',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(196, 181, 253, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#C4B5FD',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              <Sparkles size={16} />
              The Synergy of CS &amp; Design
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Where Engineering Meets Empathy &amp; Visual Art
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
              Studying Computer Science and Design empowers me to think systematically about code architectures while simultaneously crafting interfaces that resonate emotionally with users.
            </p>
          </div>

          <a
            href="#projects"
            className="btn btn-accent"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
};
