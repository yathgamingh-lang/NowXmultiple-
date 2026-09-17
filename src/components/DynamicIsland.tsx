import React from 'react';
import { Sparkles, Mic, Volume2 } from 'lucide-react';
import { VoiceState } from '../types';

interface DynamicIslandProps {
  voiceState: VoiceState;
  statusText?: string;
  onClick: () => void;
  visible: boolean;
}

export const DynamicIsland: React.FC<DynamicIslandProps> = ({
  voiceState,
  statusText,
  onClick,
  visible,
}) => {
  if (!visible) return null;

  return (
    <div className="w-full flex justify-center px-4 pt-1.5 pb-1 z-30 select-none">
      <button
        onClick={onClick}
        className={`group relative flex items-center justify-between px-3.5 py-1 rounded-full transition-all duration-300 shadow-lg ${
          voiceState === 'speaking'
            ? 'bg-gradient-to-r from-cyan-950/90 via-black to-fuchsia-950/90 border border-cyan-400/80 shadow-cyan-500/20'
            : voiceState === 'listening'
            ? 'bg-gradient-to-r from-red-950/90 via-black to-rose-950/90 border border-rose-400/90 shadow-rose-500/20 animate-pulse'
            : voiceState === 'processing'
            ? 'bg-gradient-to-r from-fuchsia-950/90 via-black to-purple-950/90 border border-purple-400/80 shadow-purple-500/20'
            : 'bg-[#101420]/90 border border-cyan-500/30 hover:border-cyan-400/60 shadow-black/40'
        } min-w-[150px] max-w-[280px] h-7`}
      >
        {/* Left icon / status */}
        <div className="flex items-center gap-1.5">
          {voiceState === 'speaking' ? (
            <Volume2 className="w-3.5 h-3.5 text-cyan-300 animate-bounce" />
          ) : voiceState === 'listening' ? (
            <Mic className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          ) : voiceState === 'processing' ? (
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}

          <span className="font-mono text-[11px] font-bold tracking-tight text-gray-200">
            {voiceState === 'speaking'
              ? 'SPEAKING...'
              : voiceState === 'listening'
              ? 'LISTENING...'
              : voiceState === 'processing'
              ? 'PROCESSING...'
              : 'MARIA AI'}
          </span>
        </div>

        {/* Center / Right audio wave or dot */}
        <div className="flex items-center gap-1">
          {voiceState !== 'idle' ? (
            <div className="flex items-center gap-0.5 h-3">
              <span
                className={`w-0.5 rounded-full ${
                  voiceState === 'listening'
                    ? 'bg-rose-400 h-3 animate-[pulse_0.4s_infinite]'
                    : voiceState === 'speaking'
                    ? 'bg-cyan-300 h-3 animate-[pulse_0.5s_infinite]'
                    : 'bg-purple-300 h-2.5 animate-[pulse_0.7s_infinite]'
                }`}
              />
              <span
                className={`w-0.5 rounded-full ${
                  voiceState === 'listening'
                    ? 'bg-rose-300 h-2 animate-[pulse_0.6s_infinite]'
                    : voiceState === 'speaking'
                    ? 'bg-fuchsia-300 h-3.5 animate-[pulse_0.3s_infinite]'
                    : 'bg-purple-400 h-1.5 animate-[pulse_0.5s_infinite]'
                }`}
              />
              <span
                className={`w-0.5 rounded-full ${
                  voiceState === 'listening'
                    ? 'bg-rose-400 h-3.5 animate-[pulse_0.3s_infinite]'
                    : voiceState === 'speaking'
                    ? 'bg-cyan-400 h-2 animate-[pulse_0.4s_infinite]'
                    : 'bg-purple-300 h-3 animate-[pulse_0.6s_infinite]'
                }`}
              />
            </div>
          ) : (
            <span className="text-[10px] text-cyan-400 font-mono font-medium opacity-80 group-hover:opacity-100">
              Tap
            </span>
          )}
        </div>
      </button>

      {/* Subtext description if processing or searching */}
      {statusText && voiceState !== 'idle' && (
        <div className="absolute top-10 text-[10px] font-mono text-cyan-300/80 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm pointer-events-none animate-fade-in">
          {statusText}
        </div>
      )}
    </div>
  );
};
