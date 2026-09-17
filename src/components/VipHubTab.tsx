import React, { useState, useRef } from 'react';
import {
  CreditCard,
  Crown,
  Lock,
  Unlock,
  Zap,
  Shield,
  Sparkles,
  QrCode,
  Download,
  Copy,
  Check,
  RotateCcw,
  Upload,
  Gamepad2,
  Gauge,
  Cpu,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../soundFx';

interface VipHubTabProps {
  isBuilderUnlocked: boolean;
  onOpenUnlockModal: () => void;
  onNavigateToBuilder?: () => void;
  onLaunchGame?: (gameType: 'shooter' | 'cyberpunk') => void;
  onSelectTab?: (tab: 'home' | 'vip' | 'files' | 'editor' | 'terminal' | 'preview') => void;
  onLoadPreset?: (preset: 'shooter' | 'game' | 'apple' | 'monitor' | 'bakery' | 'calc' | 'todo') => void;
}

export const VipHubTab: React.FC<VipHubTabProps> = ({
  isBuilderUnlocked,
  onOpenUnlockModal,
  onNavigateToBuilder,
  onLaunchGame,
  onSelectTab,
  onLoadPreset,
}) => {
  const [activeSection, setActiveSection] = useState<'card' | 'premium'>('card');

  const handleGameLaunch = (gameType: 'shooter' | 'cyberpunk') => {
    soundFx.playFixChime();
    if (onLaunchGame) {
      onLaunchGame(gameType);
    } else if (onLoadPreset) {
      onLoadPreset(gameType === 'shooter' ? 'shooter' : 'game');
    }
    if (onSelectTab) {
      onSelectTab('preview');
    }
  };

  const handleOpenBuilder = () => {
    soundFx.playTapTone();
    if (onNavigateToBuilder) {
      onNavigateToBuilder();
    } else if (onSelectTab) {
      onSelectTab('home');
    }
  };

  // ================= Card Maker State =================
  const [cardName, setCardName] = useState('Nowempireoff');
  const [cardRole, setCardRole] = useState('Lead Autonomous Architect');
  const [cardHandle, setCardHandle] = useState('@Nowempireoff');
  const [cardLevel, setCardLevel] = useState('Lv. 99 • Grandmaster');
  const [cardBio, setCardBio] = useState('Bypassing limits with autonomous code execution.');
  const [cardTheme, setCardTheme] = useState<'cyan' | 'gold' | 'emerald' | 'ruby' | 'purple'>('cyan');
  const [cardLogoType, setCardLogoType] = useState<string>('trident');
  const [customLogoUrl, setCustomLogoUrl] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ================= Game Booster State =================
  const [isBoosting, setIsBoosting] = useState(false);
  const [isBoostActive, setIsBoostActive] = useState(false);
  const [boostProgress, setBoostProgress] = useState(0);

  // Handle Custom Logo Upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomLogoUrl(event.target.result as string);
          setCardLogoType('custom');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Copy card details to clipboard
  const handleCopyCard = () => {
    const text = `VIP CARD IDENTITY:
Name: ${cardName}
Role: ${cardRole}
Handle: ${cardHandle}
Rank: ${cardLevel}
Card Serial: NOW-2026-X99
Verification: NOWEMPIREOFF ROOT VERIFIED
Bio: ${cardBio}`;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trigger Game Booster
  const handleActivateBooster = () => {
    if (isBoosting) return;
    soundFx.playBoostSound();
    setIsBoosting(true);
    setBoostProgress(10);

    const stepInterval = setInterval(() => {
      setBoostProgress((prev) => {
        if (prev >= 100) {
          clearInterval(stepInterval);
          setIsBoosting(false);
          setIsBoostActive(true);
          soundFx.playFixChime();
          return 100;
        }
        return prev + 18;
      });
    }, 180);
  };

  // Theme Gradients
  const themeStyles = {
    cyan: {
      bg: 'from-[#001f3f] via-[#051329] to-[#010915]',
      border: 'border-cyan-400/50',
      glow: 'shadow-[0_0_35px_rgba(0,240,255,0.25)]',
      accent: 'text-cyan-400',
      chip: 'from-cyan-400/30 to-blue-500/30 border-cyan-400',
    },
    gold: {
      bg: 'from-[#3a2503] via-[#1a1205] to-[#0a0701]',
      border: 'border-amber-400/60',
      glow: 'shadow-[0_0_35px_rgba(245,158,11,0.3)]',
      accent: 'text-amber-400',
      chip: 'from-amber-400/40 to-yellow-600/30 border-amber-400',
    },
    emerald: {
      bg: 'from-[#032b18] via-[#04170d] to-[#010805]',
      border: 'border-emerald-400/50',
      glow: 'shadow-[0_0_35px_rgba(16,185,129,0.25)]',
      accent: 'text-emerald-400',
      chip: 'from-emerald-400/30 to-teal-500/30 border-emerald-400',
    },
    ruby: {
      bg: 'from-[#3b0817] via-[#1c040b] to-[#0a0205]',
      border: 'border-rose-500/60',
      glow: 'shadow-[0_0_35px_rgba(244,63,94,0.3)]',
      accent: 'text-rose-400',
      chip: 'from-rose-400/30 to-pink-600/30 border-rose-400',
    },
    purple: {
      bg: 'from-[#2b0c3f] via-[#14061e] to-[#07010b]',
      border: 'border-purple-400/50',
      glow: 'shadow-[0_0_35px_rgba(192,132,252,0.25)]',
      accent: 'text-purple-400',
      chip: 'from-purple-400/30 to-fuchsia-600/30 border-purple-400',
    },
  };

  const currentTheme = themeStyles[cardTheme];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-transparent text-white p-3 md:p-6 pb-24">
      {/* Top Segment Switcher */}
      <div className="max-w-2xl mx-auto w-full mb-5">
        <div className="bg-slate-900/90 border border-slate-800 p-1 rounded-2xl flex gap-1 shadow-lg">
          <button
            onClick={() => setActiveSection('card')}
            className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs md:text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
              activeSection === 'card'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard size={16} />
            <span>💳 VIP CARD CREATOR</span>
          </button>
          <button
            onClick={() => setActiveSection('premium')}
            className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs md:text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
              activeSection === 'premium'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Crown size={16} />
            <span>👑 PREMIUM SUITE</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 1: VIP CARD CREATOR INTERFACE                    */}
      {/* ======================================================== */}
      {activeSection === 'card' && (
        <div className="max-w-2xl mx-auto w-full space-y-6 animate-in fade-in duration-300">
          {/* Section Header */}
          <div className="text-center space-y-1">
            <h1 className="text-xl font-black tracking-wider text-cyan-400 flex items-center justify-center gap-2">
              <CreditCard size={22} className="text-cyan-400" />
              NOWEMPIREOFF VIP IDENTITY CARD
            </h1>
            <p className="text-xs text-slate-400">
              अपनी पर्सनल वीआईपी डेवलपर और गेमर आईडी कार्ड बनाएं और कस्टमाइज करें।
            </p>
          </div>

          {/* ================= LIVE CARD PREVIEW ================= */}
          <div className="flex flex-col items-center">
            <div
              className={`w-full max-w-[380px] aspect-[1.586] rounded-2xl p-5 relative overflow-hidden bg-gradient-to-br ${currentTheme.bg} border ${currentTheme.border} ${currentTheme.glow} transition-all duration-300 shadow-2xl flex flex-col justify-between select-none`}
            >
              {/* Card Hologram Foil Line */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-2xl pointer-events-none -mr-12 -mt-12" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

              {!isFlipped ? (
                /* FRONT OF CARD */
                <>
                  {/* Top Bar: Brand & Chip */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/20 flex items-center justify-center text-lg shadow">
                        {cardLogoType === 'trident' && '🔱'}
                        {cardLogoType === 'crown' && '👑'}
                        {cardLogoType === 'lightning' && '⚡'}
                        {cardLogoType === 'falcon' && '🦅'}
                        {cardLogoType === 'shield' && '🛡️'}
                        {cardLogoType === 'robot' && '🤖'}
                        {cardLogoType === 'custom' && customLogoUrl ? (
                          <img src={customLogoUrl} alt="Logo" className="w-full h-full object-cover rounded-lg" />
                        ) : null}
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest uppercase text-white/90">
                          NOWEMPIREOFF VIP
                        </div>
                        <div className="text-[8px] font-mono text-white/50 tracking-wider">
                          ROOT LEVEL 0 ARCHITECT
                        </div>
                      </div>
                    </div>

                    {/* Chip & Contactless */}
                    <div className="flex items-center gap-2">
                      <div className="text-white/60 text-xs font-mono">NFC📶</div>
                      <div
                        className={`w-9 h-7 rounded-md bg-gradient-to-br ${currentTheme.chip} border flex items-center justify-center shadow-inner`}
                      >
                        <div className="w-5 h-4 border border-black/40 rounded-[2px] grid grid-cols-2 gap-0.5 p-0.5 opacity-60">
                          <div className="bg-black/30 rounded-[1px]" />
                          <div className="bg-black/30 rounded-[1px]" />
                          <div className="bg-black/30 rounded-[1px]" />
                          <div className="bg-black/30 rounded-[1px]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Identity Info */}
                  <div className="my-auto z-10 space-y-1">
                    <div className="text-lg font-black text-white tracking-wide drop-shadow-md truncate">
                      {cardName || 'Nowempireoff'}
                    </div>
                    <div className={`text-[11px] font-semibold ${currentTheme.accent} tracking-wide truncate`}>
                      {cardRole || 'Lead Autonomous Architect'}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {cardHandle || '@Nowempireoff'} • <span className="text-amber-400">{cardLevel}</span>
                    </div>
                  </div>

                  {/* Bottom Bar: Serial & Seal */}
                  <div className="flex items-end justify-between z-10 pt-2 border-t border-white/10">
                    <div className="space-y-0.5">
                      <div className="text-[8px] uppercase tracking-widest text-slate-400 font-mono">
                        CARD SERIAL NO.
                      </div>
                      <div className="text-xs font-mono font-bold tracking-widest text-white/90">
                        NOW-2026-X99-VIP
                      </div>
                    </div>
                    <div className="text-right space-y-0.5">
                      <div className="text-[8px] uppercase tracking-widest text-slate-400 font-mono">
                        VALID THRU
                      </div>
                      <div className="text-xs font-mono font-bold text-amber-300">
                        LIFETIME
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* BACK OF CARD */
                <>
                  {/* Magnetic Stripe */}
                  <div className="w-full h-8 bg-black/90 -mx-5 mt-1 border-y border-white/10" />

                  {/* Signature Panel & CVV */}
                  <div className="my-auto space-y-2 z-10">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white/90 text-black font-cursive px-3 py-1.5 rounded text-xs italic tracking-wider">
                        {cardName} (Authorized Signature)
                      </div>
                      <div className="bg-slate-900 border border-white/20 text-cyan-400 px-2.5 py-1.5 rounded font-mono text-xs font-bold">
                        999
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-300 leading-relaxed font-mono">
                      This card certifies root authorization and autonomous development privileges granted by Nowempireoff.
                    </p>
                  </div>

                  {/* Hologram Barcode */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 z-10 border-t border-white/10 pt-2">
                    <span>HASH: 8F2A-00FF-9X</span>
                    <span className="text-cyan-400 font-bold">BYPASS KERNEL SU</span>
                  </div>
                </>
              )}
            </div>

            {/* Quick Card Action Buttons */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 active:scale-95 transition-all"
              >
                <RotateCcw size={13} />
                <span>{isFlipped ? 'Show Front' : 'Flip to Back'}</span>
              </button>
              <button
                onClick={handleCopyCard}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 active:scale-95 transition-all"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied Details!' : 'Copy Info'}</span>
              </button>
            </div>
          </div>

          {/* ================= CARD CUSTOMIZATION FORM ================= */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 md:p-5 space-y-4">
            <h3 className="text-sm font-black text-cyan-400 flex items-center gap-2">
              <Sparkles size={16} />
              CARD CUSTOMIZATION & DETAILS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Full Name / डेवलपर नाम:
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="अपना नाम दर्ज करें"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Title / Role */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Role / टाइटल:
                </label>
                <input
                  type="text"
                  value={cardRole}
                  onChange={(e) => setCardRole(e.target.value)}
                  placeholder="उदा. Lead Game Developer"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Username / Handle */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Username / हैंडल:
                </label>
                <input
                  type="text"
                  value={cardHandle}
                  onChange={(e) => setCardHandle(e.target.value)}
                  placeholder="@Nowempireoff"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Rank / Level */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Rank / लेवल:
                </label>
                <input
                  type="text"
                  value={cardLevel}
                  onChange={(e) => setCardLevel(e.target.value)}
                  placeholder="Lv. 99 • Grandmaster"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Logo Picker */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Card Logo / बैज चुनें (या कस्टम लोगो अपलोड करें):
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'trident', icon: '🔱', label: 'Trident' },
                  { id: 'crown', icon: '👑', label: 'Crown' },
                  { id: 'lightning', icon: '⚡', label: 'Lightning' },
                  { id: 'falcon', icon: '🦅', label: 'Falcon' },
                  { id: 'shield', icon: '🛡️', label: 'Shield' },
                  { id: 'robot', icon: '🤖', label: 'Android' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCardLogoType(item.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-1.5 transition-all ${
                      cardLogoType === item.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}

                {/* Custom File Upload Button */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleLogoUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-1.5 transition-all ${
                    cardLogoType === 'custom'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Upload size={13} />
                  <span>Upload Logo</span>
                </button>
              </div>
            </div>

            {/* Theme Picker */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Card Theme Style / थीम कलर:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { id: 'cyan', name: 'Cyber Neon', color: 'bg-cyan-400' },
                  { id: 'gold', name: 'Empire Gold', color: 'bg-amber-400' },
                  { id: 'emerald', name: 'Matrix Green', color: 'bg-emerald-400' },
                  { id: 'ruby', name: 'Crimson Red', color: 'bg-rose-500' },
                  { id: 'purple', name: 'Royal Violet', color: 'bg-purple-500' },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setCardTheme(th.id as any)}
                    className={`py-2 px-1 rounded-xl border text-center text-[10px] font-bold transition-all flex flex-col items-center gap-1 ${
                      cardTheme === th.id
                        ? 'border-white bg-slate-800 text-white shadow-md'
                        : 'border-slate-800 bg-slate-950 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${th.color} shadow-sm`} />
                    <span className="truncate w-full">{th.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SECTION 2: PREMIUM SUITE (Game Booster & Builder Unlock) */}
      {/* ======================================================== */}
      {activeSection === 'premium' && (
        <div className="max-w-2xl mx-auto w-full space-y-6 animate-in fade-in duration-300">
          {/* Section Header */}
          <div className="text-center space-y-1">
            <h1 className="text-xl font-black tracking-wider text-amber-400 flex items-center justify-center gap-2">
              <Crown size={22} className="text-amber-400" />
              NOWXMULTIPLE VIP PREMIUM SUITE
            </h1>
            <p className="text-xs text-slate-400">
              रूट गेम बूस्टर और ऑटोनोमस बिल्डर अनलॉक की सुविधा।
            </p>
          </div>

          {/* ================= FEATURE 1: ROOT GAME BOOSTER ================= */}
          <div className="bg-gradient-to-br from-[#101426] to-[#0a0d18] border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_25px_rgba(0,240,255,0.12)] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                  <Flame size={22} />
                </div>
                <div>
                  <h2 className="text-sm font-black text-cyan-400 tracking-wide flex items-center gap-2">
                    ROOT GAME BOOSTER
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono">
                      TURBO v3.8
                    </span>
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    RAM क्लीनर, 120 FPS अनलॉक और अल्ट्रा-लो लेटेंसी ओवरक्लॉक
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                  isBoostActive
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 animate-pulse'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {isBoostActive ? '⚡ TURBO ACTIVE' : 'IDLE'}
              </div>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase">FPS LIMIT</div>
                <div className="text-base font-black text-cyan-400 mt-1">
                  {isBoostActive ? '120 FPS' : '60 FPS'}
                </div>
                <div className="text-[9px] text-slate-500">
                  {isBoostActive ? 'Locked Zero Drop' : 'Standard'}
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase">RAM OPTIMIZE</div>
                <div className="text-base font-black text-amber-400 mt-1">
                  {isBoostActive ? '+1.84 GB' : '0 MB'}
                </div>
                <div className="text-[9px] text-slate-500">
                  {isBoostActive ? 'Cache Flushed' : 'Unoptimized'}
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase">LATENCY</div>
                <div className="text-base font-black text-rose-400 mt-1">
                  {isBoostActive ? '12 ms' : '68 ms'}
                </div>
                <div className="text-[9px] text-slate-500">
                  {isBoostActive ? 'Ultra-low Jitter' : 'Normal'}
                </div>
              </div>
            </div>

            {/* Boost Progress Bar (when activating) */}
            {isBoosting && (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-cyan-300">
                  <span>OVERCLOCKING KERNEL SHADERS...</span>
                  <span>{boostProgress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/40">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-200"
                    style={{ width: `${boostProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* 1-Tap Boost Button */}
            <button
              onClick={handleActivateBooster}
              disabled={isBoosting}
              className={`w-full py-3 rounded-xl font-black text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                isBoostActive
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 hover:bg-emerald-500/30'
                  : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110'
              }`}
            >
              <Zap size={16} className={isBoosting ? 'animate-spin' : ''} />
              <span>
                {isBoosting
                  ? 'BOOSTING ENGINE...'
                  : isBoostActive
                  ? '⚡ RE-CALIBRATE GAME TURBO'
                  : '🚀 ACTIVATE 1-TAP GAME BOOSTER'}
              </span>
            </button>

            {/* Quick Game Launchers */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                BOOSTED ARCADE LAUNCHERS (लाइव गेम्स खेलें):
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleGameLaunch('shooter')}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <Gamepad2 size={15} />
                  <span>🎯 Cyber Sniper (Shooter)</span>
                </button>
                <button
                  onClick={() => handleGameLaunch('cyberpunk')}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <Sparkles size={15} />
                  <span>🚀 Cyber Strike (Arcade)</span>
                </button>
              </div>
            </div>
          </div>

          {/* ================= FEATURE 2: BUILDER UNLOCK ================= */}
          <div className="bg-gradient-to-br from-[#1b1406] to-[#0d0a02] border border-amber-500/40 rounded-2xl p-5 shadow-[0_0_30px_rgba(245,158,11,0.15)] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  {isBuilderUnlocked ? <Unlock size={22} /> : <Lock size={22} />}
                </div>
                <div>
                  <h2 className="text-sm font-black text-amber-400 tracking-wide flex items-center gap-2">
                    AUTONOMOUS BUILDER UNLOCK
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                      VIP KEY
                    </span>
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    कोड जनरेटर और ऑटोनोमस ऐप/गेम मेकर को अनलॉक करें
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                  isBuilderUnlocked
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                }`}
              >
                {isBuilderUnlocked ? '✨ UNLOCKED' : '🔒 LOCKED'}
              </div>
            </div>

            <div className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-3.5 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <Shield size={14} />
                <span>Builder Authorization Status:</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isBuilderUnlocked
                  ? 'बिल्डर पूरी तरह से अनलॉक है! आप होम पेज पर जाकर कोई भी शूटिंग गेम, लैंडिंग पेज, कैलकुलेटर या टूल तुरंत बना सकते हैं।'
                  : 'होम पेज पर बिल्डर अभी लॉक्ड है। इसे अनलॉक करने के लिए "Unlock Builder" पर क्लिक करें और कोड "NOWXMULTIPLE" दर्ज करें।'}
              </p>
            </div>

            {/* Unlock or Open Builder Button */}
            {!isBuilderUnlocked ? (
              <button
                onClick={onOpenUnlockModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:brightness-110 text-black font-black text-xs tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95 transition-all"
              >
                <Unlock size={16} />
                <span>🔓 UNLOCK BUILDER (ENTER CODE)</span>
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleOpenBuilder}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-black font-black text-xs tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 transition-all"
                >
                  <CheckCircle2 size={16} />
                  <span>🚀 OPEN BUILDER IN HOME TAB</span>
                </button>
                <p className="text-[10px] text-center text-emerald-400/80 font-mono">
                  Lifetime VIP Access Active • Code: NOWXMULTIPLE Applied
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
