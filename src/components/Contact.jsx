import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Connect &amp; Collaborate</h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, project collaboration, design inquiry, or just want to connect,
            feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-info-card">
            {/* Email Channel */}
            <a href={`mailto:${personalInfo.email}`} className="contact-channel">
              <div className="channel-icon">
                <Mail size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="channel-label">Direct Email</div>
                <div className="channel-val">{personalInfo.email}</div>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* LinkedIn Channel */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <div className="channel-icon" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
                <LinkedInIcon size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="channel-label">LinkedIn Profile</div>
                <div className="channel-val">in/varshini-senthilkumar-7839ba38</div>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* GitHub Channel */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <div className="channel-icon" style={{ backgroundColor: '#F1F5F9', color: '#0F172A' }}>
                <GitHubIcon size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="channel-label">GitHub Project</div>
                <div className="channel-val">varshinis012007-del/vcd-project</div>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* Availability Note */}
            <div style={{
              padding: '1.25rem',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}>
              📍 <strong>Location &amp; Academic Status:</strong> Based in Coimbatore, Tamil Nadu. Currently pursuing Computer Science and Design at SNS College of Technology.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill out this form with your message and details.
            </p>

            {submitted ? (
              <div style={{
                padding: '2rem',
                backgroundColor: '#ECFDF5',
                border: '1.5px solid #10B981',
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#065F46', marginBottom: '0.5rem' }}>
                  Message Validated Successfully!
                </h4>
                <p style={{ fontSize: '0.92rem', color: '#047857', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Your message details are valid and ready. Since this is currently a client-side portfolio, you can send your message directly via email to:
                </p>
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`}
                  className="btn btn-primary"
                  style={{ display: 'inline-flex' }}
                >
                  <Mail size={16} />
                  Open in Mail App
                </a>
                <div style={{ marginTop: '1rem' }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. yourname@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="e.g. Software Development Internship / Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  Submit Message
                </button>
              </form>
            )}

            {/* Email Backend Integration Guide Notice */}
            <div className="form-notice" style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
                <Info size={15} color="#7C3AED" />
                Backend Configuration Note:
              </div>
              To receive form submissions directly into your inbox without a custom server, connect this form to a free email provider such as <strong>EmailJS</strong>, <strong>Formspree</strong>, or <strong>Web3Forms</strong>. Step-by-step instructions are provided in the README.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
