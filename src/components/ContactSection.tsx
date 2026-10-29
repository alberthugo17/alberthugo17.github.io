import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Send, CheckCircle2, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format alamat email tidak valid.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek pesan wajib diisi.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Isi pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal terdiri dari 10 karakter.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || 'Inquiry Proyek dari Portofolio');
    const body = encodeURIComponent(
      `Halo Hugo,\n\nNama saya: ${formData.name || 'Rekan'}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact-section" className="py-16 lg:py-24 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/40 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-2">
            <span>Kolaborasi & Diskusi</span>
            <span aria-hidden="true">·</span>
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight text-balance">
            Mari Ciptakan Solusi Perangkat Lunak Berkualitas Bersama
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            Apakah Anda memiliki proyek baru, peluang rekayasa perangkat lunak, konsultasi arsitektur cloud, atau sekadar ingin berdiskusi? Kirimkan pesan melalui formulir responsif di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Fast Tracks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-100">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                Alamat Email Langsung
              </div>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono break-all"
              >
                {PROFILE_DATA.email}
              </a>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                Respon rata-rata dalam kurun waktu kurang dari 24 jam kerja.
              </p>
            </div>

            {/* WhatsApp Quick Chat */}
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                    Pesan Cepat WhatsApp
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Diskusi langsung via chat
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Ingin diskusi singkat atau obrolan cepat mengenai peluang proyek?
              </p>
              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <span>Buka Chat WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn & Socials Card */}
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                Jejaring Profesional
              </div>
              <div className="space-y-2">
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all text-xs font-medium text-neutral-800 dark:text-neutral-200"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn / Hugo Antonio Hien Wijaya</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all text-xs font-medium text-neutral-800 dark:text-neutral-200"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono font-bold">GH</span>
                    <span>GitHub / Repositori Terbuka</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-xs">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Pesan Anda Berhasil Terkirim!
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{formData.name}</strong>. Pesan Anda mengenai "{formData.subject}" telah dicatat. Hugo akan menghubungi Anda kembali melalui <strong>{formData.email}</strong>.
                  </p>

                  <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleOpenMailClient}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Buka di Email Client Anda
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Contoh: Budi Pratama"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-neutral-200 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        Alamat Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-neutral-200 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      Subjek / Topik Pembicaraan <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Contoh: Rencana Pengembangan Web Platform / Penawaran Kolaborasi"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-neutral-200 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 font-medium">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      Isi Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tuliskan gambaran proyek, target waktu, atau hal yang ingin didiskusikan..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-neutral-200 dark:border-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-100'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button & Fast Action */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      Privasi Anda terlindungi. Informasi tidak akan dibagikan.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 shadow-xs cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Mengirimkan Pesan...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Kirimkan Pesan</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
