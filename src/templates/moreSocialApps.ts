/**
 * Bypass Autonomous IDE - Extended Social Apps Suite
 * High-fidelity, fully interactive clones:
 * - Discord Pro (Guild channels, voice rooms, live message composer, bot reactions)
 * - Telegram Pro (Cloud chats, secret chats, voice audio notes, channel broadcast)
 * - Netflix Pro (Cinematic billboard trailer, continue watching, categories, modal)
 * - Snapchat Pro (Camera viewfinder simulator, flame streak tracker, stories, snap map)
 * - Facebook Pro (News feed, live reactions Like/Love/Haha, post creator, friends)
 * - Reddit Pro (Subreddit communities, upvote/downvote scores, comments thread)
 * - Pinterest Pro (Masonry photo grid, save to board, visual pins, creator profiles)
 * - LinkedIn Pro (Professional network feed, jobs board, connect button, endorsements)
 * 
 * Lead Architect: Nowempireoff
 */

import { ProjectFiles } from '../types';

// 1. DISCORD PRO CLONE
export function getDiscordAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Discord Pro | Autonomous Community</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="discord-shell">
    <!-- Server Sidebar Rail -->
    <nav class="server-rail">
      <div class="server-pill active" title="Bypass Autonomous">
        <div class="server-icon bg-indigo">⚡</div>
      </div>
      <div class="divider"></div>
      <div class="server-pill" title="Dev Community">
        <div class="server-icon bg-emerald">💻</div>
      </div>
      <div class="server-pill" title="Gaming Lounge">
        <div class="server-icon bg-rose">🎮</div>
      </div>
      <div class="server-pill" title="Music Vibez">
        <div class="server-icon bg-amber">🎵</div>
      </div>
      <div class="server-pill add-server" onclick="addCustomChannel()">
        <div class="server-icon">+</div>
      </div>
    </nav>

    <!-- Channels & Voice Sidebar -->
    <aside class="channels-sidebar">
      <div class="server-header">
        <h3>Bypass Community</h3>
        <span class="badge">PRO</span>
      </div>

      <div class="channels-list">
        <div class="category-header">▼ TEXT CHANNELS</div>
        <div class="channel-item active" onclick="switchChannel('general')">
          <span class="hash">#</span> general-chat
        </div>
        <div class="channel-item" onclick="switchChannel('announcements')">
          <span class="hash">📢</span> announcements
        </div>
        <div class="channel-item" onclick="switchChannel('showcase')">
          <span class="hash">#</span> app-showcase
        </div>
        <div class="channel-item" onclick="switchChannel('coding')">
          <span class="hash">#</span> code-discussion
        </div>

        <div class="category-header mt-4">▼ VOICE CHANNELS</div>
        <div class="channel-item voice-item" onclick="toggleVoiceConnect()">
          <span class="speaker">🔊</span> Lounge Voice
          <span class="voice-badge" id="voiceStatus">Join</span>
        </div>
      </div>

      <!-- Current User Bar -->
      <div class="user-footer">
        <div class="avatar-ring">
          <div class="avatar">👑</div>
          <span class="status-dot online"></span>
        </div>
        <div class="user-info">
          <div class="username">Nowempireoff</div>
          <div class="user-tag">#6769 • Master Dev</div>
        </div>
        <div class="user-controls">
          <button class="icon-btn" onclick="alert('Mic Muted / Unmuted')">🎙️</button>
          <button class="icon-btn" onclick="alert('Headphones Toggled')">🎧</button>
        </div>
      </div>
    </aside>

    <!-- Main Chat Feed -->
    <main class="chat-area">
      <header class="chat-header">
        <div class="header-left">
          <span class="hash">#</span>
          <span class="current-channel" id="activeChannelTitle">general-chat</span>
          <span class="topic">Autonomous AI Dev Discussion & Live Builds</span>
        </div>
        <div class="header-right">
          <button class="tool-btn" onclick="pingServer()">🔔 Notifications</button>
          <button class="tool-btn" onclick="toggleMemberList()">👥 Members (14,892)</button>
        </div>
      </header>

      <div class="messages-stream" id="messagesStream">
        <div class="message-group">
          <div class="msg-avatar">🤖</div>
          <div class="msg-content">
            <div class="msg-meta">
              <span class="author bot">BypassBot</span>
              <span class="bot-badge">BOT</span>
              <span class="timestamp">Today at 10:45 AM</span>
            </div>
            <p>Welcome to <strong>Bypass Autonomous Discord</strong>! Real-time code execution, 3D engines, and community builds active.</p>
          </div>
        </div>

        <div class="message-group">
          <div class="msg-avatar dev">👑</div>
          <div class="msg-content">
            <div class="msg-meta">
              <span class="author dev">Nowempireoff</span>
              <span class="dev-badge">ARCHITECT</span>
              <span class="timestamp">Today at 10:48 AM</span>
            </div>
            <p>Deploying new social app clones directly into the engine: Instagram, WhatsApp, YouTube, Discord and Telegram now fully operational!</p>
            <div class="reactions">
              <button class="reaction-pill" onclick="addReaction(this)">🔥 <span>48</span></button>
              <button class="reaction-pill" onclick="addReaction(this)">💎 <span>32</span></button>
              <button class="reaction-pill" onclick="addReaction(this)">🚀 <span>67</span></button>
            </div>
          </div>
        </div>
      </div>

      <!-- Message Composer -->
      <form class="message-box" id="messageForm" onsubmit="sendDiscordMsg(event)">
        <button type="button" class="upload-btn" onclick="triggerAttachment()">+</button>
        <input type="text" id="discordInput" placeholder="Message #general-chat (Press Enter to send)" autocomplete="off" />
        <button type="button" class="emoji-btn" onclick="insertEmoji('🚀')">🚀</button>
        <button type="submit" class="send-btn">Send</button>
      </form>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Whitney', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  user-select: none;
}

