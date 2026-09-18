import React from 'react';
import { Settings, Plus, Crown, Gem, Key } from 'lucide-react';
import { TabType } from '../types';

interface TopBarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenSettings: () => void;
  onNewProject: () => void;
  isBusy: boolean;
  onOpenCommandDossier?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSettings,
  onNewProject,
  isBusy,
  onOpenCommandDossier,
}) => {
  return (
    <header className="w-full bg-[#080602]/95 backdrop-blur-xl border-b border-amber-500/20 px-3 py-2 flex items-center justify-between text-xs select-none sticky top-0 z-40 shadow-lg shadow-black/80">
      {/* Left: Branding & Project selector */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-1.5 font-black text-amber-400 tracking-wider hover:text-amber-300 transition-colors"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-600 flex items-center justify-center text-black font-extrabold text-[11px] shadow-[0_0_12px_rgba(245,158,11,0.5)]">
            <Gem className="w-3.5 h-3.5 text-black stroke-[2.5]" />
          </div>
          <span className="font-mono text-sm tracking-tight text-white font-bold">
            NowX<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 font-extrabold">multiple</span>
          </span>
        </button>

        <span className="text-amber-900/60">|</span>

        {/* Master Wake Word indicator with Golden Diamond Accent */}
        <div className="hidden sm:flex items-center gap-1 bg-amber-500/15 border border-amber-400/50 px-2 py-0.5 rounded-full text-amber-300 text-[10px] font-mono font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>👑 NOWEMPIREOFF: READY</span>
        </div>

        {/* Golden Diamond Luxury Indicator */}
        <div className="hidden md:flex items-center gap-1 bg-gradient-to-r from-amber-400/10 via-yellow-300/10 to-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full text-amber-200 text-[10px] font-mono">
          <Gem className="w-2.5 h-2.5 text-amber-400" />
          <span className="font-semibold tracking-wider">GOLDEN DIAMOND</span>
        </div>

        <button
          onClick={() => setActiveTab('vip')}
          className="flex items-center gap-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 border border-amber-400/50 px-2 py-0.5 rounded-full text-amber-300 text-[10px] font-mono font-bold transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
        >
          <Crown className="w-3 h-3 text-amber-400" />
          <span>VIP</span>
        </button>

        {onOpenCommandDossier && (
          <button
            onClick={onOpenCommandDossier}
            className="flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30 border border-yellow-400/50 px-2 py-0.5 rounded-full text-yellow-300 text-[10px] font-mono font-bold transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
            title="Secret Codes (6769, NOWXMULTIPLE)"
          >
            <Key className="w-3 h-3 text-yellow-400 animate-pulse" />
            <span>CODES</span>
          </button>
        )}

        {/* 🛡️ सीक्रेट एडमिन बटन - सिर्फ तेरे लिए */}
        <button
          onClick={() => setActiveTab('dev')}
          className="flex items-center gap-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/50 px-2.5 py-0.5 rounded-full text-cyan-300 text-[10px] font-mono font-bold transition-all shadow-sm"
        >
          <span>🛡️ ADMIN ACCESS</span>
        </button>
      </div>

      {/* Right: Status Pills, Visualizer & Controls */}
      <div className="flex items-center gap-1.5">
        {/* Root status badge */}
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ROOT (UID:0)</span>
        </div>

        {/* Ready / Busy status badge */}
        <div
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded font-mono text-[10px] font-bold ${
            isBusy
              ? 'bg-amber-500/10 border border-amber-500/40 text-amber-400'
              : 'bg-amber-400/10 border border-amber-400/40 text-amber-300'
          }`}
        >
          <span>{isBusy ? 'BUSY' : 'READY'}</span>
        </div>

        {/* + New Button */}
        <button
          onClick={onNewProject}
          title="New Prompt or Project"
          className="flex items-center gap-0.5 px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 font-mono text-[11px] font-semibold transition-all active:scale-95 shadow-[0_0_8px_rgba(245,158,11,0.15)]"
        >
          <Plus className="w-3 h-3 text-amber-400" />
          <span>New</span>
        </button>

        {/* Settings button */}
        <button
          onClick={onOpenSettings}
          title="IDE Settings & Developer Profile"
          className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};


