import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Sparkles, FolderGit2 } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const [imgSrc, setImgSrc] = useState(personalInfo.profilePhotoPath || '/assets/profile-placeholder.svg');
  const fallbackSrc = '/assets/profile-placeholder.svg';

  const handleImageError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-grid">
        {/* Left Column: Text & CTAs */}
        <div>
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Computer Science &amp; Design Student</span>
          </div>

          <h1 className="hero-title">{personalInfo.name}</h1>
          <div className="hero-course">{personalInfo.course}</div>
          <div className="hero-headline">{personalInfo.headline}</div>

          <p className="hero-intro">{personalInfo.intro}</p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={handleScrollToProjects}
            >
              <FolderGit2 size={18} />
              Explore My Projects
            </a>

            <button
              className="btn btn-secondary"
              onClick={onOpenResume}
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          {/* Social Profiles & Email */}
          <div className="hero-socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              title="Send an Email"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Photo Frame */}
        <div className="hero-image-wrapper">
          <div className="photo-frame">
            <div className="photo-inner">
              <img
                src={imgSrc}
                alt="S. Varshini - Computer Science and Design Student"
                className="profile-img"
                onError={handleImageError}
              />
            </div>
            <div className="photo-badge">
              <Sparkles size={16} color="#7C3AED" />
              <span>Developer &amp; Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
