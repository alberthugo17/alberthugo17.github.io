import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Award, GraduationCap, Briefcase, Cpu } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  counts: {
    proyek: number;
    sertifikasi: number;
    pendidikan: number;
    pengalaman: number;
    keahlian: number;
  };
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  counts,
}) => {
  const tabs = [
    { id: 'proyek', label: 'Proyek', icon: FolderGit2, count: counts.proyek },
    { id: 'sertifikasi', label: 'Sertifikasi', icon: Award, count: counts.sertifikasi },
    { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap, count: counts.pendidikan },
    { id: 'pengalaman', label: 'Pengalaman', icon: Briefcase, count: counts.pengalaman },
    { id: 'keahlian', label: 'Keahlian', icon: Cpu, count: counts.keahlian },
  ];

  return (
    <div id="tabs-section" className="scroll-mt-20">
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Segmented controls / Tabs list with horizontal scroll on mobile */}
          <div className="flex space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-neutral-900 dark:text-neutral-50 font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-mono tabular-nums ${
                      isActive
                        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold'
                        : 'bg-neutral-100 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400'
                    }`}
                  >
                    {tab.count}
                  </span>

                  {/* Active bottom underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
