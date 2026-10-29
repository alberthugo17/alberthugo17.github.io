import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavClick: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {PROFILE_DATA.name}
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Software Engineer & Full-Stack Developer · Jakarta, Indonesia
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="LinkedIn"
              title="Profil LinkedIn Hugo Antonio Hien Wijaya"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="GitHub"
              title="GitHub Hugo Antonio"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="p-2 rounded-lg text-neutral-500 hover:text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Email"
              title={`Email: ${PROFILE_DATA.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-emerald-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp Langsung"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="ml-3 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom separator & copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-3">
          <div>
            © {currentYear} {PROFILE_DATA.name}. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => onNavClick('proyek')}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Proyek
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavClick('sertifikasi')}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Sertifikasi
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavClick('pendidikan')}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Pendidikan
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavClick('kontak')}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Kontak
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
