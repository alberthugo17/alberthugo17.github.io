/**
 * ===================================================================================
 * APLIKASI PORTOFOLIO UTAMA (App.tsx)
 * Hugo Antonio Hien Wijaya - Software Engineer & Full-Stack Developer
 * ===================================================================================
 * Komponen ini menggabungkan seluruh komponen halaman:
 * - <Navbar />          : Menu navigasi atas & tombol mode gelap/terang.
 * - <HeroSection />     : Foto profil utama, perkenalan, metrik statistik, tombol sosial.
 * - <TabNavigation />   : Pengalih tab interaktif (Proyek, Sertifikasi, Pendidikan, dll).
 * - <ProjectsTab />     : Galeri kartu proyek, pencarian, dan modal detail proyek.
 * - <CertificationsTab/>: Daftar sertifikasi resmi, ID kredensial, dan verifikasi.
 * - <EducationTab />    : Riwayat pendidikan universitas, IPK, dan prestasi akademik.
 * - <ExperienceTab />   : Linimasa perjalanan karier dan kontribusi nyata.
 * - <SkillsTab />       : Matriks keahlian teknologi dengan bilah persentase.
 * - <ContactSection />  : Formulir pesan responsif, salin email, & WhatsApp.
 * - <Footer />          : Hak cipta dan navigasi cepat bawah.
 * - <ResumeModal />     : Pratinjau CV yang siap cetak atau ekspor ke PDF.
 * ===================================================================================
 */

import React, { useState, useEffect, useRef } from 'react';
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
  // State untuk melacak tab konten aktif ('proyek' | 'sertifikasi' | 'pendidikan' | 'pengalaman' | 'keahlian')
  const [activeTab, setActiveTab] = useState<string>('proyek');

  // State untuk indikator navigasi aktif pada Navbar atas ('tentang' | 'proyek' | 'sertifikasi' | 'pendidikan' | 'pengalaman' | 'keahlian' | 'kontak')
  const [activeNavTab, setActiveNavTab] = useState<string>('tentang');

  // State untuk modal CV / Resume
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Kunci anti-flicker: mencegah scrollspy mendeteksi bagian tengah saat smooth scroll sedang berlangsung
  const isManualNavRef = useRef<boolean>(false);
  const manualNavTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lockScrollSpy = () => {
    isManualNavRef.current = true;
    if (manualNavTimeoutRef.current) {
      clearTimeout(manualNavTimeoutRef.current);
    }
    // Kunci scroll listener selama 850ms agar animasi pergeseran halaman tidak memicu pergantian tab sementara
    manualNavTimeoutRef.current = setTimeout(() => {
      isManualNavRef.current = false;
    }, 850);
  };

  // Menangani klik navigasi dari Navbar atau Footer
  const handleNavChange = (tabId: string) => {
    lockScrollSpy();
    setActiveNavTab(tabId);
    if (tabId !== 'tentang' && tabId !== 'kontak') {
      setActiveTab(tabId);
    }
  };

  // Menangani klik tab di TabNavigation
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveNavTab(tabId);
  };

  const handleExploreProjects = () => {
    lockScrollSpy();
    setActiveTab('proyek');
    setActiveNavTab('proyek');
    const el = document.getElementById('tabs-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    lockScrollSpy();
    setActiveNavTab('kontak');
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Fitur Scrollspy: Mengikuti bagian apa yang sedang dilihat pengguna di layar
  useEffect(() => {
    const handleScroll = () => {
      // Abaikan jika baru saja mengklik tombol menu (sedang smooth scroll)
      if (isManualNavRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const tabsEl = document.getElementById('tabs-section');
      const contactEl = document.getElementById('contact-section');

      // 1. Jika pengguna telah menggulir ke bagian kontak atau mendekati akhir halaman
      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        const isAtBottom = scrollY + windowHeight >= fullHeight - 60;
        if (contactRect.top <= 260 || isAtBottom) {
          setActiveNavTab('kontak');
          return;
        }
      }

      // 2. Jika pengguna berada di area tabs-section (Proyek, Sertifikasi, Pendidikan, dll)
      if (tabsEl) {
        const tabsRect = tabsEl.getBoundingClientRect();
        if (tabsRect.top <= 200) {
          setActiveNavTab(activeTab);
          return;
        }
      }

      // 3. Jika pengguna berada di bagian atas (Hero / Tentang)
      setActiveNavTab('tentang');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (manualNavTimeoutRef.current) clearTimeout(manualNavTimeoutRef.current);
    };
  }, [activeTab]);

  // Menghitung jumlah item pada masing-masing tab untuk badge counter
  const counts = {
    proyek: PROJECTS_DATA.length,
    sertifikasi: CERTIFICATIONS_DATA.length,
    pendidikan: EDUCATION_DATA.length,
    pengalaman: EXPERIENCE_DATA.length,
    keahlian: SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0),
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900 font-sans transition-colors duration-200">
      {/* =========================================================================
       * [BAGIAN 1: NAVBAR & MODE GELAP]
       * ========================================================================= */}
      <Navbar
        activeTab={activeNavTab}
        onTabChange={handleNavChange}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* =======================================================================
         * [BAGIAN 2: HERO SECTION & FOTO PROFIL]
         * ======================================================================= */}
        <HeroSection
          onExploreProjects={handleExploreProjects}
          onContactClick={handleContactClick}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* =======================================================================
         * [BAGIAN 3: BILAH NAVIGASI TAB]
         * ======================================================================= */}
        <TabNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          counts={counts}
        />

        {/* =======================================================================
         * [BAGIAN 4: KONTEN TAB INTERAKTIF DENGAN ANIMASI]
         * ======================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* Tab: Proyek */}
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

            {/* Tab: Sertifikasi */}
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

            {/* Tab: Pendidikan */}
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

            {/* Tab: Pengalaman Kerja */}
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

            {/* Tab: Keahlian Teknis */}
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

        {/* =======================================================================
         * [BAGIAN 5: FORMULIR KONTAK RESPANSIF & INTEGRASI WHATSAPP / EMAIL]
         * ======================================================================= */}
        <ContactSection />
      </main>

      {/* =========================================================================
       * [BAGIAN 6: FOOTER]
       * ========================================================================= */}
      <Footer onNavClick={handleNavChange} />

      {/* =========================================================================
       * [BAGIAN 7: MODAL PRATINJAU CV / RESUME (CETAK / SIMPAN PDF)]
       * ========================================================================= */}
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