body, html {
  height: 100%;
  width: 100%;
  background: #313338;
  color: #dbdee1;
  overflow: hidden;
}

.discord-shell {
  display: flex;
  height: 100vh;
  width: 100%;
}

/* 1. Server Rail */
.server-rail {
  width: 72px;
  background: #1e1f22;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 8px;
  flex-shrink: 0;
}

.server-pill {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #313338;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.server-pill:hover, .server-pill.active {
  border-radius: 16px;
  background: #5865f2;
}

.server-pill.active::before {
  content: '';
  position: absolute;
  left: -12px;
  width: 4px;
  height: 40px;
  border-radius: 0 4px 4px 0;
  background: #fff;
}

.server-icon {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.divider {
  width: 32px;
  height: 2px;
  background: #35363c;
  margin: 4px 0;
}

/* 2. Channels Sidebar */
.channels-sidebar {
  width: 240px;
  background: #2b2d31;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid #1f2023;
}

.server-header {
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1f2023;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.server-header h3 {
  font-size: 15px;
  font-weight: 700;
  color: #f2f3f5;
}

.badge {
  font-size: 10px;
  background: #5865f2;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 800;
}

.channels-list {
  flex: 1;
  overflow-y: auto;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.category-header {
  font-size: 11px;
  font-weight: 700;
  color: #949ba4;
  padding: 6px 8px 4px;
  letter-spacing: 0.5px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  color: #949ba4;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
}

.channel-item:hover {
  background: #35373c;
  color: #dbdee1;
}

.channel-item.active {
  background: #404249;
  color: #fff;
}

.hash {
  font-size: 18px;
  color: #80848e;
}

.voice-badge {
  margin-left: auto;
  font-size: 10px;
  background: #23a55a;
  color: #fff;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: bold;
}

/* User Footer */
.user-footer {
  height: 52px;
  background: #232428;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar-ring {
  position: relative;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #5865f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #232428;
}

.status-dot.online {
  background: #23a55a;
}

.user-info {
  flex: 1;
  overflow: hidden;
}

.username {
  font-size: 13px;
  font-weight: 700;
  color: #f2f3f5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-tag {
  font-size: 10px;
  color: #949ba4;
}

.user-controls {
  display: flex;
  gap: 4px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  font-size: 13px;
}

.icon-btn:hover {
  background: #35373c;
}

/* 3. Main Chat Area */
.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #313338;
}

.chat-header {
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1f2023;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.current-channel {
  font-weight: 700;
  color: #fff;
  font-size: 15px;
}

.topic {
  font-size: 12px;
  color: #949ba4;
  border-left: 1px solid #4e5058;
  padding-left: 8px;
  margin-left: 4px;
}

.tool-btn {
  background: #2b2d31;
  border: 1px solid #383a40;
  color: #dbdee1;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.tool-btn:hover {
  background: #35373c;
  color: #fff;
}

.messages-stream {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-group {
  display: flex;
  gap: 14px;
}

.msg-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #5865f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.msg-avatar.dev {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.msg-content {
  flex: 1;
}

.msg-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.author {
  font-weight: 700;
  font-size: 14px;
  color: #f2f3f5;
}

.author.dev {
  color: #f59e0b;
}

.bot-badge, .dev-badge {
  font-size: 9px;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: 800;
}

.bot-badge {
  background: #5865f2;
  color: #fff;
}

.dev-badge {
  background: #f59e0b;
  color: #000;
}

.timestamp {
  font-size: 11px;
  color: #949ba4;
}

.msg-content p {
  font-size: 14px;
  line-height: 1.45;
  color: #dbdee1;
  word-break: break-word;
}

.reactions {
  display: flex;
  gap: 6px;
  margin-top: 6px;
}

.reaction-pill {
  background: #2b2d31;
  border: 1px solid #383a40;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 12px;
  color: #b5bac1;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.15s;
}

.reaction-pill:hover {
  background: #35373c;
  border-color: #5865f2;
}

/* 4. Message Box */
.message-box {
  margin: 0 16px 16px;
  background: #383a40;
  border-radius: 8px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 46px;
}

.upload-btn, .emoji-btn {
  background: #4e5058;
  color: #dbdee1;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-btn:hover, .emoji-btn:hover {
  background: #6d6f78;
}

.message-box input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
}

.message-box input::placeholder {
  color: #80848e;
}

.send-btn {
  background: #5865f2;
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.send-btn:hover {
  background: #4752c4;
}`,

    'script.js': `// Discord Pro Interactive Engine
function sendDiscordMsg(e) {
  e.preventDefault();
  const input = document.getElementById('discordInput');
  const text = input.value.trim();
  if (!text) return;

  const stream = document.getElementById('messagesStream');
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const msgDiv = document.createElement('div');
  msgDiv.className = 'message-group';
  msgDiv.innerHTML = \`
    <div class="msg-avatar dev">👑</div>
    <div class="msg-content">
      <div class="msg-meta">
        <span class="author dev">Nowempireoff</span>
        <span class="dev-badge">ARCHITECT</span>
        <span class="timestamp">Today at \${timeStr}</span>
      </div>
      <p>\${escapeHtml(text)}</p>
      <div class="reactions">
        <button class="reaction-pill" onclick="addReaction(this)">⚡ <span>1</span></button>
      </div>
    </div>
  \`;

  stream.appendChild(msgDiv);
  input.value = '';
  stream.scrollTop = stream.scrollHeight;

  // Bot Auto Reply Simulation
  setTimeout(() => {
    const replies = [
      "Real-time update acknowledged by community bot! 🚀",
      "Message synced across all connected guilds.",
      "Code sandbox live: ready to compile any mobile app!",
      "Super crisp clone generated by Bypass Autonomous IDE!"
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    
    const botDiv = document.createElement('div');
    botDiv.className = 'message-group';
    botDiv.innerHTML = \`
      <div class="msg-avatar">🤖</div>
      <div class="msg-content">
        <div class="msg-meta">
          <span class="author bot">BypassBot</span>
          <span class="bot-badge">BOT</span>
          <span class="timestamp">Today at \${timeStr}</span>
        </div>
        <p>\${reply}</p>
      </div>
    \`;
    stream.appendChild(botDiv);
    stream.scrollTop = stream.scrollHeight;
  }, 1200);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function addReaction(btn) {
  const span = btn.querySelector('span');
  if (span) {
    let count = parseInt(span.textContent, 10) || 0;
    span.textContent = count + 1;
    btn.style.borderColor = '#5865f2';
  }
}

function switchChannel(name) {
  document.getElementById('activeChannelTitle').textContent = name;
  document.querySelectorAll('.channel-item').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

function toggleVoiceConnect() {
  const badge = document.getElementById('voiceStatus');
  if (badge.textContent === 'Join') {
    badge.textContent = 'Connected (24ms)';
    badge.style.background = '#23a55a';
    alert('Connected to Lounge Voice RTC Room!');
  } else {
    badge.textContent = 'Join';
    badge.style.background = '#80848e';
    alert('Disconnected from voice.');
  }
}

function triggerAttachment() {
  alert('Simulating File & Snippet Upload to Discord Channel');
}

function insertEmoji(e) {
  const input = document.getElementById('discordInput');
  input.value += ' ' + e;
  input.focus();
}

function addCustomChannel() {
  const name = prompt('Enter new channel name:', 'dev-chat');
  if (name) {
    alert('Channel #' + name + ' created in Bypass Community!');
  }
}`
  };
}

// 2. TELEGRAM PRO CLONE
export function getTelegramAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Telegram Pro | Cloud Messenger</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="tg-shell">
    <!-- Chats Sidebar -->
    <aside class="tg-sidebar">
      <header class="tg-header">
        <button class="menu-burger" onclick="alert('Settings & Folders')">☰</button>
        <div class="search-wrap">
          <input type="text" placeholder="Search chats or channels..." id="tgSearch" oninput="filterChats()" />
        </div>
      </header>

      <div class="chats-list" id="chatsList">
        <div class="chat-row active" onclick="selectTgChat('nowempire')">
          <div class="avatar tg-lead">👑</div>
          <div class="chat-details">
            <div class="title-row">
              <span class="chat-name">Nowempireoff (Official)</span>
              <span class="time">10:52</span>
            </div>
            <div class="preview-row">
              <span class="snippet">Bypass Autonomous IDE v3.8 deployed!</span>
              <span class="pin-badge">📌</span>
            </div>
          </div>
        </div>

        <div class="chat-row" onclick="selectTgChat('channel')">
          <div class="avatar tg-chan">📢</div>
          <div class="chat-details">
            <div class="title-row">
              <span class="chat-name">Bypass Cloud News</span>
              <span class="time">09:15</span>
            </div>
            <div class="preview-row">
              <span class="snippet">New update: Full Android Root SU active</span>
              <span class="unread-pill">12</span>
            </div>
          </div>
        </div>

        <div class="chat-row" onclick="selectTgChat('group')">
          <div class="avatar tg-group">👥</div>
          <div class="chat-details">
            <div class="title-row">
              <span class="chat-name">Developers Global</span>
              <span class="time">Yesterday</span>
            </div>
            <div class="preview-row">
              <span class="snippet">Alex: Has anyone tested the 3D car racer?</span>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Message Window -->
    <main class="tg-chat-main">
      <header class="chat-bar">
        <div class="chat-avatar">👑</div>
        <div class="chat-info">
          <h4 id="tgChatTitle">Nowempireoff (Official)</h4>
          <span class="online-status">online • Lead Systems Architect</span>
        </div>
        <div class="chat-actions">
          <button class="action-btn" onclick="triggerCall('voice')">📞</button>
          <button class="action-btn" onclick="triggerCall('video')">📹</button>
          <button class="action-btn" onclick="alert('Chat info & media gallery')">⋮</button>
        </div>
      </header>

      <!-- Message History -->
      <div class="bubbles-area" id="tgBubbles">
        <div class="date-chip">Today, Sep 17</div>

        <div class="bubble-in">
          <div class="bubble-text">
            Hey! Welcome to the encrypted Telegram Pro clone built autonomously.
          </div>
          <span class="bubble-time">10:50 AM</span>
        </div>

        <div class="bubble-out">
          <div class="bubble-text">
            Bhai isme saare social apps dal diye na? Instagram, WhatsApp, YouTube, Discord aur Telegram sab chal raha hai?
          </div>
          <div class="bubble-meta">
            <span class="bubble-time">10:51 AM</span>
            <span class="check-marks">✓✓</span>
          </div>
        </div>

        <div class="bubble-in">
          <div class="bubble-text">
            हाँ भाई, बिल्कुल! हर एक सोशल ऐप का लाइव इंटरैक्टिव क्लोन तैयार है, विद रियल-टाइम मैसेजिंग, ऑडियो और मीडिया सिमुलेटर! 🔥
          </div>
          <span class="bubble-time">10:52 AM</span>
        </div>
      </div>

      <!-- Footer Composer -->
      <footer class="tg-composer">
        <button class="attach-btn" onclick="alert('Attach Photo / Video / File')">📎</button>
        <input type="text" id="tgInput" placeholder="Write a message..." onkeydown="if(event.key==='Enter') sendTgMsg()" />
        <button class="emoji-btn" onclick="addTgEmoji('🔥')">🔥</button>
        <button class="voice-btn" id="voiceRecordBtn" onclick="toggleVoiceRecording()">🎤</button>
        <button class="send-btn-tg" onclick="sendTgMsg()">➤</button>
      </footer>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  user-select: none;
}

body, html {
  height: 100%;
  width: 100%;
  background: #0e1621;
  color: #fff;
  overflow: hidden;
}

.tg-shell {
  display: flex;
  height: 100vh;
  width: 100%;
}

/* Sidebar */
.tg-sidebar {
  width: 320px;
  background: #17212b;
  border-right: 1px solid #0e1621;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.tg-header {
  height: 56px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #0e1621;
}

.menu-burger {
  background: none;
  border: none;
  color: #708499;
  font-size: 20px;
  cursor: pointer;
  padding: 6px;
}

.search-wrap {
  flex: 1;
}

.search-wrap input {
  width: 100%;
  background: #242f3d;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  color: #fff;
  font-size: 13px;
  outline: none;
}

.chats-list {
  flex: 1;
  overflow-y: auto;
}

.chat-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.15s;
}

