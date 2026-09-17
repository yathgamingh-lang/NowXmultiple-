import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Trash2, ShieldCheck, Lock, KeyRound, AlertTriangle, ArrowRight } from 'lucide-react';
import { TerminalEntry } from '../types';

interface TerminalTabProps {
  entries: TerminalEntry[];
  onExecuteCommand: (cmd: string) => void;
  onClear: () => void;
  isDevUnlocked?: boolean;
  onUnlockDev?: (passcode: string) => boolean;
  onSwitchToDev?: () => void;
}

export const TerminalTab: React.FC<TerminalTabProps> = ({
  entries,
  onExecuteCommand,
  onClear,
  isDevUnlocked = false,
  onUnlockDev,
  onSwitchToDev,
}) => {
  const [commandInput, setCommandInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [entries]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPinError(null);
    if (!onUnlockDev) return;
    const ok = onUnlockDev(pinInput);
    if (!ok) {
      setPinError('❌ Invalid Passcode! Terminal UID 0 root privileges require Developer Clearance.');
    } else {
      setPinInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commandInput.trim()) {
      onExecuteCommand(commandInput.trim());
      setCommandInput('');
    }
  };

  // If developer mode is locked, protect the root terminal
  if (!isDevUnlocked) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 bg-[#05070c] text-gray-200 font-mono select-none overflow-y-auto">
        <div className="w-full max-w-md bg-gradient-to-b from-[#111420] to-[#080910] border border-rose-500/40 rounded-3xl p-6 shadow-2xl text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Lock size={32} />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-[10px] font-bold text-rose-300 uppercase tracking-wider mb-2">
              <AlertTriangle size={12} className="text-rose-400" />
              <span>TERMINAL SECURITY RESTRICTION</span>
            </div>
            <h3 className="text-lg font-black text-white font-mono">
              Root Shell Locked (UID: 0)
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              रूट शैल और लिनक्स टर्मिनल केवल अधिकृत डेवलपर <strong>@Nowempireoff</strong> के लिए आरक्षित है। डेवलपर पासकोड दर्ज करके अनलॉक करें या Dev टैब में जाएँ।
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-2.5 pt-2">
            <div className="relative">
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="डेवलपर पिन दर्ज करें (PIN: 6769)..."
                maxLength={8}
                className="w-full bg-[#181d2f] border border-rose-500/40 focus:border-amber-400 rounded-2xl px-4 py-2.5 text-sm text-center font-mono font-bold tracking-widest text-white placeholder-gray-500 outline-none"
              />
              <KeyRound size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-400/80" />
            </div>

            {pinError && (
              <div className="text-[11px] text-rose-400 font-mono bg-rose-950/40 p-2 rounded-xl border border-rose-500/30">
                {pinError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-amber-500 to-yellow-400 hover:brightness-110 text-black font-mono font-black text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-98 transition-all"
            >
              <KeyRound size={14} />
              <span>UNLOCK ROOT TERMINAL</span>
            </button>
          </form>

          {onSwitchToDev && (
            <button
              type="button"
              onClick={onSwitchToDev}
              className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline font-mono"
            >
              <span>Go to Dev Profile & Settings</span>
              <ArrowRight size={12} />
            </button>
          )}

          <div className="text-[10px] text-gray-500 font-mono border-t border-white/5 pt-2">
            Requires Clearance Level 5 • Linux Kernel Subsystem
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-[#05070c] text-gray-200 font-mono text-xs overflow-hidden select-none">
      {/* Terminal Title Bar */}
      <div className="px-3 py-2 bg-[#090d16] border-b border-cyan-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold text-white text-[11px]">
            ROOT SHELL: aarch64
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
            UID: 0 (root)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            title="Clear Terminal"
            className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 leading-5">
        {entries.map((item) => (
          <div key={item.id} className="break-all">
            {item.type === 'cmd' ? (
              <div className="text-cyan-300 font-bold flex items-start gap-1">
                <span className="text-emerald-400 select-none">root@bypass:~#</span>
                <span>{item.text.replace(/^root@bypass:[^#]*#\s*/, '')}</span>
              </div>
            ) : item.type === 'success' ? (
              <div className="text-emerald-400 flex items-center gap-1">
                <span>✔</span>
                <span>{item.text}</span>
              </div>
            ) : item.type === 'error' ? (
              <div className="text-rose-400 font-bold flex items-center gap-1">
                <span>✖</span>
                <span>{item.text}</span>
              </div>
            ) : item.type === 'warn' ? (
              <div className="text-amber-400">
                <span>▲ </span>
                <span>{item.text}</span>
              </div>
            ) : item.type === 'dim' ? (
              <div className="text-gray-500 text-[11px]">{item.text}</div>
            ) : (
              <div className="text-cyan-200/90">{item.text}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Line Input */}
      <form
        onSubmit={handleSubmit}
        className="p-2.5 bg-[#090d16] border-t border-cyan-500/20 flex items-center gap-2"
      >
        <span className="text-emerald-400 font-bold text-xs select-none">
          root@bypass:#
        </span>
        <input
          type="text"
          value={commandInput}
          onChange={(e) => setCommandInput(e.target.value)}
          placeholder="help, ls, settings, cat, clear, su..."
          className="flex-1 bg-transparent text-white outline-none font-mono text-xs placeholder-gray-600"
          autoFocus
        />
        <button
          type="submit"
          className="px-2.5 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-[11px] transition-all"
        >
          Run
        </button>
      </form>
    </div>
  );
};
