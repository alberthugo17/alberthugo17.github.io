import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'tentang', label: 'Tentang' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'sertifikasi', label: 'Sertifikasi' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'keahlian', label: 'Keahlian' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onTabChange(id);
    if (id === 'tentang') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'kontak') {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('tabs-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b backdrop-blur-md ${
          isScrolled
            ? 'bg-neutral-100/50 dark:bg-neutral-950/50 border-neutral-200/60 dark:border-neutral-800/60 shadow-xs'
            : 'bg-neutral-100/40 dark:bg-neutral-950/40 border-neutral-200/40 dark:border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            Hugo Antonio
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-900 dark:hover:text-neutral-100 ${
                  activeTab === item.id
                    ? 'text-neutral-900 dark:text-neutral-100 font-semibold border-b-2 border-neutral-900 dark:border-neutral-100 -mb-[2px]'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions, Resume, Contact & Theme Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Quick Resume preview */}
            <button
              onClick={onOpenResume}
              className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100 bg-white/90 dark:bg-neutral-900/80 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-800 rounded-lg transition-all whitespace-nowrap shrink-0 shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              <span>Ringkasan CV</span>
            </button>

            {/* Primary Action CTA dengan Border untuk memastikan ukuran sama dengan tombol sebelahnya */}
            <button
              onClick={() => handleNavClick('kontak')}
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 border border-neutral-900 dark:border-neutral-100 rounded-lg hover:bg-neutral-800 hover:border-neutral-800 dark:hover:bg-neutral-200 dark:hover:border-neutral-200 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              Hubungi Saya
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Tombol Pengalih Mode Terang / Gelap */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
              className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-white/90 dark:bg-neutral-900/80 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-800 rounded-lg transition-colors shrink-0 shadow-2xs"
              title={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="lg:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-neutral-100 dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 mb-6">
                <span className="font-bold text-neutral-900 dark:text-neutral-100 text-base">
                  Hugo Antonio
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
                    className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                    title={theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg text-center transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                <span>Ringkasan CV</span>
              </button>
              <button
                onClick={() => handleNavClick('kontak')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 border border-neutral-900 dark:border-neutral-100 rounded-lg text-center hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
              >
                Hubungi Saya
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