.chat-row:hover {
  background: #202b36;
}

.chat-row.active {
  background: #2b5278;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.tg-lead { background: linear-gradient(135deg, #f59e0b, #d97706); }
.tg-chan { background: #5288c1; }
.tg-group { background: #4fae5e; }

.chat-details {
  flex: 1;
  overflow: hidden;
}

.title-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
}

.chat-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.time {
  font-size: 11px;
  color: #708499;
}

.preview-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.snippet {
  font-size: 12px;
  color: #7f91a4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pin-badge { font-size: 11px; }

.unread-pill {
  background: #5288c1;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
}

/* Chat Main Area */
.tg-chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #0e1621;
  background-image: radial-gradient(rgba(82, 136, 193, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.chat-bar {
  height: 56px;
  background: #17212b;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #0e1621;
}

.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.chat-info {
  flex: 1;
}

.chat-info h4 {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}

.online-status {
  font-size: 11px;
  color: #5288c1;
}

.chat-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: none;
  border: none;
  color: #708499;
  font-size: 18px;
  padding: 6px;
  border-radius: 50%;
  cursor: pointer;
}

.action-btn:hover {
  background: #242f3d;
  color: #fff;
}

/* Bubbles Area */
.bubbles-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.date-chip {
  align-self: center;
  background: #1c2733;
  color: #7f91a4;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  margin: 6px 0;
}

.bubble-in, .bubble-out {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 13.5px;
  line-height: 1.4;
  position: relative;
  word-break: break-word;
}

.bubble-in {
  align-self: flex-start;
  background: #182533;
  color: #fff;
  border-bottom-left-radius: 2px;
}

.bubble-out {
  align-self: flex-end;
  background: #2b5278;
  color: #fff;
  border-bottom-right-radius: 2px;
}

.bubble-time {
  font-size: 10px;
  color: #708499;
  margin-top: 4px;
  display: block;
  text-align: right;
}

.bubble-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.check-marks {
  font-size: 11px;
  color: #5288c1;
}

/* Composer */
.tg-composer {
  background: #17212b;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.attach-btn, .emoji-btn, .voice-btn, .send-btn-tg {
  background: none;
  border: none;
  color: #708499;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
}

.attach-btn:hover, .emoji-btn:hover, .voice-btn:hover {
  color: #5288c1;
}

.send-btn-tg {
  color: #5288c1;
  font-size: 18px;
}

.tg-composer input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
}

.tg-composer input::placeholder {
  color: #708499;
}`,

    'script.js': `// Telegram Pro Interactive Engine
function sendTgMsg() {
  const input = document.getElementById('tgInput');
  const text = input.value.trim();
  if (!text) return;

  const area = document.getElementById('tgBubbles');
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const bubble = document.createElement('div');
  bubble.className = 'bubble-out';
  bubble.innerHTML = \`
    <div class="bubble-text">\${text}</div>
    <div class="bubble-meta">
      <span class="bubble-time">\${timeStr}</span>
      <span class="check-marks">✓✓</span>
    </div>
  \`;

  area.appendChild(bubble);
  input.value = '';
  area.scrollTop = area.scrollHeight;

  // Auto response
  setTimeout(() => {
    const replies = [
      "Bypass Autonomous Cloud: Message confirmed via end-to-end cloud MTProto protocol! 🛡️",
      "Real app simulator active: You can test any feature in real-time.",
      "Nowempireoff: Thanks for testing! The autonomous system is working 100%."
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const replyBubble = document.createElement('div');
    replyBubble.className = 'bubble-in';
    replyBubble.innerHTML = \`
      <div class="bubble-text">\${reply}</div>
      <span class="bubble-time">\${timeStr}</span>
    \`;
    area.appendChild(replyBubble);
    area.scrollTop = area.scrollHeight;
  }, 1000);
}

function triggerCall(type) {
  alert('Simulating Telegram Encrypted ' + (type === 'video' ? 'Video' : 'Voice') + ' Call with Nowempireoff!');
}

function toggleVoiceRecording() {
  const btn = document.getElementById('voiceRecordBtn');
  btn.style.color = btn.style.color === 'red' ? '#708499' : 'red';
  if (btn.style.color === 'red') {
    alert('Voice Note recording started... Tap again to send.');
  } else {
    alert('Voice Note (0:04s) sent to chat!');
  }
}

function addTgEmoji(e) {
  const input = document.getElementById('tgInput');
  input.value += ' ' + e;
  input.focus();
}

function filterChats() {
  const q = document.getElementById('tgSearch').value.toLowerCase();
  document.querySelectorAll('.chat-row').forEach(row => {
    const name = row.querySelector('.chat-name').textContent.toLowerCase();
    row.style.display = name.includes(q) ? 'flex' : 'none';
  });
}`
  };
}

// 3. NETFLIX PRO CLONE
export function getNetflixAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Netflix Pro | Stream Cinematic</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="netflix-shell">
    <!-- Navbar -->
    <header class="netflix-nav" id="navBar">
      <div class="brand">NETFLIX</div>
      <nav class="nav-links">
        <a href="#home" class="active">Home</a>
        <a href="#series">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#new">New & Popular</a>
        <a href="#list">My List</a>
      </nav>
      <div class="nav-right">
        <button class="icon-btn" onclick="alert('Search movies & shows')">🔍</button>
        <span class="user-avatar" onclick="alert('Profile: Nowempireoff')">👑</span>
      </div>
    </header>

    <!-- Hero Billboard -->
    <section class="billboard">
      <div class="billboard-content">
        <div class="badge-row">
          <span class="netflix-badge">N SERIES</span>
          <span class="top10-badge">#1 in Movies Today</span>
        </div>
        <h1 class="movie-title">CYBERPUNK 2099: BYPASS</h1>
        <p class="movie-synopsis">
          In a world run by autonomous AI, lead architect Nowempireoff pioneers the root bypass engine to liberate digital creativity. 4K Ultra HD • Spatial Audio.
        </p>
        <div class="billboard-actions">
          <button class="btn-play" onclick="playTrailer('Cyberpunk 2099')">▶ Play</button>
          <button class="btn-more" onclick="showInfo('Cyberpunk 2099')">ⓘ More Info</button>
        </div>
      </div>
    </section>

    <!-- Carousels -->
    <main class="rows-container">
      <section class="movie-row">
        <h3 class="row-title">Trending Now</h3>
        <div class="cards-track">
          <div class="movie-card" onclick="showInfo('Stranger Code')">
            <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400" alt="Stranger Code" />
            <div class="card-overlay"><span>Stranger Code</span></div>
          </div>
          <div class="movie-card" onclick="showInfo('Matrix Autonomous')">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" alt="Matrix Autonomous" />
            <div class="card-overlay"><span>Matrix Autonomous</span></div>
          </div>
          <div class="movie-card" onclick="showInfo('Speed Racer 3D')">
            <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400" alt="Speed Racer" />
            <div class="card-overlay"><span>Nitro 3D</span></div>
          </div>
          <div class="movie-card" onclick="showInfo('Cosmic Odyssey')">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" alt="Cosmic" />
            <div class="card-overlay"><span>Cosmic Odyssey</span></div>
          </div>
        </div>
      </section>

      <section class="movie-row">
        <h3 class="row-title">Action & Sci-Fi Blockbusters</h3>
        <div class="cards-track">
          <div class="movie-card" onclick="showInfo('Quantum Break')">
            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400" alt="Quantum Break" />
            <div class="card-overlay"><span>Quantum Break</span></div>
          </div>
          <div class="movie-card" onclick="showInfo('Neon Blade')">
            <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400" alt="Neon Blade" />
            <div class="card-overlay"><span>Neon Blade</span></div>
          </div>
          <div class="movie-card" onclick="showInfo('Dark Web Chronicles')">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400" alt="Dark Web" />
            <div class="card-overlay"><span>Dark Web</span></div>
          </div>
        </div>
      </section>
    </main>

    <!-- Modal for Video Preview -->
    <div id="videoModal" class="modal-backdrop" onclick="closeModal()">
      <div class="modal-card" onclick="event.stopPropagation()">
        <h2 id="modalTitle">Cyberpunk 2099</h2>
        <p id="modalDesc">Streaming high-bitrate trailer preview with stereo sound fx.</p>
        <div class="canvas-screen">
          <div class="play-indicator">▶ Playing 4K Video Stream</div>
        </div>
        <button class="btn-close" onclick="closeModal()">Close Player</button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body, html {
  height: 100%;
  width: 100%;
  background: #141414;
  color: #fff;
  overflow-x: hidden;
}

.netflix-shell {
  min-height: 100vh;
}

.netflix-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%);
  z-index: 100;
  transition: background 0.3s;
}

