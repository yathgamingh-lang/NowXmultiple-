import React from 'react';
import {
  Home,
  Crown,
  Folder,
  Code2,
  Terminal as TerminalIcon,
  Play,
  User,
} from 'lucide-react';
import { TabType } from '../types';

interface BottomNavBarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  hasError: boolean;
  isDevUnlocked?: boolean;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  setActiveTab,
  hasError,
  isDevUnlocked = false,
}) => {
  const tabs: Array<{ id: TabType; label: string; icon: React.FC<{ className?: string }>; isDevRestricted?: boolean }> = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'vip', label: 'VIP Hub', icon: Crown },
    { id: 'files', label: 'Files', icon: Folder },
    { id: 'editor', label: 'Editor', icon: Code2 },
    { id: 'terminal', label: 'Terminal', icon: TerminalIcon, isDevRestricted: true },
    { id: 'preview', label: 'Preview', icon: Play },
    { id: 'dev', label: 'Dev', icon: User },
  ];

  return (
    <nav className="w-full bg-[#080602]/95 backdrop-blur-xl border-t border-amber-500/20 px-1 py-1.5 flex items-center justify-around z-40 select-none shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const isVip = tab.id === 'vip';

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-1.5 md:px-2.5 rounded-xl transition-all duration-200 relative ${
              isActive
                ? 'text-amber-400 bg-gradient-to-b from-amber-500/20 to-yellow-500/10 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                : isVip
                ? 'text-amber-400/80 hover:text-amber-300 hover:bg-amber-500/10'
                : 'text-amber-100/60 hover:text-amber-200 hover:bg-white/5'
            }`}
          >
            <div className="relative">
              <Icon
                className={`w-4 h-4 transition-transform duration-200 ${
                  isActive ? 'scale-110 stroke-[2.5] text-amber-300' : 'stroke-[1.8]'
                }`}
              />
              {/* Notification dot on Editor or Preview if error */}
              {(tab.id === 'editor' || tab.id === 'preview') && hasError && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              )}
              {/* Lock indicator for Terminal or Dev when developer is not unlocked */}
              {(tab.isDevRestricted || tab.id === 'dev') && !isDevUnlocked && (
                <span className="absolute -top-1 -right-1.5 px-0.5 py-0.2 rounded text-[7px] bg-rose-500/90 text-white font-bold font-mono">
                  🔒
                </span>
              )}
            </div>
            <span
              className={`text-[9px] md:text-[10px] font-mono mt-1 font-semibold tracking-tight ${
                isActive ? 'text-amber-300 font-bold' : 'text-amber-100/60'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

