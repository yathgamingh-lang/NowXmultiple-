/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  TabType,
  ModelType,
  ModeType,
  VoiceState,
  ChatMessage,
  ProjectFiles,
  TerminalEntry,
  SettingsConfig,
} from './types';
import {
  initialProjectFiles,
  initialChatMessages,
  initialTerminalLines,
  defaultSettings,
} from './initialData';
import { soundFx } from './soundFx';
import {
  getCyberpunkGameFiles,
  getTargetShooterGameFiles,
  getCalculatorFiles,
  getTodoListFiles,
  getAppleLandingPageFiles,
  getSystemMonitorFiles,
  getSmartTemplateForPrompt,
  getAppleDesignStudioGameFiles,
  getCarRacingGameFiles,
  getDrawingPaintAppFiles,
  getMusicBeatMakerFiles,
  getWorldMapAppFiles,
  getWeatherForecastAppFiles,
  getChatMessengerAppFiles,
} from './templates';
import { getSensiAppFiles, getHudOverlayAppFiles, getCustomAIAppFiles } from './gameAppTemplates';
import { CustomAIDefinition } from './components/AIMakerStudio';
import { getSmartKnowledgeResponse } from './knowledgeBrain';

import { TopBar } from './components/TopBar';
import { DynamicIsland } from './components/DynamicIsland';
import { BottomNavBar } from './components/BottomNavBar';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { HomeTab } from './components/HomeTab';
import { FilesTab } from './components/FilesTab';
import { EditorTab } from './components/EditorTab';
import { TerminalTab } from './components/TerminalTab';
import { PreviewTab } from './components/PreviewTab';
import { DevSettingsModal } from './components/DevSettingsModal';
import { MobileOSSimulation } from './components/MobileOSSimulation';
import { VipHubTab } from './components/VipHubTab';
import { UnlockBuilderModal } from './components/UnlockBuilderModal';
import { SecretCommandsModal } from './components/SecretCommandsModal';
import { GoldenDiamondBackground } from './components/GoldenDiamondBackground';
import { DeveloperSection } from './components/DeveloperSection';
import { AdminDashboard } from './components/AdminDashboard';
import AdminPage from './components/AdminPage';
import { analyticsEngine, SiteAdminSettings } from './analytics';

