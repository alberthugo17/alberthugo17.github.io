import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ExternalLink, X, Check, Copy } from 'lucide-react';
import { CERTIFICATIONS_DATA, CertificationItem } from '../data/portfolioData';
import { NvidiaLogo } from './NvidiaLogo';

export const CertificationsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const uniqueCategories = Array.from(new Set(CERTIFICATIONS_DATA.map((c) => c.category)));
  const categories = ['Semua', ...uniqueCategories];

  const filteredCerts = CERTIFICATIONS_DATA.filter((cert) => {
    return selectedCategory === 'Semua' || cert.category === selectedCategory;
  });

  const handleCopyId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-10">
      {/* Category Filter (hanya ditampilkan jika ada lebih dari 1 kategori unik) */}
      {uniqueCategories.length > 1 && (
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800/80 mb-8 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Certifications Grid */}
      <div className={`grid grid-cols-1 ${filteredCerts.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl mx-auto'} gap-6`}>
        {filteredCerts.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            onClick={() => setActiveCert(cert)}
            className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md cursor-pointer"
          >
            <div>
              {/* Header with Issuer Mark disamping kiri tulisan 'Terverifikasi' */}
              <div className="flex items-center justify-between mb-5">
                <div className="shrink-0 flex items-center">
                  {cert.useNvidiaLogo ? (
                    <div className="shrink-0 flex items-center text-neutral-900 dark:text-neutral-100 transition-colors">
                      <NvidiaLogo className="h-6 sm:h-7 w-auto shrink-0 text-neutral-900 dark:text-neutral-100 transition-colors" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center font-mono font-bold text-xs text-neutral-800 dark:text-neutral-200">
                      {cert.issuerLogoText}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Terverifikasi</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 leading-snug">
                {cert.title}
              </h3>

              <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 font-medium">
                Penerbit: {cert.issuer}
              </div>

              {/* Metadata Unboxed */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                <span>Diterbitkan: {cert.issueDate}</span>
                <span aria-hidden="true">·</span>
                <span>Masa Berlaku: {cert.expiryDate}</span>
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Credential ID row */}
              <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-4">
                <span className="truncate max-w-[200px] sm:max-w-[280px]">ID: {cert.credentialId}</span>
                <button
                  type="button"
                  onClick={(e) => handleCopyId(cert.credentialId, e)}
                  className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 ml-2 p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shrink-0"
                  title="Salin ID Kredensial"
                >
                  {copiedId === cert.credentialId ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                {cert.skills.slice(0, 4).map((skill, i) => (
                  <span key={skill} className="inline-flex items-center">
                    {skill}
                    {i < Math.min(cert.skills.length, 4) - 1 && (
                      <span className="ml-2 text-neutral-300 dark:text-neutral-600">·</span>
                    )}
                  </span>
                ))}
                {cert.skills.length > 4 && (
                  <span className="text-neutral-400">+{cert.skills.length - 4}</span>
                )}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 mt-5 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:underline flex items-center gap-1">
                Verifikasi Kredensial
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {cert.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl shadow-2xl p-6 z-10 space-y-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3">
                  {activeCert.useNvidiaLogo ? (
                    <div className="shrink-0 flex items-center text-neutral-900 dark:text-neutral-100 transition-colors">
                      <NvidiaLogo className="h-7 sm:h-8 w-auto shrink-0 text-neutral-900 dark:text-neutral-100 transition-colors" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 flex items-center justify-center font-mono font-bold text-sm text-neutral-800 dark:text-neutral-200 shrink-0">
                      {activeCert.issuerLogoText}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg sm:text-xl leading-tight">
                      {activeCert.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Penerbit Resmi: {activeCert.issuer}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="p-1 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors shrink-0"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
                <p className="leading-relaxed text-sm">
                  {activeCert.description}
                </p>

                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">ID Kredensial:</span>
                    <span className="font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                      {activeCert.credentialId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Tanggal Terbit:</span>
                    <span>{activeCert.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Masa Berlaku:</span>
                    <span>{activeCert.expiryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Status Validasi:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Aktif & Terotentikasi
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400 mb-2">
                    Domain Kompetensi yang Divalidasi:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <a
                  href={activeCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verifikasi di Situs Penerbit
                </a>

                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="px-3 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
