/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TabNavigation } from './components/TabNavigation';
import { ProjectsTab } from './components/ProjectsTab';
import { CertificationsTab } from './components/CertificationsTab';
import { EducationTab } from './components/EducationTab';
import { ExperienceTab } from './components/ExperienceTab';
import { SkillsTab } from './components/SkillsTab';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import {
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  SKILL_CATEGORIES,
} from './data/portfolioData';

function PortfolioApp() {
  const [activeTab, setActiveTab] = useState<string>('proyek');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleExploreProjects = () => {
    setActiveTab('proyek');
    const el = document.getElementById('tabs-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const counts = {
    proyek: PROJECTS_DATA.length,
    sertifikasi: CERTIFICATIONS_DATA.length,
    pendidikan: EDUCATION_DATA.length,
    pengalaman: EXPERIENCE_DATA.length,
    keahlian: SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0),
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900 font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Split Screen Hero Section */}
        <HeroSection
          onExploreProjects={handleExploreProjects}
          onContactClick={handleContactClick}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Tab Navigation Segmented Bar */}
        <TabNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          counts={counts}
        />

        {/* Dynamic Tab Content Section with Framer Motion AnimatePresence */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'proyek' && (
              <motion.div
                key="tab-proyek"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ProjectsTab />
              </motion.div>
            )}

            {activeTab === 'sertifikasi' && (
              <motion.div
                key="tab-sertifikasi"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <CertificationsTab />
              </motion.div>
            )}

            {activeTab === 'pendidikan' && (
              <motion.div
                key="tab-pendidikan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <EducationTab />
              </motion.div>
            )}

            {activeTab === 'pengalaman' && (
              <motion.div
                key="tab-pengalaman"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ExperienceTab />
              </motion.div>
            )}

            {activeTab === 'keahlian' && (
              <motion.div
                key="tab-keahlian"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <SkillsTab />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Responsive Contact Form Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handleTabChange} />

      {/* Printable Resume / CV Summary Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