export default function App() {
  // Navigation & View
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // 🚀 Surgical Redirect: अगर यूज़र /admin पर जाना चाहता है, तो उसे सीधा एडमिन टैब पर भेजें
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/admin') {
      setActiveTab('dev'); // यह तेरे AdminDashboard को सीधे स्क्रीन पर खोल देगा
    }
  }, []);
  const [activeFile, setActiveFile] = useState<keyof ProjectFiles>('index.html');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);
  const [isCommandDossierOpen, setIsCommandDossierOpen] = useState(false);

  // Global Admin Settings (Broadcast Banner & Maintenance Mode)
  const [adminSettings, setAdminSettings] = useState<SiteAdminSettings>(() => analyticsEngine.getAdminSettings());

  // Builder Lock state (Locked by default, unlocked with code NOWXMULTIPLE)
  // Fresh session reset: resets each time the app is opened as requested
  const [isBuilderUnlocked, setIsBuilderUnlocked] = useState<boolean>(false);

  // Developer Section PIN Lock state (Password: 6769)
  const [isDevUnlocked, setIsDevUnlocked] = useState<boolean>(false);

  // User Intent: "jab koi pehli baar yaa fir dusri baar jab reset hota hai to ek animation wala command box khule"
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Record visit for enterprise visitor tracking (Vercel ready)
      analyticsEngine.initVisitor();

      const handleSettingsChange = (e: any) => {
        if (e.detail) {
          setAdminSettings(e.detail);
        }
      };
      window.addEventListener('nowx_admin_settings_changed', handleSettingsChange);

      localStorage.removeItem('builder_unlocked');
      const hasSeen = sessionStorage.getItem('nowx_dossier_seen');
      if (!hasSeen) {
        sessionStorage.setItem('nowx_dossier_seen', 'true');
        const timer = setTimeout(() => {
          setIsCommandDossierOpen(true);
          soundFx.playMasterChime();
        }, 700);
        return () => {
          clearTimeout(timer);
          window.removeEventListener('nowx_admin_settings_changed', handleSettingsChange);
        };
      }
      return () => window.removeEventListener('nowx_admin_settings_changed', handleSettingsChange);
    }
  }, []);

  // Track real user navigation events across tabs
  useEffect(() => {
    if (activeTab && typeof window !== 'undefined') {
      analyticsEngine.recordCustomEvent(`Viewed ${activeTab.toUpperCase()} Studio`, `/${activeTab}`);
    }
  }, [activeTab]);

  // Model & Mode selections
  const [selectedModel, setSelectedModel] = useState<ModelType>('Gemini 3.8 Flash');
  const [selectedMode, setSelectedMode] = useState<ModeType>('Builder');

  // App Data State
  const [files, setFiles] = useState<ProjectFiles>(initialProjectFiles);
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [terminalLines, setTerminalLines] = useState<TerminalEntry[]>(initialTerminalLines);
  const [settings, setSettings] = useState<SettingsConfig>(defaultSettings);

  // Auto-Fix & Bug State (matches video demonstrations)
  const [hasSyntaxError, setHasSyntaxError] = useState(true);
  const [isFixing, setIsFixing] = useState(false);
  const [justFixed, setJustFixed] = useState(false);

  // Voice Assistant State
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [transcript, setTranscript] = useState('');
  const [lastMariaResponse, setLastMariaResponse] = useState('');
  const [islandStatusText, setIslandStatusText] = useState('');
  const [isHandsFreeWakeWord, setIsHandsFreeWakeWord] = useState(true);

  // Mobile OS Simulation State
  const [playStoreVisible, setPlayStoreVisible] = useState(false);
  const [appDrawerVisible, setAppDrawerVisible] = useState(false);
  const [brightnessLevel, setBrightnessLevel] = useState(1.0); // 1.0 = normal, 0.2 = ultra dim

  // Speech Recognition References
  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false);
  const isSpeakingRef = useRef(false);
  const isHandsFreeRef = useRef(true);
  const transcriptRef = useRef('');
  const handleUserPromptRef = useRef<(prompt: string) => void>(() => {});

  useEffect(() => {
    isHandsFreeRef.current = isHandsFreeWakeWord;
  }, [isHandsFreeWakeWord]);

  // Keep latest prompt handler in ref for speech callbacks
  useEffect(() => {
    handleUserPromptRef.current = handleUserPrompt;
  });

  // Initialize Speech Recognition ONCE on mount
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'hi-IN'; // primary Hindi/English support

      recognition.onstart = () => {
        isListeningRef.current = true;
        setVoiceState('listening');
        setIslandStatusText('Listening (बोलिए / Wake Word: Nowempireoff)...');
      };

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        transcriptRef.current = currentTranscript;
        setTranscript(currentTranscript);
      };

      recognition.onend = () => {
        isListeningRef.current = false;
        const finalPrompt = transcriptRef.current.trim();
        if (finalPrompt) {
          handleUserPromptRef.current(finalPrompt);
          transcriptRef.current = '';
        } else {
          setVoiceState('idle');
          setIslandStatusText('');
        }

        // Automatic hands-free continuous wake-word listening loop on real mobile/desktop
        if (isHandsFreeRef.current && !isSpeakingRef.current) {
          setTimeout(() => {
            try {
              if (!isListeningRef.current && !isSpeakingRef.current) {
                recognitionRef.current?.start();
              }
            } catch {
              // ignore if already active or interrupted
            }
          }, 350);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition notice/error:', event.error);
        isListeningRef.current = false;
        if (event.error !== 'no-speech') {
          setVoiceState('idle');
          setIslandStatusText('');
        }

        // Auto restart on minor network/no-speech glitch if hands-free active
        if (isHandsFreeRef.current && !isSpeakingRef.current && event.error === 'no-speech') {
          setTimeout(() => {
            try {
              if (!isListeningRef.current && !isSpeakingRef.current) {
                recognitionRef.current?.start();
              }
            } catch {}
          }, 400);
        }
      };

      recognitionRef.current = recognition;

      return () => {
        try {
          recognition.abort();
        } catch {
          // ignore cleanup error
        }
      };
    }
  }, []);

  // Text-To-Speech Output
  const speakText = (text: string) => {
    if (!settings.voiceOutput || typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    isSpeakingRef.current = true;
    window.speechSynthesis.cancel();
    setVoiceState('speaking');
    setIslandStatusText('Speaking...');

    const utterance = new SpeechSynthesisUtterance(text);
    // Find Hindi or Indian English voice if available
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find(
      (v) => v.lang.includes('hi') || v.lang.includes('IN') || v.name.includes('Hindi')
    );
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    const onFinishSpeaking = () => {
      isSpeakingRef.current = false;
      setVoiceState('idle');
      setIslandStatusText('');

      // Once finished speaking, re-engage hands-free wake word listening
      if (isHandsFreeRef.current) {
        setTimeout(() => {
          try {
            if (!isListeningRef.current && !isSpeakingRef.current) {
              recognitionRef.current?.start();
            }
          } catch {}
        }, 400);
      }
    };

    utterance.onend = onFinishSpeaking;
    utterance.onerror = onFinishSpeaking;

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setVoiceState('idle');
    setIslandStatusText('');
  };

  const startListening = () => {
    stopSpeaking();
    setTranscript('');
    transcriptRef.current = '';

    soundFx.playListenBeep();

    // If already listening, do not attempt to start again to prevent InvalidStateError
    if (isListeningRef.current) {
      return;
    }

    // Request audio device access if available to trigger browser permission prompt on mobile
    if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).catch(() => {});
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (err: any) {
        console.warn('Speech recognition start prevented:', err?.message || err);
      }
    } else {
      // Fallback prompt simulation for browsers without Web Speech API
      const simulatedVoice = prompt(
        'Voice Input (Microphone not supported on this browser). Type command (Hindi / English):',
        'Nowempireoff'
      );
      if (simulatedVoice) {
        handleUserPrompt(simulatedVoice);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListeningRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err: any) {
        console.warn('Speech recognition stop notice:', err?.message || err);
      }
    }
    isListeningRef.current = false;
    setVoiceState('idle');
    setIslandStatusText('');
  };

  // Main Prompt Processor (Handles both AI Chat & Mobile OS Automation)
  const handleUserPrompt = async (promptText: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: promptText,
      timestamp,
    };

    setMessages((prev) => [...prev, userMsg]);
    setVoiceState('processing');
    setIslandStatusText('Synthesizing...');

    const lower = promptText.toLowerCase().trim();

    // 0. Master Wake Word: Nowempireoff
    const hasWakeWord =
      lower.includes('nowempireoff') ||
      lower.includes('now empire') ||
      lower.includes('empireoff') ||
      lower.includes('नाउ एम्पायर') ||
      lower.includes('नाव एम्पायर') ||
      lower.includes('नाओ एम्पायर');

    const cleanPrompt = promptText
      .replace(/(nowempireoff|now empire off|now empire|empireoff|नाउ एम्पायर|नाव एम्पायर|नाओ एम्पायर)/gi, '')
      .replace(/^[,:\s-]+/, '')
      .trim();

    if (hasWakeWord) {
      soundFx.playMasterChime();
      setIsBuilderUnlocked(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('builder_unlocked', 'true');
      }
      const cmd = 'su 0 -c "setprop nowx.master.auth 1 && echo \'Nowempireoff master access authenticated\'"';
      logTerminalCommand(cmd, '[ROOT MASTER AUTH] Master Key Verified: Nowempireoff (UID: 0). Full NowXmultiple superuser privilege granted.');
      setIslandStatusText('MASTER: Nowempireoff (UID: 0)');

      // If user ONLY said the wake word without follow-up command or question:
      if (!cleanPrompt) {
        const reply = 'प्रणाम Nowempireoff सर! NowXmultiple का मास्टर कोर सिस्टम पूरी तरह आपके हुक्म पर हाज़िर है। आपका रूट सुपरयूज़र एक्सेस 100% वेरिफाइड है। बताइए सर, आज कौन सा प्रोजेक्ट, गेम या टास्क एग्जीक्यूट करना है?';
        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'UID: 0 (root) gid: 0 (root)', isRoot: true });
          speakText(reply);
        }, 300);
        return;
      }
    }

    const effectivePrompt = cleanPrompt || promptText;
    const effectiveLower = effectivePrompt.toLowerCase().trim();
    const masterPrefix = hasWakeWord ? 'जी Nowempireoff सर! ' : '';

    // Voice / Text Command: Open Command & Code Dossier
    if (
      effectiveLower.includes('cheat') ||
      effectiveLower.includes('command box') ||
      effectiveLower.includes('dossier') ||
      effectiveLower.includes('कमांड बॉक्स') ||
      effectiveLower.includes('गुप्त कोड') ||
      effectiveLower.includes('cheat code') ||
      effectiveLower === 'codes' ||
      effectiveLower === 'code' ||
      effectiveLower === 'help'
    ) {
      setIsCommandDossierOpen(true);
      soundFx.playMasterChime();
      const reply = masterPrefix + 'मैंने आपके लिए NowXmultiple की सीक्रेट कमांड और कोड डायरेक्टरी खोल दी है। 6769 और NOWXMULTIPLE कोड्स को देखने के लिए उन पर ब्लर बॉक्स पर क्लिक करें।';
      addMariaResponse(reply);
      speakText(reply);
      return;
    }

    // 1. Voice Command: Brightness Control (Video 04:12 - 04:33)
    if (effectiveLower.includes('brightness') || effectiveLower.includes('ब्राइटनेस')) {
      const isDim = effectiveLower.includes('low') || effectiveLower.includes('कम') || effectiveLower.includes('बिल्कुल');
      const newLevel = isDim ? 0.2 : 1.0;
      setBrightnessLevel(newLevel);

      const cmd = `settings put system screen_brightness ${isDim ? '15' : '255'}`;
      const reply = masterPrefix + (isDim
        ? 'ज़रूर, मैं आपके फ़ोन की ब्राइटनेस को बिल्कुल कम कर देती हूँ।'
        : 'ज़रूर, मैं आपके फ़ोन की ब्राइटनेस को 100% फुल कर देती हूँ।');

      logTerminalCommand(cmd, `Brightness level updated: ${Math.round(newLevel * 100)}%`);

      setTimeout(() => {
        addMariaResponse(reply, { cmd, isRoot: true });
        speakText(reply);
      }, 500);
      return;
    }

    // 2. Voice Command: Swipe Up / App Drawer (Video 04:34 - 05:27)
    if (lower.includes('swipe') || lower.includes('स्वाइप') || lower.includes('app drawer') || lower.includes('ड्रॉअर')) {
      setAppDrawerVisible(true);
      const cmd = 'input swipe 500 1600 500 400 200';
      const reply = 'ज़रूर, मैं आपके लिए स्क्रीन पर ऊपर की तरफ स्वाइप कर देती हूँ।';

      logTerminalCommand(cmd, 'Action: GESTURE_SWIPE_UP dispatched via Root Input Subsystem');

      setTimeout(() => {
        addMariaResponse(reply, { cmd, isRoot: true });
        speakText(reply);
      }, 500);
      return;
    }

    // 3. Voice Command: Instagram / Play Store (Video 00:01-00:46 & 05:29-06:31)
    const isBuildIntent =
      lower.includes('banao') ||
      lower.includes('bnao') ||
      lower.includes('बनाओ') ||
      lower.includes('बना') ||
      lower.includes('build') ||
      lower.includes('clone') ||
      lower.includes('create') ||
      selectedMode === 'Builder';

    if ((lower.includes('instagram') || lower.includes('play store') || lower.includes('इंस्टाग्राम')) && !isBuildIntent) {
      if (lower.includes('close') || lower.includes('minimise') || lower.includes('बंद') || lower.includes('हटा')) {
        setPlayStoreVisible(false);
        const cmd = 'am force-stop com.android.vending';
        const reply = 'बिल्कुल, मैं प्ले स्टोर ऐप को पूरी तरह क्लोज़ कर देती हूँ।';
        logTerminalCommand(cmd, 'Success: Process com.android.vending terminated');
        setTimeout(() => {
          addMariaResponse(reply, { cmd, isRoot: true });
          speakText(reply);
        }, 500);
        return;
      }

      setPlayStoreVisible(true);
      const cmd = 'am start -a android.intent.action.VIEW -d "market://details?id=com.instagram.android"';
      const reply = 'जी, प्ले स्टोर से इंस्टाग्राम ऐप डाउनलोड और वेरिफाई होना शुरू हो गया है।';
      logTerminalCommand(cmd, 'Intent dispatched to Play Store');

      setTimeout(() => {
        addMariaResponse(reply, { cmd, isRoot: true });
        speakText(reply);
      }, 500);
      return;
    }

    // 3B. Direct Unlock Builder Voice/Text Command (Code: NOWXMULTIPLE)
    if (
      lower.includes('nowxmultiple') ||
      (lower.includes('unlock') && (lower.includes('builder') || lower.includes('बिल्डर'))) ||
      lower.includes('बिल्डर अनलॉक')
    ) {
      setIsBuilderUnlocked(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('builder_unlocked', 'true');
      }
      soundFx.playUnlockChime();
      const reply = '🎉 बधाई हो! BUILDER कोड (NOWXMULTIPLE) सफलतापूर्वक वेरिफाई हो गया है और Builder अनलॉक हो चुका है। अब आप कोई भी 3D शूटिंग गेम, कैलकुलेटर, या कस्टम ऐप सीधे बना सकते हैं!';
      addMariaResponse(reply);
      speakText('बधाई हो, बिल्डर अनलॉक हो चुका है!');
      setVoiceState('idle');
      setIslandStatusText('');
      return;
    }

    // Determine if user explicitly wants to build something or is in Builder mode
    const hasBuildKeywords =
      effectiveLower.includes('build') ||
      effectiveLower.includes('banao') ||
      effectiveLower.includes('bnao') ||
      effectiveLower.includes('बनाओ') ||
      effectiveLower.includes('बना') ||
      effectiveLower.includes('create') ||
      effectiveLower.includes('generate') ||
      effectiveLower.includes('map') ||
      effectiveLower.includes('मैप') ||
      effectiveLower.includes('नक्शा') ||
      effectiveLower.includes('weather') ||
      effectiveLower.includes('मौसम') ||
      effectiveLower.includes('shooting') ||
      effectiveLower.includes('shooter') ||
      effectiveLower.includes('calculator') ||
      effectiveLower.includes('todo') ||
      effectiveLower.includes('website') ||
      effectiveLower.includes('वेबसाइट') ||
      effectiveLower.includes('app') ||
      effectiveLower.includes('ऐप') ||
      effectiveLower.includes('game') ||
      effectiveLower.includes('गेम') ||
      effectiveLower.includes('store') ||
      effectiveLower.includes('quiz') ||
      effectiveLower.includes('gym') ||
      effectiveLower.includes('crypto') ||
      effectiveLower.includes('food') ||
      effectiveLower.includes('doctor') ||
      effectiveLower.includes('app banao');

    const shouldBuildApp = selectedMode === 'Builder' || hasBuildKeywords;

    // Check Builder Lock if building (bypassed if Master Wake Word used)
    const isUnlockedNow = isBuilderUnlocked || hasWakeWord || (typeof window !== 'undefined' && localStorage.getItem('builder_unlocked') === 'true');
    if (shouldBuildApp && !isUnlockedNow) {
      soundFx.playLockTone();
      setIsUnlockModalOpen(true);
      const reply = '🔒 Builder मोड अभी लॉक है! कृपया इसे अनलॉक करने के लिए Unlock कोड (NOWXMULTIPLE) दर्ज करें।';
      addMariaResponse(reply);
      speakText(reply);
      setVoiceState('idle');
      setIslandStatusText('');
      return;
    }

    // 4. If in Builder mode or Build keywords present:
    if (shouldBuildApp || selectedMode === 'AI Maker') {
      // 4-AI. AI Maker Mode or Custom AI Synthesis Request
      if (
        selectedMode === 'AI Maker' ||
        lower.includes('ai maker') ||
        lower.includes('ai banao') ||
        lower.includes('एआई बनाओ') ||
        lower.includes('ai banaye') ||
        lower.includes('custom ai')
      ) {
        const aiName = effectivePrompt.length > 25 ? effectivePrompt.slice(0, 22) + ' AI' : (effectivePrompt || 'Custom AI');
        const generatedAi: CustomAIDefinition = {
          id: `ai-${Date.now()}`,
          name: aiName,
          category: 'Custom Autonomous AI',
          tone: 'Helpful & Expert',
          emoji: '🤖',
          systemPrompt: `You are ${effectivePrompt}. You respond accurately in character and assist the user with all domain knowledge. Speak natural Hindi, Hinglish or English based on user query.`,
          temperature: 0.7,
          capabilities: {
            webSearch: true,
            codeGen: true,
            voiceOutput: true,
            hinglish: true,
          },
          sampleGreeting: `नमस्ते! मैं आपका बनाया हुआ AI सहायक हूँ। आप मुझसे ${effectivePrompt} के बारे में कुछ भी पूछ सकते हैं!`,
        };
        handleDeployAIApp(generatedAi);
        return;
      }

      // 4A1. Specific: World Map, Geography Atlas & Globe (Fixes "world map wala app bnao")
      if (
        lower.includes('map') ||
        lower.includes('world map') ||
        lower.includes('मैप') ||
        lower.includes('नक्शा') ||
        lower.includes('atlas') ||
        lower.includes('globe') ||
        lower.includes('ग्लोब') ||
        lower.includes('country') ||
        lower.includes('देश')
      ) {
        soundFx.playFixChime();
        const mapFiles = getWorldMapAppFiles();
        setFiles(mapFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_gis.sh --title="TERRA GLOBE 360"';
        const reply = 'मैंने आपके लिए एक बहुत ही शानदार इंटरएक्टिव वर्ल्ड मैप और कंट्री एटलस ऐप तैयार कर दिया है! प्रिव्यू में किसी भी देश पर टैप करें, फ़्लाइट डिस्टेंस नापें या वर्ल्ड क्विज खेलें।';
        logTerminalCommand(cmd, 'Application deployed: TERRA GLOBE 360 (Leaflet Engine + Global Atlas + Flight Routing + Quiz)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. World Map GIS mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div id="map"></div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4A2. Specific: Weather Forecast & Radar
      if (
        lower.includes('weather') ||
        lower.includes('मौसम') ||
        lower.includes('mausam') ||
        lower.includes('climate') ||
        lower.includes('forecast') ||
        lower.includes('radar') ||
        lower.includes('बारिश')
      ) {
        soundFx.playFixChime();
        const weatherFiles = getWeatherForecastAppFiles();
        setFiles(weatherFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_weather.sh --title="AERO CLIMATE"';
        const reply = 'मैंने आपके लिए एक रियल-टाइम वेदर फोरकास्ट और क्लाइमेट रडार ऐप तैयार कर दिया है! शहरों का तापमान, नमी और 5-दिन का पूर्वानुमान लाइव चेक करें।';
        logTerminalCommand(cmd, 'Application deployed: AERO CLIMATE (Live Weather Radar + 5-Day Forecast)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Weather Radar mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="weather-app">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4A3. Specific: Chat & Messenger
      if (
        (lower.includes('chat') && (lower.includes('app') || lower.includes('ऐप') || lower.includes('bnao') || lower.includes('banao') || lower.includes('बनाओ') || lower.includes('वाला') || lower.includes('messenger'))) ||
        lower.includes('messenger') ||
        lower.includes('whatsapp') ||
        lower.includes('telegram')
      ) {
        soundFx.playFixChime();
        const chatFiles = getChatMessengerAppFiles();
        setFiles(chatFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_chat.sh --title="CYBER PULSE"';
        const reply = 'मैंने आपके लिए एक रियल-टाइम चैट मैसेंजर ऐप तैयार कर दिया है! कॉन्टैक्ट्स स्विच करें, मैसेज भेजें और लाइव रिस्पॉन्स टेस्ट करें।';
        logTerminalCommand(cmd, 'Application deployed: CYBER PULSE (Real-Time Messaging Engine)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Chat Messenger mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="chat-app">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4-0A. Gamer Section Builder: Free Fire / BGMI Pro Sensi Suite
      if (
        lower.includes('sensi') ||
        lower.includes('सेंसिटिविटी') ||
        lower.includes('headshot') ||
        lower.includes('हेडशॉट') ||
        lower.includes('free fire') ||
        lower.includes('bgmi') ||
        lower.includes('gamer section') ||
        lower.includes('गेमर')
      ) {
        handleDeployGameApp('sensi-app');
        return;
      }

      // 4-0B. Crosshair & Claw HUD Studio
      if (
        lower.includes('crosshair') ||
        lower.includes('क्रॉसहेयर') ||
        lower.includes('hud') ||
        lower.includes('claw')
      ) {
        handleDeployGameApp('hud-overlay');
        return;
      }

      // 4A. Specific: Apple iPhone & MacBook 3D Hardware Design Studio Game (User Priority Request)
      if (
        lower.includes('iphone') ||
        lower.includes('macbook') ||
        lower.includes('आईफोन') ||
        lower.includes('मैकबुक') ||
        (lower.includes('apple') && (lower.includes('design') || lower.includes('game') || lower.includes('studio') || lower.includes('लैब'))) ||
        lower.includes('phone design') ||
        lower.includes('design game')
      ) {
        soundFx.playFixChime();
        const appleGameFiles = getAppleDesignStudioGameFiles();
        setFiles(appleGameFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_design_lab.sh --target="Apple Design Studio 3D"';
        const reply = 'मैंने आपके लिए 3D iPhone और MacBook डिज़ाइनिंग गेम तैयार कर दिया है! प्रिव्यू टैब में लाइव खेलें — आप टाइटेनियम फ़िनिश, 48MP/120x कैमरा, लेज़र एनग्रेविंग कस्टमाइज़ कर सकते हैं और Apple Keynote लॉन्च कर सकते हैं!';
        logTerminalCommand(cmd, 'Application deployed:  APPLE HARDWARE DESIGN STUDIO 3D (iPhone 16 Pro Max + Fold + MacBook Pro M4 + Keynote Simulator)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. 3D Hardware Design Lab mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="studio-app">...<div id="deviceWrapper">...</div></div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4B. Specific: Nitro Car Racing Highway Game
      if (
        lower.includes('car') ||
        lower.includes('racing') ||
        lower.includes('गाड़ी') ||
        lower.includes('कार') ||
        lower.includes('रेसिंग') ||
        lower.includes('नाइट्रो') ||
        lower.includes('highway')
      ) {
        soundFx.playFixChime();
        const carFiles = getCarRacingGameFiles();
        setFiles(carFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_arcade.sh --title="NITRO RACER 3D"';
        const reply = 'मैंने आपके लिए एक 60FPS साइबर हाईवे कार रेसिंग गेम तैयार कर दिया है! स्टीयरिंग और नाइट्रो बूस्ट के साथ प्रिव्यू में खेलें।';
        logTerminalCommand(cmd, 'Application deployed: NITRO RACER 3D (60FPS Highway Engine)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<canvas id="roadCanvas" width="360" height="520"></canvas>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4C. Specific: Digital Paint & Drawing Studio
      if (
        lower.includes('paint') ||
        lower.includes('drawing') ||
        lower.includes('draw') ||
        lower.includes('sketch') ||
        lower.includes('कैनवास') ||
        lower.includes('ड्राइंग') ||
        lower.includes('पेंट')
      ) {
        soundFx.playFixChime();
        const paintFiles = getDrawingPaintAppFiles();
        setFiles(paintFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_app.sh --name="Cyber Paint Studio"';
        const reply = 'मैंने आपके लिए एक डिजिटल ड्राइंग और पेंटिंग कैनवास ऐप तैयार कर दिया है। इसमें ब्रश साइज़, कलर पैलेट और इमेज डाउनलोड फ़ीचर है।';
        logTerminalCommand(cmd, 'Application deployed: CYBER PAINT STUDIO');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<canvas id="paintCanvas" width="360" height="480"></canvas>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4D. Specific: Music Beat Synth & Drum Pad
      if (
        lower.includes('music') ||
        lower.includes('beat') ||
        lower.includes('drum') ||
        lower.includes('synth') ||
        lower.includes('piano') ||
        lower.includes('म्यूजिक') ||
        lower.includes('गाना') ||
        lower.includes('पियानो')
      ) {
        soundFx.playFixChime();
        const musicFiles = getMusicBeatMakerFiles();
        setFiles(musicFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_app.sh --name="Cyber Beat Synth"';
        const reply = 'मैंने आपके लिए एक लाइव म्यूजिक सिंथेसाइज़र और बीट मेकर तैयार कर दिया है! पैड्स पर टैप करके लाइव बीट्स बनाएं।';
        logTerminalCommand(cmd, 'Application deployed: CYBER BEAT SYNTH (Web Audio Engine)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="music-station">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4E. Specific: Shooting Game (Fixes "shooting game bnao")
      if (
        lower.includes('shooting') ||
        lower.includes('shooter') ||
        lower.includes('शूटिंग') ||
        lower.includes('target') ||
        lower.includes('बंदूक') ||
        lower.includes('निशाना') ||
        lower.includes('sniper')
      ) {
        soundFx.playFixChime();
        const shooterFiles = getTargetShooterGameFiles();
        setFiles(shooterFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_arcade.sh --title="TARGET SHOOTER 3D"';
        const reply = 'मैंने आपके लिए एक रियल 3D टारगेट शूटिंग गेम तैयार कर दिया है! प्रिव्यू टैब में लाइव खेलें - मूविंग टारगेट्स पर टैप करके शूट करें, स्कोप ज़ूम और साउंड FX का मज़ा लें।';
        logTerminalCommand(cmd, 'Application deployed: TARGET SHOOTER 3D (Touch Crosshair + Target Physics + Audio FX)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<canvas id="shooterCanvas" width="380" height="520"></canvas>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4F. Calculator App
      if (
        lower.includes('calc') ||
        lower.includes('calculator') ||
        lower.includes('कैलकुलेटर') ||
        lower.includes('साइंटिफिक')
      ) {
        soundFx.playFixChime();
        const calcFiles = getCalculatorFiles();
        setFiles(calcFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_app.sh --name="Neon Quantum Calculator"';
        const reply = 'मैंने आपके लिए एक बहुत ही आकर्षक और फ़ास्ट साइंटिफिक कैलकुलेटर ऐप तैयार कर दिया है। इसे प्रिव्यू टैब में लाइव टेस्ट करें!';
        logTerminalCommand(cmd, 'Application deployed: NEON QUANTUM CALCULATOR');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="calculator-card">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4G. Todo List App
      if (
        lower.includes('todo') ||
        lower.includes('to-do') ||
        lower.includes('task') ||
        lower.includes('टुडू') ||
        lower.includes('टास्क')
      ) {
        soundFx.playFixChime();
        const todoFiles = getTodoListFiles();
        setFiles(todoFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_app.sh --name="Cyber Task Manager"';
        const reply = 'मैंने आपके लिए एक शानदार टास्क मैनेजर और टू-डू लिस्ट ऐप तैयार कर दिया है। इसमें फ़िल्टर, चेकबॉक्स और लोकल स्टोरेज सपोर्ट है।';
        logTerminalCommand(cmd, 'Application deployed: CYBER TASK MANAGER');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="todo-app">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4H. Space Arcade / Cyberpunk Game
      if (
        lower.includes('space') ||
        lower.includes('cyberpunk')
      ) {
        soundFx.playFixChime();
        const gameFiles = getCyberpunkGameFiles();
        setFiles(gameFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_arcade.sh --title="CYBER STRIKE 2099"';
        const reply = 'मैंने आपके लिए साइबर स्ट्राइक स्पेस आर्केड गेम तैयार कर दिया है! आप इसे प्रिव्यू टैब में लाइव खेल सकते हैं, जिसमें टच कंट्रोल्स और साउंड इफेक्ट्स मौजूद हैं।';
        logTerminalCommand(cmd, 'Application deployed: CYBER STRIKE 2099 (Canvas 60FPS + Touch Controls + WebAudio)');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<canvas id="gameCanvas" width="380" height="500"></canvas>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4I. Generic Game Request
      if (lower.includes('game') || lower.includes('गेम') || lower.includes('खेल')) {
        soundFx.playFixChime();
        const appleGameFiles = getAppleDesignStudioGameFiles();
        setFiles(appleGameFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const reply = 'मैंने आपके लिए 3D iPhone और MacBook डिज़ाइनिंग गेम तैयार कर दिया है! प्रिव्यू टैब में लाइव खेलें और अपनी ड्रीम डिवाइसेज़ डिज़ाइन करें।';
        setTimeout(() => {
          addMariaResponse(reply, undefined, {
            file: 'index.html',
            snippet: '<div class="studio-app">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4E. Apple Showcase
      if (lower.includes('apple') || lower.includes('iphone') || lower.includes('titanium')) {
        soundFx.playFixChime();
        const appleFiles = getAppleLandingPageFiles();
        setFiles(appleFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_showcase.sh --target="iPhone 16 Pro"';
        const reply = 'मैंने आपके लिए एक प्रीमियम एप्पल-स्टाइल आईफोन 16 प्रो लैंडिंग पेज तैयार कर दिया है। इसमें 3D शोकेस और फिनिश पिकर शामिल हैं।';
        logTerminalCommand(cmd, 'Application deployed: iPhone 16 Pro Showcase');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<div class="device-card" id="deviceCard">...</div>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4F. Telemetry / System Monitor
      if (lower.includes('telemetry') || (lower.includes('system') && lower.includes('monitor'))) {
        soundFx.playFixChime();
        const monitorFiles = getSystemMonitorFiles();
        setFiles(monitorFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const cmd = 'sh /system/bin/deploy_telemetry.sh';
        const reply = 'मैंने आपके लिए एक रियल-टाइम सिस्टम मॉनिटर और नेटवर्क टेलीमेट्री डैशबोर्ड तैयार कर दिया है।';
        logTerminalCommand(cmd, 'Application deployed: Root Kernel Telemetry Dashboard');

        setTimeout(() => {
          addMariaResponse(reply, { cmd, output: 'Deployment successful. Preview mounted.', isRoot: true }, {
            file: 'index.html',
            snippet: '<canvas id="trafficCanvas" width="340" height="150"></canvas>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4G. Bakery Website
      if (lower.includes('bakery') || lower.includes('बेकरी')) {
        soundFx.playFixChime();
        setFiles(initialProjectFiles);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');

        const reply = 'मैंने आपके लिए "Maison d\'Élite" आर्टिसन बेकरी की प्रीमियम वेबसाइट तैयार कर दी है। प्रिव्यू टैब में लाइव देखें!';
        setTimeout(() => {
          addMariaResponse(reply, undefined, {
            file: 'index.html',
            snippet: '<header class="glass-header">Maison d\'Élite</header>',
          });
          speakText(reply);
        }, 400);
        return;
      }

      // 4H. General Dynamic App Synthesis in Builder Mode
      logTerminalCommand(
        `sh /system/bin/synthesize_autonomous.sh --prompt="${effectivePrompt.slice(0, 30)}..."`,
        'Autonomous code generation pipeline triggered via Gemini Engine'
      );
      setIslandStatusText(`Synthesizing ${effectivePrompt.slice(0, 18)}...`);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 35000);

      try {
        const res = await fetch('/api/ai/generate-app', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: effectivePrompt }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        const data = await res.json();

        if (data.files) {
          setFiles(data.files);
          setActiveFile('index.html');
          setHasSyntaxError(false);
          setActiveTab('preview');
          soundFx.playFixChime();
        }

        const reply = masterPrefix + (data.replyText || `मैंने आपके लिए "${data.appName || effectivePrompt}" का कोड तैयार कर दिया है। प्रिव्यू टैब में लाइव देखें।`);
        addMariaResponse(reply, undefined, {
          file: 'index.html',
          snippet: data.files?.['index.html']?.slice(0, 100) || '<!DOCTYPE html>...',
        });
        speakText(reply);
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn('App gen fallback engaged:', err);
        const smart = getSmartTemplateForPrompt(effectivePrompt);
        setFiles(smart.files);
        setActiveFile('index.html');
        setHasSyntaxError(false);
        setActiveTab('preview');
        soundFx.playFixChime();

        const smartReply = masterPrefix + smart.voiceReply;
        addMariaResponse(smartReply, undefined, {
          file: 'index.html',
          snippet: smart.files['index.html']?.slice(0, 100) || '<!DOCTYPE html>...',
        });
        speakText(smartReply);
      } finally {
        setVoiceState('idle');
        setIslandStatusText('');
      }
      return;
    }

    // 5. Chat Mode ("chat wale mai vo baat kre")
    // When in Chat mode and not asking to build code, Maria engages in natural conversation!

    // 8. General AI Chat (News, Modi, Stock Market, Math, Tech, Coding, Questions)
    const chatController = new AbortController();
    const chatTimeoutId = setTimeout(() => chatController.abort(), 7000);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: effectivePrompt,
          mode: selectedMode,
        }),
        signal: chatController.signal,
      });
      clearTimeout(chatTimeoutId);
      const data = await res.json();
      const rawReply = data.text || 'जी, आपका आदेश स्वीकार कर लिया गया है।';
      const finalReply = hasWakeWord && !rawReply.toLowerCase().includes('nowempireoff')
        ? `जी Nowempireoff सर! ${rawReply}`
        : rawReply;

      addMariaResponse(finalReply);
      speakText(finalReply);
    } catch (err) {
      clearTimeout(chatTimeoutId);
      console.warn('Chat fallback engaged with knowledgeBrain:', err);

      // Intelligent dynamic conversational engine (NEVER repeats a single static line!)
      const brainResult = getSmartKnowledgeResponse(effectivePrompt, hasWakeWord);
      addMariaResponse(brainResult.reply, brainResult.command);
      speakText(brainResult.reply);

      if (brainResult.suggestedAction) {
        if (brainResult.suggestedAction.type === 'tab' && brainResult.suggestedAction.payload) {
          setActiveTab(brainResult.suggestedAction.payload as TabType);
        } else if (brainResult.suggestedAction.type === 'brightness' && brainResult.suggestedAction.payload) {
          setBrightnessLevel(parseFloat(brainResult.suggestedAction.payload));
        } else if (brainResult.suggestedAction.type === 'unlock') {
          setIsBuilderUnlocked(true);
        }
      }
    } finally {
      setVoiceState('idle');
      setIslandStatusText('');
    }
  };

  const addMariaResponse = (
    text: string,
    commandExecution?: { cmd: string; output?: string; isRoot?: boolean },
    codePreview?: { file: string; snippet: string }
  ) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const mariaMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'maria',
      text,
      timestamp,
      commandExecution,
      codePreview,
    };
    setMessages((prev) => [...prev, mariaMsg]);
    setLastMariaResponse(text);
    setVoiceState('idle');
    setIslandStatusText('');
  };

  const logTerminalCommand = (cmd: string, output?: string) => {
    const time = new Date().toLocaleTimeString();
    setTerminalLines((prev) => [
      ...prev,
      { id: `t-${Date.now()}-cmd`, text: cmd, type: 'cmd', timestamp: time },
      ...(output
        ? [{ id: `t-${Date.now()}-out`, text: output, type: 'success' as const, timestamp: time }]
        : []),
    ]);
  };

  // Fresh Session Reset Handler (User Intent: "wapis se login krna pade aisa krde jab bhi koi dusri baar khole to reset hojaye")
  const handleResetSession = () => {
    setMessages(initialChatMessages);
    setIsBuilderUnlocked(false);
    setIsDevUnlocked(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('builder_unlocked');
    }
    soundFx.playLockTone();
    logTerminalCommand('session reset --fresh-boot', 'Chat cleared, premium/developer credentials reset to pristine state.');
    addMariaResponse('🔄 सेशन रीसेट कर दिया गया है! चैट साफ़ हो गई है और बिल्डर/डेवलपर क्रेडेंशियल्स फ्रेश स्टेट में रीसेट हो चुके हैं।');

    // User Intent: "yaa fir dusri baar jab reset hota hai to ek animation wala command box khule"
    setTimeout(() => {
      setIsCommandDossierOpen(true);
      soundFx.playMasterChime();
    }, 450);
  };

  // Autonomous In-Place Surgical Repair Handler (Exact match to video 08:26-08:44, 09:14-09:34)
  const handleAutoFix = () => {
    setIsFixing(true);
    setVoiceState('processing');
    setIslandStatusText('Synthesizing surgical repair patch...');

    logTerminalCommand(
      'su -c "patch -p1 /sdcard/BypassProjects/outputs/script.js --in-place"',
      'Repaired line 7: syntax bracket re-aligned and sealed'
    );

    setTimeout(() => {
      // Repair the code
      setHasSyntaxError(false);
      setIsFixing(false);
      setJustFixed(true);
      setVoiceState('idle');
      setIslandStatusText('');

      // Auto update file if needed
      setFiles((prev) => ({
        ...prev,
        'script.js': prev['script.js']
          .replace(/const menuItems = \[/g, "const menuItems = [\n  // [AUTO-FIX REPAIRED]\n")
          .replace(/\bUnclosed bracket '\{'\b/g, ''),
      }));

      // Maria voice announcement
      if (settings.voiceOutput) {
        speakText('मैंने वेबसाइट के कोड और सिंटेक्स बग को तुरंत ठीक कर दिया है।');
      }

      setTimeout(() => setJustFixed(false), 4000);
    }, 1800);
  };

  const handleTerminalCommand = (rawCmd: string) => {
    const time = new Date().toLocaleTimeString();
    const cmd = rawCmd.trim();
    if (cmd === 'clear') {
      setTerminalLines([]);
      return;
    }

    let response = '';
    const lower = cmd.toLowerCase();

    if (lower === 'help' || lower === 'codes' || lower === 'cheat' || lower === 'cheats' || lower === 'dossier') {
      setIsCommandDossierOpen(true);
      soundFx.playMasterChime();
      response = '[DOSSIER] Command Dossier opened. Check unblur cards for 6769 and NOWXMULTIPLE.\nAvailable: codes, catalog, ls, cat [file], clear, su 0, status, autofix, session reset';
    } else if (lower.includes('builder unlock nowxmultiple') || lower === 'unlock nowxmultiple') {
      setIsBuilderUnlocked(true);
      if (typeof window !== 'undefined') localStorage.setItem('builder_unlocked', 'true');
      soundFx.playUnlockChime();
      response = '[SUCCESS] VIP Builder Mode Unlocked! All 3D game engines, Sensi Suite, and AI Maker activated.';
    } else if (lower.includes('dev unlock 6769') || lower === 'unlock 6769') {
      setIsDevUnlocked(true);
      soundFx.playUnlockChime();
      response = '[SUCCESS] Developer PIN 6769 verified! Root privileges and Developer Section unlocked.';
    } else if (lower === 'catalog') {
      response = 'Loaded 105 system capabilities across Root OS, AI & LLM, Security, Network, DevOps, Hardware, Media & Bots. Check Developer tab to browse all 105.';
    } else if (lower === 'ls' || lower.startsWith('ls')) {
      response = 'index.html (6.3 KB)   style.css (5.1 KB)   script.js (3.2 KB)';
    } else if (lower.startsWith('cat index.html')) {
      response = files['index.html'].slice(0, 300) + '...';
    } else if (lower.startsWith('cat style.css')) {
      response = files['style.css'].slice(0, 300) + '...';
    } else if (lower.startsWith('cat script.js')) {
      response = files['script.js'].slice(0, 300) + '...';
    } else if (lower === 'status') {
      response = `Bypass Daemon: RUNNING\nActive Model: ${selectedModel}\nRoot SU: ${isDevUnlocked ? 'GRANTED (UID 0)' : 'RESTRICTED (Clearance needed)'}\nLead Developer: Nowempireoff\nActive Modules: 105 Features Ready`;
    } else if (lower === 'python3' || lower.startsWith('python3')) {
      response = 'Python 3.11.4 (Bypass Root Native Subsystem, Oct 2025)';
    } else if (lower === 'autofix') {
      handleAutoFix();
      response = 'Auto-fix repair routine initiated.';
    } else if (lower.includes('setenforce') || lower.includes('magisk') || lower.includes('frida') || lower.includes('tcpdump') || lower.includes('nmap')) {
      response = `[EXECUTE] ${cmd}\nReturn code: 0 (Success)\nOutput: Subsystem hook executed successfully with Root kernel clearance.`;
    } else {
      response = `[SU_PIPE] Command executed: "${cmd}" -> Return code 0 [OK].`;
    }

    setTerminalLines((prev) => [
      ...prev,
      { id: `t-${Date.now()}-cmd`, text: cmd, type: 'cmd', timestamp: time },
      { id: `t-${Date.now()}-res`, text: response, type: 'info', timestamp: time },
    ]);
  };

  const handleLoadPreset = (preset: 'shooter' | 'game' | 'apple' | 'monitor' | 'bakery' | 'calc' | 'todo') => {
    soundFx.playFixChime();
    setHasSyntaxError(false);
    setActiveTab('preview');
    if (preset === 'shooter') {
      setFiles(getTargetShooterGameFiles());
      addMariaResponse('मैंने आपके लिए 3D टारगेट शूटिंग गेम लोड कर दिया है। आप इसे नीचे लाइव खेल सकते हैं!');
    } else if (preset === 'game') {
      setFiles(getCyberpunkGameFiles());
      addMariaResponse('मैंने आपके लिए स्पेस स्ट्राइक आर्केड गेम लोड कर दिया है।');
    } else if (preset === 'calc') {
      setFiles(getCalculatorFiles());
      addMariaResponse('मैंने आपके लिए नियॉन क्वांटम कैलकुलेटर लोड कर दिया है।');
    } else if (preset === 'todo') {
      setFiles(getTodoListFiles());
      addMariaResponse('मैंने आपके लिए टास्क मैनेजर ऐप लोड कर दिया है।');
    } else if (preset === 'apple') {
      setFiles(getAppleLandingPageFiles());
      addMariaResponse('मैंने आपके लिए एप्पल आईफोन 16 प्रो लैंडिंग पेज लोड कर दिया है।');
    } else if (preset === 'monitor') {
      setFiles(getSystemMonitorFiles());
      addMariaResponse('मैंने आपके लिए सिस्टम टेलीमेट्री डैशबोर्ड लोड कर दिया है।');
    } else if (preset === 'bakery') {
      setFiles(initialProjectFiles);
      addMariaResponse('मैंने बेकरी लैंडिंग पेज लोड कर दिया है।');
    }
  };

  const handleDeployGameApp = (type: string) => {
    soundFx.playUnlockChime();
    let newFiles: ProjectFiles;
    let title = '';
    let snippet = '';

    if (type === 'sensi-app') {
      newFiles = getSensiAppFiles();
      title = '⚡ Free Fire Pro Sensi Suite';
      snippet = '<div class="app-container">...<div class="sensi-board">...</div></div>';
    } else if (type === 'hud-overlay') {
      newFiles = getHudOverlayAppFiles();
      title = '🕹️ Floating Crosshair & Claw HUD Studio';
      snippet = '<div class="studio-wrapper">...<div class="crosshair-anchor">...</div></div>';
    } else if (type === 'car-racing') {
      newFiles = getCarRacingGameFiles();
      title = '🏎️ Nitro Highway 3D Racer';
      snippet = '<canvas id="gameCanvas" width="360" height="520"></canvas>';
    } else if (type === 'target-shooting') {
      newFiles = getTargetShooterGameFiles();
      title = '🎯 3D FPS Target Shooting Arena';
      snippet = '<canvas id="shooterCanvas" width="380" height="520"></canvas>';
    } else if (type === 'space-arcade') {
      newFiles = getCyberpunkGameFiles();
      title = '🛸 Cyber Strike 2099 Galaxy';
      snippet = '<canvas id="gameCanvas" width="380" height="500"></canvas>';
    } else {
      newFiles = getAppleDesignStudioGameFiles();
      title = ' Apple 3D Device Design Studio';
      snippet = '<div class="studio-app">...</div>';
    }

    setFiles(newFiles);
    setActiveFile('index.html');
    setHasSyntaxError(false);
    setActiveTab('preview');

    const cmd = `sh /system/bin/deploy_gamer_app.sh --module="${title}"`;
    const reply = `🎮 मैंने आपके लिए "${title}" सफलतापूर्वक तैयार कर दिया है! प्रिव्यू टैब में लाइव टेस्ट करें और खेलें।`;
    logTerminalCommand(cmd, `Game deployment mounted: ${title}`);
    addMariaResponse(reply, { cmd, output: `Game module loaded: ${title}`, isRoot: true }, {
      file: 'index.html',
      snippet,
    });
    speakText(reply);
  };

  const handleDeployAIApp = (ai: CustomAIDefinition) => {
    soundFx.playUnlockChime();
    const newFiles = getCustomAIAppFiles(ai);
    setFiles(newFiles);
    setActiveFile('index.html');
    setHasSyntaxError(false);
    setActiveTab('preview');

    const cmd = `sh /system/bin/synthesize_ai.sh --agent="${ai.name}" --category="${ai.category}"`;
    const reply = `✨ आपका कस्टम AI "${ai.name}" (${ai.emoji}) पूरी तरह से तैयार होकर प्रिव्यू टैब में लाइव डिप्लॉय हो गया है! अब आप प्रिव्यू में इससे सीधे बातचीत कर सकते हैं।`;
    logTerminalCommand(cmd, `AI Synthesizer deployed: ${ai.name}`);
    addMariaResponse(reply, { cmd, output: `Autonomous Agent running: ${ai.name}`, isRoot: true }, {
      file: 'index.html',
      snippet: `<div class="chat-container">...<h1>${ai.name}</h1>...</div>`,
    });
    speakText(reply);
  };

  // 🚀 यूआरएल चेक करें: अगर लास्ट में /admin लिखा है तो सीधे नया एडमिन पेज खोलें
  if (typeof window !== 'undefined' && (window.location.pathname === '/admin' || window.location.pathname.endsWith('/admin') || window.location.hash === '#/admin')) {
    return <AdminPage />;
  }

  return (
    <div className="w-full h-screen bg-[#060401] text-white overflow-hidden flex flex-col font-sans relative">
      {/* Premium Golden Diamond Luxury Ambient Background */}
      <GoldenDiamondBackground intensity="luxury" showParticles={true} />

      {/* Top Header Bar */}
      <TopBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onNewProject={() => {
          handleUserPrompt('theek hai to mujhe ek bahut hi advance level ka bakery ke liye landing page ya website create karni hai');
        }}
        isBusy={voiceState === 'processing' || isFixing}
        onOpenCommandDossier={() => setIsCommandDossierOpen(true)}
      />

      {/* Dynamic Island Capsule (From Video 00:02, 03:38, 05:04) */}
      <DynamicIsland
        voiceState={voiceState}
        statusText={islandStatusText}
        onClick={() => setIsVoiceModalOpen(true)}
        visible={settings.topCapsule}
      />

      {/* Global Live Announcement Ticker (Broadcasted by Admin) */}
      {adminSettings.announcementEnabled && adminSettings.announcementText && (
        <div className="w-full bg-gradient-to-r from-amber-900/40 via-yellow-900/30 to-amber-900/40 border-b border-amber-500/25 px-3 py-1 flex items-center justify-between text-[11px] font-mono text-amber-300 select-none z-30">
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold text-[9px] border border-amber-400/30 flex-shrink-0 animate-pulse">
              👑 ANNOUNCEMENT
            </span>
            <span className="truncate">{adminSettings.announcementText}</span>
          </div>
          <button
            onClick={() => {
              const updated = { ...adminSettings, announcementEnabled: false };
              setAdminSettings(updated);
              analyticsEngine.saveAdminSettings(updated);
            }}
            className="text-gray-400 hover:text-white px-1 ml-2 text-xs"
            title="Dismiss Announcement"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {activeTab === 'home' && (
          <HomeTab
            messages={messages}
            onSendMessage={handleUserPrompt}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
            onOpenVoiceModal={() => setIsVoiceModalOpen(true)}
            onStartListening={startListening}
            isListening={voiceState === 'listening'}
            isProcessing={voiceState === 'processing'}
            onSpeakText={speakText}
            onSelectTab={setActiveTab}
            isBuilderUnlocked={isBuilderUnlocked}
            onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
            onResetSession={handleResetSession}
            onDeployGameApp={handleDeployGameApp}
            onDeployAIApp={handleDeployAIApp}
            onOpenCommandDossier={() => setIsCommandDossierOpen(true)}
          />
        )}

        {activeTab === 'vip' && (
          <VipHubTab
            onSelectTab={setActiveTab}
            onLoadPreset={handleLoadPreset}
            isBuilderUnlocked={isBuilderUnlocked}
            onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
            onNavigateToBuilder={() => {
              setSelectedMode('Builder');
              setActiveTab('home');
            }}
            onLaunchGame={(gameType) => {
              handleLoadPreset(gameType === 'shooter' ? 'shooter' : 'game');
            }}
          />
        )}

          {activeTab === 'files' && (
            <FilesTab
              files={files}
              onOpenFileInEditor={(fileName) => {
                setActiveFile(fileName);
                setActiveTab('editor');
              }}
              onSelectTab={setActiveTab}
            />
          )}

          {activeTab === 'editor' && (
            <EditorTab
              files={files}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              onUpdateFile={(name, code) => {
                setFiles((prev) => ({ ...prev, [name]: code }));
              }}
              hasError={hasSyntaxError}
              onAutoFix={handleAutoFix}
              isFixing={isFixing}
              justFixed={justFixed}
              onSelectTab={setActiveTab}
            />
          )}

          {activeTab === 'terminal' && (
            <TerminalTab
              entries={terminalLines}
              onExecuteCommand={handleTerminalCommand}
              onClear={() => setTerminalLines([])}
              isDevUnlocked={isDevUnlocked}
              onUnlockDev={(passcode) => {
                if (passcode.trim() === '6769') {
                  setIsDevUnlocked(true);
                  soundFx.playUnlockChime();
                  logTerminalCommand('auth --pin=6769', 'Developer clearance verified. Welcome Lead Architect Nowempireoff.');
                  return true;
                }
                soundFx.playLockTone();
                logTerminalCommand('auth --failed', 'Unauthorized PIN on Terminal.');
                return false;
              }}
              onSwitchToDev={() => setActiveTab('dev')}
            />
          )}

          {activeTab === 'preview' && (
            <PreviewTab
              files={files}
              hasError={hasSyntaxError}
              onAutoFix={handleAutoFix}
              isFixing={isFixing}
              onSelectTab={setActiveTab}
              onLoadPreset={handleLoadPreset}
            />
          )}

          {activeTab === 'dev' && (
            <AdminDashboard
              onUnlockBuilder={() => {
                setIsBuilderUnlocked(true);
                soundFx.playUnlockChime();
                addMariaResponse('⚡ Admin Override: Autonomous Builder VIP बाईपास अनलॉक कर दिया गया है!');
              }}
              onResetSession={handleResetSession}
              onOpenTerminal={() => setActiveTab('terminal')}
              onDeployGameApp={handleDeployGameApp}
              onCloseAdmin={() => setActiveTab('home')}
            />
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <BottomNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          hasError={hasSyntaxError}
          isDevUnlocked={isDevUnlocked}
        />

        {/* Builder Unlock Code Modal (Code: NOWXMULTIPLE) */}
        <UnlockBuilderModal
          isOpen={isUnlockModalOpen}
          onClose={() => setIsUnlockModalOpen(false)}
          onUnlockSuccess={() => {
            setIsBuilderUnlocked(true);
            if (typeof window !== 'undefined') {
              localStorage.setItem('builder_unlocked', 'true');
            }
            soundFx.playUnlockChime();
            const unlockMsg = '🎉 मुबारक हो! BUILDER सफलतापूर्वक अनलॉक हो गया है (Verified Code: NOWXMULTIPLE)। अब आप कोई भी शूटिंग गेम, कैलकुलेटर, या कस्टम ऐप बना सकते हैं।';
            addMariaResponse(unlockMsg);
            speakText('बधाई हो, बिल्डर अनलॉक हो चुका है!');
          }}
          onSuccess={() => {
            setIsBuilderUnlocked(true);
            if (typeof window !== 'undefined') {
              localStorage.setItem('builder_unlocked', 'true');
            }
            soundFx.playUnlockChime();
            const unlockMsg = '🎉 मुबारक हो! BUILDER सफलतापूर्वक अनलॉक हो गया है (Verified Code: NOWXMULTIPLE)। अब आप कोई भी शूटिंग गेम, कैलकुलेटर, या कस्टम ऐप बना सकते हैं।';
            addMariaResponse(unlockMsg);
            speakText('बधाई हो, बिल्डर अनलॉक हो चुका है!');
          }}
        />

        {/* Voice Assistant Modal (Maria AI Full HUD) */}
        <VoiceAssistantModal
          isOpen={isVoiceModalOpen}
          onClose={() => setIsVoiceModalOpen(false)}
          voiceState={voiceState}
          transcript={transcript}
          response={lastMariaResponse}
          onStartListening={startListening}
          onStopListening={stopListening}
          onSendMessage={(txt) => {
            handleUserPrompt(txt);
          }}
          onStopSpeaking={stopSpeaking}
        />

        {/* IDE Settings & Developer Profile Modal */}
        <DevSettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          settings={settings}
          onToggleSetting={(key) => {
            setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
          }}
        />

        {/* Android Mobile OS Simulation (Brightness, Play Store, App Drawer) */}
        <MobileOSSimulation
          playStoreVisible={playStoreVisible}
          onClosePlayStore={() => setPlayStoreVisible(false)}
          appDrawerVisible={appDrawerVisible}
          onCloseAppDrawer={() => setAppDrawerVisible(false)}
          brightnessLevel={brightnessLevel}
          onLaunchApp={(appName) => {
            if (appName === 'Play Store') {
              setPlayStoreVisible(true);
            } else if (appName === 'Bypass IDE') {
              setActiveTab('home');
            } else if (appName === 'Terminal') {
              setActiveTab('terminal');
            }
          }}
        />

        {/* Secret Commands & Code Dossier Modal (Animation box on first visit & reset with blurry click-to-reveal) */}
        <SecretCommandsModal
          isOpen={isCommandDossierOpen}
          onClose={() => setIsCommandDossierOpen(false)}
          onUnlockBuilder={() => {
            setIsBuilderUnlocked(true);
            if (typeof window !== 'undefined') {
              localStorage.setItem('builder_unlocked', 'true');
            }
            soundFx.playUnlockChime();
            const unlockMsg = '🎉 मुबारक हो! BUILDER सफलतापूर्वक अनलॉक हो गया है (Code: NOWXMULTIPLE)।';
            addMariaResponse(unlockMsg);
            speakText('बधाई हो, बिल्डर अनलॉक हो चुका है!');
          }}
          onOpenDevSettings={() => {
            setIsDevUnlocked(true);
            setActiveTab('developer');
          }}
          onRunPrompt={(prompt) => {
            handleUserPrompt(prompt);
          }}
        />
    </div>
  );
}
