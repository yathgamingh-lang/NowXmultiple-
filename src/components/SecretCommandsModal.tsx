import React, { useState } from 'react';
import {
  Terminal,
  Key,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  Flame,
  Mic,
  X,
  Zap,
  RefreshCw,
  Gamepad2,
  Sliders,
  Bot,
  HelpCircle,
} from 'lucide-react';
import { soundFx } from '../soundFx';

interface SecretCommandsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockBuilder?: () => void;
  onOpenDevSettings?: () => void;
  onRunPrompt?: (prompt: string) => void;
}

export const SecretCommandsModal: React.FC<SecretCommandsModalProps> = ({
  isOpen,
  onClose,
  onUnlockBuilder,
  onOpenDevSettings,
  onRunPrompt,
}) => {
  // Blurry Click-to-Reveal States (Strictly required by User)
  const [isRevealed6769, setIsRevealed6769] = useState(false);
  const [isRevealedNowx, setIsRevealedNowx] = useState(false);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'codes' | 'voice' | 'games' | 'terminal'>('all');

  if (!isOpen) return null;

  const handleReveal6769 = () => {
    if (!isRevealed6769) {
      soundFx.playUnlockChime();
      setIsRevealed6769(true);
    }
  };

  const handleRevealNowx = () => {
    if (!isRevealedNowx) {
      soundFx.playUnlockChime();
      setIsRevealedNowx(true);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    soundFx.playKeyClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleApplyBuilder = () => {
    if (onUnlockBuilder) {
      onUnlockBuilder();
    }
    onClose();
  };

  const handleApplyDev = () => {
    if (onOpenDevSettings) {
      onOpenDevSettings();
    }
    onClose();
  };

  const handleTryVoice = (sample: string) => {
    if (onRunPrompt) {
      onRunPrompt(sample);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300 select-none">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-b from-[#110d05] via-[#090703] to-[#040301] border-2 border-amber-500/50 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.35)] flex flex-col text-white overflow-hidden">
        
        {/* Glowing Top Amber Neon Beam */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 animate-pulse" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-amber-500/20 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 flex items-center justify-center text-black font-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <Terminal size={22} className="text-black stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-mono text-sm sm:text-base font-extrabold tracking-wide text-white flex items-center gap-1.5">
                  NowXmultiple <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">COMMAND & CODE DOSSIER</span>
                </h2>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono font-bold">
                  MASTER GUIDE
                </span>
              </div>
              <p className="text-[11px] text-amber-200/70 font-mono">
                वेबसाइट के सभी गुप्त कोड्स, वॉयस कमांड्स और टर्मिनल डायरेक्टरी
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-amber-300/70 hover:text-white hover:bg-amber-500/20 border border-transparent hover:border-amber-500/40 transition-colors"
            title="बंद करें (Close)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="px-4 py-2 bg-black/60 border-b border-amber-500/20 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-black font-extrabold shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            🌟 All Commands
          </button>
          <button
            onClick={() => setActiveFilter('codes')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
              activeFilter === 'codes'
                ? 'bg-amber-500 text-black font-extrabold shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Key size={12} />
            Secret Codes
          </button>
          <button
            onClick={() => setActiveFilter('voice')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
              activeFilter === 'voice'
                ? 'bg-amber-500 text-black font-extrabold shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Mic size={12} />
            Voice Triggers
          </button>
          <button
            onClick={() => setActiveFilter('games')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
              activeFilter === 'games'
                ? 'bg-amber-500 text-black font-extrabold shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Gamepad2 size={12} />
            Gamer & AI
          </button>
          <button
            onClick={() => setActiveFilter('terminal')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
              activeFilter === 'terminal'
                ? 'bg-amber-500 text-black font-extrabold shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Terminal size={12} />
            Terminal Root
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 custom-scrollbar">

          {/* ======================================================== */}
          {/* SECTION 1: BLURRED CLICK-TO-REVEAL SECRET CODES (MANDATORY) */}
          {/* ======================================================== */}
          {(activeFilter === 'all' || activeFilter === 'codes') && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-amber-400" />
                  <h3 className="font-mono text-xs sm:text-sm font-black text-amber-300 tracking-wider">
                    🔐 VIP SECRET UNLOCK CODES (सुरक्षित कोड्स)
                  </h3>
                </div>
                <span className="text-[10px] text-amber-400/80 font-mono animate-pulse">
                  👉 कोड देखने के लिए ब्लर बॉक्स पर क्लिक करें
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* --- Code 1: 6769 (Developer Settings) --- */}
                <div className="bg-[#120d04] border border-amber-500/30 rounded-xl p-3.5 flex flex-col justify-between space-y-3 relative overflow-hidden group shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold font-mono">
                        <Key size={13} className="text-amber-400" />
                        <span>DEVELOPER ACCESS KEY</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        रूट सेटिंग्स, सिस्टम लॉग्स, साउंड और डायग्नोस्टिक्स अनलॉक करने के लिए
                      </p>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono border border-amber-500/40">
                      DEV PIN
                    </span>
                  </div>

                  {/* Blurry Box Container */}
                  <div
                    onClick={handleReveal6769}
                    className={`relative rounded-lg p-3 text-center transition-all cursor-pointer border ${
                      isRevealed6769
                        ? 'bg-amber-500/15 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-black/80 hover:bg-black/95 border-amber-500/40 hover:border-amber-400'
                    }`}
                  >
                    {/* Blurry Text */}
                    <div
                      className={`font-mono text-xl sm:text-2xl font-black tracking-widest transition-all duration-300 ${
                        isRevealed6769
                          ? 'text-amber-300 filter-none select-text'
                          : 'text-amber-400 filter blur-md select-none group-hover:blur-sm'
                      }`}
                    >
                      6769
                    </div>

                    {/* Unrevealed Overlay Badge */}
                    {!isRevealed6769 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-lg">
                        <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-300 bg-black/80 px-2.5 py-1 rounded-full border border-amber-400/60 shadow-lg animate-bounce">
                          <Lock size={12} className="text-amber-400" />
                          CLICK TO UNBLUR (6769)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons (Copy / Auto Open) */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => copyToClipboard('6769', '6769')}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-amber-500/30 text-amber-200 text-[11px] font-mono transition-colors"
                    >
                      {copiedCode === '6769' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCode === '6769' ? 'Copied!' : 'Copy 6769'}</span>
                    </button>
                    {onOpenDevSettings && (
                      <button
                        onClick={handleApplyDev}
                        className="flex items-center gap-1 py-1.5 px-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400 text-amber-300 text-[11px] font-mono font-bold transition-colors"
                      >
                        <Zap size={12} />
                        <span>Open Dev</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* --- Code 2: NOWXMULTIPLE (VIP Builder Key) --- */}
                <div className="bg-[#120d04] border border-amber-500/30 rounded-xl p-3.5 flex flex-col justify-between space-y-3 relative overflow-hidden group shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold font-mono">
                        <Flame size={13} className="text-amber-400" />
                        <span>VIP BUILDER MASTER KEY</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        ऑटोनोमस बिल्डर, 3D गेम्स, Sensi सुइट और AI मेकर अनलॉक करने के लिए
                      </p>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono border border-purple-500/40">
                      VIP PASS
                    </span>
                  </div>

                  {/* Blurry Box Container */}
                  <div
                    onClick={handleRevealNowx}
                    className={`relative rounded-lg p-3 text-center transition-all cursor-pointer border ${
                      isRevealedNowx
                        ? 'bg-purple-500/15 border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'bg-black/80 hover:bg-black/95 border-amber-500/40 hover:border-amber-400'
                    }`}
                  >
                    {/* Blurry Text */}
                    <div
                      className={`font-mono text-xl sm:text-2xl font-black tracking-widest transition-all duration-300 ${
                        isRevealedNowx
                          ? 'text-purple-300 filter-none select-text'
                          : 'text-purple-400 filter blur-md select-none group-hover:blur-sm'
                      }`}
                    >
                      NOWXMULTIPLE
                    </div>

                    {/* Unrevealed Overlay Badge */}
                    {!isRevealedNowx && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-lg">
                        <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-purple-300 bg-black/80 px-2.5 py-1 rounded-full border border-purple-400/60 shadow-lg animate-bounce">
                          <Lock size={12} className="text-purple-400" />
                          CLICK TO UNBLUR (NOWXMULTIPLE)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons (Copy / Auto Unlock) */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => copyToClipboard('NOWXMULTIPLE', 'NOWXMULTIPLE')}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-purple-500/30 text-purple-200 text-[11px] font-mono transition-colors"
                    >
                      {copiedCode === 'NOWXMULTIPLE' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCode === 'NOWXMULTIPLE' ? 'Copied!' : 'Copy NOWXMULTIPLE'}</span>
                    </button>
                    {onUnlockBuilder && (
                      <button
                        onClick={handleApplyBuilder}
                        className="flex items-center gap-1 py-1.5 px-2.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400 text-purple-200 text-[11px] font-mono font-bold transition-colors"
                      >
                        <Unlock size={12} />
                        <span>Unlock Builder</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 2: 🎙️ VOICE WAKE WORD & MASTER COMMANDS */}
          {/* ======================================================== */}
          {(activeFilter === 'all' || activeFilter === 'voice') && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mic size={18} className="text-amber-400" />
                <h3 className="font-mono text-xs sm:text-sm font-black text-amber-300 tracking-wider">
                  🎙️ WAKE WORD & VOICE ASSISTANT (आवाज़ से हुक्म दें)
                </h3>
              </div>

              {/* Master Wake Word Callout */}
              <div className="bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-transparent border border-amber-400/50 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-black font-black text-base shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                    👑
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-300 font-mono font-bold uppercase">
                      Master Wake Word (मास्टर वेक-वर्ड)
                    </div>
                    <div className="font-mono text-base font-extrabold text-white">
                      "Nowempireoff"
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('Nowempireoff', 'wake')}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-amber-300 text-[10px] font-mono flex items-center gap-1 transition-colors"
                >
                  {copiedCode === 'wake' ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                  <span>{copiedCode === 'wake' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Voice Command Examples */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {[
                  {
                    title: '🏎️ 3D Car Racing Game',
                    cmd: 'Nowempireoff, 3D car racing game banao',
                    desc: 'Deploy instant 3D nitro highway racer in preview',
                  },
                  {
                    title: '⚡ Free Fire Headshot Sensi',
                    cmd: 'Nowempireoff, Free Fire headshot sensitivity app banao',
                    desc: 'Mounts real Pro Sensi & Recoil Drag test arena',
                  },
                  {
                    title: '🎯 FPS Target Shooting Game',
                    cmd: 'Nowempireoff, target shooting game banao',
                    desc: 'Builds 3D FPS target practice arena with scoring',
                  },
                  {
                    title: '🕹️ Crosshair & Claw HUD',
                    cmd: 'Nowempireoff, crosshair HUD studio kholo',
                    desc: 'Launches customizable crosshair reticle designer',
                  },
                  {
                    title: '🤖 Custom AI Synthesizer',
                    cmd: 'Nowempireoff, custom AI banao',
                    desc: 'Launches AI Maker Studio with persona creator',
                  },
                  {
                    title: '💡 Root Brightness Control',
                    cmd: 'Nowempireoff, brightness kam kar do',
                    desc: 'Dispatches root screen brightness command',
                  },
                  {
                    title: '📱 Screen Touch Gesture',
                    cmd: 'Nowempireoff, screen par swipe karo',
                    desc: 'Executes simulated touch swipe coordinate',
                  },
                  {
                    title: '❓ AI Knowledge & Math',
                    cmd: 'Nowempireoff, 500 ka 18% kitna hoga?',
                    desc: 'Speaks accurate calculation and smart answer',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleTryVoice(item.cmd)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/50 cursor-pointer transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-amber-300 font-bold flex items-center justify-between">
                        <span>{item.title}</span>
                        <span className="text-[10px] text-gray-400 group-hover:text-amber-300">Tap to run ➔</span>
                      </div>
                      <div className="text-white text-[11px] mt-1 bg-black/40 px-2 py-1 rounded border border-white/5 font-mono">
                        "{item.cmd}"
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: 💻 TERMINAL COMMANDS CHEAT SHEET */}
          {/* ======================================================== */}
          {(activeFilter === 'all' || activeFilter === 'terminal') && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-amber-400" />
                <h3 className="font-mono text-xs sm:text-sm font-black text-amber-300 tracking-wider">
                  💻 TERMINAL & ROOT COMMANDS (रूट कमांड्स)
                </h3>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                {[
                  {
                    cmd: 'su 0',
                    desc: 'सुपरयूज़र रूट प्रिविलेज वेरिफ़ाई करें (UID: 0)',
                    badge: 'ROOT',
                  },
                  {
                    cmd: 'builder unlock NOWXMULTIPLE',
                    desc: 'ऑटोनोमस बिल्डर मोड तुरंत अनलॉक करें',
                    badge: 'VIP',
                  },
                  {
                    cmd: 'dev unlock 6769',
                    desc: 'डेवलपर सेटिंग्स और रूट लॉग्स अनलॉक करें',
                    badge: 'DEV',
                  },
                  {
                    cmd: 'deploy sensi-app',
                    desc: 'Free Fire / BGMI Pro Sensi Suite डिप्लॉय करें',
                    badge: 'GAME',
                  },
                  {
                    cmd: 'patch -p1 script.js --in-place',
                    desc: 'सिंटैक्स बग्स को ऑटोमैटिक तुरंत रिपेयर करें',
                    badge: 'AUTO-FIX',
                  },
                  {
                    cmd: 'session reset --fresh-boot',
                    desc: 'सेशन रीसेट करें और फ्रेश बूट स्टेट में लाएं',
                    badge: 'RESET',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-black/60 border border-amber-500/20 flex items-center justify-between hover:border-amber-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="text-emerald-400 font-bold">$</span>
                      <code className="text-amber-200 font-bold truncate">{item.cmd}</code>
                      <span className="hidden sm:inline text-gray-400 text-[10px]">({item.desc})</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300">
                        {item.badge}
                      </span>
                      <button
                        onClick={() => copyToClipboard(item.cmd, `t-${idx}`)}
                        className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-amber-300 transition-colors"
                      >
                        {copiedCode === `t-${idx}` ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 4: 🎮 GAMER & AI MAKER FEATURES */}
          {/* ======================================================== */}
          {(activeFilter === 'all' || activeFilter === 'games') && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Gamepad2 size={18} className="text-amber-400" />
                <h3 className="font-mono text-xs sm:text-sm font-black text-amber-300 tracking-wider">
                  🎮 GAMER SECTION & AI MAKER CAPABILITIES
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/40 space-y-1">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Sliders size={14} />
                    <span>Free Fire & BGMI Sensi Engine</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Real DPI multipliers, General / Red Dot / 2X / 4X / AWM / Free Look sliders, iPhone & ROG Phone presets, and live Drag Recoil physics canvas.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/40 space-y-1">
                  <div className="font-bold text-purple-300 flex items-center gap-1.5">
                    <Bot size={14} />
                    <span>AI Maker Studio</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Create custom AI agents with custom personas, system prompts, emojis, and deploy directly into the Preview tab.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-amber-500/20 bg-black/60 flex items-center justify-between">
          <div className="text-[11px] font-mono text-amber-200/70 flex items-center gap-1.5">
            <Sparkles size={13} className="text-amber-400" />
            <span>NowXmultiple Autonomous IDE by <strong className="text-amber-300">Nowempireoff</strong></span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-mono font-black text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all flex items-center gap-1.5"
          >
            <span>समझ गया (Enter IDE)</span>
            <Check size={14} className="stroke-[3]" />
          </button>
        </div>

      </div>
    </div>
  );
};
