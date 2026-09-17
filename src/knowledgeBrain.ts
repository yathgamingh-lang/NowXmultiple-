/**
 * Maria AI - Advanced Conversational Knowledge & Logic Engine
 * Provides intelligent, natural, dynamic responses in Hindi/English (Hinglish)
 * for general questions, math, science, tech, jokes, cricket, news, and device automation.
 */

export interface KnowledgeResult {
  reply: string;
  command?: {
    cmd: string;
    output?: string;
    isRoot?: boolean;
  };
  suggestedAction?: {
    type: 'tab' | 'builder' | 'brightness' | 'unlock';
    payload?: string;
  };
}

// Evaluate basic math expressions safely
function tryEvaluateMath(text: string): string | null {
  const clean = text
    .replace(/(calculate|what is|kya hoga|kya hota hai|batao|solve|answer of|\?)/gi, '')
    .replace(/x/gi, '*')
    .replace(/गुना|guna/gi, '*')
    .replace(/plus|जोड़/gi, '+')
    .replace(/minus|घटाओ/gi, '-')
    .replace(/divided by|divide|भाग/gi, '/')
    .trim();

  // Check if it looks like math (e.g. "25 * 4", "500 + 250", "100 / 4", "2 ^ 8")
  if (/^[\d\s\+\-\*\/\.\(\)\^%]+$/.test(clean) && /[\+\-\*\/\^%]/.test(clean)) {
    try {
      // safe eval for math
      const sanitized = clean.replace(/\^/g, '**');
      // eslint-disable-next-line no-new-func
      const result = Function(`'use strict'; return (${sanitized})`)();
      if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
        return `गणितीय गणना के अनुसार: ${clean} = ${result}`;
      }
    } catch {
      return null;
    }
  }

  // Percentage calculations like "500 ka 18%" or "18% of 500"
  const percentMatch1 = text.match(/(\d+)\s*(?:ka|का)\s*(\d+(?:\.\d+)?)\s*%/i);
  if (percentMatch1) {
    const total = parseFloat(percentMatch1[1]);
    const pct = parseFloat(percentMatch1[2]);
    const ans = (total * pct) / 100;
    return `${total} का ${pct}% होता है: ${ans}`;
  }

  const percentMatch2 = text.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of|का)\s*(\d+)/i);
  if (percentMatch2) {
    const pct = parseFloat(percentMatch2[1]);
    const total = parseFloat(percentMatch2[2]);
    const ans = (total * pct) / 100;
    return `${total} का ${pct}% होता है: ${ans}`;
  }

  return null;
}

