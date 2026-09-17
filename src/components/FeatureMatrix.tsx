import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Play,
  Lock,
  CheckCircle2,
  Terminal,
  Cpu,
  Shield,
  Wifi,
  GitBranch,
  Radio,
  Gamepad2,
  Bot,
  Copy,
  Check,
} from 'lucide-react';
import { FeatureCatalogItem, catalogFeatures } from '../featureCatalog';
import { soundFx } from '../soundFx';

interface FeatureMatrixProps {
  isDevUnlocked: boolean;
  onExecuteCommand?: (cmd: string) => void;
  onOpenTerminal?: () => void;
  onUnlockDevPrompt?: () => void;
}

export const FeatureMatrix: React.FC<FeatureMatrixProps> = ({
  isDevUnlocked,
  onExecuteCommand,
  onOpenTerminal,
  onUnlockDevPrompt,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [executedId, setExecutedId] = useState<string | null>(null);

  const categories = [
    'All',
    'Root OS',
    'AI & LLM',
    'Security & Pentest',
    'Network & Proxy',
    'DevOps & Git',
    'Hardware & Sensors',
    'Media & Graphics',
    'Automation & Bots',
  ];

  const filteredFeatures = useMemo(() => {
    return catalogFeatures.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleRun = (item: FeatureCatalogItem) => {
    if (item.isDevOnly && !isDevUnlocked) {
      soundFx.playLockTone();
      if (onUnlockDevPrompt) onUnlockDevPrompt();
      return;
    }
    soundFx.playTapTone();
    setExecutedId(item.id);
    setTimeout(() => setExecutedId(null), 1500);

    if (onExecuteCommand) {
      onExecuteCommand(item.command);
    }
    if (onOpenTerminal) {
      onOpenTerminal();
    }
  };

  const handleCopy = (item: FeatureCatalogItem) => {
    soundFx.playTapTone();
    navigator.clipboard.writeText(item.command);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Root OS':
        return <Cpu size={14} className="text-rose-400" />;
      case 'AI & LLM':
        return <Bot size={14} className="text-amber-400" />;
      case 'Security & Pentest':
        return <Shield size={14} className="text-emerald-400" />;
      case 'Network & Proxy':
        return <Wifi size={14} className="text-cyan-400" />;
      case 'DevOps & Git':
        return <GitBranch size={14} className="text-blue-400" />;
      case 'Hardware & Sensors':
        return <Radio size={14} className="text-purple-400" />;
      case 'Media & Graphics':
        return <Gamepad2 size={14} className="text-pink-400" />;
      default:
        return <Terminal size={14} className="text-yellow-400" />;
    }
  };

  return (
    <div className="w-full bg-[#0d111c]/90 border border-white/10 rounded-2xl p-4 shadow-xl text-left space-y-3 font-mono">
      {/* Header with Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h4 className="font-mono font-bold text-white text-sm tracking-wide">
              AUTONOMOUS ARCHITECTURE ENGINE • 105 ACTIVE CAPABILITIES
            </h4>
          </div>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Root Kernel, Live AI, Pentesting, Hardware Emulation &amp; Automation Modules
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold text-[10px]">
            {filteredFeatures.length} / {catalogFeatures.length} FEATURES
          </span>
          <span
            className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${
              isDevUnlocked
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
            }`}
          >
            {isDevUnlocked ? 'DEV UNLOCKED (ALL 105)' : 'PUBLIC ACCESS (DEV LOCKED)'}
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-2 pt-1">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="खोजें (e.g. root, frida, gemini, seLinux, battery, port, audio)..."
            className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 outline-none"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[10px] whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-black shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Features */}
      <div className="max-h-72 overflow-y-auto pr-1 space-y-2 select-text">
        {filteredFeatures.map((feat) => {
          const isLocked = feat.isDevOnly && !isDevUnlocked;

          return (
            <div
              key={feat.id}
              className={`p-2.5 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${
                isLocked
                  ? 'bg-black/40 border-white/5 opacity-70'
                  : 'bg-[#121625] hover:bg-[#161c30] border-white/10'
              }`}
            >
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <div className="p-1.5 rounded-lg bg-black/50 border border-white/10 flex-shrink-0 mt-0.5">
                  {getCategoryIcon(feat.category)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-xs text-white truncate">{feat.name}</span>
                    <span className="px-1.5 py-0.2 rounded bg-white/5 text-[9px] text-gray-400 border border-white/5">
                      {feat.category}
                    </span>
                    {feat.isDevOnly && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded flex items-center gap-1 ${
                          isDevUnlocked
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {isDevUnlocked ? '✔ DEV CLEARED' : '🔒 DEV ONLY'}
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] text-gray-400 mt-0.5 leading-snug line-clamp-2">
                    {feat.description}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <code className="text-[10px] text-cyan-300 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/20 max-w-full truncate inline-block">
                      {feat.command}
                    </code>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleCopy(feat)}
                  title="Copy command"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-[10px] flex items-center gap-1"
                >
                  {copiedId === feat.id ? (
                    <Check size={12} className="text-emerald-400" />
                  ) : (
                    <Copy size={12} />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleRun(feat)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95 ${
                    isLocked
                      ? 'bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/40'
                      : executedId === feat.id
                      ? 'bg-emerald-400 text-black'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-black'
                  }`}
                >
                  {isLocked ? (
                    <>
                      <Lock size={11} />
                      <span>Unlock Dev</span>
                    </>
                  ) : executedId === feat.id ? (
                    <>
                      <CheckCircle2 size={11} />
                      <span>Triggered!</span>
                    </>
                  ) : (
                    <>
                      <Play size={11} />
                      <span>Execute</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
