import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Technical Development', 'Design & Branding'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">Projects &amp; Design Case Studies</h2>
          <p className="section-subtitle">
            A selection of software engineering systems, brand identities, packaging layouts, and digital
            concepts developed with technical precision and design focus.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              className={`filter-btn ${filter === opt ? 'active' : ''}`}
              onClick={() => setFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Preview Container */}
              <div className="project-preview">
                <img
                  src={project.imagePlaceholder}
                  alt={`${project.title} Preview`}
                  className="project-img"
                  loading="lazy"
                />
                <span className="project-type-tag">{project.typeTag}</span>
                <span className="project-status-badge">{project.statusBadge}</span>
              </div>

              {/* Content Body */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Technology Pills */}
                <div className="project-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => onSelectProject(project)}
                  >
                    <Eye size={16} />
                    View Details
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GitHubIcon size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note on Execution vs Concept */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: 'var(--text-muted)'
        }}>
          💡 <em>Note: Projects are clearly designated as ongoing software prototypes or design &amp; branding concepts to provide transparent, accurate representation.</em>
        </div>
      </div>
    </section>
  );
};
