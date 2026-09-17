import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Mic,
  Send,
  Phone,
  Terminal as TerminalIcon,
  Copy,
  Check,
  ChevronDown,
  Volume2,
  ExternalLink,
  Code2,
  Lock,
  Unlock,
  CreditCard,
  Crown,
  Gamepad2,
  RotateCcw,
  Key,
} from 'lucide-react';
import { Bot } from 'lucide-react';
import { ChatMessage, ModelType, ModeType, TabType } from '../types';
import { AppIdeasDock } from './AppIdeasDock';
import { GamerSectionBuilder } from './GamerSectionBuilder';
import { AIMakerStudio, CustomAIDefinition } from './AIMakerStudio';

interface HomeTabProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  selectedModel: ModelType;
  setSelectedModel: (m: ModelType) => void;
  selectedMode: ModeType;
  setSelectedMode: (m: ModeType) => void;
  onOpenVoiceModal: () => void;
  onStartListening: () => void;
  isListening: boolean;
  isProcessing: boolean;
  onSpeakText: (text: string) => void;
  onSelectTab: (tab: TabType) => void;
  isBuilderUnlocked: boolean;
  onOpenUnlockModal: () => void;
  onResetSession?: () => void;
  onDeployGameApp?: (type: string) => void;
  onDeployAIApp?: (ai: CustomAIDefinition) => void;
  onOpenCommandDossier?: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  messages,
  onSendMessage,
  selectedModel,
  setSelectedModel,
  selectedMode,
  setSelectedMode,
  onOpenVoiceModal,
  onStartListening,
  isListening,
  isProcessing,
  onSpeakText,
  onSelectTab,
  isBuilderUnlocked,
  onOpenUnlockModal,
  onResetSession,
  onDeployGameApp,
  onDeployAIApp,
  onOpenCommandDossier,
}) => {
  const [inputText, setInputText] = useState('');
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showGamerBuilder, setShowGamerBuilder] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isProcessing]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputText.trim();
    if (clean && !isProcessing) {
      // Allow entering unlock code or unlock command directly
      if (
        clean.toUpperCase() === 'NOWXMULTIPLE' ||
        clean.toLowerCase().includes('unlock') ||
        clean.toLowerCase().includes('अनलॉक')
      ) {
        onSendMessage(clean);
        setInputText('');
        return;
      }
      // If user is in Builder mode and Builder is locked, ask to unlock!
      if (selectedMode === 'Builder' && !isBuilderUnlocked) {
        onOpenUnlockModal();
        return;
      }
      onSendMessage(clean);
      setInputText('');
    }
  };

  const handlePromptAction = (promptText: string) => {
    if (selectedMode === 'Builder' && !isBuilderUnlocked) {
      onOpenUnlockModal();
      return;
    }
    onSendMessage(promptText);
  };

  const builderTemplates = [
    {
      id: 'apple-design',
      title: ' Apple Studio 3D (iPhone & Mac)',
      badge: 'Design Game',
      desc: '3D game to design custom iPhone 16 Pro Max, Fold & MacBook Pro with Titanium finishes, optic cameras, laser engraving & Keynote launch simulator',
      prompt: 'iPhone and MacBook design game banao',
      accent: 'border-amber-400/60 text-amber-200 hover:border-amber-300 bg-amber-950/20',
    },
    {
      id: 'racing',
      title: '🏎️ Nitro Racer 3D',
      badge: 'Racing Game',
      desc: '60FPS cyber highway car racing game with steering controls and nitro boost',
      prompt: 'Car racing game banao',
      accent: 'border-rose-500/40 text-rose-300 hover:border-rose-400',
    },
    {
      id: 'paint',
      title: '🎨 Cyber Paint Studio',
      badge: 'Drawing Pad',
      desc: 'Digital canvas sketch pad with smooth brush strokes, color palette & PNG export',
      prompt: 'Drawing paint app banao',
      accent: 'border-purple-500/40 text-purple-300 hover:border-purple-400',
    },
    {
      id: 'music',
      title: '🎹 Cyber Beat Synth',
      badge: 'Music Station',
      desc: 'Real-time web audio synthesizer, drum pads, tempo controls & BPM visualizer',
      prompt: 'Music beat synthesizer banao',
      accent: 'border-teal-500/40 text-teal-300 hover:border-teal-400',
    },
    {
      id: 'shooter',
      title: '🎯 Target Shooter 3D',
      badge: 'Action Game',
      desc: 'Moving 3D targets, crosshair touch shooting, sound FX & score tracker',
      prompt: 'Shooting game banao',
      accent: 'border-cyan-500/40 text-cyan-300 hover:border-cyan-400',
    },
    {
      id: 'arcade',
      title: '🚀 Space Strike 2099',
      badge: 'Arcade Game',
      desc: '60FPS retro-futuristic space dogfighter with touch joystick & lasers',
      prompt: 'Cyberpunk Game banao',
      accent: 'border-fuchsia-500/40 text-fuchsia-300 hover:border-fuchsia-400',
    },
    {
      id: 'calc',
      title: '🧮 Neon Quantum Calculator',
      badge: 'Utility App',
      desc: 'Scientific calculation engine with glowing buttons & audio feedback',
      prompt: 'Scientific calculator app banao',
      accent: 'border-emerald-500/40 text-emerald-300 hover:border-emerald-400',
    },
    {
      id: 'todo',
      title: '📝 Cyber Task Manager',
      badge: 'Productivity',
      desc: 'Local-storage persistent todo board with priority badges & filters',
      prompt: 'Todo list app banao',
      accent: 'border-blue-500/40 text-blue-300 hover:border-blue-400',
    },
    {
      id: 'gym',
      title: '🏋️‍♂️ Gym Pro Fitness Tracker',
      badge: 'Fitness App',
      desc: 'Workout log, rep counter, timer, animated exercise cards & calories burnt calculator',
      prompt: 'Gym fitness app banao',
      accent: 'border-orange-500/40 text-orange-300 hover:border-orange-400',
    },
    {
      id: 'ecommerce',
      title: '🛍️ Luxury Streetwear Store',
      badge: 'E-Commerce',
      desc: 'Interactive shopping cart, size selector, luxury product cards & discount checkout',
      prompt: 'Shopping store app banao',
      accent: 'border-pink-500/40 text-pink-300 hover:border-pink-400',
    },
    {
      id: 'quiz',
      title: '🧠 AI Quiz Master 2026',
      badge: 'Trivia Game',
      desc: 'Real-time timer, sound effects, dynamic score counter & tech/coding questions',
      prompt: 'Quiz master game banao',
      accent: 'border-violet-500/40 text-violet-300 hover:border-violet-400',
    },
    {
      id: 'crypto',
      title: '📈 Crypto Live Market Portal',
      badge: 'Finance Web',
      desc: 'Bitcoin, Ethereum 24h ticker, price change charts, portfolio calculator & alerts',
      prompt: 'Crypto tracker app banao',
      accent: 'border-emerald-500/40 text-emerald-300 hover:border-emerald-400',
    },
    {
      id: 'food',
      title: '🍔 Neon Food Express',
      badge: 'Delivery App',
      desc: 'Menu browser, live cart counter, order tracking status & fast delivery simulator',
      prompt: 'Food delivery app banao',
      accent: 'border-yellow-500/40 text-yellow-300 hover:border-yellow-400',
    },
    {
      id: 'doctor',
      title: '🩺 MedCare Doctor Portal',
      badge: 'Clinic Portal',
      desc: 'Doctor appointment scheduler, token system, medical records & doctor consults',
      prompt: 'Hospital doctor app banao',
      accent: 'border-cyan-500/40 text-cyan-300 hover:border-cyan-400',
    },
    {
      id: 'telemetry',
      title: '📊 Root Telemetry Monitor',
      badge: 'Dashboard',
      desc: 'Real-time CPU telemetry, network wave canvas & kernel inspector',
      prompt: 'System Monitor Telemetry banao',
      accent: 'border-amber-500/40 text-amber-300 hover:border-amber-400',
    },
  ];

  const promptChips = [
    { label: '👑 Master: Nowempireoff', prompt: 'Nowempireoff', special: true },
    { label: ' iPhone & Mac Design Game', prompt: 'iPhone and MacBook design game banao', special: true },
    { label: '🏋️ Gym Pro Tracker', prompt: 'Gym app banao', special: false },
    { label: '🛍️ Shopping Store App', prompt: 'Shopping app banao', special: false },
    { label: '🧠 AI Quiz Master', prompt: 'Quiz app banao', special: false },
    { label: '🏎️ Nitro Car Racing', prompt: 'Car racing game banao', special: false },
    { label: '🎨 Cyber Paint Canvas', prompt: 'Drawing paint app banao', special: false },
    { label: '🎹 Beat Synth Machine', prompt: 'Music beat synthesizer banao', special: false },
    { label: '🎯 Target Shooting 3D', prompt: 'Shooting game banao', special: false },
    { label: '📈 Crypto Market Portal', prompt: 'Crypto app banao', special: false },
    { label: '🍔 Neon Food Express', prompt: 'Food delivery app banao', special: false },
    { label: '🩺 MedCare Clinic', prompt: 'Hospital app banao', special: false },
    { label: '🧮 Quantum Calculator', prompt: 'Scientific calculator app banao', special: false },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-transparent">
      {/* Scrollable Main Area */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-4">
        {/* Hero Section if fewer messages or top of screen */}
        <div className="flex flex-col items-center text-center pt-2 pb-4">
          {/* Logo Glyph */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-400/20 to-black border border-amber-400/50 flex items-center justify-center p-3 shadow-lg shadow-amber-500/25 mb-3 relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-600 flex items-center justify-center text-black font-black text-xl shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <span className="tracking-tighter font-mono">NX&gt;</span>
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
            </span>
          </div>

          <h2 className="font-mono text-base font-extrabold tracking-wide text-white flex items-center gap-1.5">
            NOWXMULTIPLE <span className="gold-diamond-gradient-text font-black">AUTONOMOUS IDE</span>
          </h2>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
              <span>💎 GOLDEN DIAMOND LUXURY</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-[10px] font-mono font-extrabold text-amber-200 uppercase tracking-wider shadow-[0_0_8px_rgba(245,158,11,0.2)]">
              <span>DEV: Nowempireoff</span>
            </span>
          </div>

          <p className="text-[11px] text-gray-300 max-w-sm mt-2 leading-relaxed">
            Autonomous full-stack code synthesis, real mobile games, and root terminal automation by <span className="text-amber-300 font-semibold">Nowempireoff</span>.
          </p>

          {/* Compact Master Controls & Wake Word Pill */}
          <div className="w-full max-w-lg mx-auto mt-2.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-black/40 to-amber-500/15 border border-amber-400/35 backdrop-blur-md flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-left">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="text-[11px] font-mono text-gray-300">
                Voice Wake Word: <strong className="text-amber-300 font-bold">"Nowempireoff"</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onSendMessage('Nowempireoff')}
                className="px-2 py-0.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-mono font-black text-[9px] shadow active:scale-95 transition-all"
                title="Test Wake Word"
              >
                Wake Voice
              </button>
              {onResetSession && (
                <button
                  type="button"
                  onClick={onResetSession}
                  className="px-2 py-0.5 rounded-lg bg-white/10 hover:bg-rose-500/20 text-gray-300 hover:text-rose-300 border border-white/10 text-[9px] font-mono flex items-center gap-1 active:scale-95 transition-all"
                  title="Reset Chat & Session"
                >
                  <RotateCcw size={10} />
                  <span>Reset</span>
                </button>
              )}
              {onOpenCommandDossier && (
                <button
                  type="button"
                  onClick={onOpenCommandDossier}
                  className="px-2 py-0.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/50 text-[9px] font-mono flex items-center gap-1 active:scale-95 transition-all shadow-[0_0_8px_rgba(245,158,11,0.2)]"
                  title="Secret Codes (6769, NOWXMULTIPLE)"
                >
                  <Key size={10} className="text-amber-400 animate-pulse" />
                  <span>Codes</span>
                </button>
              )}
            </div>
          </div>

          {/* STREAMLINED APP IDEAS DOCK - Replaces scattered clutter */}
          <div className="w-full max-w-xl mx-auto mt-2">
            <AppIdeasDock onSelectPrompt={handlePromptAction} onSelectTab={onSelectTab} />
          </div>
        </div>

        {/* Dedicated Builder Mode Status Bar (When Builder Mode is Active) */}
        {selectedMode === 'Builder' && (
          <div className="w-full max-w-xl mx-auto space-y-2">
            <div className="bg-gradient-to-r from-[#0f1422] to-[#080b13] border border-cyan-500/30 rounded-2xl p-3 shadow-lg flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  isBuilderUnlocked ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                }`}>
                  {isBuilderUnlocked ? <Sparkles size={15} /> : <Lock size={15} />}
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>AUTONOMOUS BUILDER</span>
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold ${
                      isBuilderUnlocked ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}>
                      {isBuilderUnlocked ? 'READY' : 'LOCKED'}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {isBuilderUnlocked ? 'कोई भी सोशल ऐप, 3D गेम या गेमिंग टूल्स लिखें — तुरंत लाइव बनेगा' : 'अनलॉक कोड: NOWXMULTIPLE'}
                  </div>
                </div>
              </div>

              {!isBuilderUnlocked ? (
                <button
                  onClick={onOpenUnlockModal}
                  className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-[10px] font-mono flex items-center gap-1 shadow active:scale-95 transition-all whitespace-nowrap"
                >
                  <Unlock size={12} />
                  <span>UNLOCK</span>
                </button>
              ) : (
                <div className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/30">
                  <span>VIP UNLOCKED</span>
                </div>
              )}
            </div>

            {/* GAMER SECTION BUILDER EXPANDABLE LAUNCHER */}
            <div className="w-full">
              <button
                type="button"
                onClick={() => setShowGamerBuilder(!showGamerBuilder)}
                className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-[#0a1020] to-fuchsia-950/60 border border-cyan-400/50 hover:border-cyan-300 transition-all flex items-center justify-between shadow-md group"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black shadow-sm shadow-cyan-500/30">
                    <Gamepad2 size={18} className="text-black" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-black text-white flex items-center gap-2">
                      <span>🎮 GAMER SECTION BUILDER</span>
                      <span className="px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 text-[9px] font-bold border border-cyan-400/40">
                        FREE FIRE &bull; BGMI &bull; 120FPS
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-300">
                      Sensi Calculator, Crosshair HUD, Touch Delay Optimizer, 1-Click Games
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 text-[11px] font-mono font-bold group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  {showGamerBuilder ? 'Hide ▲' : 'Open Studio ▼'}
                </div>
              </button>

              {showGamerBuilder && (
                <div className="mt-2">
                  <GamerSectionBuilder
                    onDeployGameApp={(type) => {
                      if (onDeployGameApp) {
                        onDeployGameApp(type);
                      } else {
                        onSendMessage(type === 'sensi-app' ? 'sensi app banao' : 'gaming crosshair app banao');
                      }
                    }}
                    onClose={() => setShowGamerBuilder(false)}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* AI MAKER STUDIO (Dedicated Full Persona Synthesis Mode) */}
        {selectedMode === 'AI Maker' && (
          <div className="w-full max-w-xl mx-auto space-y-2">
            <AIMakerStudio
              onDeployAIApp={(ai) => {
                if (onDeployAIApp) {
                  onDeployAIApp(ai);
                } else {
                  onSendMessage(`Create custom AI agent named ${ai.name} with persona: ${ai.systemPrompt}`);
                }
              }}
            />
          </div>
        )}

        {/* Chat Feed */}
        <div className="space-y-3 pt-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              {msg.sender === 'user' ? (
                /* User Message Bubble */
                <div className="max-w-[85%] bg-gradient-to-r from-cyan-950/80 to-slate-900 border border-cyan-500/40 rounded-2xl rounded-tr-none px-3.5 py-2 shadow-sm">
                  <p className="text-xs text-cyan-100 font-sans leading-relaxed">
                    {msg.text}
                  </p>
                  <span className="text-[9px] font-mono text-cyan-400/60 block text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              ) : (
                /* Maria AI Response Card */
                <div className="w-full max-w-[95%] bg-[#0e121d] border border-white/10 rounded-2xl rounded-tl-none p-3.5 space-y-2 shadow-md">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-white">
                        Bypass AI
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        Maria
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onSpeakText(msg.text)}
                        title="Listen to Maria"
                        className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-cyan-300 transition-colors"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        title="Copy text"
                        className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs text-gray-200 font-sans leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </p>

                  {/* Optional Terminal Execution Box */}
                  {msg.commandExecution && (
                    <div className="mt-2 p-2.5 rounded-xl bg-black/70 border border-cyan-500/30 font-mono text-[11px] space-y-1">
                      <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-white/10 pb-1">
                        <div className="flex items-center gap-1">
                          <TerminalIcon className="w-3 h-3" />
                          <span>TERMINAL EXECUTION</span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          ROOT RUN
                        </span>
                      </div>
                      <div className="text-gray-300 pt-1">
                        <span className="text-cyan-400 font-bold">&gt;&gt; </span>
                        {msg.commandExecution.cmd}
                      </div>
                      {msg.commandExecution.output && (
                        <div className="text-emerald-400/90 text-[10px]">
                          {msg.commandExecution.output}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Optional Code Preview Notification */}
                  {msg.codePreview && (
                    <div className="mt-2 flex items-center justify-between p-2 rounded-xl bg-cyan-950/40 border border-cyan-400/40">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="text-[11px] font-mono font-bold text-white">
                            {msg.codePreview.file}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            Synthesized &amp; Compiled
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => onSelectTab('preview')}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-[11px] font-bold transition-all"
                      >
                        <span>Preview</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <span className="text-[9px] font-mono text-gray-500 block text-right">
                    {msg.timestamp}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="flex items-start gap-2 p-3 rounded-2xl bg-[#0e121d] border border-cyan-500/30 max-w-[85%]">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-cyan-300">
                  Synthesizing response &amp; code...
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Model & Mode Selector Pill Bar (From Video 01:10 - 01:35) */}
      <div className="px-3 pt-1 pb-1 flex items-center justify-between gap-2 border-t border-white/5 bg-[#0a0d14]">
        {/* Model Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowModelDropdown(!showModelDropdown)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 transition-colors"
          >
            <span>&lt; {selectedModel} &gt;</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {showModelDropdown && (
            <div className="absolute bottom-8 left-0 z-50 w-44 rounded-xl bg-[#141724] border border-cyan-500/40 p-1 shadow-2xl space-y-0.5">
              {(['Gemini 3.8 Flash', 'Gemini 3.1 Pro', 'Gemini 2.5 Flash'] as ModelType[]).map(
                (m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setSelectedModel(m);
                      setShowModelDropdown(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono ${
                      selectedModel === m
                        ? 'bg-cyan-500 text-black font-bold'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {m}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Mode Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowModeDropdown(!showModeDropdown)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono transition-colors ${
              selectedMode === 'Builder' && !isBuilderUnlocked
                ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                : selectedMode === 'AI Maker'
                ? 'bg-purple-500/20 border-purple-400 text-purple-200'
                : 'bg-white/5 hover:bg-white/10 border-fuchsia-500/40 text-fuchsia-300'
            }`}
          >
            <span>
              &lt; {selectedMode} {selectedMode === 'Builder' ? (!isBuilderUnlocked ? '🔒' : '⚡') : selectedMode === 'AI Maker' ? '🤖' : ''} &gt;
            </span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {showModeDropdown && (
            <div className="absolute bottom-8 right-0 z-50 w-60 rounded-xl bg-[#141724] border border-fuchsia-500/40 p-1.5 shadow-2xl space-y-1">
              {[
                {
                  name: 'Builder',
                  locked: !isBuilderUnlocked,
                  desc: !isBuilderUnlocked
                    ? '🔒 Locked! Tap to unlock with code NOWXMULTIPLE'
                    : 'Full-Stack Web, Games, Gamer Section, Scaffolding',
                },
                {
                  name: 'AI Maker',
                  locked: false,
                  desc: '✨ Custom AI Persona Maker — synthesize any AI',
                },
                { name: 'Chat', locked: false, desc: 'Consultation, Planning, Explanations' },
                { name: 'Agent', locked: false, desc: 'Autonomous Tasks, Terminal, Root Ops' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.name === 'Builder' && !isBuilderUnlocked) {
                      setShowModeDropdown(false);
                      onOpenUnlockModal();
                    } else {
                      setSelectedMode(item.name as ModeType);
                      setShowModeDropdown(false);
                    }
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg font-mono transition-colors ${
                    selectedMode === item.name
                      ? item.name === 'Builder' && !isBuilderUnlocked
                        ? 'bg-amber-500/30 text-amber-300 font-bold'
                        : 'bg-fuchsia-600 text-white font-bold'
                      : 'text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.name === 'AI Maker' && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-purple-500/40 text-purple-200 border border-purple-400/50">
                        NEW
                      </span>
                    )}
                    {item.name === 'Builder' && (
                      <span className="text-[10px]">
                        {!isBuilderUnlocked ? '🔒 LOCKED' : '⚡ UNLOCKED'}
                      </span>
                    )}
                  </div>
                  <div className="text-[9px] text-gray-400">{item.desc}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lock Notification Banner if Builder selected or locked */}
      {!isBuilderUnlocked ? (
        <div
          onClick={onOpenUnlockModal}
          className="px-3 py-1.5 bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border-t border-amber-500/30 flex items-center justify-between cursor-pointer hover:bg-amber-500/20 transition-all text-xs select-none"
        >
          <div className="flex items-center gap-1.5 text-amber-300 font-mono text-[11px]">
            <Lock size={13} className="text-amber-400" />
            <span>Builder is Locked</span>
          </div>
          <span className="text-[10px] bg-amber-500/25 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/40 font-mono font-bold flex items-center gap-1">
            <Unlock size={11} /> Unlock (NOWXMULTIPLE)
          </span>
        </div>
      ) : (
        <div
          onClick={() => onSelectTab('vip')}
          className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border-t border-cyan-500/20 flex items-center justify-between cursor-pointer hover:bg-cyan-500/15 transition-all text-xs select-none"
        >
          <div className="flex items-center gap-2 text-cyan-300 font-mono text-[10px]">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Crown size={12} /> VIP Suite:
            </span>
            <span className="hover:underline text-cyan-400 font-semibold">💳 Card Maker</span>
            <span>•</span>
            <span className="hover:underline text-amber-400 font-semibold">🚀 Game Booster</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Open Hub →</span>
        </div>
      )}

      {/* Bottom Command / Prompt Input Bar */}
      <div className="p-3 bg-[#0a0703]/90 backdrop-blur-md border-t border-amber-500/25 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
        <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
          {/* Phone / Voice HUD button */}
          <button
            type="button"
            onClick={onOpenVoiceModal}
            title="Launch Maria Voice Assistant"
            className="p-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 transition-all active:scale-95 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
          >
            <Phone className="w-4 h-4 text-amber-400" />
          </button>

          {/* Prompt Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                selectedMode === 'Builder'
                  ? isBuilderUnlocked
                    ? "Bolo/Type: 'Nowempireoff [koi bhi app/game banao]'..."
                    : "Builder Locked: कोड 'NOWXMULTIPLE' डालें या 'Nowempireoff' बोलें..."
                  : selectedMode === 'Chat'
                  ? "Bolo/Type: 'Nowempireoff [kuch bhi poocho ya bolo]'..."
                  : "Bolo/Type: 'Nowempireoff [kuch bhi command do]'..."
              }
              className="w-full bg-[#140e06]/85 border border-amber-500/25 focus:border-amber-400 rounded-xl px-3.5 py-2 text-xs text-white placeholder-amber-200/40 outline-none pr-9 font-sans transition-colors"
            />
            {/* Mic inside input */}
            <button
              type="button"
              onClick={onStartListening}
              title="Speak prompt (Hindi/English)"
              className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-colors ${
                isListening
                  ? 'text-rose-400 animate-pulse'
                  : 'text-amber-400/70 hover:text-amber-300'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!inputText.trim() || isProcessing}
            className="p-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-110 disabled:opacity-40 text-black font-extrabold transition-all active:scale-95 shadow-md shadow-amber-500/30"
          >
            <Send className="w-4 h-4 text-black" />
          </button>
        </form>
      </div>
    </div>
  );
};
