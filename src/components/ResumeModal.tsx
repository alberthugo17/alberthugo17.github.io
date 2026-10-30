import React from 'react';
import { motion } from 'motion/react';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, EDUCATION_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-4xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
      >
        {/* Header Controls */}
        <div className="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-100/60 dark:bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Curriculum Vitae (CV) Resmi
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity inline-flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0">
          {/* Top Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-base font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
              {PROFILE_DATA.role}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Malang, Indonesia
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono">
                <Mail className="w-3.5 h-3.5" />
                {PROFILE_DATA.email}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                linkedin.com/in/hugoantonio
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Ringkasan Profesional
            </h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Pengalaman Kerja
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.role} — <span className="font-semibold text-neutral-600 dark:text-neutral-400">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {exp.period} ({exp.location})
                    </span>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {exp.keyContributions.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Pendidikan
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                      {edu.degree}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                    {edu.institution} — <span className="font-semibold text-neutral-900 dark:text-neutral-200">{edu.grade}</span>
                  </div>
                  {edu.honors && (
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {edu.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Sertifikasi Utama
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40 text-xs"
                >
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {cert.title}
                  </div>
                  <div className="text-neutral-500 mt-0.5">
                    {cert.issuer} · {cert.issueDate}
                  </div>
                  <div className="font-mono text-neutral-600 dark:text-neutral-400 mt-1">
                    ID: {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </div>
  );
};
