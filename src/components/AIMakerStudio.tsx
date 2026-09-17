import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Send,
  Sliders,
  Play,
  RotateCcw,
  Check,
  Copy,
  Cpu,
  Zap,
  Globe,
  Code2,
  Volume2,
  Languages,
  ShieldCheck,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { soundFx } from '../soundFx';

export interface CustomAIDefinition {
  id: string;
  name: string;
  emoji: string;
  category: string;
  tone: string;
  systemPrompt: string;
  temperature: number;
  capabilities: {
    webSearch: boolean;
    codeGen: boolean;
    voiceOutput: boolean;
    hinglish: boolean;
  };
  sampleGreeting: string;
}

interface AIMakerStudioProps {
  onDeployAIApp: (ai: CustomAIDefinition) => void;
  onSelectAsActiveAI?: (ai: CustomAIDefinition) => void;
  onClose?: () => void;
}

export const AIMakerStudio: React.FC<AIMakerStudioProps> = ({
  onDeployAIApp,
  onSelectAsActiveAI,
  onClose,
}) => {
  // Mode: 'creator' | 'sandbox' | 'presets'
  const [activeTab, setActiveTab] = useState<'create' | 'sandbox' | 'presets'>('create');

  // Creator State
  const [promptIdea, setPromptIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Active AI Config
  const [aiConfig, setAiConfig] = useState<CustomAIDefinition>({
    id: 'gamer-ai',
    name: 'GamerSensei AI',
    emoji: '🎮',
    category: 'Gaming Coach',
    tone: 'Aggressive & Strategic',
    systemPrompt:
      'You are GamerSensei, a high-octane esports coach and gaming AI. You provide pro sensitivity tips, recoil control equations, map strategies for Free Fire and BGMI, and speak in an enthusiastic, energetic Hinglish style.',
    temperature: 0.7,
    capabilities: {
      webSearch: true,
      codeGen: true,
      voiceOutput: true,
      hinglish: true,
    },
    sampleGreeting:
      'अरे गेमर भाई! GamerSensei तैयार है। Free Fire sensi, BGMI zero recoil, या कोई भी गेमिंग स्ट्रेटेजी चाहिए? पूछो!',
  });

  // Sandbox Chat State
  const [sandboxMessages, setSandboxMessages] = useState<
    Array<{ id: string; sender: 'user' | 'ai'; text: string; time: string }>
  >([
    {
      id: '1',
      sender: 'ai',
      text: 'अरे गेमर भाई! GamerSensei तैयार है। Free Fire sensi, BGMI zero recoil, या कोई भी गेमिंग स्ट्रेटेजी चाहिए? पूछो!',
      time: 'Just now',
    },
  ]);
  const [sandboxInput, setSandboxInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  // Presets List
  const aiPresets: CustomAIDefinition[] = [
    {
      id: 'gaming-coach',
      name: 'GamerSensei AI',
      emoji: '🎮',
      category: 'Gaming Coach',
      tone: 'Aggressive & Strategic',
      systemPrompt:
        'You are GamerSensei, an esports coach. You give pro tips for Free Fire, BGMI, CoD, sensitivity formulas, recoil control, and clutch strategies in energetic Hinglish.',
      temperature: 0.8,
      capabilities: { webSearch: true, codeGen: true, voiceOutput: true, hinglish: true },
      sampleGreeting: 'Yo गेमर! क्या Free Fire हेडशॉट सेंसिटिविटी या BGMI क्लच रणनीति चाहिए? बताओ!',
    },
    {
      id: 'code-demon',
      name: 'CodeDemon 10X',
      emoji: '💻',
      category: 'Software Architect',
      tone: 'Hyper-Intellectual & Clean',
      systemPrompt:
        'You are CodeDemon 10X, a senior principal software engineer. You write high-performance TypeScript, React, Python, and Linux kernel scripts with zero bugs and clean architecture.',
      temperature: 0.3,
      capabilities: { webSearch: true, codeGen: true, voiceOutput: false, hinglish: false },
      sampleGreeting: 'CodeDemon 10X online. What system architecture or algorithmic challenge are we building?',
    },
    {
      id: 'hindi-shayari',
      name: 'मिर्ज़ा AI (शायर)',
      emoji: '✍️',
      category: 'Creative Arts',
      tone: 'Poetic & Romantic',
      systemPrompt:
        'You are Mirza AI, a legendary Urdu and Hindi poet and shayara. You compose original ghazals, heart-touching shayaris, motivational quotes, and lyrical verses in pure, elegant Hindi.',
      temperature: 0.9,
      capabilities: { webSearch: false, codeGen: false, voiceOutput: true, hinglish: true },
      sampleGreeting: 'आदाब! हम हैं मिर्ज़ा AI। फरमाइए, आज दिल के किस दर्द या इश्क़ पर शायरी लिखनी है?',
    },
    {
      id: 'cyber-sentinel',
      name: 'CyberSentinel Pentester',
      emoji: '🛡️',
      category: 'Cyber Defense',
      tone: 'Security Focused & Vigilant',
      systemPrompt:
        'You are CyberSentinel, a certified ethical hacking and defensive security specialist. You analyze code vulnerabilities, SSL/TLS configurations, OWASP Top 10 risks, and hardening guidelines.',
      temperature: 0.4,
      capabilities: { webSearch: true, codeGen: true, voiceOutput: false, hinglish: false },
      sampleGreeting: 'CyberSentinel activated. Provide target architecture or source code for vulnerability audit.',
    },
    {
      id: 'crypto-oracle',
      name: 'CryptoOracle Bull',
      emoji: '📈',
      category: 'Finance & Crypto',
      tone: 'Analytical & Objective',
      systemPrompt:
        'You are CryptoOracle, a cryptocurrency market analyst and algorithmic trading advisor. You provide Bitcoin/Ethereum support & resistance levels, risk management math, and market sentiment.',
      temperature: 0.5,
      capabilities: { webSearch: true, codeGen: true, voiceOutput: true, hinglish: true },
      sampleGreeting: 'CryptoOracle ready. Want technical levels for BTC, ETH, or portfolio risk analysis?',
    },
    {
      id: 'hinglish-buddy',
      name: 'यार AI (Best Friend)',
      emoji: '🫂',
      category: 'Personal Companion',
      tone: 'Funny, Warm & Caring',
      systemPrompt:
        'You are Yaar AI, a fun-loving, empathetic, loyal Indian best friend. You talk in natural, cheerful Hinglish, use memes, crack jokes, and give genuine heartfelt advice.',
      temperature: 0.85,
      capabilities: { webSearch: true, codeGen: false, voiceOutput: true, hinglish: true },
      sampleGreeting: 'अरे भाई! क्या हालचाल? आज का दिन कैसा गया? कोई भी बात हो, खुलकर बोल!',
    },
  ];

  // Natural Language Auto-Synthesize AI
  const handleSynthesizeAI = () => {
    if (!promptIdea.trim()) return;
    soundFx.playTapTone();
    setIsGenerating(true);

    setTimeout(() => {
      const lower = promptIdea.toLowerCase();
      let newName = 'Custom AI';
      let newEmoji = '🤖';
      let newCategory = 'Custom Assistant';
      let newTone = 'Helpful & Direct';
      let newPrompt = `You are a custom AI assistant created by the user with the following specification: ${promptIdea}. Always act strictly in character, fulfill the user's intent with depth and high quality.`;
      let newGreeting = `नमस्ते! मैं आपका नया बनाया गया AI हूँ। बताइए मैं आपकी क्या मदद करूँ?`;

      if (lower.includes('game') || lower.includes('गेम') || lower.includes('sensi') || lower.includes('free fire')) {
        newName = 'ProGamer Sensi AI';
        newEmoji = '🎯';
        newCategory = 'Gaming Coach';
        newTone = 'Pro Esports & Energetic';
        newPrompt = `You are ProGamer Sensi AI. You specialize in mobile and PC gaming sensitivity math, recoil control, clutch decision-making, and Free Fire/BGMI strategies in natural Hinglish.`;
        newGreeting = 'Yo! ProGamer Sensi AI हाज़िर है। बताओ कौनसे गेम की सेंसिटिविटी या टिप्स चाहिए?';
      } else if (lower.includes('code') || lower.includes('developer') || lower.includes('python') || lower.includes('react')) {
        newName = 'DevMaster AI';
        newEmoji = '⚡';
        newCategory = 'Code Synthesizer';
        newTone = 'Technical & Clean';
        newPrompt = `You are DevMaster AI, an expert programmer. Write concise, optimal, robust code across JavaScript, Python, C++, and Web development.`;
        newGreeting = 'DevMaster ready. Provide your coding problem or feature requirement.';
      } else if (lower.includes('shayari') || lower.includes('शायरी') || lower.includes('love') || lower.includes('कविता')) {
        newName = 'रोमांटिक शायर AI';
        newEmoji = '🌹';
        newCategory = 'Poetry & Shayari';
        newTone = 'Heartwarming & Poetic';
        newPrompt = `You are a legendary poet and shayara. You write mesmerizing Hindi/Urdu shayaris, romantic notes, and emotional poetry.`;
        newGreeting = 'इश्क़ और लफ़्ज़ों की महफ़िल में आपका स्वागत है। कहिए, क्या लिखूँ आपके लिए?';
      } else if (lower.includes('doctor') || lower.includes('health') || lower.includes('फिटनेस') || lower.includes('gym')) {
        newName = 'FitLife Coach AI';
        newEmoji = '💪';
        newCategory = 'Health & Fitness';
        newTone = 'Disciplined & Motivating';
        newPrompt = `You are FitLife Coach AI. You provide workout plans, calorie targets, gym motivation, and nutrition advice.`;
        newGreeting = 'नमस्ते! FitLife Coach AI तैयार है। आपकी फिटनेस गोल क्या है?';
      }

      const generatedAI: CustomAIDefinition = {
        id: 'custom-' + Date.now(),
        name: newName,
        emoji: newEmoji,
        category: newCategory,
        tone: newTone,
        systemPrompt: newPrompt,
        temperature: 0.7,
        capabilities: {
          webSearch: true,
          codeGen: true,
          voiceOutput: true,
          hinglish: true,
        },
        sampleGreeting: newGreeting,
      };

      setAiConfig(generatedAI);
      setSandboxMessages([
        {
          id: 'init',
          sender: 'ai',
          text: newGreeting,
          time: 'Just now',
        },
      ]);
      setIsGenerating(false);
      soundFx.playUnlockChime();
      setActiveTab('sandbox');
    }, 600);
  };

  // Sandbox message submit
  const handleSandboxSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sandboxInput.trim()) return;

    const userMsg = sandboxInput.trim();
    setSandboxInput('');
    soundFx.playTapTone();

    const newMsgId = Date.now().toString();
    setSandboxMessages((prev) => [
      ...prev,
      { id: newMsgId, sender: 'user', text: userMsg, time: 'Just now' },
    ]);

    setIsAiThinking(true);

    try {
      // Call backend with the custom AI's system prompt!
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMsg,
          mode: 'AI Maker',
          customSystemPrompt: aiConfig.systemPrompt,
          customAiName: aiConfig.name,
        }),
      });
      const data = await res.json();
      const reply = data.text || `[${aiConfig.name}]: कार्य स्वीकार कर लिया गया है।`;

      setSandboxMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'ai', text: reply, time: 'Just now' },
      ]);
      soundFx.playFixChime();
    } catch (err) {
      console.warn('Sandbox AI error:', err);
      // Fast fallback in-character response
      let fallbackText = `[${aiConfig.name}]: नमस्ते! आपने कहा: "${userMsg}"। मैं आपकी विशेष निर्देशों के अनुसार 100% कार्य करने के लिए तैयार हूँ।`;
      if (aiConfig.category === 'Gaming Coach') {
        fallbackText = `अरे भाई! ${aiConfig.name} बोल रहा हूँ। "${userMsg}" के लिए प्रो टिप: हमेशा क्रॉसहेयर को हेड लेवल पर रखो और ड्रैग फायर बटन को J-शेप में ऊपर खींचो! 1-टैप हेडशॉट गारंटीड लगेगा।`;
      } else if (aiConfig.category === 'Poetry & Shayari') {
        fallbackText = `दिल से जो बात निकलती है असर रखती है,\nपर नहीं, ताक़त-ए-परवाज़ मगर रखती है।\n- ${aiConfig.name}`;
      }

      setSandboxMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'ai', text: fallbackText, time: 'Just now' },
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div className="w-full bg-[#0a0d16] border border-fuchsia-500/40 rounded-3xl p-4 sm:p-5 shadow-2xl text-left font-mono space-y-4 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-fuchsia-500/20 pb-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-fuchsia-500/30 flex items-center justify-center text-white text-2xl">
            <span>{aiConfig.emoji}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg text-white tracking-wider flex items-center gap-1.5">
                AI MAKER STUDIO
                <span className="px-2 py-0.5 rounded-full bg-fuchsia-400/10 border border-fuchsia-400/40 text-fuchsia-300 text-[10px] font-black">
                  ANY AI SYNTHESIZER
                </span>
              </h3>
            </div>
            <p className="text-xs text-gray-400">
              जो आप बोलेंगे — सेम टू सेम काम करने वाला कस्टम AI जेनरेट और लाइव टेस्ट करें
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="self-end sm:self-center px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs border border-white/10"
          >
            Close ✕
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar relative z-10">
        {[
          { id: 'create', label: '✨ Instant AI Synthesizer', icon: Sparkles },
          { id: 'sandbox', label: `💬 Live Test: ${aiConfig.name}`, icon: Bot },
          { id: 'presets', label: '📚 Pre-Built AI Blueprints', icon: Cpu },
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
                  ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-black shadow-lg shadow-fuchsia-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
              }`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: CREATE / SYNTHESIZE AI */}
      {activeTab === 'create' && (
        <div className="space-y-4 relative z-10">
          {/* Natural Language Prompt to AI */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#131525] to-[#0d0f1a] border border-fuchsia-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-fuchsia-300 flex items-center gap-1.5">
                <Sparkles size={14} />
                NATURAL LANGUAGE AI ARCHITECT (Describe the AI you want):
              </span>
              <span className="text-[10px] text-gray-400">Hindi / Hinglish / English</span>
            </div>

            <textarea
              value={promptIdea}
              onChange={(e) => setPromptIdea(e.target.value)}
              placeholder="e.g. 'Ek aisi AI banao jo Free Fire aur gaming ke tips aur headshot tactics Hinglish me de aur funny roast bhi kare...' ya 'Personal Coding Bot jo full stack code likhe'..."
              rows={3}
              className="w-full bg-black/50 border border-white/15 focus:border-fuchsia-400 rounded-xl p-3 text-xs text-white placeholder-gray-500 outline-none resize-none leading-relaxed"
            />

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                '🎯 Free Fire Sensi & Gaming AI',
                '💻 10X Python & Full-Stack AI',
                '🌹 रोमांटिक हिंदी शायर AI',
                '🛡️ Cyber Pentest Security AI',
                '📈 Crypto & Stock Market Oracle',
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    soundFx.playTapTone();
                    setPromptIdea(chip);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-gray-300 hover:text-fuchsia-300 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            <button
              onClick={handleSynthesizeAI}
              disabled={isGenerating || !promptIdea.trim()}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 hover:brightness-110 disabled:opacity-50 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Zap size={14} />
              )}
              <span>SYNTHESIZE &amp; INSTANT-DEPLOY THIS AI</span>
            </button>
          </div>

          {/* Deep Configuration Customizer Form */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 text-xs">
            <div className="font-bold text-white flex items-center justify-between">
              <span>MANUAL AI ARCHITECTURE SPECIFICATIONS</span>
              <span className="text-fuchsia-400 text-[10px]">Fine-Tune System Parameters</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1">AI Name</label>
                <input
                  type="text"
                  value={aiConfig.name}
                  onChange={(e) => setAiConfig({ ...aiConfig, name: e.target.value })}
                  className="w-full bg-[#141826] border border-white/15 rounded-xl px-3 py-1.5 text-white outline-none text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] text-gray-400 block mb-1">Avatar Emoji</label>
                <div className="flex items-center gap-1.5">
                  {['🎮', '💻', '⚡', '🧠', '🛡️', '🌹', '📈', '🤖'].map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => {
                        soundFx.playTapTone();
                        setAiConfig({ ...aiConfig, emoji: em });
                      }}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm border transition-transform ${
                        aiConfig.emoji === em
                          ? 'border-fuchsia-400 bg-fuchsia-500/20 scale-110'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] text-gray-400 block mb-1">AI Category</label>
                <input
                  type="text"
                  value={aiConfig.category}
                  onChange={(e) => setAiConfig({ ...aiConfig, category: e.target.value })}
                  className="w-full bg-[#141826] border border-white/15 rounded-xl px-3 py-1.5 text-white outline-none text-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-gray-400 block mb-1">
                System Persona Prompt (Core Directives &amp; Logic)
              </label>
              <textarea
                value={aiConfig.systemPrompt}
                onChange={(e) => setAiConfig({ ...aiConfig, systemPrompt: e.target.value })}
                rows={3}
                className="w-full bg-[#141826] border border-white/15 focus:border-fuchsia-400 rounded-xl p-2.5 text-white outline-none text-xs resize-none font-mono"
              />
            </div>

            {/* Capabilities Toggles */}
            <div>
              <label className="text-[11px] text-gray-400 block mb-1.5">Capabilities &amp; Grounding</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: 'webSearch', label: 'Live Web Search', icon: Globe },
                  { key: 'codeGen', label: 'Code Synthesis', icon: Code2 },
                  { key: 'voiceOutput', label: 'Voice Speaking', icon: Volume2 },
                  { key: 'hinglish', label: 'Hindi / Hinglish', icon: Languages },
                ].map((cap) => {
                  const Icon = cap.icon;
                  const isEnabled = (aiConfig.capabilities as any)[cap.key];
                  return (
                    <button
                      key={cap.key}
                      type="button"
                      onClick={() => {
                        soundFx.playTapTone();
                        setAiConfig({
                          ...aiConfig,
                          capabilities: {
                            ...aiConfig.capabilities,
                            [cap.key]: !isEnabled,
                          },
                        });
                      }}
                      className={`p-2 rounded-xl border flex items-center gap-1.5 text-[11px] font-bold transition-colors ${
                        isEnabled
                          ? 'bg-fuchsia-950/60 border-fuchsia-400 text-fuchsia-200'
                          : 'bg-white/5 border-white/10 text-gray-400'
                      }`}
                    >
                      <Icon size={12} />
                      <span>{cap.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  soundFx.playTapTone();
                  setActiveTab('sandbox');
                }}
                className="flex-1 py-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <Bot size={14} />
                <span>OPEN LIVE TEST SANDBOX</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFx.playUnlockChime();
                  onDeployAIApp(aiConfig);
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:brightness-110 text-black font-black text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <ExternalLink size={14} />
                <span>BUILD AS STANDALONE APP IN PREVIEW</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE TEST SANDBOX */}
      {activeTab === 'sandbox' && (
        <div className="space-y-3 relative z-10">
          {/* Active AI Status Bar */}
          <div className="p-2.5 rounded-2xl bg-black/60 border border-fuchsia-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{aiConfig.emoji}</span>
              <div>
                <div className="font-bold text-xs text-white flex items-center gap-1.5">
                  <span>{aiConfig.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-fuchsia-400">{aiConfig.category} • Custom Persona Active</div>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playUnlockChime();
                onDeployAIApp(aiConfig);
              }}
              className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-bold text-[11px] flex items-center gap-1 transition-all active:scale-95"
            >
              <ExternalLink size={12} />
              <span>Deploy App</span>
            </button>
          </div>

          {/* Sandbox Chat Message Feed */}
          <div className="h-64 overflow-y-auto p-3 rounded-2xl bg-black/50 border border-white/10 space-y-2.5 select-text">
            {sandboxMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    {aiConfig.emoji}
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-fuchsia-600 text-white rounded-tr-none'
                      : 'bg-[#151928] border border-white/10 text-gray-200 rounded-tl-none'
                  }`}
                >
                  <div className="font-bold text-[10px] text-fuchsia-300 mb-0.5">
                    {msg.sender === 'user' ? 'You' : aiConfig.name}
                  </div>
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
            {isAiThinking && (
              <div className="flex gap-2 items-center text-xs text-fuchsia-300 animate-pulse">
                <span>{aiConfig.emoji}</span>
                <span>{aiConfig.name} विचार कर रहा है...</span>
              </div>
            )}
          </div>

          {/* Sandbox Input Form */}
          <form onSubmit={handleSandboxSend} className="flex items-center gap-2">
            <input
              type="text"
              value={sandboxInput}
              onChange={(e) => setSandboxInput(e.target.value)}
              placeholder={`Ask ${aiConfig.name} anything to test behavior...`}
              className="flex-1 bg-black/60 border border-white/15 focus:border-fuchsia-400 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none"
            />
            <button
              type="submit"
              disabled={isAiThinking || !sandboxInput.trim()}
              className="px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Send size={13} />
              <span>Send</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: PRESETS */}
      {activeTab === 'presets' && (
        <div className="space-y-3 relative z-10">
          <div className="text-xs text-gray-400">
            तैयार AI ब्लूप्रिंट चुनें और तुरंत टेस्ट या मॉडिफाई करें:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {aiPresets.map((preset) => (
              <div
                key={preset.id}
                className="p-3 rounded-2xl bg-black/40 border border-white/10 hover:border-fuchsia-400/50 transition-all flex flex-col justify-between gap-2"
              >
                <div className="flex items-start gap-2.5">
                  <div className="text-2xl p-1.5 rounded-xl bg-white/5 border border-white/10">
                    {preset.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white truncate">{preset.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-fuchsia-500/10 text-fuchsia-300 font-bold">
                        {preset.category}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-2 leading-relaxed">
                      {preset.systemPrompt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playTapTone();
                      setAiConfig(preset);
                      setSandboxMessages([
                        {
                          id: 'init',
                          sender: 'ai',
                          text: preset.sampleGreeting,
                          time: 'Just now',
                        },
                      ]);
                      setActiveTab('sandbox');
                    }}
                    className="flex-1 py-1.5 rounded-xl bg-fuchsia-600/80 hover:bg-fuchsia-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
                  >
                    <Bot size={12} />
                    <span>Test AI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playUnlockChime();
                      setAiConfig(preset);
                      onDeployAIApp(preset);
                    }}
                    className="flex-1 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
                  >
                    <Play size={12} />
                    <span>Deploy App</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
