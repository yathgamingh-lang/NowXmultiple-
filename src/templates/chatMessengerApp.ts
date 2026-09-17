import { ProjectFiles } from '../types';

/**
 * Cyber Messenger / Chat Application
 */
export function getChatMessengerAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>CYBER PULSE | Real-Time Messenger</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="chat-app-shell">
    <!-- Chat Header -->
    <header class="chat-header">
      <div class="user-info">
        <div class="avatar-ring">
          <span class="avatar-emoji" id="chatAvatar">🤖</span>
          <span class="online-indicator"></span>
        </div>
        <div>
          <h2 id="chatName">Maria AI Architect</h2>
          <p id="chatStatus" class="status-text">Online • Autonomous Lead</p>
        </div>
      </div>
      <div class="header-tools">
        <button id="clearChatBtn" class="tool-btn" title="Clear Chat">🗑️</button>
        <button id="switchContactBtn" class="tool-btn" title="Switch Contact">👥</button>
      </div>
    </header>

    <!-- Contacts Drawer (Switchable) -->
    <div id="contactsBar" class="contacts-bar">
      <button class="contact-pill active" onclick="switchContact('maria')">🤖 Maria AI</button>
      <button class="contact-pill" onclick="switchContact('neo')">🕶️ Neo</button>
      <button class="contact-pill" onclick="switchContact('cipher')">⚡ Cipher</button>
      <button class="contact-pill" onclick="switchContact('trinity')">🏍️ Trinity</button>
    </div>

    <!-- Message Feed -->
    <div class="messages-container" id="messagesFeed"></div>

    <!-- Typing Indicator -->
    <div id="typingIndicator" class="typing-box hidden">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span id="typingLabel">Maria is typing...</span>
    </div>

    <!-- Input Footer -->
    <div class="chat-input-bar">
      <button id="emojiBtn" class="input-btn">😊</button>
      <input type="text" id="chatTextInput" placeholder="Type a message or command..." autocomplete="off" />
      <button id="sendBtn" class="send-btn">➔</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#07090f; color:#fff; min-height:100vh; display:flex; justify-content:center; }
