import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Linkedin, Github, Mail, MessageSquare, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
  onOpenResume,
}) => {
  return (
    <section id="about-section" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
              <span>Ini website pribadi saya, <br>anggap saja rumah sendiri.</br></span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15] text-balance">
              Hugo Antonio Hien Wijaya
            </h1>

            <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
              {PROFILE_DATA.role}
            </p>

            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              {PROFILE_DATA.bio}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs inline-flex items-center gap-2"
              >
                Lihat Karya & Proyek
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-2.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-300/80 dark:hover:bg-neutral-700 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Unduh CV
              </button>
            </div>

            {/* Social Media Links Buttons with Tooltips */}
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-4">
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                Terhubung bersama saya:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi Profil LinkedIn Hugo Antonio"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-colors"
                  title="LinkedIn Hugo Antonio Hien Wijaya"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi Profil GitHub Hugo Antonio"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  aria-label="Kirim Email ke Hugo Antonio"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-colors"
                  title={`Email: ${PROFILE_DATA.email}`}
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kirim Pesan WhatsApp Langsung ke Hugo Antonio"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-colors"
                  title="WhatsApp Langsung"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Refined subtle frame */}
              <div className="overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md aspect-square">
                <img
                  src={PROFILE_DATA.avatar}
                  alt="Potret Profesional Hugo Antonio Hien Wijaya"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar placeholder if image fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center');
                      parent.innerHTML = `
                        <div class="text-center p-6">
                          <div class="w-20 h-20 mx-auto rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">HW</div>
                          <p class="font-semibold text-neutral-900 dark:text-neutral-100">Hugo Antonio</p>
                          <p class="text-xs text-neutral-500">Software Engineer</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Floating Minimal Info Card */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 p-4 rounded-xl bg-neutral-50/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-lg max-w-[260px]">
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Status Terkini
                </div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Tersedia untuk Rekayasa Proyek & Kolaborasi
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Jakarta · Waktu Indonesia Barat (UTC+7)
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Metrics Strip Below Split (Rule from 7_portfolio_photography.md) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 tabular-nums font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
