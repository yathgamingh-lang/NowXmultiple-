import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  AlertTriangle,
  Play,
  Save,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { ProjectFiles, TabType } from '../types';

interface EditorTabProps {
  files: ProjectFiles;
  activeFile: keyof ProjectFiles;
  setActiveFile: (fileName: keyof ProjectFiles) => void;
  onUpdateFile: (fileName: keyof ProjectFiles, content: string) => void;
  hasError: boolean;
  onAutoFix: () => void;
  isFixing: boolean;
  justFixed: boolean;
  onSelectTab: (tab: TabType) => void;
}

export const EditorTab: React.FC<EditorTabProps> = ({
  files,
  activeFile,
  setActiveFile,
  onUpdateFile,
  hasError,
  onAutoFix,
  isFixing,
  justFixed,
  onSelectTab,
}) => {
  const [saveToast, setSaveToast] = useState(false);

  const handleSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const lines = files[activeFile].split('\n');

  return (
    <div className="flex-1 flex flex-col h-full bg-[#07090e] overflow-hidden select-none font-mono">
      {/* File Tabs Switcher */}
      <div className="flex items-center justify-between px-2 pt-2 bg-[#0a0d14] border-b border-white/10">
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {(['index.html', 'style.css', 'script.js'] as Array<keyof ProjectFiles>).map(
            (file) => (
              <button
                key={file}
                onClick={() => setActiveFile(file)}
                className={`px-3 py-1.5 rounded-t-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeFile === file
                    ? 'bg-[#0f131f] text-cyan-400 border-t-2 border-cyan-400'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <span>{file}</span>
                {file === 'script.js' && hasError && (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                )}
              </button>
            )
          )}
        </div>

        <div className="flex items-center gap-1 pb-1">
          <button
            onClick={onAutoFix}
            disabled={isFixing}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-[11px] font-bold active:scale-95 transition-all shadow-sm"
          >
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>{isFixing ? 'Fixing...' : 'Auto-Fix'}</span>
          </button>
        </div>
      </div>

      {/* Autonomous In-Place Repair Banners (Matching Video Exactly!) */}
      {isFixing && (
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-400 p-2.5 flex items-center justify-between text-xs text-cyan-200 animate-pulse">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <div>
              <div className="font-extrabold text-cyan-300">
                ⚡ AUTONOMOUS IN-PLACE REPAIR (Line 7)
              </div>
              <div className="text-[10px] text-gray-300 font-sans">
                Streaming patch: Synthesizing surgical patch for {activeFile}...
              </div>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500 text-black font-extrabold">
            PATCHING
          </span>
        </div>
      )}

      {justFixed && !isFixing && (
        <div className="bg-emerald-950/90 border-b border-emerald-400 p-2.5 flex items-center justify-between text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="font-extrabold text-emerald-300">
                ✔ AUTO-FIX APPLIED IN-PLACE
              </div>
              <div className="text-[10px] text-gray-300 font-sans">
                Repaired line 7 in {activeFile}
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTab('preview')}
            className="px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[11px] flex items-center gap-1 transition-all"
          >
            <span>Return to Preview</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {hasError && !isFixing && !justFixed && (
        <div className="bg-rose-950/90 border-b border-rose-500 p-2.5 flex items-center justify-between text-xs text-rose-200">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <div>
              <div className="font-extrabold text-rose-300">
                ▲ Syntax Error (Line 7)
              </div>
              <div className="text-[10px] text-rose-200/80 font-sans">
                Unclosed bracket &apos;&#123;&apos; in {activeFile}
              </div>
            </div>
          </div>
          <button
            onClick={onAutoFix}
            className="px-2.5 py-1 rounded bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-[11px] shadow-sm flex items-center gap-1"
          >
            <Zap className="w-3 h-3" />
            <span>Auto-Fix</span>
          </button>
        </div>
      )}

      {/* Code Editor Body */}
      <div className="flex-1 flex overflow-hidden bg-[#0a0d16]">
        {/* Line Numbers column */}
        <div className="w-10 bg-[#070910] text-gray-600 text-right pr-2 pt-3 select-none text-[11px] font-mono leading-6 border-r border-white/5">
          {lines.map((_, i) => (
            <div
              key={i}
              className={`${
                hasError && i === 6 ? 'text-rose-400 font-extrabold bg-rose-500/20' : ''
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Textarea Code Input */}
        <div className="flex-1 relative overflow-auto">
          <textarea
            value={files[activeFile]}
            onChange={(e) => onUpdateFile(activeFile, e.target.value)}
            spellCheck={false}
            className="w-full h-full bg-transparent text-gray-200 p-3 outline-none text-[11px] font-mono leading-6 resize-none whitespace-pre overflow-auto"
            style={{ tabSize: 2 }}
          />
        </div>
      </div>

      {saveToast && (
        <div className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 font-mono text-center border-t border-cyan-400/40">
          ✔ Saved {activeFile} to disk
        </div>
      )}

      {/* Bottom Status & Key Bar (From Video 08:35-08:50) */}
      <div className="px-3 py-2 bg-[#080b12] border-t border-cyan-500/20 flex items-center justify-between text-xs select-none">
        {/* Cursor & File Format Status */}
        <div className="flex items-center gap-2 text-gray-400 text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-white/5 font-bold text-cyan-300">
            TAB
          </span>
          <span>Ln 7, Col 41</span>
          <span>•</span>
          <span>UTF-8</span>
          <span>•</span>
          <span className="uppercase text-cyan-400">
            {activeFile.split('.')[1]}
          </span>
        </div>

        {/* Navigation & Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleSave}
            title="Save File"
            className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 text-[10px]"
          >
            <Save className="w-3 h-3 text-cyan-400" />
            <span>Save</span>
          </button>
          <button
            onClick={() => onSelectTab('preview')}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-[10px] transition-all"
          >
            <Play className="w-3 h-3 fill-black" />
            <span>Run Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
