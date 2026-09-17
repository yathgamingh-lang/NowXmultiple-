import React, { useState } from 'react';
import {
  Sparkles,
  Globe,
  Gamepad2,
  Tv,
  MessageCircle,
  Music,
  Share2,
  Compass,
  Search,
  Zap,
  ChevronUp,
  X,
  Layers,
  Smartphone,
  Flame,
  ArrowRight,
} from 'lucide-react';

export interface AppIdeaItem {
  id: string;
  name: string;
  category: 'social' | 'games' | 'gis' | 'tools' | 'commerce';
  icon: string;
  badge: string;
  desc: string;
  prompt: string;
  gradient: string;
  accentBorder: string;
  tag: string;
}

export const ALL_APP_IDEAS: AppIdeaItem[] = [
  // Social Apps
  {
    id: 'instagram',
    name: 'Instagram Pro',
    category: 'social',
    icon: '📸',
    badge: 'Social Media',
    desc: 'Feed, stories bar with rings, double-tap heart animations, vertical reels, and profile grid clone.',
    prompt: 'Instagram app banao',
    gradient: 'from-pink-500/20 via-purple-500/20 to-amber-500/20',
    accentBorder: 'border-pink-500/50 hover:border-pink-400',
    tag: 'Stories & Reels',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Pro',
    category: 'social',
    icon: '💬',
    badge: 'Messenger',
    desc: 'Real-time multi-chat messenger with voice call simulator, status updates, and auto-reply bots.',
    prompt: 'WhatsApp app banao',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentBorder: 'border-emerald-500/50 hover:border-emerald-400',
    tag: 'Live Chats & Calls',
  },
  {
    id: 'youtube',
    name: 'YouTube Pro 4K',
    category: 'social',
    icon: '▶️',
    badge: 'Video & Shorts',
    desc: '4K video player canvas, real-time equalizer wave, vertical Shorts shelf, and subscription hub.',
    prompt: 'YouTube video player app banao',
    gradient: 'from-rose-500/20 to-red-600/20',
    accentBorder: 'border-rose-500/50 hover:border-rose-400',
    tag: '4K Player & Shorts',
  },
  {
    id: 'twitter',
    name: '𝕏 Pro (Twitter)',
    category: 'social',
    icon: '𝕏',
    badge: 'Microblog',
    desc: 'Live tweet composer, trending hashtag ticker, retweet animations, and interactive timeline feed.',
    prompt: 'Twitter X clone app banao',
    gradient: 'from-sky-500/20 via-slate-700/20 to-cyan-500/20',
    accentBorder: 'border-sky-500/50 hover:border-sky-400',
    tag: 'Trends & Retweets',
  },
  {
    id: 'spotify',
    name: 'Spotify Pro Synth',
    category: 'social',
    icon: '🎵',
    badge: 'Music Streamer',
    desc: 'Web Audio synthesizer engine, sound frequency visualizer, curated playlists, and vinyl disc spinner.',
    prompt: 'Spotify music player app banao',
    gradient: 'from-emerald-500/20 to-green-600/20',
    accentBorder: 'border-green-500/50 hover:border-green-400',
    tag: 'Web Audio Synth',
  },
  {
    id: 'tiktok',
    name: 'TikTok Reels Pro',
    category: 'social',
    icon: '🔥',
    badge: 'Viral Video',
    desc: 'Full-screen vertical video feed, interactive floating heart particles, audio disc, and action rails.',
    prompt: 'TikTok reels app banao',
    gradient: 'from-cyan-500/20 via-pink-500/20 to-rose-500/20',
    accentBorder: 'border-fuchsia-500/50 hover:border-fuchsia-400',
    tag: 'Vertical Video Flow',
  },
  {
    id: 'discord',
    name: 'Discord Pro Guild',
    category: 'social',
    icon: '⚡',
    badge: 'Voice & Chat',
    desc: 'Server guilds, voice lounges, live channel chat, reaction counters, and bot integration.',
    prompt: 'Discord app banao',
    gradient: 'from-indigo-500/20 to-violet-600/20',
    accentBorder: 'border-indigo-500/50 hover:border-indigo-400',
    tag: 'Guilds & Voice RTC',
  },
  {
    id: 'telegram',
    name: 'Telegram Pro Cloud',
    category: 'social',
    icon: '✈️',
    badge: 'Cloud Messenger',
    desc: 'Encrypted MTProto cloud messenger, voice notes, channel broadcasts, and media attachments.',
    prompt: 'Telegram messenger app banao',
    gradient: 'from-sky-500/20 to-blue-600/20',
    accentBorder: 'border-sky-500/50 hover:border-sky-400',
    tag: 'Encrypted Cloud',
  },
  {
    id: 'netflix',
    name: 'Netflix Pro Streaming',
    category: 'social',
    icon: '🎬',
    badge: 'Cinema & Shows',
    desc: 'Cinematic hero billboard trailer, 4K streaming player, category carousels & trending rows.',
    prompt: 'Netflix streaming app banao',
    gradient: 'from-red-600/20 to-neutral-900',
    accentBorder: 'border-red-500/50 hover:border-red-400',
    tag: '4K Cinema Player',
  },
  {
    id: 'snapchat',
    name: 'Snapchat Pro Streaks',
    category: 'social',
    icon: '👻',
    badge: 'Camera & AR',
    desc: 'Interactive camera viewfinder, 74-day flame streak counter, AR face filters & snap maps.',
    prompt: 'Snapchat camera streaks app banao',
    gradient: 'from-yellow-400/20 to-amber-500/20',
    accentBorder: 'border-yellow-400/50 hover:border-yellow-300',
    tag: 'AR Filters & Streaks',
  },

  // 3D Games & Arcade
  {
    id: 'apple-design',
    name: ' Apple Studio 3D',
    category: 'games',
    icon: '📱',
    badge: 'Design Game',
    desc: 'Interactive 3D studio to design custom iPhone 16 Pro Max, Fold & MacBook Pro with Keynote launch.',
    prompt: 'iPhone and MacBook design game banao',
    gradient: 'from-amber-500/25 to-yellow-600/20',
    accentBorder: 'border-amber-400/60 hover:border-amber-300',
    tag: 'iPhone & Mac 3D',
  },
  {
    id: 'racing',
    name: 'Nitro Racer 3D',
    category: 'games',
    icon: '🏎️',
    badge: 'Arcade Game',
    desc: '60FPS cyber highway car racing game with responsive touch steering, traffic dodging & nitro boost.',
    prompt: 'Car racing game banao',
    gradient: 'from-rose-500/20 to-orange-500/20',
    accentBorder: 'border-rose-500/50 hover:border-rose-400',
    tag: '60FPS Highway',
  },
  {
    id: 'shooter',
    name: 'Target Shooter 3D',
    category: 'games',
    icon: '🎯',
    badge: 'Shooting Game',
    desc: 'Precision touch crosshair, moving drone targets, realistic sound FX, combo counters & sniper scope.',
    prompt: 'Shooting game banao',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accentBorder: 'border-cyan-500/50 hover:border-cyan-400',
    tag: 'Crosshair Physics',
  },
  {
    id: 'arcade',
    name: 'Space Strike 2099',
    category: 'games',
    icon: '🚀',
    badge: 'Space Arcade',
    desc: 'Retro-futuristic space dogfighter with touch joystick, laser cannons, meteorite waves, and score HUD.',
    prompt: 'Cyberpunk space game banao',
    gradient: 'from-purple-500/20 to-fuchsia-600/20',
    accentBorder: 'border-fuchsia-500/50 hover:border-fuchsia-400',
    tag: 'Retro Dogfight',
  },
  {
    id: 'quiz',
    name: 'Mind Pulse AI Quiz',
    category: 'games',
    icon: '🧠',
    badge: 'Trivia Game',
    desc: 'Interactive 15-second countdown timer, animated sound effects, streak multipliers & tech questions.',
    prompt: 'Quiz master game banao',
    gradient: 'from-indigo-500/20 to-violet-600/20',
    accentBorder: 'border-violet-500/50 hover:border-violet-400',
    tag: 'Live Timer Quiz',
  },

  // GIS, Maps & Weather
  {
    id: 'world-map',
    name: 'TERRA GLOBE 360',
    category: 'gis',
    icon: '🌍',
    badge: 'World Atlas GIS',
    desc: 'Interactive world map atlas with Leaflet engine, country search, flight distance routing & quiz.',
    prompt: 'World map wala app bnao',
    gradient: 'from-blue-500/25 to-emerald-500/20',
    accentBorder: 'border-blue-400/60 hover:border-blue-300',
    tag: 'Global Atlas & GIS',
  },
  {
    id: 'weather',
    name: 'AERO CLIMATE Radar',
    category: 'gis',
    icon: '⛈️',
    badge: 'Weather Radar',
    desc: 'Real-time multi-city weather radar, temperature graphs, atmospheric humidity, and 5-day forecast.',
    prompt: 'Weather forecast app banao',
    gradient: 'from-sky-500/20 to-cyan-500/20',
    accentBorder: 'border-sky-400/60 hover:border-sky-300',
    tag: 'Live Radar & Storms',
  },

  // Tools & Media Studios
  {
    id: 'paint',
    name: 'Cyber Paint Studio',
    category: 'tools',
    icon: '🎨',
    badge: 'Drawing Pad',
    desc: 'Smooth canvas sketch pad with brush sizes, rainbow color wheel, undo/redo, and PNG image export.',
    prompt: 'Drawing paint app banao',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentBorder: 'border-purple-500/50 hover:border-purple-400',
    tag: 'Digital Canvas',
  },
  {
    id: 'music-synth',
    name: 'Cyber Beat Synth',
    category: 'tools',
    icon: '🎹',
    badge: 'Music Studio',
    desc: '16-pad drum machine, 808 bass synth, tempo BPM slider, and real-time Web Audio API sound generator.',
    prompt: 'Music beat synthesizer banao',
    gradient: 'from-teal-500/20 to-emerald-500/20',
    accentBorder: 'border-teal-500/50 hover:border-teal-400',
    tag: 'Web Audio Synth',
  },
  {
    id: 'calc',
    name: 'Quantum Calculator',
    category: 'tools',
    icon: '🧮',
    badge: 'Math Engine',
    desc: 'Neon scientific calculation suite with trigonometric functions, history tape, and audio click feedback.',
    prompt: 'Scientific calculator app banao',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentBorder: 'border-emerald-500/50 hover:border-emerald-400',
    tag: 'Scientific Suite',
  },
  {
    id: 'todo',
    name: 'Cyber Task Kanban',
    category: 'tools',
    icon: '📝',
    badge: 'Productivity',
    desc: 'Persistent task manager with priority tags, completion progress bar, filters, and local storage state.',
    prompt: 'Todo list app banao',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    accentBorder: 'border-blue-500/50 hover:border-blue-400',
    tag: 'Task Manager',
  },
  {
    id: 'telemetry',
    name: 'Telemetry OS',
    category: 'tools',
    icon: '📊',
    badge: 'System Dashboard',
    desc: 'Live CPU frequency gauge, memory usage radar, real-time packet sine wave & root kernel logs.',
    prompt: 'System Monitor Telemetry banao',
    gradient: 'from-amber-500/20 to-orange-500/20',
    accentBorder: 'border-amber-500/50 hover:border-amber-400',
    tag: 'Kernel Telemetry',
  },

  // Stores & Portals
  {
    id: 'streetwear',
    name: 'Luxury Streetwear',
    category: 'commerce',
    icon: '🛍️',
    badge: 'E-Commerce Store',
    desc: 'High-end apparel showcase, interactive shopping cart, size selector, coupon engine & checkout.',
    prompt: 'Shopping store app banao',
    gradient: 'from-pink-500/20 to-purple-500/20',
    accentBorder: 'border-pink-500/50 hover:border-pink-400',
    tag: 'Store & Live Cart',
  },
  {
    id: 'crypto',
    name: 'Crypto Market 360',
    category: 'commerce',
    icon: '📈',
    badge: 'Finance Ticker',
    desc: 'Bitcoin & Ethereum live price ticker, 24h gainers/losers, candlestick chart & portfolio calculator.',
    prompt: 'Crypto tracker app banao',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentBorder: 'border-emerald-500/50 hover:border-emerald-400',
    tag: 'Live Crypto Ticker',
  },
  {
    id: 'food',
    name: 'Neon Food Express',
    category: 'commerce',
    icon: '🍔',
    badge: 'Delivery App',
    desc: 'Artisan burger and pizza menu, customizable toppings, cart checkout, and simulated delivery GPS map.',
    prompt: 'Food delivery app banao',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    accentBorder: 'border-yellow-500/50 hover:border-yellow-400',
    tag: 'Food Delivery',
  },
  {
    id: 'doctor',
    name: 'MedCare Clinic',
    category: 'commerce',
    icon: '🩺',
    badge: 'Health Portal',
    desc: 'Doctor appointment scheduler, live clinic token queue, prescription records, and consultation chat.',
    prompt: 'Hospital doctor app banao',
    gradient: 'from-cyan-500/20 to-teal-500/20',
    accentBorder: 'border-cyan-500/50 hover:border-cyan-400',
    tag: 'Appointment Queue',
  },
];

