import React, { useState } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  Lock,
  Unlock,
  Terminal,
  Cpu,
  RefreshCw,
  Sparkles,
  ExternalLink,
  Crown,
  User,
  CheckCircle2,
  AlertTriangle,
  Zap,
  SlidersHorizontal,
} from 'lucide-react';
import { FeatureMatrix } from './FeatureMatrix';

interface DeveloperSectionProps {
  isDevUnlocked: boolean;
  onUnlockDev: (passcode: string) => boolean;
  onLockDev: () => void;
  onUnlockBuilder: () => void;
  onResetSession: () => void;
  onOpenTerminal: () => void;
  onExecuteCommand?: (cmd: string) => void;
}

export const DeveloperSection: React.FC<DeveloperSectionProps> = ({
  isDevUnlocked,
  onUnlockDev,
  onLockDev,
  onUnlockBuilder,
  onResetSession,
  onOpenTerminal,
  onExecuteCommand,
}) => {
  const [passcodeInput, setPasscodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'features'>('profile');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessNotice(null);

    const clean = passcodeInput.trim();
    if (!clean) {
      setErrorMessage('कृपया डेवलपर पासकोड (Passcode) दर्ज करें।');
      return;
    }

    const success = onUnlockDev(clean);
    if (success) {
      setSuccessNotice('🎉 पहचान सत्यापित! स्वागत है Master Developer Nowempireoff!');
      setPasscodeInput('');
    } else {
      setErrorMessage('❌ अमान्य पासकोड (Invalid Code)! डेवलपर सेक्शन केवल Nowempireoff के लिए सुरक्षित है। गेस्ट कार्ड प्रदर्शित रहेगा।');
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center min-h-full">
      {!isDevUnlocked ? (
        /* GUEST ACCESS CARD - Shown when not authenticated */
        <div className="w-full max-w-md bg-gradient-to-b from-[#131726] via-[#0d101a] to-[#080a11] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-5 text-center relative overflow-hidden">
          {/* Top Decorative Ring */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Guest Identity Emblem */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 border border-slate-600/60 p-0.5 shadow-xl flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-[#0c0f18] flex items-center justify-center text-slate-400">
              <User size={38} className="text-slate-400" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-600/40 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
              <ShieldAlert size={12} className="text-amber-400" />
              <span>GUEST IDENTITY CARD • VISITOR PROFILE</span>
            </div>
            <h3 className="font-mono text-lg font-black text-white">
              Public Visitor Access
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              यह सिस्टम सिक्योर है। डेवलपर सेक्शन और कंट्रोल्स केवल ऑथराइज्ड डेवलपर <strong>@Nowempireoff</strong> के लिए हैं। यदि आप डेवलपर हैं, तो नीचे पासकोड डालकर अनलॉक करें।
            </p>
          </div>

          {/* Visitor Specs Card */}
          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 text-left text-xs font-mono space-y-2">
            <div className="flex justify-between items-center text-gray-400">
              <span>Card ID:</span>
              <span className="text-cyan-400 font-bold">GUEST-#6769-V</span>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <span>Security Clearance:</span>
              <span className="text-amber-400 font-bold">Standard Guest (Locked)</span>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <span>Developer Controls:</span>
              <span className="text-rose-400 font-bold">🔒 Hidden / Restricted</span>
            </div>
          </div>

          {/* Authentication Form */}
          <form onSubmit={handleVerify} className="space-y-3 pt-2">
            <div className="relative">
              <input
                type="password"
                value={passcodeInput}
                onChange={(e) => setPasscodeInput(e.target.value)}
                placeholder="डेवलपर पासकोड दर्ज करें (PIN)..."
                maxLength={10}
                className="w-full bg-[#181d2f] border border-amber-500/40 focus:border-amber-400 rounded-2xl px-4 py-3 text-sm text-center font-mono font-bold tracking-widest text-white placeholder-gray-500 outline-none shadow-inner"
              />
              <KeyRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/70" />
            </div>

            {errorMessage && (
              <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs font-mono text-left flex items-center gap-2">
                <AlertTriangle size={14} className="text-rose-400 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:brightness-110 text-black font-mono font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-98 transition-all"
            >
              <KeyRound size={14} />
              <span>VERIFY DEVELOPER IDENTITY</span>
            </button>
          </form>

          <p className="text-[10px] text-gray-500 font-mono">
            Cryptographically Protected • SHA-256 Gate (PIN: 6769)
          </p>

          {/* Guest Preview of the 100+ Features Matrix */}
          <div className="pt-2 text-left">
            <div className="text-[11px] font-mono text-gray-400 mb-2 flex items-center justify-between">
              <span>SYSTEM CAPABILITIES CATALOG:</span>
              <span className="text-amber-400 font-bold">105 MODULES</span>
            </div>
            <FeatureMatrix
              isDevUnlocked={false}
              onExecuteCommand={onExecuteCommand}
              onOpenTerminal={onOpenTerminal}
              onUnlockDevPrompt={() => {
                setErrorMessage('⚠️ यह फीचर केवल Developer PIN 6769 दर्ज करने पर निष्पादित होगा।');
              }}
            />
          </div>
        </div>
      ) : (
        /* MASTER DEVELOPER CONSOLE - Shown only after entering 6769 */
        <div className="w-full max-w-4xl bg-gradient-to-b from-[#181d2f] via-[#101422] to-[#0a0d16] border border-amber-400/60 rounded-3xl p-5 shadow-2xl space-y-4 text-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          {/* Master Emblem & Profile Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-600 p-0.5 shadow-xl shadow-amber-500/40 relative">
                <div className="w-full h-full rounded-[14px] bg-[#0c0f18] flex items-center justify-center text-3xl font-black text-amber-300">
                  👑
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
                </span>
              </div>

              <div className="text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-[10px] font-mono font-black text-amber-200 uppercase tracking-wider mb-1">
                  <Crown size={11} className="text-amber-300" />
                  <span>AUTHENTICATED MASTER DEVELOPER</span>
                </div>
                <h3 className="font-mono text-lg font-black text-white flex items-center gap-1.5">
                  Nowempireoff
                  <CheckCircle2 size={16} className="text-emerald-400" />
                </h3>
                <p className="font-mono text-xs text-amber-300">
                  @Nowempireoff • Lead Systems &amp; Autonomous Architect
                </p>
              </div>
            </div>

            {/* Console Tabs & Lock Button */}
            <div className="flex items-center gap-2">
              <div className="flex bg-black/50 p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeTab === 'profile'
                      ? 'bg-amber-400 text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('features')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === 'features'
                      ? 'bg-amber-400 text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <SlidersHorizontal size={12} />
                  <span>105 Features</span>
                </button>
              </div>

              <button
                onClick={onLockDev}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold flex items-center gap-1 transition-all active:scale-95"
                title="Lock Developer Console"
              >
                <Lock size={12} />
                <span>Lock</span>
              </button>
            </div>
          </div>

          {activeTab === 'profile' ? (
            <>
              {/* Developer Quick Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
                <button
                  onClick={onUnlockBuilder}
                  className="p-3 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-200 transition-all flex items-center gap-2.5 group active:scale-95"
                >
                  <Zap size={18} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-mono font-bold text-white">Instant VIP Unlock</div>
                    <div className="text-[10px] text-emerald-400/80">Builder mode 100% bypass</div>
                  </div>
                </button>

                <button
                  onClick={onOpenTerminal}
                  className="p-3 rounded-2xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 text-cyan-200 transition-all flex items-center gap-2.5 group active:scale-95"
                >
                  <Terminal size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-mono font-bold text-white">Root SU Terminal</div>
                    <div className="text-[10px] text-cyan-400/80">Linux aarch64 kernel</div>
                  </div>
                </button>

                <button
                  onClick={onResetSession}
                  className="p-3 rounded-2xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/40 text-amber-200 transition-all flex items-center gap-2.5 group active:scale-95"
                >
                  <RefreshCw size={18} className="text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                  <div>
                    <div className="text-xs font-mono font-bold text-white">Reset Chat & State</div>
                    <div className="text-[10px] text-amber-400/80">Start fresh session</div>
                  </div>
                </button>

                <a
                  href="https://t.me/Nowempireoff"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/40 text-blue-200 transition-all flex items-center gap-2.5 group active:scale-95"
                >
                  <ExternalLink size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-mono font-bold text-white">Telegram Channel</div>
                    <div className="text-[10px] text-blue-400/80">@Nowempireoff Official</div>
                  </div>
                </a>
              </div>

              {/* System Telemetry */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono flex items-center justify-between">
                <div className="text-left">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ROOT KERNEL &amp; 105 MODULES ACTIVE
                  </div>
                  <div className="text-[10px] text-gray-400">UID: 0 • Gemini 3.8 Flash • Web Grounding 100%</div>
                </div>

                <button
                  onClick={() => setActiveTab('features')}
                  className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-all active:scale-95 flex items-center gap-1"
                >
                  <span>Open 105 Features Matrix</span>
                  <span>→</span>
                </button>
              </div>
            </>
          ) : (
            /* 105 Features Matrix Tab */
            <FeatureMatrix
              isDevUnlocked={true}
              onExecuteCommand={onExecuteCommand}
              onOpenTerminal={onOpenTerminal}
            />
          )}
        </div>
      )}
    </div>
  );
};
