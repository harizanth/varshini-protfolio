import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Coffee, 
  FileCode, 
  Globe, 
  Layout, 
  Smartphone, 
  Table, 
  Code 
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Core Programming', 'Web Fundamentals', 'Productivity & Analysis'];

  const filteredSkills = activeCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter((s) => s.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return <Terminal size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      case 'Coffee': return <Coffee size={22} />;
      case 'FileCode': return <FileCode size={22} />;
      case 'Globe': return <Globe size={22} />;
      case 'Layout': return <Layout size={22} />;
      case 'Smartphone': return <Smartphone size={22} />;
      case 'Table': return <Table size={22} />;
      default: return <Code size={22} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Skills</span>
          <h2 className="section-title">Programming &amp; Development Foundations</h2>
          <p className="section-subtitle">
            Core programming languages, web fundamentals, and analytical tools developed through
            coursework and hands-on practice.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-top">
                <div className="skill-icon-wrap">
                  {getIcon(skill.icon)}
                </div>
                <span className="skill-badge">{skill.category}</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Interest Callout Banner */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          backgroundColor: '#F8FAFC',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: '#0B192C',
            color: '#C4B5FD',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Code size={22} />
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary-navy)', fontSize: '1rem', marginBottom: '0.2rem' }}>
              Main Technical Interest: Software Engineering &amp; Problem Solving
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Passionate about writing clean code, exploring modern frameworks, and translating real-world requirements into maintainable digital systems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
