export type TabType = 'home' | 'files' | 'editor' | 'terminal' | 'preview' | 'vip' | 'dev';

export type ModelType = 'Gemini 3.8 Flash' | 'Gemini 3.1 Pro' | 'Gemini 2.5 Flash';

export type ModeType = 'Builder' | 'Chat' | 'AI Maker' | 'Agent';

export type VoiceState = 'idle' | 'listening' | 'processing' | 'speaking';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'maria';
  text: string;
  timestamp: string;
  commandExecution?: {
    cmd: string;
    output?: string;
    isRoot?: boolean;
  };
  codePreview?: {
    file: string;
    snippet: string;
  };
}

export interface ProjectFiles {
  'index.html': string;
  'style.css': string;
  'script.js': string;
}

export interface SettingsConfig {
  topCapsule: boolean;
  backgroundAssistant: boolean;
  liveWebSearch: boolean;
  rootAccess: boolean;
  autoFixEngine: boolean;
  voiceRecognition: boolean;
  voiceOutput: boolean;
}

export interface TerminalEntry {
  id: string;
  text: string;
  type: 'info' | 'cmd' | 'success' | 'warn' | 'error' | 'dim';
  timestamp?: string;
}
