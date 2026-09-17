import React, { useState } from 'react';
import { Mic, MicOff, PhoneOff, Volume2, VolumeX, Send, Sparkles } from 'lucide-react';
import { VoiceState } from '../types';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  voiceState: VoiceState;
  transcript: string;
  response: string;
  onStartListening: () => void;
  onStopListening: () => void;
  onSendMessage: (text: string) => void;
  onStopSpeaking: () => void;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  voiceState,
  transcript,
  response,
  onStartListening,
  onStopListening,
  onSendMessage,
  onStopSpeaking,
}) => {
  const [manualInput, setManualInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualInput.trim()) {
      onSendMessage(manualInput.trim());
      setManualInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-gradient-to-b from-[#090602]/96 via-[#0e0a04]/98 to-[#050301] backdrop-blur-2xl p-6 select-none animate-in fade-in duration-200 border-x border-amber-500/20">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="font-mono text-sm font-extrabold tracking-wider text-white">
            NOWXMULTIPLE <span className="text-amber-400">AI</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
            ROOT ENGINE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40">
            HINDI / ENGLISH
          </span>
          <button
            onClick={() => {
              onStopSpeaking();
              onStopListening();
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300"
          >
            <PhoneOff className="w-4 h-4 text-rose-400" />
          </button>
        </div>
      </div>

      {/* Center: Glowing AI Orb & Audio Waveform */}
      <div className="my-auto flex flex-col items-center justify-center text-center">
        {/* The Holographic Orb */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Ambient Glow Aura */}
          <div
            className={`absolute w-44 h-44 rounded-full blur-2xl transition-all duration-700 ${
              voiceState === 'listening'
                ? 'bg-rose-500/30 scale-125'
                : voiceState === 'speaking'
                ? 'bg-cyan-500/35 scale-120'
                : voiceState === 'processing'
                ? 'bg-purple-500/30 scale-110'
                : 'bg-emerald-500/20 scale-95'
            }`}
          />

          {/* Outer Ring */}
          <div
            className={`w-36 h-36 rounded-full border-2 p-1.5 transition-transform duration-500 ${
              voiceState === 'listening'
                ? 'border-rose-400 animate-pulse'
                : voiceState === 'speaking'
                ? 'border-cyan-400 animate-spin-slow'
                : 'border-cyan-500/40'
            }`}
          >
            {/* Core Gradient Orb */}
            <div
              className={`w-full h-full rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
                voiceState === 'listening'
                  ? 'bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 shadow-rose-500/50'
                  : voiceState === 'speaking'
                  ? 'bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 shadow-cyan-500/60'
                  : voiceState === 'processing'
                  ? 'bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-cyan-400 shadow-purple-500/50'
                  : 'bg-gradient-to-tr from-teal-700 via-cyan-800 to-slate-900'
              }`}
            >
              <Sparkles className="w-10 h-10 text-white/90 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Live Audio Equalizer Waveform */}
        <div className="flex items-center gap-1.5 h-8 mb-4">
          {[40, 75, 55, 90, 60, 100, 70, 85, 45, 95, 65, 50].map((height, i) => (
            <span
              key={i}
              style={{
                height:
                  voiceState === 'speaking' || voiceState === 'listening'
                    ? `${height}%`
                    : '15%',
              }}
              className={`w-1 rounded-full transition-all duration-150 ${
                voiceState === 'listening'
                  ? 'bg-rose-400'
                  : voiceState === 'speaking'
                  ? 'bg-cyan-300'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Status Tag */}
        <div className="mb-4">
          <span
            className={`font-mono text-xs font-extrabold tracking-wider px-3 py-1 rounded-full uppercase ${
              voiceState === 'speaking'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                : voiceState === 'listening'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-400/40 animate-pulse'
                : voiceState === 'processing'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            {voiceState === 'speaking'
              ? '● SPEAKING'
              : voiceState === 'listening'
              ? '● LISTENING (बोलिए...)'
              : voiceState === 'processing'
              ? '● PROCESSING RESPONSE...'
              : 'READY TO LISTEN'}
          </span>
        </div>

        {/* Speech Transcript Display */}
        <div className="w-full max-w-md min-h-[90px] max-h-[140px] overflow-y-auto px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-left backdrop-blur-sm">
          {transcript && (
            <p className="text-xs text-cyan-300 font-mono mb-1.5">
              <span className="text-gray-400 font-bold">You: </span>
              {transcript}
            </p>
          )}
          {response && (
            <p className="text-xs text-gray-200 font-sans leading-relaxed">
              <span className="text-fuchsia-400 font-bold">Maria: </span>
              {response}
            </p>
          )}
          {!transcript && !response && (
            <p className="text-xs text-amber-300/80 font-mono text-center pt-5">
              "Nowempireoff, 3D car racing game banao..." ya "Nowempireoff, AI kya hai?"
            </p>
          )}
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="w-full max-w-md mx-auto space-y-3">
        {/* Quick Voice Command Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px] font-mono">
          <button
            type="button"
            onClick={() => onSendMessage('Nowempireoff')}
            className="whitespace-nowrap px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/20 text-amber-300 border border-amber-400/60 font-black shadow-[0_0_12px_rgba(245,158,11,0.25)] flex items-center gap-1 hover:brightness-110 active:scale-95"
          >
            <span>👑</span> Master: Nowempireoff
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('iPhone and MacBook design game banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 flex items-center gap-1"
          >
            <span></span> iPhone 3D Studio
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Car racing game banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 flex items-center gap-1"
          >
            <span>🏎️</span> Nitro Racing
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Gym fitness app banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 hover:bg-orange-500/30 flex items-center gap-1"
          >
            <span>🏋️</span> Gym Tracker
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Shopping store app banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 hover:bg-pink-500/30 flex items-center gap-1"
          >
            <span>🛍️</span> Luxury Store
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Quiz master game banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 hover:bg-violet-500/30 flex items-center gap-1"
          >
            <span>🧠</span> AI Quiz
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('System monitor telemetry dashboard banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center gap-1"
          >
            <span>📊</span> System Monitor
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Bakery website banao')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 hover:bg-orange-500/30 flex items-center gap-1"
          >
            <span>🥖</span> Bakery Site
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Stock market news')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30"
          >
            📈 Stock News
          </button>
          <button
            type="button"
            onClick={() => onSendMessage('Screen brightness low kar do')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 hover:bg-yellow-500/30"
          >
            🔅 Brightness Low
          </button>
        </div>

        {/* Quick Text Input for silent environments */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
            placeholder="Bolo: 'Nowempireoff [kuch bhi poochhein ya hukum dein]'..."
            className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            disabled={!manualInput.trim()}
            className="p-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black font-bold"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Action Buttons: End, Mic, Replay */}
        <div className="flex items-center justify-around pt-2">
          {/* Stop Audio button */}
          <button
            onClick={onStopSpeaking}
            title="Stop Speech"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300"
          >
            {voiceState === 'speaking' ? (
              <VolumeX className="w-5 h-5 text-amber-400" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* Big Mic Toggle Button */}
          <button
            onClick={() => {
              if (voiceState === 'listening') {
                onStopListening();
              } else {
                onStartListening();
              }
            }}
            className={`p-5 rounded-full shadow-xl transition-all duration-200 active:scale-95 ${
              voiceState === 'listening'
                ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/50 animate-pulse'
                : 'bg-gradient-to-tr from-cyan-400 to-emerald-400 hover:opacity-90 text-black font-extrabold shadow-cyan-500/40'
            }`}
          >
            {voiceState === 'listening' ? (
              <MicOff className="w-7 h-7" />
            ) : (
              <Mic className="w-7 h-7" />
            )}
          </button>

          {/* Close HUD button */}
          <button
            onClick={() => {
              onStopSpeaking();
              onStopListening();
              onClose();
            }}
            title="End Voice Mode"
            className="p-3 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300"
          >
            <PhoneOff className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
