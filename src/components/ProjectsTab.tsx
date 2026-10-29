import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Github, ArrowUpRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsTab: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['Semua', 'Full-Stack', 'Mobile & Fintech', 'Cloud & AI', 'Open Source'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        activeCategory === 'Semua' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-10">
      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat
                  ? 'bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Cari proyek atau teknologi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 px-4 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl">
          <p className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-1">
            Tidak ada proyek yang sesuai dengan kriteria pencarian.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
            Coba gunakan kata kunci lain seperti "React", "Cloud", "Fintech", atau reset filter.
          </p>
          <button
            onClick={() => {
              setActiveCategory('Semua');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Reset Filter & Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-md overflow-hidden ${
                project.featured && index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Project Image Preview with subtle zoom on hover */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1 font-medium">
                    Lihat Detail
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata with bullet separators (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2.5 font-medium">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    {project.featured && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-neutral-900 dark:text-neutral-200 font-semibold inline-flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Unggulan
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2"
                  >
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Key Metric if available */}
                  {project.metrics && (
                    <div className="text-xs text-neutral-700 dark:text-neutral-300 font-medium py-1.5 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 mb-4 font-mono">
                      {project.metrics}
                    </div>
                  )}

                  {/* Technology Tags (Minimal, unboxed text format with subtle bullet style) */}
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={tech} className="inline-flex items-center">
                        {tech}
                        {i < Math.min(project.technologies.length, 4) - 1 && (
                          <span className="ml-2 text-neutral-300 dark:text-neutral-600">/</span>
                        )}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-neutral-400">
                        +{project.technologies.length - 4} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-neutral-100 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
                >
                  Detail Arsitektur
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-1"
                      title="Kode Sumber di GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-1"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                    <span>{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tahun {selectedProject.year}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Image Showcase */}
                <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-video bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    Ikhtisar Proyek
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Metrics */}
                {selectedProject.metrics && (
                  <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
                    <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
                      Kinerja & Dampak Skalabilitas
                    </div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 font-mono">
                      {selectedProject.metrics}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                    Sorotan Arsitektur & Rekayasa
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Matrix */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    Teknologi yang Diterapkan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200"
                    >
                      <Github className="w-4 h-4" />
                      Lihat Kode di GitHub
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buka Demo Langsung
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  Tutup Jendela
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
