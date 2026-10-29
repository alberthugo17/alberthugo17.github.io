import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationTab: React.FC = () => {
  return (
    <div className="py-10 max-w-5xl mx-auto">
      <div className="space-y-8">
        {EDUCATION_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-xs"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
                  <GraduationCap className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  <span>{item.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                  {item.institution}
                </div>
              </div>

              {/* Grade indicator */}
              <div className="sm:text-right shrink-0">
                <span className="inline-block py-1 px-3 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.grade}
                </span>
                {item.honors && (
                  <div className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-1 flex items-center sm:justify-end gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.honors}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Relevant Coursework */}
            <div className="mb-5">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Mata Kuliah & Kurikulum Inti</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {item.relevantCourses.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                Pencapaian & Kontribusi Kepemimpinan
              </div>
              <ul className="space-y-1.5">
                {item.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
