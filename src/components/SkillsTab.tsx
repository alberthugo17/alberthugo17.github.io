import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsTab: React.FC = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight mb-1">
                {category.title}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                {category.description}
              </p>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-neutral-500 dark:text-neutral-400 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-neutral-900 dark:bg-neutral-100 rounded-full"
                      />
                    </div>

                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
