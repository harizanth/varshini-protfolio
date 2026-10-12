import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { DesignSkills } from './components/DesignSkills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { FutureVision } from './components/FutureVision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <DesignSkills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Certificates onSelectCertificate={(cert) => setSelectedCert(cert)} />
        <Achievements />
        <Resume onOpenResume={() => setIsResumeOpen(true)} />
        <FutureVision />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <Modals
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        selectedCert={selectedCert}
        onCloseCert={() => setSelectedCert(null)}
        isResumeOpen={isResumeOpen}
        onCloseResume={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
