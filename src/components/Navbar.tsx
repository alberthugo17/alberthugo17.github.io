import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    if (id === 'tentang') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'kontak') {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onTabChange(id);
      const el = document.getElementById('tabs-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-neutral-50/50 backdrop-blur-xl border-neutral-200/40 shadow-xs'
            : 'bg-neutral-50 border-neutral-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            Hugo Antonio
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-900 ${
                  activeTab === item.id
                    ? 'text-neutral-900 font-semibold border-b-2 border-neutral-900 -mb-[2px]'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action & resume shortcut */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Resume preview */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-900 bg-white/75 hover:bg-white rounded-lg shadow-2xs transition-all whitespace-nowrap shrink-0"
            >
              Ringkasan CV
            </button>

            {/* Primary Action CTA */}
            <button
              onClick={() => handleNavClick('kontak')}
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              Hubungi Saya
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors"
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
          <div className="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-neutral-50 border-l border-neutral-200 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                <span className="font-bold text-neutral-900 text-base">
                  Hugo Antonio
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-neutral-200/80 text-neutral-900 font-semibold'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-xs font-semibold text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-100 text-center transition-colors"
              >
                Ringkasan CV
              </button>
              <button
                onClick={() => handleNavClick('kontak')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-lg text-center hover:bg-neutral-800 transition-colors"
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