interface AppIdeasDockProps {
  onSelectIdea: (prompt: string) => void;
  isBuilderUnlocked: boolean;
  onOpenUnlockModal: () => void;
}

export const AppIdeasDock: React.FC<AppIdeasDockProps> = ({
  onSelectIdea,
  isBuilderUnlocked,
  onOpenUnlockModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'games' | 'gis' | 'tools' | 'commerce'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIdeas = ALL_APP_IDEAS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLaunch = (promptText: string) => {
    if (!isBuilderUnlocked) {
      onOpenUnlockModal();
      return;
    }
    setIsOpen(false);
    onSelectIdea(promptText);
  };

  // Preview quick dock items (top favorites across categories)
  const quickDockItems = [
    ALL_APP_IDEAS[0], // Instagram
    ALL_APP_IDEAS[1], // WhatsApp
    ALL_APP_IDEAS[2], // YouTube
    ALL_APP_IDEAS[3], // Twitter
    ALL_APP_IDEAS[4], // Spotify
    ALL_APP_IDEAS[5], // TikTok
    ALL_APP_IDEAS[6], // Apple 3D
    ALL_APP_IDEAS[7], // Nitro Racer
    ALL_APP_IDEAS[11], // World Map
    ALL_APP_IDEAS[12], // Weather Radar
  ];

  return (
    <>
      {/* Sleek Floating / Embedded Dock Bar */}
      <div className="w-full flex flex-col items-center justify-center my-1 select-none">
        <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-2xl bg-[#0e0a05]/95 backdrop-blur-xl border border-amber-500/35 shadow-[0_4px_25px_rgba(0,0,0,0.7)] transition-all">
          {/* Dock Launcher / Category Pill */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/25 to-yellow-500/15 hover:from-amber-500/40 hover:to-yellow-500/30 border border-amber-400/50 text-amber-200 font-mono text-xs font-bold transition-all shadow-sm active:scale-95"
            title="Open all app ideas"
          >
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span className="hidden sm:inline">APP IDEAS DOCK</span>
            <span className="sm:hidden">DOCK</span>
            <span className="text-[10px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-black">
              {ALL_APP_IDEAS.length}
            </span>
          </button>

          <div className="h-5 w-[1px] bg-amber-500/25 mx-1" />

          {/* Quick Icons Strip */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-[280px] sm:max-w-md no-scrollbar py-0.5">
            {quickDockItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLaunch(item.prompt)}
                title={`${item.name} — ${item.desc}`}
                className="relative group p-1.5 rounded-xl bg-white/5 hover:bg-amber-400/20 hover:scale-110 hover:border-amber-400/60 border border-white/10 transition-all active:scale-95 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-sm">{item.icon}</span>
                {/* Tooltip on hover */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black/95 text-amber-200 text-[10px] font-mono whitespace-nowrap rounded-md border border-amber-400/40 shadow-lg pointer-events-none z-50">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          <div className="h-5 w-[1px] bg-amber-500/25 mx-1" />

          {/* Expand Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-amber-400/20 text-amber-300 transition-all hover:scale-105 active:scale-95"
            title="Expand Full App Ideas Explorer"
          >
            <ChevronUp size={15} />
          </button>
        </div>
      </div>

      {/* Full App Ideas Explorer Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5 animate-in fade-in duration-200">
          <div className="w-full max-w-3xl max-h-[85vh] bg-[#0c0803] border border-amber-500/40 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.25)] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-amber-500/25 bg-gradient-to-r from-amber-950/40 via-[#140e06] to-amber-950/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/15 border border-amber-400/50 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  💡
                </div>
                <div>
                  <h3 className="font-mono text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <span>AUTONOMOUS APP IDEAS DOCK</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-black font-extrabold">
                      {filteredIdeas.length} READY
                    </span>
                  </h3>
                  <p className="text-[11px] text-amber-200/70">
                    किसी भी ऐप या गेम पर टैप करें — बिल्डर उसे रियल-टाइम कोड और प्रिव्यू के साथ तैयार कर देगा!
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
              >
                <X size={18} />
              </button>
            </div>

            {/* Filter Bar & Search */}
            <div className="p-3 sm:p-4 border-b border-amber-500/20 bg-[#120c05] flex flex-col sm:flex-row gap-2.5 items-center justify-between">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0">
                {[
                  { id: 'all', label: 'All Ideas', icon: '✨' },
                  { id: 'social', label: 'Social Apps', icon: '🌐' },
                  { id: 'games', label: '3D Games', icon: '🎮' },
                  { id: 'gis', label: 'Maps & Weather', icon: '🌍' },
                  { id: 'tools', label: 'Tools & Media', icon: '🛠️' },
                  { id: 'commerce', label: 'Stores & Portals', icon: '🛍️' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                      activeCategory === tab.id
                        ? 'bg-amber-400 text-black shadow-md shadow-amber-400/30'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-60">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search app ideas..."
                  className="w-full bg-[#1c1207] border border-amber-500/30 focus:border-amber-400 rounded-xl px-3 py-1.5 text-xs text-white placeholder-amber-200/40 outline-none pl-8"
                />
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
              </div>
            </div>

            {/* Ideas Grid */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredIdeas.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleLaunch(item.prompt)}
                  className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.accentBorder} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl p-1.5 rounded-xl bg-black/40 border border-white/10">
                          {item.icon}
                        </span>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-mono text-gray-400">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-300 font-bold group-hover:underline flex items-center gap-1">
                      <span>🚀 1-Tap Build</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] text-gray-400">
                      Live Preview →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Notice */}
            <div className="p-3 px-5 border-t border-amber-500/20 bg-[#0e0a05] flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Globe size={13} className="text-amber-400" />
                <span>Google Search Grounding Real-App Engine Active</span>
              </span>
              <span className="text-[11px] text-gray-500">
                By Nowempireoff
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
