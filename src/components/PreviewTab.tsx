import React, { useState } from 'react';
import {
  RotateCcw,
  ExternalLink,
  Lock,
  Zap,
  AlertCircle,
  Sparkles,
  Check,
} from 'lucide-react';
import { ProjectFiles, TabType } from '../types';

interface PreviewTabProps {
  files: ProjectFiles;
  hasError: boolean;
  onAutoFix: () => void;
  isFixing: boolean;
  onSelectTab: (tab: TabType) => void;
  onLoadPreset?: (preset: 'shooter' | 'game' | 'apple' | 'monitor' | 'bakery' | 'calc' | 'todo') => void;
}

export const PreviewTab: React.FC<PreviewTabProps> = ({
  files,
  hasError,
  onAutoFix,
  isFixing,
  onSelectTab,
  onLoadPreset,
}) => {
  const [reloadKey, setReloadKey] = useState(0);

  // Construct iframe HTML source without truncating tags
  const buildSrcDoc = () => {
    const rawHtml = files['index.html'] || '<!DOCTYPE html><html><head></head><body></body></html>';
    const css = files['style.css'] || '';
    const js = files['script.js'] || '';

    let doc = rawHtml;

    // Inject CSS into head if present, else before body
    if (doc.includes('</head>')) {
      doc = doc.replace('</head>', `<style>\n${css}\n</style>\n</head>`);
    } else if (doc.includes('<body>')) {
      doc = doc.replace('<body>', `<style>\n${css}\n</style>\n<body>`);
    }

    // Replace <script src="script.js"> with inline script, or append before </body>
    if (/src=["']script\.js["']/i.test(doc)) {
      doc = doc.replace(/<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi, `<script>\ntry {\n${js}\n} catch(e) { console.error('Script error:', e); }\n</script>`);
    } else if (doc.includes('</body>')) {
      doc = doc.replace('</body>', `<script>\ntry {\n${js}\n} catch(e) { console.error('Script error:', e); }\n</script>\n</body>`);
    } else {
      doc += `<script>\ntry {\n${js}\n} catch(e) { console.error('Script error:', e); }\n</script>`;
    }

    return doc;
  };

  const srcDoc = buildSrcDoc();

  return (
    <div className="flex-1 flex flex-col h-full bg-[#090b10] overflow-hidden select-none">
      {/* Mobile Browser Address Bar (From Video 07:44 & 08:30) */}
      <div className="p-2 bg-[#0c0f18] border-b border-cyan-500/20 flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-gray-300">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate text-cyan-200">http://127.0.0.1:8080/</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setReloadKey((k) => k + 1)}
              title="Reload Preview"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTab('editor')}
              title="Edit Code"
              className="px-2 py-1 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-mono text-[10px] font-bold"
            >
              Code
            </button>
          </div>
        </div>

        {/* Quick App Presets Bar */}
        {onLoadPreset && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar text-[10px] font-mono">
            <span className="text-gray-500 uppercase shrink-0">Apps:</span>
            <button
              onClick={() => onLoadPreset('shooter')}
              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 flex items-center gap-1 font-bold"
            >
              <span>🎯</span> Target Shooter
            </button>
            <button
              onClick={() => onLoadPreset('game')}
              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 flex items-center gap-1"
            >
              <span>🎮</span> Space Strike
            </button>
            <button
              onClick={() => onLoadPreset('calc')}
              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 flex items-center gap-1"
            >
              <span>🧮</span> Calculator
            </button>
            <button
              onClick={() => onLoadPreset('todo')}
              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center gap-1"
            >
              <span>📝</span> Tasks
            </button>
            <button
              onClick={() => onLoadPreset('apple')}
              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-slate-500/20 text-slate-200 border border-slate-500/40 hover:bg-slate-500/30 flex items-center gap-1"
            >
              <span>🍏</span> iPhone 16 Pro
            </button>
            <button
              onClick={() => onLoadPreset('monitor')}
              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 flex items-center gap-1"
            >
              <span>📊</span> Telemetry OS
            </button>
          </div>
        )}
      </div>

      {/* Syntax Error Banner & Floating Auto-Fix Pill on Preview (Matching Video Exactly!) */}
      {hasError && (
        <div className="bg-rose-950/90 border-b border-rose-500/80 px-3 py-2 flex items-center justify-between text-xs text-rose-200 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="font-mono text-[11px] font-semibold truncate">
              Uncaught SyntaxError: Invalid or unexpected token (line 7)
            </span>
          </div>
          <button
            onClick={onAutoFix}
            disabled={isFixing}
            className="ml-2 px-2.5 py-1 rounded bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-[11px] font-mono shadow-md flex items-center gap-1 shrink-0"
          >
            <Zap className="w-3 h-3 fill-white" />
            <span>{isFixing ? 'Fixing...' : 'Auto-Fix (1)'}</span>
          </button>
        </div>
      )}

      {/* Live Preview Iframe Container */}
      <div className="flex-1 relative bg-white overflow-hidden">
        <iframe
          key={reloadKey}
          title="Bypass App Preview"
          srcDoc={srcDoc}
          sandbox="allow-scripts allow-modals allow-forms allow-same-origin"
          className="w-full h-full border-none"
        />

        {/* Floating Quick Auto-Fix Floating Action Button if error present */}
        {hasError && !isFixing && (
          <button
            onClick={onAutoFix}
            className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono text-xs font-black shadow-2xl shadow-rose-500/50 hover:scale-105 active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Auto-Fix Bug</span>
          </button>
        )}
      </div>
    </div>
  );
};
