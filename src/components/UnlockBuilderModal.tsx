import React, { useState } from 'react';
import { Lock, Unlock, Key, CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';
import { soundFx } from '../soundFx';

interface UnlockBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccess?: () => void;
  onSuccess?: () => void;
}

export const UnlockBuilderModal: React.FC<UnlockBuilderModalProps> = ({
  isOpen,
  onClose,
  onUnlockSuccess,
  onSuccess,
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = code.trim().toUpperCase();

    if (cleanCode === 'NOWXMULTIPLE') {
      setError('');
      setIsSuccess(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('builder_unlocked', 'true');
      }
      soundFx.playUnlockChime();

      // Fire callback immediately and after animation
      if (onUnlockSuccess) onUnlockSuccess();
      if (onSuccess) onSuccess();

      setTimeout(() => {
        setIsSuccess(false);
        setCode('');
        onClose();
      }, 1000);
    } else {
      setError('गलत कोड! सही कोड "NOWXMULTIPLE" है। कृपया दोबारा दर्ज करें।');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d1222] border border-cyan-500/40 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,240,255,0.25)] text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            {isSuccess ? <Sparkles size={24} className="text-cyan-400 animate-spin" /> : <Lock size={24} />}
          </div>
          <div>
            <h2 className="text-lg font-black tracking-wide text-cyan-400 flex items-center gap-2">
              BUILDER UNLOCK <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 font-mono">VIP</span>
            </h2>
            <p className="text-xs text-slate-400">Autonomous Code Generation Access</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.5)] animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl font-black text-emerald-400">BUILDER UNLOCKED!</h3>
            <p className="text-xs text-slate-300">
              VIP License Verified. आप अब कोई भी गेम, टूल या ऐप बना सकते हैं!
            </p>
          </div>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Key size={13} />
                <span>VIP Security Code Required</span>
              </div>
              <p className="text-[11px] text-slate-400">
                होम पेज पर बिल्डर को अनलॉक करने के लिए अपना वीआईपी कोड डालें।
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Activation Code (अनलॉक कोड):
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="यहाँ कोड दर्ज करें (उदा. NOWXMULTIPLE)"
                  className="w-full bg-slate-950 border border-cyan-500/40 rounded-xl px-4 py-3 text-cyan-300 font-mono text-sm tracking-wider placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setCode('NOWXMULTIPLE')}
                  className="absolute right-2 top-2 px-2 py-1 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 rounded text-[10px] text-cyan-300 font-mono"
                >
                  PASTE CODE
                </button>
              </div>
              {error && (
                <div className="flex items-center gap-1.5 mt-2 text-xs text-rose-400 font-medium">
                  <AlertCircle size={14} />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-400 text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-black tracking-wide flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 transition-all"
              >
                <Unlock size={14} />
                UNLOCK BUILDER
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