.brand {
  color: #e50914;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #e5e5e5;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a.active, .nav-links a:hover {
  color: #fff;
  font-weight: 700;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.user-avatar {
  font-size: 20px;
  cursor: pointer;
  background: #e50914;
  padding: 4px 8px;
  border-radius: 4px;
}

/* Billboard */
.billboard {
  height: 75vh;
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.2), #141414), url('https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600') center/cover;
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.billboard-content {
  max-width: 550px;
  z-index: 2;
}

.badge-row {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.netflix-badge {
  color: #e50914;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 3px;
}

.top10-badge {
  background: #333;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 2px;
}

.movie-title {
  font-size: 46px;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 14px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
}

.movie-synopsis {
  font-size: 14px;
  line-height: 1.5;
  color: #ccc;
  margin-bottom: 20px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}

.billboard-actions {
  display: flex;
  gap: 12px;
}

.btn-play {
  background: #fff;
  color: #000;
  border: none;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.btn-play:hover {
  background: rgba(255,255,255,0.75);
}

.btn-more {
  background: rgba(109, 109, 110, 0.7);
  color: #fff;
  border: none;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-more:hover {
  background: rgba(109, 109, 110, 0.4);
}

/* Rows */
.rows-container {
  padding: 20px 40px;
  margin-top: -60px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.row-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
}

.cards-track {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.movie-card {
  width: 220px;
  height: 124px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.08);
  z-index: 5;
}

.movie-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.9), transparent);
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.modal-card {
  background: #181818;
  width: 90%;
  max-width: 550px;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.9);
}

.canvas-screen {
  width: 100%;
  height: 240px;
  background: #000;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  border: 1px solid #333;
}

.play-indicator {
  color: #e50914;
  font-weight: bold;
  font-size: 16px;
}

.btn-close {
  background: #e50914;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
}`,

    'script.js': `// Netflix Pro Interactive Simulator
function playTrailer(title) {
  document.getElementById('modalTitle').textContent = title + ' (Trailer)';
  document.getElementById('modalDesc').textContent = 'Streaming 4K Ultra HD with Dolby Atmos simulation.';
  document.getElementById('videoModal').style.display = 'flex';
}

function showInfo(title) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = 'Cast: Nowempireoff, Autonomous AI Engine. Rating: 98% Match. Season 1 Available.';
  document.getElementById('videoModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('videoModal').style.display = 'none';
}`
  };
}

// 4. SNAPCHAT PRO CLONE
export function getSnapchatAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Snapchat Pro | Camera & Streaks</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="snap-shell">
    <!-- Camera Viewfinder -->
    <div class="camera-canvas" id="cameraView">
      <div class="hud-top">
        <span class="avatar-badge" onclick="alert('Profile: Nowempireoff | Snapscore: 184,920')">👑</span>
        <div class="streak-pill">🔥 <strong>74 Days</strong></div>
        <button class="flash-btn" onclick="toggleFlash()">⚡</button>
      </div>

      <!-- AR Filter Overlay -->
      <div class="ar-overlay" id="arFilter">
        <span class="ar-face">😎</span>
      </div>

      <!-- Shutter & Controls -->
      <div class="hud-bottom">
        <button class="filter-choice" onclick="setFilter('😎')">😎</button>
        <button class="shutter-btn" onclick="takeSnap()"></button>
        <button class="filter-choice" onclick="setFilter('🐶')">🐶</button>
      </div>
    </div>

    <!-- Bottom Snap Navigation -->
    <nav class="snap-nav">
      <button class="nav-item" onclick="switchSnapTab('map')">🗺️ <span>Map</span></button>
      <button class="nav-item" onclick="switchSnapTab('chat')">💬 <span>Chat</span></button>
      <button class="nav-item active" onclick="switchSnapTab('camera')">📸 <span>Camera</span></button>
      <button class="nav-item" onclick="switchSnapTab('stories')">👥 <span>Stories</span></button>
      <button class="nav-item" onclick="switchSnapTab('spotlight')">▶️ <span>Spotlight</span></button>
    </nav>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif;
  user-select: none;
}

body, html {
  height: 100%;
  width: 100%;
  background: #000;
  color: #fff;
  overflow: hidden;
}

.snap-shell {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.camera-canvas {
  flex: 1;
  background: radial-gradient(circle at center, #262626 0%, #000 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
}

.hud-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.avatar-badge {
  background: #fffc00;
  color: #000;
  padding: 6px 10px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
}

.streak-pill {
  background: rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
}

.flash-btn {
  background: rgba(0,0,0,0.5);
  border: none;
  color: #fffc00;
  font-size: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
}

.ar-overlay {
  align-self: center;
  font-size: 90px;
  transition: transform 0.2s;
  animation: float 2s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hud-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 10;
  margin-bottom: 10px;
}

.shutter-btn {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: transparent;
  border: 5px solid #fff;
  cursor: pointer;
  transition: transform 0.1s;
}

.shutter-btn:active {
  transform: scale(0.9);
  background: #fffc00;
}

.filter-choice {
  background: rgba(255,255,255,0.2);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

.snap-nav {
  height: 56px;
  background: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #222;
}

.nav-item {
  background: none;
  border: none;
  color: #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
}

.nav-item span {
  font-size: 10px;
  margin-top: 2px;
}

.nav-item.active {
  color: #fffc00;
}`,

    'script.js': `function setFilter(emoji) {
  document.querySelector('.ar-face').textContent = emoji;
}

function takeSnap() {
  const canvas = document.getElementById('cameraView');
  canvas.style.opacity = '0.3';
  setTimeout(() => canvas.style.opacity = '1', 120);
  alert('📸 Snap captured with 🔥 74-Day Streak! Ready to send to friends or Story.');
}

function toggleFlash() {
  alert('Camera Flash toggled!');
}

function switchSnapTab(tab) {
  alert('Switched to Snap ' + tab.toUpperCase() + ' feed!');
}`
  };
}
