import React from 'react';
import {
  X,
  ShieldCheck,
  Cpu,
  Send,
  ExternalLink,
  Check,
  Terminal,
  Zap,
} from 'lucide-react';
import { SettingsConfig } from '../types';

interface DevSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: SettingsConfig;
  onToggleSetting: (key: keyof SettingsConfig) => void;
}

export const DevSettingsModal: React.FC<DevSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onToggleSetting,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md select-none animate-in fade-in duration-200">
      <div className="w-full max-w-md max-h-[92vh] flex flex-col rounded-2xl bg-[#0b0e17] border border-cyan-500/40 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 bg-[#0f1422] border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <h3 className="font-mono text-sm font-extrabold text-white tracking-wide">
              IDE SETTINGS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Developer Card (Nowempireoff - Explicit User Mandate!) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#121625] via-[#0d101a] to-[#121727] border border-cyan-400/30 relative overflow-hidden shadow-lg">
            <div className="flex items-start gap-3.5">
              {/* Avatar with cyan neon aura */}
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 p-0.5 shadow-md shadow-cyan-500/30">
                  <div className="w-full h-full rounded-[14px] bg-[#0c0f18] flex items-center justify-center overflow-hidden">
                    <span className="font-mono text-2xl font-black text-cyan-300">
                      N
                    </span>
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0b0e17] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-mono text-sm font-black text-white truncate">
                    Nowempireoff
                  </h4>
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                </div>
                <div className="text-cyan-400 font-mono text-xs font-semibold">
                  @Nowempireoff
                </div>
                <div className="text-[11px] text-gray-300 font-medium mt-1 leading-tight">
                  Lead Architect &amp; Core Systems Developer
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  Hire Me | Android &amp; Web Developer | Custom Solutions
                </div>
              </div>
            </div>

            {/* Telegram Action Button */}
            <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Free Telegram Bot Active
              </span>
              <a
                href="https://t.me/Nowempireoff"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-[11px] font-black transition-all active:scale-95 shadow-sm"
              >
                <Send className="w-3 h-3" />
                <span>Contact @Nowempireoff</span>
                <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
              </a>
            </div>

            {/* Cryptographically Sealed & Verified Badge (From Video 10:46) */}
            <div className="mt-2.5 p-2 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-[10px] font-mono">
              <span className="text-cyan-300 font-bold">
                CRYPTOGRAPHICALLY SEALED &amp; VERIFIED
              </span>
              <span className="text-gray-400">SHA-256 HMAC / AES-256</span>
            </div>
          </div>

          {/* Feature Settings Toggles (From Video 01:45 - 02:04) */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-gray-400 tracking-wider uppercase">
              AUTONOMOUS CONFIGURATION
            </h4>

            {[
              {
                key: 'topCapsule' as keyof SettingsConfig,
                label: 'Top Capsule (Dynamic Island)',
                desc: 'Floating top pill for voice status and real-time audio wave feedback.',
              },
              {
                key: 'backgroundAssistant' as keyof SettingsConfig,
                label: 'Background Assistant (Maria AI)',
                desc: 'Keep Maria active in the background for continuous voice commands.',
              },
              {
                key: 'liveWebSearch' as keyof SettingsConfig,
                label: 'Live Web Search',
                desc: 'Auto-search Google & live web sources for news and stock markets.',
              },
              {
                key: 'rootAccess' as keyof SettingsConfig,
                label: 'Root Execution Access',
                desc: 'Grant root privileges for terminal operations, app termination & gestures.',
              },
              {
                key: 'autoFixEngine' as keyof SettingsConfig,
                label: 'Autonomous In-Place Repair',
                desc: 'Synthesize surgical patches and auto-repair code errors in real-time.',
              },
              {
                key: 'voiceRecognition' as keyof SettingsConfig,
                label: 'Speech Recognition (Voice Input)',
                desc: 'Listen to speech in Hindi and English with high precision.',
              },
              {
                key: 'voiceOutput' as keyof SettingsConfig,
                label: 'Voice Output (Text-to-Speech)',
                desc: 'Maria speaks out loud in Hindi / English with natural intonation.',
              },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => onToggleSetting(item.key)}
                className="flex items-center justify-between p-3 rounded-xl bg-[#101422] border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <div className="pr-3">
                  <div className="font-mono text-xs font-bold text-gray-200">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-400 font-sans leading-tight mt-0.5">
                    {item.desc}
                  </div>
                </div>

                {/* Animated Switch */}
                <div
                  className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                    settings[item.key] ? 'bg-cyan-500' : 'bg-gray-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-black shadow-md transform transition-transform duration-200 ${
                      settings[item.key] ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Done Button */}
        <div className="p-3 bg-[#0f1422] border-t border-cyan-500/20 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-black transition-all active:scale-95 shadow-md shadow-cyan-500/20"
          >
            DONE (SETTINGS SAVED)
          </button>
        </div>
      </div>
    </div>
  );
};
