import React, { useState } from 'react';
import {
  Gamepad2,
  Crosshair,
  Sliders,
  Zap,
  Target,
  Flame,
  Check,
  Copy,
  Play,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  Monitor,
  Cpu,
  Smartphone,
  Trophy,
} from 'lucide-react';
import { soundFx } from '../soundFx';

interface GamerSectionBuilderProps {
  onDeployGameApp: (type: string) => void;
  onClose?: () => void;
}

export const GamerSectionBuilder: React.FC<GamerSectionBuilderProps> = ({
  onDeployGameApp,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'sensi' | 'crosshair' | 'fps' | 'reflex' | 'deploy'>('sensi');

  // Sensi State
  const [selectedGame, setSelectedGame] = useState<'freefire' | 'bgmi' | 'codm' | 'valorant'>('freefire');
  const [deviceDpi, setDeviceDpi] = useState<number>(411);
  const [ramTier, setRamTier] = useState<'4gb' | '6gb' | '8gb' | '12gb'>('8gb');
  const [dragStyle, setDragStyle] = useState<'one-tap' | 'j-drag' | 'rotation'>('one-tap');
  const [copiedSensi, setCopiedSensi] = useState(false);

  // Crosshair Customizer State
  const [crosshairStyle, setCrosshairStyle] = useState<'dot' | 'classic' | 'circle' | 'diamond' | 'sniper'>('dot');
  const [crosshairColor, setCrosshairColor] = useState<string>('#00ffcc');
  const [crosshairSize, setCrosshairSize] = useState<number>(14);
  const [crosshairGap, setCrosshairGap] = useState<number>(4);
  const [crosshairOpacity, setCrosshairOpacity] = useState<number>(1);
  const [hudLayout, setHudLayout] = useState<'2finger' | '3finger' | '4finger'>('4finger');

  // Reflex Game State
  const [reflexState, setReflexState] = useState<'idle' | 'waiting' | 'ready' | 'result'>('idle');
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);

  // Calculated Sensitivities based on game + device
  const getCalculatedSensi = () => {
    let baseMultiplier = ramTier === '12gb' ? 1.05 : ramTier === '8gb' ? 1.0 : ramTier === '6gb' ? 0.95 : 0.9;
    if (selectedGame === 'freefire') {
      return {
        general: Math.min(100, Math.round(98 * baseMultiplier)),
        redDot: Math.min(100, Math.round(92 * baseMultiplier)),
        scope2x: Math.min(100, Math.round(88 * baseMultiplier)),
        scope4x: Math.min(100, Math.round(84 * baseMultiplier)),
        sniper: Math.min(100, Math.round(56 * baseMultiplier)),
        freeLook: Math.min(100, Math.round(75 * baseMultiplier)),
        fireButtonSize: ramTier === '4gb' ? '54%' : ramTier === '6gb' ? '50%' : '46%',
        recommendedDpi: ramTier === '12gb' ? 480 : ramTier === '8gb' ? 440 : 411,
        touchCalibration: '0.04ms (Optimal)',
      };
    } else if (selectedGame === 'bgmi') {
      return {
        general: Math.min(300, Math.round(145 * baseMultiplier)),
        redDot: Math.min(300, Math.round(62 * baseMultiplier)),
        scope2x: Math.min(300, Math.round(42 * baseMultiplier)),
        scope4x: Math.min(300, Math.round(24 * baseMultiplier)),
        sniper: Math.min(300, Math.round(14 * baseMultiplier)),
        freeLook: Math.min(300, Math.round(130 * baseMultiplier)),
        fireButtonSize: '135%',
        recommendedDpi: 420,
        touchCalibration: '0.02ms (Gyro Pro)',
      };
    } else {
      return {
        general: Math.min(100, Math.round(90 * baseMultiplier)),
        redDot: Math.min(100, Math.round(85 * baseMultiplier)),
        scope2x: Math.min(100, Math.round(78 * baseMultiplier)),
        scope4x: Math.min(100, Math.round(70 * baseMultiplier)),
        sniper: Math.min(100, Math.round(50 * baseMultiplier)),
        freeLook: Math.min(100, Math.round(80 * baseMultiplier)),
        fireButtonSize: '50%',
        recommendedDpi: 440,
        touchCalibration: '0.03ms (Ultra Low Latency)',
      };
    }
  };

  const sensiData = getCalculatedSensi();

  const handleCopySensi = () => {
    soundFx.playTapTone();
    const text = `🎮 PRO SENSI CONFIG [${selectedGame.toUpperCase()}]:
• General: ${sensiData.general}
• Red Dot: ${sensiData.redDot}
• 2x Scope: ${sensiData.scope2x}
• 4x Scope: ${sensiData.scope4x}
• Sniper: ${sensiData.sniper}
• Free Look: ${sensiData.freeLook}
• Fire Button Size: ${sensiData.fireButtonSize}
• Recommended DPI: ${sensiData.recommendedDpi}
• Touch Calibration: ${sensiData.touchCalibration}`;
    navigator.clipboard.writeText(text);
    setCopiedSensi(true);
    setTimeout(() => setCopiedSensi(false), 2000);
  };

  // Reflex mini-game trigger
  const startReflexTest = () => {
    soundFx.playTapTone();
    setReflexState('waiting');
    setReactionTime(null);
    const delay = Math.floor(Math.random() * 2500) + 1500;
    setTimeout(() => {
      setStartTime(Date.now());
      setReflexState('ready');
    }, delay);
  };

  const handleReflexClick = () => {
    if (reflexState === 'waiting') {
      soundFx.playLockTone();
      setReflexState('idle');
      alert('⚠️ जल्दी क्लिक कर दिया! लाल रंग होने पर ही क्लिक करें।');
    } else if (reflexState === 'ready') {
      soundFx.playUnlockChime();
      const elapsed = Date.now() - startTime;
      setReactionTime(elapsed);
      setReflexState('result');
      if (!bestTime || elapsed < bestTime) {
        setBestTime(elapsed);
      }
    }
  };

  return (
    <div className="w-full bg-[#0a0d16] border border-cyan-500/40 rounded-3xl p-4 sm:p-5 shadow-2xl text-left font-mono space-y-4 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00ffcc12_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cyan-500/20 pb-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-fuchsia-600 p-0.5 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-white">
            <Gamepad2 size={24} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg text-white tracking-wider flex items-center gap-1.5">
                GAMER SECTION BUILDER
                <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/40 text-cyan-300 text-[10px] font-black">
                  ESPORTS PRO
                </span>
              </h3>
            </div>
            <p className="text-xs text-gray-400">
              Pro Sensi &amp; DPI Engine • Custom Crosshair HUD • 120FPS Booster • Game Synthesis
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="self-end sm:self-center px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs border border-white/10 transition-colors"
          >
            Close ✕
          </button>
        )}
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar relative z-10">
        {[
          { id: 'sensi', label: '🎯 Sensi & DPI Calculator', icon: Sliders },
          { id: 'crosshair', label: '🕹️ Crosshair & HUD', icon: Crosshair },
          { id: 'fps', label: '⚡ 120FPS & Latency', icon: Zap },
          { id: 'reflex', label: '🏆 Reflex & Recoil Lab', icon: Target },
          { id: 'deploy', label: '🚀 Deploy Game Apps', icon: Play },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playTapTone();
                setActiveTab(tab.id as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
              }`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT AREA */}
      <div className="relative z-10">
        {/* TAB 1: SENSI & DPI CALCULATOR */}
        {activeTab === 'sensi' && (
          <div className="space-y-4">
            {/* Game Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'freefire', name: 'Free Fire MAX', tag: '1-Tap Headshot' },
                { id: 'bgmi', name: 'BGMI / PUBG', tag: 'Zero Recoil Gyro' },
                { id: 'codm', name: 'COD Mobile', tag: 'Speed Accel' },
                { id: 'valorant', name: 'Valorant Mobile', tag: 'Precision Cross' },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    soundFx.playTapTone();
                    setSelectedGame(g.id as any);
                  }}
                  className={`p-2.5 rounded-2xl border text-left transition-all ${
                    selectedGame === g.id
                      ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md'
                      : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{g.name}</div>
                  <div className="text-[10px] text-cyan-400/80">{g.tag}</div>
                </button>
              ))}
            </div>

            {/* Device & RAM Specs Configuration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1">RAM Tier (Phone Memory)</label>
                <select
                  value={ramTier}
                  onChange={(e) => setRamTier(e.target.value as any)}
                  className="w-full bg-[#141824] border border-white/15 rounded-xl px-2.5 py-1.5 text-white outline-none text-xs"
                >
                  <option value="4gb">4 GB (Budget Device - High Sensi)</option>
                  <option value="6gb">6 GB (Balanced Response)</option>
                  <option value="8gb">8 GB (Pro Esports Tier)</option>
                  <option value="12gb">12 GB+ (Flagship Smooth Sampling)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-gray-400 block mb-1">Drag Technique</label>
                <select
                  value={dragStyle}
                  onChange={(e) => setDragStyle(e.target.value as any)}
                  className="w-full bg-[#141824] border border-white/15 rounded-xl px-2.5 py-1.5 text-white outline-none text-xs"
                >
                  <option value="one-tap">⚡ 1-Tap Straight Drag</option>
                  <option value="j-drag">🔥 J-Drag Headshot Trick</option>
                  <option value="rotation">🔄 Full Rotation Drag (Close Range)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-gray-400 block mb-1">Current Screen DPI</label>
                <input
                  type="number"
                  value={deviceDpi}
                  onChange={(e) => setDeviceDpi(Number(e.target.value))}
                  className="w-full bg-[#141824] border border-white/15 rounded-xl px-2.5 py-1.5 text-white outline-none text-xs"
                  placeholder="e.g. 411"
                />
              </div>
            </div>

            {/* Calculated Values Grid */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#111625] to-[#0a0d18] border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  CALCULATED OPTIMAL VALUES ({selectedGame.toUpperCase()})
                </span>
                <button
                  onClick={handleCopySensi}
                  className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold flex items-center gap-1 transition-all"
                >
                  {copiedSensi ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedSensi ? 'Copied!' : 'Copy Sensi'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400">General Sensi</div>
                  <div className="text-lg font-black text-cyan-400">{sensiData.general}</div>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400">Red Dot Scope</div>
                  <div className="text-lg font-black text-rose-400">{sensiData.redDot}</div>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400">2X Scope</div>
                  <div className="text-lg font-black text-amber-400">{sensiData.scope2x}</div>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400">4X Scope</div>
                  <div className="text-lg font-black text-emerald-400">{sensiData.scope4x}</div>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400">Sniper / AWM</div>
                  <div className="text-lg font-black text-purple-400">{sensiData.sniper}</div>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400">Fire Button Size</div>
                  <div className="text-lg font-black text-yellow-300">{sensiData.fireButtonSize}</div>
                </div>
              </div>

              {/* Safety & Calibration Note */}
              <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-200 flex items-start gap-2">
                <ShieldAlert size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Touch Delay Calibration:</strong> {sensiData.touchCalibration}. अनुशंसित DPI:{' '}
                  <span className="text-white font-bold">{sensiData.recommendedDpi}</span>। यह फ़ॉर्मूला स्क्रीन स्वाइप वेलोसिटी और टच रिस्पांस को अधिकतम बनाता है।
                </div>
              </div>
            </div>

            {/* Quick Deploy Interactive Sensi App */}
            <button
              onClick={() => {
                soundFx.playUnlockChime();
                onDeployGameApp('sensi-app');
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 hover:brightness-110 text-black font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all active:scale-98"
            >
              <Play size={15} />
              <span>BUILD &amp; DEPLOY INTERACTIVE SENSI APP TO PREVIEW TAB</span>
            </button>
          </div>
        )}

        {/* TAB 2: CROSSHAIR & HUD DESIGNER */}
        {activeTab === 'crosshair' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Live Crosshair Preview Box */}
              <div className="h-56 rounded-2xl bg-black/80 border border-cyan-500/40 relative flex items-center justify-center overflow-hidden">
                {/* Aim grid markings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-40 h-40 border border-white/40 rounded-full" />
                  <div className="w-20 h-20 border border-white/40 rounded-full absolute" />
                  <div className="w-full h-px bg-white/20 absolute" />
                  <div className="h-full w-px bg-white/20 absolute" />
                </div>

                {/* Simulated Target Dummy */}
                <div className="w-16 h-20 rounded-t-full bg-rose-500/20 border border-rose-500/40 absolute flex items-center justify-center text-[10px] text-rose-300">
                  HEAD
                </div>

                {/* The Custom Crosshair */}
                <div
                  className="relative pointer-events-none z-10 flex items-center justify-center"
                  style={{ opacity: crosshairOpacity }}
                >
                  {crosshairStyle === 'dot' && (
                    <div
                      className="rounded-full shadow-[0_0_8px]"
                      style={{
                        width: `${crosshairSize}px`,
                        height: `${crosshairSize}px`,
                        backgroundColor: crosshairColor,
                        boxShadow: `0 0 10px ${crosshairColor}`,
                      }}
                    />
                  )}
                  {crosshairStyle === 'classic' && (
                    <div className="relative flex items-center justify-center">
                      <div
                        className="absolute rounded"
                        style={{
                          width: '2px',
                          height: `${crosshairSize}px`,
                          top: `-${crosshairSize + crosshairGap}px`,
                          backgroundColor: crosshairColor,
                        }}
                      />
                      <div
                        className="absolute rounded"
                        style={{
                          width: '2px',
                          height: `${crosshairSize}px`,
                          bottom: `-${crosshairSize + crosshairGap}px`,
                          backgroundColor: crosshairColor,
                        }}
                      />
                      <div
                        className="absolute rounded"
                        style={{
                          height: '2px',
                          width: `${crosshairSize}px`,
                          left: `-${crosshairSize + crosshairGap}px`,
                          backgroundColor: crosshairColor,
                        }}
                      />
                      <div
                        className="absolute rounded"
                        style={{
                          height: '2px',
                          width: `${crosshairSize}px`,
                          right: `-${crosshairSize + crosshairGap}px`,
                          backgroundColor: crosshairColor,
                        }}
                      />
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: crosshairColor }}
                      />
                    </div>
                  )}
                  {crosshairStyle === 'circle' && (
                    <div
                      className="rounded-full border-2 flex items-center justify-center"
                      style={{
                        width: `${crosshairSize * 2}px`,
                        height: `${crosshairSize * 2}px`,
                        borderColor: crosshairColor,
                        boxShadow: `0 0 10px ${crosshairColor}50`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: crosshairColor }}
                      />
                    </div>
                  )}
                  {crosshairStyle === 'diamond' && (
                    <div
                      className="rotate-45 border-2 flex items-center justify-center"
                      style={{
                        width: `${crosshairSize * 1.5}px`,
                        height: `${crosshairSize * 1.5}px`,
                        borderColor: crosshairColor,
                      }}
                    >
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: crosshairColor }}
                      />
                    </div>
                  )}
                  {crosshairStyle === 'sniper' && (
                    <div className="relative flex items-center justify-center">
                      <div
                        className="w-32 h-px"
                        style={{ backgroundColor: crosshairColor, opacity: 0.6 }}
                      />
                      <div
                        className="h-32 w-px absolute"
                        style={{ backgroundColor: crosshairColor, opacity: 0.6 }}
                      />
                      <div
                        className="w-2 h-2 rounded-full absolute"
                        style={{ backgroundColor: crosshairColor }}
                      />
                    </div>
                  )}
                </div>

                <div className="absolute bottom-2 left-2 text-[10px] text-cyan-300 bg-black/60 px-2 py-0.5 rounded">
                  CROSSHAIR LIVE PREVIEW
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-3 p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs">
                <div>
                  <label className="text-[11px] text-gray-400 block mb-1">Crosshair Shape</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['dot', 'classic', 'circle', 'diamond', 'sniper'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => {
                          soundFx.playTapTone();
                          setCrosshairStyle(st);
                        }}
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase transition-colors ${
                          crosshairStyle === st
                            ? 'bg-cyan-500 text-black'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-gray-400 block mb-1">Neon Color</label>
                  <div className="flex items-center gap-2">
                    {['#00ffcc', '#ff0055', '#ffea00', '#00e5ff', '#39ff14', '#ffffff'].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          soundFx.playTapTone();
                          setCrosshairColor(c);
                        }}
                        className={`w-6 h-6 rounded-full border-2 transition-transform ${
                          crosshairColor === c ? 'scale-125 border-white' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>Size / Diameter</span>
                    <span>{crosshairSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="30"
                    value={crosshairSize}
                    onChange={(e) => setCrosshairSize(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>Opacity</span>
                    <span>{Math.round(crosshairOpacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="1"
                    step="0.05"
                    value={crosshairOpacity}
                    onChange={(e) => setCrosshairOpacity(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Claw HUD Layout Selector */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-xs font-bold text-white flex items-center justify-between">
                <span>PRO CLAW HUD LAYOUT PRESET</span>
                <span className="text-cyan-400 text-[10px]">Optimized Placement</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '2finger', label: '2-Finger Thumb', desc: 'Casual / Clean UI' },
                  { id: '3finger', label: '3-Finger Claw', desc: 'Fast Crouch & Shoot' },
                  { id: '4finger', label: '4-Finger Pro Claw', desc: 'Jump + Scope + Gloo Wall' },
                ].map((hud) => (
                  <button
                    key={hud.id}
                    onClick={() => {
                      soundFx.playTapTone();
                      setHudLayout(hud.id as any);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      hudLayout === hud.id
                        ? 'bg-cyan-950/60 border-cyan-400 text-white'
                        : 'bg-white/5 border-white/5 text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{hud.label}</div>
                    <div className="text-[9px] text-gray-400 mt-0.5">{hud.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Deploy Button */}
            <button
              onClick={() => {
                soundFx.playUnlockChime();
                onDeployGameApp('hud-overlay');
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 hover:brightness-110 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
            >
              <Crosshair size={15} />
              <span>DEPLOY CUSTOM FLOATING CROSSHAIR &amp; HUD APP</span>
            </button>
          </div>
        )}

        {/* TAB 3: FPS & LATENCY ENGINE */}
        {activeTab === 'fps' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <Monitor size={15} />
                  <span>REFRESH RATE TUNER</span>
                </div>
                <div className="space-y-1.5">
                  {['60Hz (Standard)', '90Hz (Smooth)', '120Hz (Ultra Pro)'].map((hz, i) => (
                    <div key={hz} className="flex items-center justify-between p-2 rounded-xl bg-white/5 text-xs">
                      <span>{hz}</span>
                      <span className="text-emerald-400 font-bold">{i === 2 ? '100% Active' : 'Supported'}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                  <Smartphone size={15} />
                  <span>TOUCH SAMPLING RATE</span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/5 text-xs flex justify-between">
                    <span>Touch Report Rate</span>
                    <span className="text-amber-400 font-bold">360 Hz</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 text-xs flex justify-between">
                    <span>Input Latency</span>
                    <span className="text-emerald-400 font-bold">~2.8 ms</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 text-xs flex justify-between">
                    <span>Swipe Smoothness</span>
                    <span className="text-cyan-400 font-bold">Linear 60fps</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                  <Cpu size={15} />
                  <span>SHADER &amp; GRAPHICS</span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/5 text-xs flex justify-between">
                    <span>Rendering Backend</span>
                    <span className="text-white font-bold">WebGL 2.0</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 text-xs flex justify-between">
                    <span>Resolution Scaling</span>
                    <span className="text-white font-bold">100% Native</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 text-xs flex justify-between">
                    <span>Frame Pacing</span>
                    <span className="text-emerald-400 font-bold">V-Sync Locked</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playUnlockChime();
                onDeployGameApp('fps-booster');
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:brightness-110 text-black font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
            >
              <Zap size={15} />
              <span>DEPLOY 120FPS BOOST &amp; PERFORMANCE DASHBOARD</span>
            </button>
          </div>
        )}

        {/* TAB 4: REFLEX & RECOIL LAB (PLAYABLE MINI-GAME) */}
        {activeTab === 'reflex' && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center justify-center gap-2">
                <Trophy size={16} className="text-amber-400" />
                HEADSHOT REACTION SPEED TESTER
              </h4>
              <p className="text-xs text-gray-400">
                जब बॉक्स <strong>लाल (RED)</strong> हो जाए, तुरंत स्क्रीन पर टैप करें और अपना रिस्पांस टाइम नापें!
              </p>
            </div>

            {/* Interactive Target Box */}
            <div
              onClick={handleReflexClick}
              className={`w-full h-48 rounded-3xl border-2 flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-150 ${
                reflexState === 'idle'
                  ? 'bg-slate-900/80 border-slate-700 hover:border-cyan-400 text-gray-300'
                  : reflexState === 'waiting'
                  ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                  : reflexState === 'ready'
                  ? 'bg-rose-600 border-rose-300 text-white animate-pulse'
                  : 'bg-emerald-950/80 border-emerald-400 text-emerald-300'
              }`}
            >
              {reflexState === 'idle' && (
                <div className="text-center space-y-2">
                  <Target size={36} className="mx-auto text-cyan-400" />
                  <div className="text-sm font-bold">शुरू करने के लिए यहाँ टैप करें</div>
                  <div className="text-[10px] text-gray-500">Tap to Start Reaction Test</div>
                </div>
              )}

              {reflexState === 'waiting' && (
                <div className="text-center space-y-1">
                  <div className="w-8 h-8 mx-auto border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  <div className="text-sm font-bold">इंतजार करें... (WAIT FOR RED)</div>
                </div>
              )}

              {reflexState === 'ready' && (
                <div className="text-center space-y-1">
                  <Flame size={44} className="mx-auto text-white animate-bounce" />
                  <div className="text-2xl font-black tracking-widest uppercase">SHOOT NOW! TAP!</div>
                </div>
              )}

              {reflexState === 'result' && (
                <div className="text-center space-y-1">
                  <div className="text-xs font-bold text-gray-400 uppercase">Your Reaction Time</div>
                  <div className="text-4xl font-black text-white">{reactionTime} ms</div>
                  <div className="text-xs font-bold text-emerald-400">
                    {reactionTime! < 180
                      ? '⚡ GODLIKE ESPORTS PRO!'
                      : reactionTime! < 250
                      ? '🎯 FAST REFLEXES!'
                      : '👍 AVERAGE GAMER (Practice needed)'}
                  </div>
                  <div className="text-[10px] text-gray-400 pt-2">दुबारा खेलने के लिए टैप करें</div>
                </div>
              )}
            </div>

            {bestTime && (
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs">
                <span className="text-gray-400">Personal Best:</span>
                <span className="text-amber-300 font-bold">{bestTime} ms</span>
              </div>
            )}

            {/* Button to start or restart */}
            {reflexState === 'idle' && (
              <button
                onClick={startReflexTest}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Play size={14} />
                <span>START TEST NOW</span>
              </button>
            )}
          </div>
        )}

        {/* TAB 5: DEPLOY GAME APPS */}
        {activeTab === 'deploy' && (
          <div className="space-y-3">
            <div className="text-xs text-gray-400">
              1-Click में किसी भी गेमिंग प्रोजेक्ट को IDE के अंदर जेनरेट करें और प्रिव्यू टैब में लाइव खेलें:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                {
                  id: 'sensi-app',
                  title: '🎯 Free Fire Pro Sensi Suite',
                  desc: 'Interactive sensitivity calculator, fire button tuner, headshot math & touch calibrator',
                  badge: 'Utility App',
                  accent: 'from-cyan-500 to-blue-600',
                },
                {
                  id: 'hud-overlay',
                  title: '🕹️ Floating Crosshair & Claw HUD',
                  desc: 'Custom neon crosshairs (dot, circle, sniper), 4-claw layout designer & overlay simulator',
                  badge: 'HUD Tool',
                  accent: 'from-fuchsia-500 to-purple-600',
                },
                {
                  id: 'car-racing',
                  title: '🏎️ Nitro Highway 3D Racer',
                  desc: '60FPS 3D cyber highway car racing game with steering tilt, turbo nitro & sound FX',
                  badge: '3D Game',
                  accent: 'from-rose-500 to-amber-500',
                },
                {
                  id: 'target-shooting',
                  title: '🎯 3D FPS Target Shooting Arena',
                  desc: 'Action shooting range game with moving bullseye targets, hit combos, ammo & sound',
                  badge: 'Action Game',
                  accent: 'from-amber-500 to-yellow-400',
                },
                {
                  id: 'space-arcade',
                  title: '🛸 Cyber Strike 2099 Galaxy',
                  desc: 'Space arcade shooter with lasers, boss battles, power-ups & retro canvas synth',
                  badge: 'Arcade Game',
                  accent: 'from-teal-400 to-emerald-500',
                },
                {
                  id: 'apple-design',
                  title: ' Apple 3D Device Design Studio',
                  desc: 'Design custom iPhone 16 Pro Max, Fold & MacBook Pro with Titanium colors & Keynote',
                  badge: 'Design Game',
                  accent: 'from-amber-400 to-yellow-600',
                },
              ].map((proj) => (
                <div
                  key={proj.id}
                  className="p-3 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white">{proj.title}</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] text-cyan-300 font-bold">
                        {proj.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1 leading-snug">{proj.desc}</p>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playUnlockChime();
                      onDeployGameApp(proj.id);
                    }}
                    className={`w-full py-2 rounded-xl bg-gradient-to-r ${proj.accent} hover:brightness-110 text-black font-black text-[11px] flex items-center justify-center gap-1.5 transition-all active:scale-95`}
                  >
                    <Play size={12} />
                    <span>DEPLOY &amp; PLAY IN PREVIEW</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