.chat-app-shell { width:100%; max-width:480px; height:100vh; display:flex; flex-direction:column; background:#0b0f1c; border-left:1px solid rgba(255,255,255,0.08); border-right:1px solid rgba(255,255,255,0.08); }
.chat-header { display:flex; justify-content:space-between; align-items:center; padding:12px 16px; background:#0f1527; border-bottom:1px solid rgba(255,255,255,0.08); }
.user-info { display:flex; align-items:center; gap:12px; }
.avatar-ring { position:relative; width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg,#00f0ff,#7928ca); display:flex; align-items:center; justify-content:center; font-size:20px; }
.online-indicator { position:absolute; bottom:1px; right:1px; width:10px; height:10px; background:#22c55e; border:2px solid #0f1527; border-radius:50%; }
.user-info h2 { font-size:15px; font-weight:800; color:#fff; }
.status-text { font-size:10px; color:#22c55e; }
.header-tools { display:flex; gap:6px; }
.tool-btn { background:#161d33; border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; width:34px; height:34px; border-radius:10px; cursor:pointer; font-size:14px; }
.contacts-bar { display:flex; gap:6px; padding:8px 12px; background:#0d1222; border-bottom:1px solid rgba(255,255,255,0.06); overflow-x:auto; scrollbar-width:none; }
.contact-pill { background:#141b30; border:1px solid rgba(255,255,255,0.08); color:#94a3b8; padding:5px 12px; border-radius:16px; font-size:11px; font-weight:700; white-space:nowrap; cursor:pointer; }
.contact-pill.active { background:#00f0ff; color:#000; font-weight:900; }
.messages-container { flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:12px; }
.msg { max-width:80%; padding:10px 14px; border-radius:16px; font-size:13px; line-height:1.4; position:relative; word-break:break-word; }
.msg.sent { align-self:flex-end; background:linear-gradient(135deg,#00f0ff,#0070f3); color:#000; font-weight:600; border-bottom-right-radius:4px; }
.msg.received { align-self:flex-start; background:#182038; border:1px solid rgba(255,255,255,0.08); color:#f1f5f9; border-bottom-left-radius:4px; }
.msg .time { font-size:9px; opacity:0.6; margin-top:4px; text-align:right; display:block; }
.typing-box { display:flex; align-items:center; gap:4px; padding:6px 16px; font-size:11px; color:#94a3b8; background:rgba(0,0,0,0.2); }
.typing-box.hidden { display:none; }
.dot { width:5px; height:5px; background:#00f0ff; border-radius:50%; animation:bounce 1.2s infinite; }
.dot:nth-child(2) { animation-delay:0.2s; }
.dot:nth-child(3) { animation-delay:0.4s; }
@keyframes bounce { 0%, 100% { transform:translateY(0); } 50% { transform:translateY(-4px); } }
.chat-input-bar { display:flex; align-items:center; gap:8px; padding:10px 14px; background:#0f1527; border-top:1px solid rgba(255,255,255,0.08); }
.chat-input-bar input { flex:1; background:#182038; border:1px solid rgba(255,255,255,0.12); border-radius:24px; padding:10px 16px; color:#fff; font-size:13px; outline:none; }
.input-btn { background:none; border:none; font-size:20px; cursor:pointer; }
.send-btn { background:#00f0ff; color:#000; border:none; width:40px; height:40px; border-radius:50%; font-size:16px; font-weight:900; cursor:pointer; display:flex; align-items:center; justify-content:center; }`,

    'script.js': `const contacts = {
  maria: { name: "Maria AI Architect", avatar: "🤖", title: "Online • Autonomous Lead", replies: ["I have synchronized your workspace!", "All modules compiling cleanly at 60 FPS.", "Feel free to deploy to Cloud or APK."] },
  neo: { name: "Neo", avatar: "🕶️", title: "Online • The Matrix", replies: ["I know Kung Fu.", "There is no spoon.", "Follow the white rabbit."] },
  cipher: { name: "Cipher Core", avatar: "⚡", title: "Online • Encryption Node", replies: ["Quantum keys verified.", "Data packet transferred with 0ms latency.", "Port 3000 listening."] },
  trinity: { name: "Trinity", avatar: "🏍️", title: "Online • Recon", replies: ["Coordinates locked.", "Ready for deployment.", "Stand by for breach."] }
};

let activeContactKey = 'maria';
const chatHistory = {
  maria: [
    { sender: 'received', text: 'Namaste! Main aapka AI assistant hoon. Aap mujhse koi bhi sawaal pooch sakte hain ya app bana sakte hain.', time: '10:00 AM' }
  ],
  neo: [
    { sender: 'received', text: 'Wake up, hacker. The matrix has you.', time: '10:02 AM' }
  ],
  cipher: [
    { sender: 'received', text: 'Firewall status: SECURE. 128-bit encryption operational.', time: '10:05 AM' }
  ],
  trinity: [
    { sender: 'received', text: 'Dodge this.', time: '10:08 AM' }
  ]
};

function renderMessages() {
  const container = document.getElementById('messagesFeed');
  container.innerHTML = '';
  const list = chatHistory[activeContactKey] || [];

  list.forEach(m => {
    const div = document.createElement('div');
    div.className = \`msg \${m.sender}\`;
    div.innerHTML = \`
      \${m.text}
      <span class="time">\${m.time}</span>
    \`;
    container.appendChild(div);
  });

  container.scrollTop = container.scrollHeight;
}

window.switchContact = function(key) {
  activeContactKey = key;
  const c = contacts[key];
  document.getElementById('chatName').innerText = c.name;
  document.getElementById('chatAvatar').innerText = c.avatar;
  document.getElementById('chatStatus').innerText = c.title;

  document.querySelectorAll('.contact-pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  renderMessages();
};

function sendMessage() {
  const input = document.getElementById('chatTextInput');
  const text = input.value.trim();
  if (!text) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  chatHistory[activeContactKey].push({ sender: 'sent', text, time: timeStr });
  input.value = '';
  renderMessages();

  // Trigger typing simulation & reply
  const typing = document.getElementById('typingIndicator');
  typing.classList.remove('hidden');
  document.getElementById('typingLabel').innerText = \`\${contacts[activeContactKey].name} is typing...\`;

  setTimeout(() => {
    typing.classList.add('hidden');
    const replies = contacts[activeContactKey].replies;
    const rep = replies[Math.floor(Math.random() * replies.length)];
    chatHistory[activeContactKey].push({ sender: 'received', text: rep, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    renderMessages();
  }, 1200);
}

document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('chatTextInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});

document.getElementById('clearChatBtn').addEventListener('click', () => {
  chatHistory[activeContactKey] = [];
  renderMessages();
});

renderMessages();`
  };
}
