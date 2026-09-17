import React, { useEffect, useState } from 'react';
import {
  Search,
  X,
  ShieldCheck,
  Download,
  Share2,
  ChevronLeft,
  Sun,
  Smartphone,
} from 'lucide-react';

interface MobileOSSimulationProps {
  playStoreVisible: boolean;
  onClosePlayStore: () => void;
  appDrawerVisible: boolean;
  onCloseAppDrawer: () => void;
  brightnessLevel: number; // 0.15 (low) to 1.0 (high)
  onLaunchApp?: (appName: string) => void;
}

export const MobileOSSimulation: React.FC<MobileOSSimulationProps> = ({
  playStoreVisible,
  onClosePlayStore,
  appDrawerVisible,
  onCloseAppDrawer,
  brightnessLevel,
  onLaunchApp,
}) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (playStoreVisible) {
      setDownloadProgress(0);
      setIsInstalled(false);
      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsInstalled(true);
            return 100;
          }
          return prev + Math.floor(Math.random() * 18) + 8;
        });
      }, 350);
      return () => clearInterval(interval);
    }
  }, [playStoreVisible]);

  return (
    <>
      {/* Screen Brightness Overlay (Video 04:12 - 04:33) */}
      <div
        className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-700 bg-black"
        style={{
          opacity: Math.max(0, 1 - brightnessLevel) * 0.85,
        }}
      />

      {/* Brightness Toast Notification */}
      {brightnessLevel < 0.5 && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-white font-mono text-[11px] flex items-center gap-1.5 backdrop-blur-md animate-in fade-in duration-300">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>Screen Brightness: {Math.round(brightnessLevel * 100)}% (Ultra-Low)</span>
        </div>
      )}

      {/* Simulated Google Play Store Instagram View (From Video 00:06-00:46 & 05:34-06:31) */}
      {playStoreVisible && (
        <div className="fixed inset-0 z-50 bg-[#121212] text-white flex flex-col overflow-y-auto select-none animate-in slide-in-from-bottom-5 duration-300">
          {/* Top Play Store Bar */}
          <div className="flex items-center justify-between p-3 border-b border-white/10 bg-[#1e1e1e]">
            <div className="flex items-center gap-2">
              <button onClick={onClosePlayStore} className="p-1 rounded-full hover:bg-white/10">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <button
                onClick={onClosePlayStore}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* App Header Info */}
          <div className="p-4 flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg shrink-0">
              📸
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold">Instagram</h2>
              <div className="text-xs text-emerald-400 font-medium">Instagram</div>
              <div className="text-[11px] text-gray-400 mt-0.5">Contains ads • In-app purchases</div>
              <div className="flex items-center gap-3 text-xs text-gray-300 mt-2">
                <span>4.3 ★</span>
                <span>•</span>
                <span>100M+ Reviews</span>
                <span>•</span>
                <span>124 MB</span>
              </div>
            </div>
          </div>

          {/* Download & Progress Section */}
          <div className="px-4 py-2">
            {!isInstalled ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span className="font-medium text-emerald-400">
                    Downloading... {downloadProgress}% of 124 MB
                  </span>
                  <button
                    onClick={onClosePlayStore}
                    className="text-gray-400 hover:text-white px-2 py-0.5 rounded border border-white/20"
                  >
                    Cancel
                  </button>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
                <div className="text-[11px] text-gray-400 flex items-center gap-1 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified by Play Protect</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={onClosePlayStore}
                  className="flex-1 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/5"
                >
                  Uninstall
                </button>
                <button
                  onClick={onClosePlayStore}
                  className="flex-1 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold text-xs"
                >
                  Open
                </button>
              </div>
            )}
          </div>

          {/* Suggested For You Apps Grid (As seen in video 00:08) */}
          <div className="p-4 mt-2">
            <h3 className="text-xs font-bold text-gray-300 mb-3">Suggested for you</h3>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-xl mb-1">
                  f
                </div>
                <span className="truncate w-full font-medium">Facebook</span>
                <span className="text-[10px] text-gray-400">4.2 ★</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-xl mb-1 text-black font-black">
                  blink
                </div>
                <span className="truncate w-full font-medium">Blinkit</span>
                <span className="text-[10px] text-gray-400">4.6 ★</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-xl mb-1 font-black">
                  BGMI
                </div>
                <span className="truncate w-full font-medium">BGMI Online</span>
                <span className="text-[10px] text-gray-400">4.4 ★</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simulated Android App Drawer (Video 04:40 - 05:25) */}
      {appDrawerVisible && (
        <div className="fixed inset-0 z-50 bg-[#090d16]/95 backdrop-blur-2xl text-white p-5 flex flex-col select-none animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs font-bold text-gray-300">
                APPLICATIONS (ANDROID 14 ROOT)
              </span>
            </div>
            <button
              onClick={onCloseAppDrawer}
              className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search bar */}
          <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-400 font-mono">Search apps...</span>
          </div>

          {/* Apps Grid */}
          <div className="flex-1 overflow-y-auto mt-4 grid grid-cols-4 gap-4 text-center">
            {[
              { name: 'Bypass IDE', icon: '⚡', color: 'bg-cyan-500 text-black' },
              { name: 'Play Store', icon: '▶', color: 'bg-emerald-600 text-white' },
              { name: 'Instagram', icon: '📸', color: 'bg-gradient-to-tr from-amber-500 to-fuchsia-600 text-white' },
              { name: 'Chrome', icon: '🌐', color: 'bg-amber-500 text-black' },
              { name: 'Blinkit', icon: '🛒', color: 'bg-yellow-400 text-black' },
              { name: 'Terminal', icon: '💻', color: 'bg-slate-800 text-cyan-400' },
              { name: 'Calculator', icon: '🔢', color: 'bg-indigo-600 text-white' },
              { name: 'Settings', icon: '⚙️', color: 'bg-gray-700 text-white' },
              { name: 'Audio FX', icon: '🎵', color: 'bg-pink-600 text-white' },
              { name: 'AutoPilot', icon: '🤖', color: 'bg-teal-600 text-white' },
              { name: 'Root SU', icon: '🛡️', color: 'bg-purple-700 text-white' },
              { name: 'Browser', icon: '🧭', color: 'bg-blue-500 text-white' },
            ].map((app, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onCloseAppDrawer();
                  if (onLaunchApp) onLaunchApp(app.name);
                }}
                className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-white/5 active:scale-95 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold shadow-md ${app.color}`}
                >
                  {app.icon}
                </div>
                <span className="text-[11px] text-gray-300 font-medium truncate w-full">
                  {app.name}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-2 text-center text-xs text-gray-500 font-mono">
            Swipe down or tap close to return to Bypass IDE
          </div>
        </div>
      )}
    </>
  );
};
