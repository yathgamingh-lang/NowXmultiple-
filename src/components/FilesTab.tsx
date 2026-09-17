import React, { useState } from 'react';
import {
  Folder,
  FileCode,
  FileText,
  FileJson,
  ExternalLink,
  Plus,
  Download,
  FolderOpen,
  Check,
  ChevronRight,
} from 'lucide-react';
import { ProjectFiles, TabType } from '../types';

interface FilesTabProps {
  files: ProjectFiles;
  onOpenFileInEditor: (fileName: keyof ProjectFiles) => void;
  onSelectTab: (tab: TabType) => void;
}

export const FilesTab: React.FC<FilesTabProps> = ({
  files,
  onOpenFileInEditor,
  onSelectTab,
}) => {
  const [activeFolderTab, setActiveFolderTab] = useState<'all' | 'css' | 'js' | 'html'>('all');
  const [downloadNotice, setDownloadNotice] = useState(false);

  const fileList: Array<{
    name: keyof ProjectFiles;
    ext: string;
    size: string;
    date: string;
    type: 'html' | 'css' | 'js';
  }> = [
    {
      name: 'index.html',
      ext: 'HTML',
      size: `${(files['index.html'].length / 1024).toFixed(1)} KB`,
      date: 'Today 8:34 PM',
      type: 'html',
    },
    {
      name: 'style.css',
      ext: 'CSS',
      size: `${(files['style.css'].length / 1024).toFixed(1)} KB`,
      date: 'Today 8:34 PM',
      type: 'css',
    },
    {
      name: 'script.js',
      ext: 'JS',
      size: `${(files['script.js'].length / 1024).toFixed(1)} KB`,
      date: 'Today 8:34 PM',
      type: 'js',
    },
  ];

  const filteredFiles = fileList.filter((f) => {
    if (activeFolderTab === 'all') return true;
    return f.type === activeFolderTab;
  });

  const handleDownloadZip = () => {
    // Generate combined bundle download
    const bundle = `/* Bypass Autonomous IDE Project Export */\n\n=== index.html ===\n${files['index.html']}\n\n=== style.css ===\n${files['style.css']}\n\n=== script.js ===\n${files['script.js']}`;
    const blob = new Blob([bundle], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'BypassProject_outputs.txt';
    a.click();
    URL.revokeObjectURL(url);
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#07090e] overflow-hidden select-none">
      {/* Workspace Header */}
      <div className="p-3 border-b border-cyan-500/20 bg-[#0a0d14]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
            <Folder className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-gray-500">sdcard/</span>
            <span className="text-gray-400">BypassProjects/</span>
            <span className="text-cyan-300 font-bold">outputs/</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleDownloadZip}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-gray-300"
              title="Export project bundle"
            >
              <Download className="w-3 h-3 text-cyan-400" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Folder filter pills */}
        <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-0.5">
          <button
            onClick={() => setActiveFolderTab('all')}
            className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold transition-colors ${
              activeFolderTab === 'all'
                ? 'bg-cyan-500 text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            outputs (3)
          </button>
          <button
            onClick={() => setActiveFolderTab('html')}
            className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold transition-colors ${
              activeFolderTab === 'html'
                ? 'bg-cyan-500 text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            html
          </button>
          <button
            onClick={() => setActiveFolderTab('css')}
            className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold transition-colors ${
              activeFolderTab === 'css'
                ? 'bg-cyan-500 text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            css
          </button>
          <button
            onClick={() => setActiveFolderTab('js')}
            className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold transition-colors ${
              activeFolderTab === 'js'
                ? 'bg-cyan-500 text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            js
          </button>
        </div>
      </div>

      {downloadNotice && (
        <div className="bg-emerald-500/20 border-b border-emerald-500/40 px-3 py-1.5 text-xs text-emerald-300 font-mono flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5" />
          <span>Project files downloaded to device storage</span>
        </div>
      )}

      {/* File List Grid */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredFiles.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between p-3 rounded-xl bg-[#0f131e] border border-white/10 hover:border-cyan-500/40 transition-all shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-black shadow-sm ${
                  file.type === 'html'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    : file.type === 'css'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                }`}
              >
                {file.type === 'html' ? '< / >' : file.type === 'css' ? '# { }' : 'JS'}
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-white flex items-center gap-1">
                  <span>{file.name}</span>
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono mt-0.5">
                  <span>{file.size}</span>
                  <span>•</span>
                  <span>{file.date}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenFileInEditor(file.name)}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold transition-all active:scale-95"
            >
              <span>OPEN</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        ))}

        {/* Directory Breadcrumbs / Storage Card */}
        <div className="mt-4 p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-[11px] font-bold text-cyan-400">FILES ON SAMSUNG GALAXY S20 ULTRA</span>
            <span className="text-[10px] text-emerald-400">● 100% ROOT SYNC</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
            <div className="p-2 rounded bg-white/5 border border-white/5 text-gray-300 flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Android/</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 text-cyan-300 font-semibold flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>BypassProjects/</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 text-gray-300 flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>DCIM/</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 text-gray-300 flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Music/</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation Switcher */}
      <div className="p-2.5 bg-[#0a0d14] border-t border-cyan-500/20 flex items-center justify-between">
        <button
          onClick={() => onOpenFileInEditor('index.html')}
          className="flex-1 mr-2 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold text-center transition-all"
        >
          Open in Editor &gt;
        </button>
        <button
          onClick={() => onSelectTab('preview')}
          className="flex-1 ml-2 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-extrabold text-center transition-all"
        >
          Live Preview ⚡
        </button>
      </div>
    </div>
  );
};