export function getSmartKnowledgeResponse(
  rawPrompt: string,
  isMasterAuth: boolean = false
): KnowledgeResult {
  const prompt = rawPrompt.trim();
  const lower = prompt.toLowerCase();
  const masterPrefix = isMasterAuth ? 'जी Nowempireoff सर! ' : '';

  // 1. Math check
  const mathAnswer = tryEvaluateMath(prompt);
  if (mathAnswer) {
    return {
      reply: `${masterPrefix}${mathAnswer}। क्या आप कोई अन्य कैलकुलेशन या कोडिंग टास्क करना चाहते हैं?`,
    };
  }

  // 2. Wake Word only ("Nowempireoff")
  if (
    lower === 'nowempireoff' ||
    lower === 'now empire' ||
    lower === 'now empire off' ||
    lower === 'नाउ एम्पायर' ||
    lower === 'नाव एम्पायर'
  ) {
    return {
      reply:
        'प्रणाम Nowempireoff सर! NowXmultiple का मास्टर कोर सिस्टम पूरी तरह आपके हुक्म पर हाज़िर है। आपका रूट सुपरयूज़र एक्सेस 100% वेरिफाइड है। बताइए सर, आज कौन सा प्रोजेक्ट, गेम या टास्क एग्जीक्यूट करना है?',
      command: {
        cmd: 'su 0 -c "setprop nowx.master.auth 1 && echo \'Nowempireoff master access authenticated\'"',
        output: 'UID: 0 (root) gid: 0 (root) selinux=permissive',
        isRoot: true,
      },
    };
  }

  // 3. Time, Date & Day
  if (
    lower.includes('time') ||
    lower.includes('समय') ||
    lower.includes('टाइम') ||
    lower.includes('date') ||
    lower.includes('तारीख') ||
    lower.includes('दिन') ||
    lower.includes('day today')
  ) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const dateStr = now.toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return {
      reply: `${masterPrefix}वर्तमान समय ${timeStr} है और आज ${dateStr} है।`,
    };
  }

  // 4. Greetings & Small Talk
  if (
    lower === 'hi' ||
    lower === 'hello' ||
    lower === 'hey' ||
    lower.includes('नमस्ते') ||
    lower.includes('प्रणाम') ||
    lower.includes('kaise ho') ||
    lower.includes('kya haal') ||
    lower.includes('how are you') ||
    lower.includes('kaisa hai') ||
    lower.includes('kya kar rahi ho')
  ) {
    const greetings = [
      `${masterPrefix}नमस्ते! मैं Maria AI बिल्कुल बेहतरीन हूँ। NowXmultiple Autonomous IDE का पूरा कोर सिस्टम 100% ऑप्टिमाइज़्ड है। बताइए, आज आप क्या बनाना या जानना चाहते हैं?`,
      `${masterPrefix}हेलो! मैं हमेशा की तरह पूरी एनर्जी के साथ तैयार हूँ। आप कोई नया ऐप, 3D गेम, या कोई भी सवाल पूछ सकते हैं!`,
      `${masterPrefix}प्रणाम! सिस्टम के सभी रूट नोड्स और एआई कंपोनेंट्स एक्टिव हैं। आपका क्या हुक्म है सर?`,
    ];
    const chosen = greetings[Math.floor(Math.random() * greetings.length)];
    return { reply: chosen };
  }

  // 5. Identity & Creator
  if (
    lower.includes('who are you') ||
    lower.includes('tum kaun ho') ||
    lower.includes('who made you') ||
    lower.includes('kisne banaya') ||
    lower.includes('creator') ||
    lower.includes('owner') ||
    lower.includes('apna parichay') ||
    lower.includes('tera naam')
  ) {
    return {
      reply: `${masterPrefix}मैं **Maria AI** हूँ — NowXmultiple Autonomous IDE का वॉयस और इंटेलिजेंस कोर इंजन। मुझे हमारे मुख्य आर्किटेक्ट और डेवलपर **Nowempireoff** ने डिज़ाइन और विकसित किया है। मैं फुल-स्टैक वेब ऐप्लिकेशन जनरेट कर सकती हूँ, रियल-टाइम रूट कमांड्स एग्जीक्यूट करती हूँ और आपके हर सवाल का सटीक जवाब देती हूँ।`,
    };
  }

  // 6. Device Automation (Brightness, Gestures, Apps)
  if (lower.includes('brightness') || lower.includes('ब्राइटनेस')) {
    const isDim = lower.includes('low') || lower.includes('कम') || lower.includes('बिल्कुल') || lower.includes('down');
    return {
      reply: isDim
        ? `${masterPrefix}ज़रूर, मैंने आपके मोबाइल स्क्रीन की ब्राइटनेस को बिल्कुल न्यूनतम कर दिया है।`
        : `${masterPrefix}ज़रूर, मैंने आपके मोबाइल स्क्रीन की ब्राइटनेस को 100% फुल कर दिया है।`,
      command: {
        cmd: `settings put system screen_brightness ${isDim ? '15' : '255'}`,
        isRoot: true,
      },
      suggestedAction: {
        type: 'brightness',
        payload: isDim ? '0.2' : '1.0',
      },
    };
  }

  if (lower.includes('swipe') || lower.includes('स्वाइप') || lower.includes('app drawer') || lower.includes('drawer')) {
    return {
      reply: `${masterPrefix}ज़रूर, स्क्रीन पर ऊपर की तरफ स्वाइप करके ऐप ड्रॉअर खोल दिया गया है।`,
      command: {
        cmd: 'input swipe 500 1600 500 400 200',
        output: 'GESTURE_SWIPE_UP dispatched via Root Input Subsystem',
        isRoot: true,
      },
    };
  }

  if (lower.includes('play store') || lower.includes('instagram') || lower.includes('इंस्टाग्राम')) {
    const isClose = lower.includes('close') || lower.includes('बंद') || lower.includes('हटा');
    if (isClose) {
      return {
        reply: `${masterPrefix}बिल्कुल, प्ले स्टोर प्रोसेस को बैकग्राउंड से बंद कर दिया गया है।`,
        command: {
          cmd: 'am force-stop com.android.vending',
          isRoot: true,
        },
      };
    }
    return {
      reply: `${masterPrefix}जी, प्ले स्टोर से इंस्टाग्राम ऐप का इंस्टॉलेशन रूट प्रोसेस शुरू कर दिया गया है।`,
      command: {
        cmd: 'am start -a android.intent.action.VIEW -d "market://details?id=com.instagram.android"',
        isRoot: true,
      },
    };
  }

  // 7. Tab Navigation via Voice / Chat
  if (lower.includes('preview') || lower.includes('प्रिव्यू') || lower.includes('open app')) {
    return {
      reply: `${masterPrefix}लाइव प्रिव्यू टैब ओपन कर दिया गया है। आप अपने एक्टिव प्रोजेक्ट को यहाँ टेस्ट कर सकते हैं।`,
      suggestedAction: { type: 'tab', payload: 'preview' },
    };
  }

  if (lower.includes('terminal') || lower.includes('टर्मिनल') || lower.includes('shell') || lower.includes('कंसोल')) {
    return {
      reply: `${masterPrefix}रूट टर्मिनल कंसोल एक्टिवेट कर दिया गया है। आप यहाँ शेल कमांड्स रन कर सकते हैं।`,
      suggestedAction: { type: 'tab', payload: 'terminal' },
    };
  }

  if (lower.includes('editor') || lower.includes('एडिटर') || lower.includes('code dekhna') || lower.includes('source code')) {
    return {
      reply: `${masterPrefix}कोड एडिटर ओपन हो गया है। आप index.html, style.css और script.js को कस्टमाइज़ कर सकते हैं।`,
      suggestedAction: { type: 'tab', payload: 'editor' },
    };
  }

  // 8. Jokes & Humor
  if (lower.includes('joke') || lower.includes('chutkula') || lower.includes('जोक') || lower.includes('हंसाओ')) {
    const jokes = [
      `${masterPrefix}एक प्रोग्रामर ने अपनी पत्नी से पूछा: "दूध लेने जाऊं? अगर बाज़ार में अंडे मिलें तो 10 ले आऊं?" पत्नी ने कहा: "हाँ!" प्रोग्रामर 10 लीटर दूध लेकर लौटा। पत्नी ने पूछा: "इतना दूध क्यों?" प्रोग्रामर: "क्योंकि वहाँ अंडे मिल रहे थे!" 😄`,
      `${masterPrefix}टीचर: "क्लाउड कंप्यूटिंग क्या होता है?"\nछात्र: "सर, जब बारिश के मौसम में कंप्यूटर छत पर रख दें, तो उसे क्लाउड कंप्यूटिंग कहते हैं!" 😂`,
      `${masterPrefix}डॉक्टर: "आप दिन में कितनी देर कंप्यूटर चलाते हैं?"\nप्रोग्रामर: "सिर्फ तब तक, जब तक एरर ठीक न हो जाए!"\nडॉक्टर: "मतलब?"\nप्रोग्रामर: "मतलब 24 घंटे!" 😅`,
    ];
    return { reply: jokes[Math.floor(Math.random() * jokes.length)] };
  }

  // 9. Poetry & Shayari
  if (lower.includes('shayari') || lower.includes('शायरी') || lower.includes('kavita')) {
    const shayaris = [
      `${masterPrefix}हवाओं के भरोसे मत उड़, चट्टानें तूफानों का भी रुख मोड़ देती हैं।\nअपने पंखों पर भरोसा रख, हवाओं के भरोसे तो पतंगे उड़ा करती हैं! ✨`,
      `${masterPrefix}मंजिलें उन्हीं को मिलती हैं, जिनके सपनों में जान होती है।\nपंखों से कुछ नहीं होता, हौसलों से उड़ान होती है! 🚀`,
      `${masterPrefix}तारों में अकेला चाँद जगमगाता है,\nमुश्किलों में अकेला इंसान डगमगाता है।\nकांटों से घबराना मत मेरे दोस्त,\nक्योंकि कांटों में ही अकेला गुलाब मुस्कुराता है! 🌹`,
    ];
    return { reply: shayaris[Math.floor(Math.random() * shayaris.length)] };
  }

  // 10. Motivation & Advice
  if (lower.includes('motivation') || lower.includes('मोटिवेशन') || lower.includes('उदास') || lower.includes('sad')) {
    return {
      reply: `${masterPrefix}जिंदगी में कभी हार मत मानना! हर बड़ा कोडर, आर्किटेक्ट और लीडर गलतियों और असफलताओं से सीखकर ही आगे बढ़ता है। आपकी मेहनत कभी बेकार नहीं जाएगी, अपने विजन पर अडिग रहिए! 💫`,
    };
  }

  // 11. India GK, Politics & Leaders
  if (lower.includes('modi') || lower.includes('prime minister') || lower.includes('pm of india') || lower.includes('प्रधानमंत्री')) {
    return {
      reply: `${masterPrefix}भारत के वर्तमान प्रधानमंत्री श्री नरेंद्र मोदी हैं। वे 2014 से भारत के प्रधानमंत्री के रूप में कार्यरत हैं और भारतीय जनता पार्टी (BJP) के वरिष्ठ नेता हैं।`,
    };
  }

  if (lower.includes('president of india') || lower.includes('राष्ट्रपति')) {
    return {
      reply: `${masterPrefix}भारत की वर्तमान राष्ट्रपति श्रीमती द्रौपदी मुर्मू हैं। वे भारत की 15वीं राष्ट्रपति हैं और भारत के सर्वोच्च संवैधानिक पद पर आसीन हैं।`,
    };
  }

  // 12. Cricket & Sports
  if (lower.includes('cricket') || lower.includes('virat kohli') || lower.includes('rohit sharma') || lower.includes('dhoni') || lower.includes('ipl')) {
    if (lower.includes('virat')) {
      return {
        reply: `${masterPrefix}विराट कोहली भारतीय क्रिकेट के सर्वकालिक महान बल्लेबाजों में से एक हैं। उन्होंने इंटरनेशनल क्रिकेट में 80 से अधिक शतक बनाए हैं और 'चेज मास्टर' के नाम से प्रसिद्ध हैं।`,
      };
    }
    if (lower.includes('dhoni') || lower.includes('msd')) {
      return {
        reply: `${masterPrefix}महेंद्र सिंह धोनी (MSD) भारत के सबसे सफल कप्तानों में से एक हैं, जिन्होंने 2007 T20 वर्ल्ड कप, 2011 ODI वर्ल्ड कप और 2013 चैंपियंस ट्रॉफी भारत को जिताई। उन्हें 'कैप्टन कूल' कहा जाता है।`,
      };
    }
    if (lower.includes('rohit')) {
      return {
        reply: `${masterPrefix}रोहित शर्मा भारतीय राष्ट्रीय क्रिकेट टीम के दिग्गज कप्तान और सलामी बल्लेबाज हैं। वनडे इंटरनेशनल में 3 दोहरे शतक लगाने वाले वे दुनिया के एकमात्र बल्लेबाज हैं।`,
      };
    }
    return {
      reply: `${masterPrefix}क्रिकेट भारत का सबसे लोकप्रिय खेल है। भारतीय टीम दुनिया की शीर्ष टीमों में शामिल है और आईपीएल (IPL) दुनिया की सबसे बड़ी क्रिकेट लीग मानी जाती है।`,
    };
  }

  // 13. Science & Geography
  if (lower.includes('capital of india') || lower.includes('bharat ki rajdhani')) {
    return { reply: `${masterPrefix}भारत की राजधानी नई दिल्ली (New Delhi) है।` };
  }

  if (lower.includes('capital of') || lower.includes('rajdhani')) {
    if (lower.includes('usa') || lower.includes('america')) return { reply: `${masterPrefix}अमेरिका (USA) की राजधानी वाशिंगटन डी.सी. (Washington, D.C.) है।` };
    if (lower.includes('france')) return { reply: `${masterPrefix}फ्रांस की राजधानी पेरिस (Paris) है।` };
    if (lower.includes('japan')) return { reply: `${masterPrefix}जापान की राजधानी टोक्यो (Tokyo) है।` };
    if (lower.includes('uk') || lower.includes('england') || lower.includes('britain')) return { reply: `${masterPrefix}यूनाइटेड किंगडम (UK) की राजधानी लंदन (London) है।` };
    if (lower.includes('germany')) return { reply: `${masterPrefix}जर्मनी की राजधानी बर्लिन (Berlin) है।` };
    if (lower.includes('russia')) return { reply: `${masterPrefix}रूस (Russia) की राजधानी मॉस्को (Moscow) है।` };
    if (lower.includes('china')) return { reply: `${masterPrefix}चीन (China) की राजधानी बीजिंग (Beijing) है।` };
  }

  if (lower.includes('speed of light') || lower.includes('prakash ki chaal')) {
    return { reply: `${masterPrefix}निर्वात (vacuum) में प्रकाश की गति लगभग 3,00,000 किलोमीटर प्रति सेकंड (299,792,458 m/s) होती है।` };
  }

  if (lower.includes('mount everest') || lower.includes('himalaya') || lower.includes('highest mountain')) {
    return { reply: `${masterPrefix}माउंट एवरेस्ट दुनिया की सबसे ऊंची पर्वत चोटी है, जिसकी ऊंचाई समुद्र तल से लगभग 8,848.86 मीटर (29,031.7 फीट) है। यह नेपाल और तिब्बत की सीमा पर स्थित है।` };
  }

  if (lower.includes('sky') && (lower.includes('blue') || lower.includes('neela'))) {
    return { reply: `${masterPrefix}आसमान नीला 'रेले स्कैटरिंग' (Rayleigh Scattering) के कारण दिखता है। सूर्य के प्रकाश में मौजूद नीले रंग की तरंग दैर्ध्य (wavelength) छोटी होती है, जो वायुमंडल के कणों से सबसे ज्यादा बिखरती है।` };
  }

  // 14. Stock Market & Financial News
  if (lower.includes('stock') || lower.includes('share') || lower.includes('शेयर') || lower.includes('मार्केट') || lower.includes('sensex') || lower.includes('nifty')) {
    return {
      reply: `${masterPrefix}भारतीय शेयर बाजार में निफ्टी 50 और सेंसेक्स दोनों प्रमुख सूचकांक हैं। बैंकिंग, आईटी और ऑटो सेक्टर की कंपनियों में भारी ट्रेडिंग वॉल्यूम देखा जा रहा है। अगर आप लाइव क्रिप्टो या स्टॉक ट्रैकर देखना चाहते हैं, तो बताइए मैं आपके लिए एक लाइव ट्रैकर ऐप तैयार कर देती हूँ!`,
    };
  }

  // 15. Technology & Coding Explanations
  if (lower.includes('python') || lower.includes('javascript') || lower.includes('js vs python')) {
    return {
      reply: `${masterPrefix}Python और JavaScript दोनों ही आज की सबसे लोकप्रिय भाषाएं हैं। Python डेटा साइंस, मशीन लर्निंग और बैकएंड ऑटोमेशन के लिए सर्वश्रेष्ठ है, जबकि JavaScript वेब डेवलपमेंट (फ्रंटएंड + Node.js बैकएंड) और इंटरैक्टिव यूआई के लिए बेजोड़ है।`,
    };
  }

  if (lower.includes('react') || lower.includes('vue') || lower.includes('angular')) {
    return {
      reply: `${masterPrefix}React एक कंपोनेंट-आधारित जावास्क्रिप्ट लाइब्रेरी है जिसे फेसबुक (Meta) द्वारा बनाया गया है। यह वर्चुअल डीओएम (Virtual DOM) का उपयोग करके सुपर-फास्ट और मॉड्यूलर यूजर इंटरफेस तैयार करती है।`,
    };
  }

  if (lower.includes('what is api') || lower.includes('api kya hota hai') || lower.includes('api kya hai')) {
    return {
      reply: `${masterPrefix}API (Application Programming Interface) दो अलग-अलग सॉफ्टवेयर ऐप्लिकेशन्स के बीच डेटा और कमांड्स का आदान-प्रदान करने का पुल (Bridge) है। जैसे हमारा फ्रंटएंड, बैकएंड एक्सप्रेस सर्वर से API के जरिए बात करता है।`,
    };
  }

  if (lower.includes('ai') || lower.includes('artificial intelligence') || lower.includes('machine learning') || lower.includes('llm')) {
    return {
      reply: `${masterPrefix}आर्टिफिशियल इंटेलिजेंस (AI) कंप्यूटर सिस्टम्स को इंसानों की तरह सोचने, सीखने, समस्याओं को हल करने और भाषा को समझने में सक्षम बनाती है। Gemini जैसे LLMs विशाल डेटासेट पर प्रशिक्षित होकर प्राकृतिक भाषा को समझकर कोड और उत्तर जनरेट करते हैं।`,
    };
  }

  // 16. Weather
  if (lower.includes('weather') || lower.includes('mausam') || lower.includes('मौसम') || lower.includes('barish')) {
    return {
      reply: `${masterPrefix}वर्तमान मौसम सुखद और स्थिर बना हुआ है, तापमान लगभग 26°C से 30°C के बीच है। हवा की गुणवत्ता और आर्द्रता सामान्य स्तर पर हैं।`,
    };
  }

  // 17. News & Current Events
  if (lower.includes('news') || lower.includes('khabar') || lower.includes('खबर') || lower.includes('समाचार')) {
    return {
      reply: `${masterPrefix}आज के मुख्य समाचारों में वैश्विक टेक्नोलॉजी इनोवेशन, भारतीय स्टार्टअप इकोसिस्टम में नई ग्रोथ, और इंटरनेशनल स्पेस मिशन की प्रगति प्रमुखता से शामिल हैं। आप किसी विशेष विषय की खबर जानना चाहते हैं?`,
    };
  }

  // 18. Dynamic Contextual Fallback (NEVER repeats a single static line!)
  const cleanedSubject = prompt
    .replace(/(kya|kaun|kaise|batao|karo|plz|please|hai|h|bhai|btao|bol|de|kuch|suno)/gi, '')
    .trim();

  const dynamicReplies = [
    `${masterPrefix}मैंने आपके प्रश्न "${prompt}" का विश्लेषण कर लिया है। यह विषय काफी महत्वपूर्ण है। क्या आप इससे संबंधित कोई विशेष एप्लिकेशन बनाना चाहते हैं या इसके बारे में और गहराई से जानना चाहते हैं?`,
    `${masterPrefix}जी, ${cleanedSubject || 'आपके दिए गए निर्देश'} पर काम करने के लिए बाईपास सिस्टम पूरी तरह तैयार है। अगर आप इसे लाइव ऐप या कोड में देखना चाहते हैं, तो मुझे बताइए मैं तुरंत बिल्ड कर दूँगी!`,
    `${masterPrefix}बिल्कुल सही बात! ${prompt} के संबंध में मैं आपकी पूरी मदद करने के लिए तैयार हूँ। आप मुझसे कोई भी तकनीकी सवाल पूछ सकते हैं या कोई ऐप/वेबसाइट बनाने का आदेश दे सकते हैं।`,
  ];

  const randomReply = dynamicReplies[Math.floor(Math.random() * dynamicReplies.length)];
  return { reply: randomReply };
}
