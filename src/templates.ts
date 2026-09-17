/**
 * Bypass Autonomous IDE - Intelligent Multi-App Code Templates
 * Lead Architect: Nowempireoff
 */
import { ProjectFiles } from './types';
import { initialProjectFiles } from './initialData';
import { getAppleDesignStudioGameFiles } from './templates/appleDesignStudio';
import { getCarRacingGameFiles, getDrawingPaintAppFiles, getMusicBeatMakerFiles } from './templates/customApps';
import {
  getGymWorkoutAppFiles,
  getRestaurantFoodAppFiles,
  getHospitalDoctorAppFiles,
  getCryptoTrackerAppFiles,
  getEcommerceFashionAppFiles,
  getQuizEducationAppFiles,
  getUniversalCustomAppFiles
} from './templates/appGenerator';
import { getWorldMapAppFiles } from './templates/worldMapApp';
import { getWeatherForecastAppFiles } from './templates/weatherApp';
import { getChatMessengerAppFiles } from './templates/chatMessengerApp';
import {
  getInstagramAppFiles,
  getWhatsAppAppFiles,
  getYouTubeAppFiles,
  getTwitterXAppFiles,
  getSpotifyAppFiles,
  getTikTokAppFiles
} from './templates/socialApps';
import {
  getDiscordAppFiles,
  getTelegramAppFiles,
  getNetflixAppFiles,
  getSnapchatAppFiles
} from './templates/moreSocialApps';

export {
  getAppleDesignStudioGameFiles,
  getCarRacingGameFiles,
  getDrawingPaintAppFiles,
  getMusicBeatMakerFiles,
  getGymWorkoutAppFiles,
  getRestaurantFoodAppFiles,
  getHospitalDoctorAppFiles,
  getCryptoTrackerAppFiles,
  getEcommerceFashionAppFiles,
  getQuizEducationAppFiles,
  getUniversalCustomAppFiles,
  getWorldMapAppFiles,
  getWeatherForecastAppFiles,
  getChatMessengerAppFiles,
  getInstagramAppFiles,
  getWhatsAppAppFiles,
  getYouTubeAppFiles,
  getTwitterXAppFiles,
  getSpotifyAppFiles,
  getTikTokAppFiles,
  getDiscordAppFiles,
  getTelegramAppFiles,
  getNetflixAppFiles,
  getSnapchatAppFiles
};

export function getBakeryWebsiteFiles(): ProjectFiles {
  return initialProjectFiles;
}

export function getCyberpunkGameFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>CYBER STRIKE 2099 | Bypass Arcade</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="game-wrapper">
    <header class="hud-top">
      <div class="hud-item">
        <span class="hud-lbl">SCORE</span>
        <span id="scoreVal" class="hud-val neon-cyan">0</span>
      </div>
      <div class="hud-item center-hud">
        <span class="hud-title">CYBER STRIKE</span>
        <div class="shield-bar-bg">
          <div id="shieldBar" class="shield-bar-fill"></div>
        </div>
      </div>
      <div class="hud-item">
        <span class="hud-lbl">HI-SCORE</span>
        <span id="hiScoreVal" class="hud-val neon-magenta">9850</span>
      </div>
    </header>

    <div class="canvas-container">
      <canvas id="gameCanvas" width="380" height="500"></canvas>

      <div id="startOverlay" class="overlay-screen active">
        <div class="cyber-glitch" data-text="CYBER STRIKE">CYBER STRIKE</div>
        <p class="cyber-subtitle">NEON SPACE DEFENDER</p>
        <div class="instructions">
          <span>🎮 Touch buttons or Left/Right keys to steer</span>
          <span>⚡ Tap FIRE or Spacebar to destroy drones</span>
        </div>
        <button id="startBtn" class="btn-cyber pulse-anim">START MISSION</button>
      </div>

      <div id="gameOverOverlay" class="overlay-screen">
        <h2 class="neon-red">MISSION FAILED</h2>
        <p>FINAL SCORE: <span id="finalScore" class="neon-cyan">0</span></p>
        <button id="restartBtn" class="btn-cyber">RETRY DEPLOYMENT</button>
      </div>
    </div>

    <!-- Real Mobile Touch D-Pad & Fire Control Bar -->
    <div class="touch-controls">
      <button id="btnLeft" class="touch-btn">◀ LEFT</button>
      <button id="btnFire" class="touch-btn fire-btn">⚡ FIRE</button>
      <button id="btnRight" class="touch-btn">RIGHT ▶</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
  font-family: 'Courier New', Courier, monospace, system-ui;
}

body {
  background: #04060a;
  color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}

.game-wrapper {
  width: 100%;
  max-width: 420px;
  height: 100vh;
  max-height: 780px;
  background: #080b13;
  border: 1px solid #00f0ff44;
  display: flex;
  flex-col;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 40px rgba(0, 240, 255, 0.15);
  position: relative;
}

.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #0b0f1a;
  border-bottom: 1px solid #00f0ff33;
}

.hud-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hud-lbl {
  font-size: 9px;
  color: #94a3b8;
  letter-spacing: 1px;
}

.hud-val {
  font-size: 16px;
  font-weight: 900;
}

.hud-title {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #38bdf8;
}

.shield-bar-bg {
  width: 90px;
  height: 6px;
  background: #1e293b;
  border-radius: 3px;
  margin-top: 4px;
  overflow: hidden;
  border: 1px solid #00f0ff55;
}

.shield-bar-fill {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00f0ff, #10b981);
  transition: width 0.2s ease;
}

.neon-cyan {
  color: #00f0ff;
  text-shadow: 0 0 8px #00f0ff88;
}

.neon-magenta {
  color: #f43f5e;
  text-shadow: 0 0 8px #f43f5e88;
}

.neon-red {
  color: #ff3366;
  text-shadow: 0 0 12px #ff3366cc;
  font-size: 24px;
  letter-spacing: 2px;
}

.canvas-container {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at 50% 30%, #0d1527 0%, #05070d 100%);
  overflow: hidden;
}

canvas {
  background: transparent;
  display: block;
  width: 100%;
  height: 100%;
}

.overlay-screen {
  position: absolute;
  inset: 0;
  background: rgba(5, 7, 13, 0.92);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  text-align: center;
  backdrop-filter: blur(6px);
  z-index: 20;
}

.overlay-screen.active {
  display: flex;
}

.cyber-glitch {
  font-size: 28px;
  font-weight: 900;
  color: #00f0ff;
  letter-spacing: 3px;
  text-shadow: 2px 2px #f43f5e, -2px -2px #00f0ff;
}

.cyber-subtitle {
  font-size: 11px;
  color: #cbd5e1;
  letter-spacing: 4px;
}

.instructions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
  color: #94a3b8;
  margin: 10px 0;
}

.btn-cyber {
  padding: 12px 28px;
  background: #00f0ff;
  color: #000;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 2px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
  transition: all 0.15s ease;
}

.btn-cyber:active {
  transform: scale(0.95);
  background: #38bdf8;
}

.pulse-anim {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(0, 240, 255, 0.4); }
  50% { box-shadow: 0 0 30px rgba(0, 240, 255, 0.8); }
}

/* Touch Control Bar for Mobile */
.touch-controls {
  display: flex;
  gap: 8px;
  padding: 12px;
  background: #0b0f19;
  border-top: 1px solid #00f0ff22;
}

.touch-btn {
  flex: 1;
  padding: 14px 6px;
  background: #151d30;
  border: 1px solid #00f0ff44;
  border-radius: 10px;
  color: #38bdf8;
  font-weight: 800;
  font-size: 13px;
  touch-action: manipulation;
  transition: all 0.1s;
}

.touch-btn:active {
  background: #00f0ff33;
  border-color: #00f0ff;
  transform: scale(0.96);
}

.fire-btn {
  background: linear-gradient(135deg, #f43f5e, #e11d48);
  color: #fff;
  border: 1px solid #fb7185;
  box-shadow: 0 0 15px rgba(244, 63, 94, 0.3);
}

.fire-btn:active {
  background: #f43f5e;
  box-shadow: 0 0 25px rgba(244, 63, 94, 0.7);
}`,

    'script.js': `// CYBER STRIKE 2099 - Interactive Arcade Game Engine
// Built autonomously by Bypass IDE for Nowempireoff

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
let hiScore = 9850;
let shield = 100;
let isPlaying = false;
let animationId = null;

// Sound synthesizer using Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'laser') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'boom') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'hit') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch(e) {}
}

// Player Ship
const player = {
  x: canvas.width / 2,
  y: canvas.height - 45,
  w: 32,
  h: 32,
  speed: 6,
  dx: 0
};

let bullets = [];
let enemies = [];
let particles = [];
let stars = [];

// Create starfield
for (let i = 0; i < 45; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 2 + 0.5
  });
}

function spawnEnemy() {
  if (!isPlaying) return;
  const size = 26;
  enemies.push({
    x: Math.random() * (canvas.width - size * 2) + size,
    y: -size,
    w: size,
    h: size,
    speed: Math.random() * 1.5 + 2,
    hp: 1,
    color: Math.random() > 0.3 ? '#f43f5e' : '#a855f7'
  });
}

function shoot() {
  if (!isPlaying) return;
  bullets.push({
    x: player.x,
    y: player.y - 12,
    w: 4,
    h: 12,
    speed: 10
  });
  playSound('laser');
}

function createExplosion(x, y, color) {
  for (let i = 0; i < 14; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 1;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      color: color || '#00f0ff'
    });
  }
}

// Game Loop
function update() {
  if (!isPlaying) return;

  // Move player
  player.x += player.dx;
  if (player.x < 20) player.x = 20;
  if (player.x > canvas.width - 20) player.x = canvas.width - 20;

  // Move bullets
  bullets.forEach((b, idx) => {
    b.y -= b.speed;
    if (b.y < -15) bullets.splice(idx, 1);
  });

  // Move & spawn enemies
  if (Math.random() < 0.035) {
    spawnEnemy();
  }

  enemies.forEach((e, eIdx) => {
    e.y += e.speed;

    // Check collision with player
    const dist = Math.hypot(e.x - player.x, e.y - player.y);
    if (dist < 26) {
      shield -= 25;
      document.getElementById('shieldBar').style.width = Math.max(0, shield) + '%';
      createExplosion(e.x, e.y, '#f43f5e');
      playSound('hit');
      enemies.splice(eIdx, 1);

      if (shield <= 0) {
        gameOver();
      }
      return;
    }

    // Check collision with bullets
    bullets.forEach((b, bIdx) => {
      if (
        b.x > e.x - e.w / 2 &&
        b.x < e.x + e.w / 2 &&
        b.y > e.y - e.h / 2 &&
        b.y < e.y + e.h / 2
      ) {
        createExplosion(e.x, e.y, '#00f0ff');
        playSound('boom');
        enemies.splice(eIdx, 1);
        bullets.splice(bIdx, 1);
        score += 100;
        document.getElementById('scoreVal').innerText = score;
      }
    });

    if (e.y > canvas.height + 30) {
      enemies.splice(eIdx, 1);
    }
  });

  // Update particles
  particles.forEach((p, idx) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.04;
    if (p.life <= 0) particles.splice(idx, 1);
  });

  // Update stars
  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  });

  draw();
  animationId = requestAnimationFrame(update);
}

// Render Scene
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background stars
  ctx.fillStyle = '#ffffff';
  stars.forEach(s => {
    ctx.globalAlpha = 0.5 + Math.random() * 0.4;
    ctx.fillRect(s.x, s.y, s.size, s.size);
  });
  ctx.globalAlpha = 1.0;

  // Draw Bullets
  bullets.forEach(b => {
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 10;
    ctx.fillRect(b.x - b.w / 2, b.y, b.w, b.h);
    ctx.shadowBlur = 0;
  });

  // Draw Enemies (Cyber Drones)
  enemies.forEach(e => {
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.fillStyle = e.color;
    ctx.shadowColor = e.color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(0, e.h / 2);
    ctx.lineTo(e.w / 2, -e.h / 2);
    ctx.lineTo(0, -e.h / 4);
    ctx.lineTo(-e.w / 2, -e.h / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });

  // Draw Particles
  particles.forEach(p => {
    ctx.save();
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.life;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // Draw Player Starship
  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 12;

  // Ship hull
  ctx.fillStyle = '#38bdf8';
  ctx.beginPath();
  ctx.moveTo(0, -18);
  ctx.lineTo(16, 14);
  ctx.lineTo(6, 10);
  ctx.lineTo(0, 14);
  ctx.lineTo(-6, 10);
  ctx.lineTo(-16, 14);
  ctx.closePath();
  ctx.fill();

  // Engine plasma
  ctx.fillStyle = '#00f0ff';
  ctx.beginPath();
  ctx.moveTo(-4, 12);
  ctx.lineTo(0, 20 + Math.random() * 6);
  ctx.lineTo(4, 12);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function startGame() {
  score = 0;
  shield = 100;
  bullets = [];
  enemies = [];
  particles = [];
  document.getElementById('scoreVal').innerText = score;
  document.getElementById('shieldBar').style.width = '100%';
  document.getElementById('startOverlay').classList.remove('active');
  document.getElementById('gameOverOverlay').classList.remove('active');

  isPlaying = true;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  update();
}

function gameOver() {
  isPlaying = false;
  cancelAnimationFrame(animationId);
  if (score > hiScore) hiScore = score;
  document.getElementById('hiScoreVal').innerText = hiScore;
  document.getElementById('finalScore').innerText = score;
  document.getElementById('gameOverOverlay').classList.add('active');
}

// Event Listeners
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', startGame);

// Controls (Keyboard)
window.addEventListener('keydown', e => {
  if (e.code === 'ArrowLeft' || e.key === 'a') player.dx = -player.speed;
  if (e.code === 'ArrowRight' || e.key === 'd') player.dx = player.speed;
  if (e.code === 'Space') {
    shoot();
    e.preventDefault();
  }
});

window.addEventListener('keyup', e => {
  if (
    (e.code === 'ArrowLeft' && player.dx < 0) ||
    (e.code === 'ArrowRight' && player.dx > 0)
  ) {
    player.dx = 0;
  }
});

// Controls (Mobile Touch Buttons)
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const btnFire = document.getElementById('btnFire');

btnLeft.addEventListener('touchstart', e => { e.preventDefault(); player.dx = -player.speed; });
btnLeft.addEventListener('touchend', e => { e.preventDefault(); player.dx = 0; });
btnLeft.addEventListener('mousedown', () => { player.dx = -player.speed; });
btnLeft.addEventListener('mouseup', () => { player.dx = 0; });

btnRight.addEventListener('touchstart', e => { e.preventDefault(); player.dx = player.speed; });
btnRight.addEventListener('touchend', e => { e.preventDefault(); player.dx = 0; });
btnRight.addEventListener('mousedown', () => { player.dx = player.speed; });
btnRight.addEventListener('mouseup', () => { player.dx = 0; });

btnFire.addEventListener('touchstart', e => { e.preventDefault(); shoot(); });
btnFire.addEventListener('click', () => { shoot(); });
`
  };
}

export function getAppleLandingPageFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>iPhone 16 Pro | Titanium Power</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="apple-nav">
    <span class="apple-logo"></span>
    <span class="nav-title">iPhone 16 Pro</span>
    <button class="btn-buy" onclick="handleBuy()">Buy Now</button>
  </header>

  <main class="hero-wrap">
    <div class="pill-chip">A18 PRO CHIP • AEROSPACE TITANIUM</div>
    <h1 class="hero-headline">Hello, Apple Intelligence.</h1>
    <p class="hero-desc">Engineered for extreme performance with grade 5 titanium and the fastest CPU in any smartphone.</p>

    <!-- Interactive 3D Device Showcase -->
    <div class="device-card" id="deviceCard">
      <div class="screen-notch"></div>
      <div class="screen-wallpaper" id="wallpaper">
        <div class="glamour-time">9:41</div>
        <div class="glamour-tag" id="colorLabel">Natural Titanium</div>
      </div>
    </div>

    <!-- Interactive Finish Selector -->
    <div class="color-picker-section">
      <span class="picker-lbl">Select Finish:</span>
      <div class="color-options">
        <button class="swatch active" style="background: #a29d94;" onclick="changeColor('Natural Titanium', '#a29d94', 'linear-gradient(135deg, #1e1d1b, #3d3b36)')"></button>
        <button class="swatch" style="background: #e3e4e5;" onclick="changeColor('White Titanium', '#e3e4e5', 'linear-gradient(135deg, #27282a, #4a4c50)')"></button>
        <button class="swatch" style="background: #393836;" onclick="changeColor('Black Titanium', '#393836', 'linear-gradient(135deg, #0f0f10, #222225)')"></button>
        <button class="swatch" style="background: #c39a7b;" onclick="changeColor('Desert Titanium', '#c39a7b', 'linear-gradient(135deg, #2a1f17, #4e3c30)')"></button>
      </div>
    </div>

    <!-- Specs Bento Grid -->
    <div class="spec-grid">
      <div class="spec-card">
        <span class="spec-num">A18 Pro</span>
        <span class="spec-sub">2x Faster Neural Engine</span>
      </div>
      <div class="spec-card">
        <span class="spec-num">48 MP</span>
        <span class="spec-sub">Fusion 2nd-gen Sensor</span>
      </div>
      <div class="spec-card">
        <span class="spec-num">33 hrs</span>
        <span class="spec-sub">All-Day Video Playback</span>
      </div>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
}

body {
  background: #000000;
  color: #f5f5f7;
  overflow-x: hidden;
  padding-bottom: 40px;
}

.apple-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: rgba(18, 18, 20, 0.8);
  backdrop-filter: blur(15px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.apple-logo {
  font-size: 20px;
}

.nav-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.btn-buy {
  background: #0071e3;
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 980px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.hero-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 16px;
  max-width: 480px;
  margin: 0 auto;
}

.pill-chip {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #e39443;
  margin-bottom: 12px;
}

.hero-headline {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.15;
  background: linear-gradient(180deg, #ffffff 0%, #a1a1a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 13px;
  color: #86868b;
  margin-top: 10px;
  line-height: 1.5;
  max-width: 320px;
}

.device-card {
  width: 220px;
  height: 400px;
  border-radius: 40px;
  border: 4px solid #a29d94;
  margin: 25px 0 15px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.screen-notch {
  width: 70px;
  height: 20px;
  background: #000;
  border-radius: 14px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.screen-wallpaper {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e1d1b, #3d3b36);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 16px 20px;
  transition: background 0.5s ease;
}

.glamour-time {
  font-size: 42px;
  font-weight: 300;
  letter-spacing: -1px;
}

.glamour-tag {
  font-size: 12px;
  color: #d1d1d6;
  font-weight: 500;
}

.color-picker-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
}

.picker-lbl {
  font-size: 11px;
  color: #86868b;
}

.color-options {
  display: flex;
  gap: 12px;
}

.swatch {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s;
}

.swatch.active {
  border-color: #0071e3;
  transform: scale(1.18);
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100%;
}

.spec-card {
  background: #161617;
  border: 1px solid #28282b;
  border-radius: 16px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.spec-num {
  font-size: 16px;
  font-weight: 700;
  color: #f5f5f7;
}

.spec-sub {
  font-size: 10px;
  color: #86868b;
  line-height: 1.3;
}`,

    'script.js': `function changeColor(name, borderColor, bgGradient) {
  document.getElementById('deviceCard').style.borderColor = borderColor;
  document.getElementById('wallpaper').style.background = bgGradient;
  document.getElementById('colorLabel').innerText = name;

  document.querySelectorAll('.swatch').forEach(btn => {
    btn.classList.remove('active');
  });
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function handleBuy() {
  alert('iPhone 16 Pro added to bag! Order confirmed.');
}
`
  };
}

export function getSystemMonitorFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TELEMETRY OS | Root Monitor</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="dashboard-shell">
    <header class="top-telemetry">
      <div class="status-live">
        <span class="live-dot"></span>
        <span>ROOT KERNEL aarch64</span>
      </div>
      <div class="node-id">NODE #4092</div>
    </header>

    <div class="gauges-grid">
      <div class="gauge-card">
        <span class="gauge-lbl">CPU LOAD</span>
        <div class="gauge-val" id="cpuVal">42%</div>
        <div class="meter-bar"><div id="cpuBar" class="meter-fill" style="width: 42%;"></div></div>
      </div>
      <div class="gauge-card">
        <span class="gauge-lbl">RAM ALLOC</span>
        <div class="gauge-val" id="ramVal">6.8 GB</div>
        <div class="meter-bar"><div id="ramBar" class="meter-fill ram-color" style="width: 58%;"></div></div>
      </div>
      <div class="gauge-card">
        <span class="gauge-lbl">ROOT TEMP</span>
        <div class="gauge-val" id="tempVal">38°C</div>
        <div class="meter-bar"><div id="tempBar" class="meter-fill temp-color" style="width: 38%;"></div></div>
      </div>
    </div>

    <!-- Live Animated Canvas Chart -->
    <div class="chart-container">
      <div class="chart-head">
        <span>LIVE NETWORK PACKET TRAFFIC (KB/s)</span>
        <span id="kbRate" class="neon-cyan">842 KB/s</span>
      </div>
      <canvas id="trafficCanvas" width="340" height="150"></canvas>
    </div>

    <!-- Active Root Daemons -->
    <div class="process-box">
      <div class="process-title">ACTIVE ROOT DAEMONS</div>
      <div class="process-list" id="processList">
        <div class="p-row"><span>/sbin/bypass_daemon</span><span class="p-ok">RUNNING</span></div>
        <div class="p-row"><span>/system/bin/surfaceflinger</span><span class="p-ok">RUNNING</span></div>
        <div class="p-row"><span>/data/adb/magisk/magiskd</span><span class="p-ok">RUNNING</span></div>
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
  font-family: 'Courier New', monospace;
}

body {
  background: #06080e;
  color: #cbd5e1;
  padding: 12px;
}

.dashboard-shell {
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.top-telemetry {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: #0f1422;
  border: 1px solid #00f0ff33;
  border-radius: 10px;
  font-size: 11px;
}

.status-live {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #10b981;
  font-weight: bold;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0.3; }
}

.gauges-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.gauge-card {
  background: #0d121f;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gauge-lbl {
  font-size: 9px;
  color: #64748b;
  letter-spacing: 1px;
}

.gauge-val {
  font-size: 16px;
  font-weight: 900;
  color: #00f0ff;
}

.meter-bar {
  width: 100%;
  height: 4px;
  background: #1e293b;
  border-radius: 2px;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: #00f0ff;
  transition: width 0.5s ease;
}

.ram-color { background: #a855f7; }
.temp-color { background: #f59e0b; }

.chart-container {
  background: #0b0f19;
  border: 1px solid #00f0ff22;
  border-radius: 12px;
  padding: 12px;
}

.chart-head {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #94a3b8;
  margin-bottom: 8px;
}

canvas {
  width: 100%;
  height: 140px;
  background: #05070c;
  border-radius: 8px;
  display: block;
}

.process-box {
  background: #0b0f19;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 12px;
}

.process-title {
  font-size: 10px;
  color: #64748b;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.process-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
}

.p-row {
  display: flex;
  justify-content: space-between;
  padding: 4px 6px;
  background: #111726;
  border-radius: 6px;
}

.p-ok {
  color: #10b981;
  font-weight: bold;
}
`,

    'script.js': `const canvas = document.getElementById('trafficCanvas');
const ctx = canvas.getContext('2d');
const dataPoints = Array(35).fill(40);

function renderChart() {
  dataPoints.shift();
  const nextVal = Math.floor(Math.random() * 80) + 20;
  dataPoints.push(nextVal);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid
  ctx.strokeStyle = '#151d30';
  ctx.lineWidth = 1;
  for (let y = 20; y < canvas.height; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw gradient chart line
  ctx.beginPath();
  const step = canvas.width / (dataPoints.length - 1);
  dataPoints.forEach((val, i) => {
    const x = i * step;
    const y = canvas.height - (val / 100) * (canvas.height - 20) - 10;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Update telemetry counters
  const cpu = Math.floor(Math.random() * 25) + 35;
  document.getElementById('cpuVal').innerText = cpu + '%';
  document.getElementById('cpuBar').style.width = cpu + '%';
  document.getElementById('kbRate').innerText = (nextVal * 12) + ' KB/s';
}

setInterval(renderChart, 600);
`
  };
}

// ==========================================
// 1. ELITE TARGET SHOOTING GAME (Requested by User)
// ==========================================
export function getTargetShooterGameFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>CYBER SNIPER: TARGET SHOOTER | Bypass Arcade</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="game-container">
    <header class="hud-bar">
      <div class="hud-box">
        <span class="hud-tag">SCORE</span>
        <span id="score" class="hud-num text-cyan">0</span>
      </div>
      <div class="hud-box">
        <span class="hud-tag">WAVE</span>
        <span id="wave" class="hud-num text-amber">1</span>
      </div>
      <div class="hud-box">
        <span class="hud-tag">AMMO</span>
        <span id="ammo" class="hud-num text-rose">12/12</span>
      </div>
    </header>

    <div class="canvas-wrapper">
      <canvas id="shooterCanvas" width="380" height="480"></canvas>

      <!-- Start Overlay -->
      <div id="startScreen" class="overlay active">
        <div class="crosshair-icon">🎯</div>
        <h1 class="title">CYBER TARGET SHOOTER</h1>
        <p class="subtitle">AUTONOMOUS FPS COMBAT</p>
        <div class="guide-box">
          <p>🎯 <b>Tap anywhere on screen</b> to aim and shoot</p>
          <p>💥 Hit flying red drones (+100 pts)</p>
          <p>💎 Hit rare gold orbs (+300 pts)</p>
          <p>🔄 Tap RELOAD when ammo runs out</p>
        </div>
        <button id="startBtn" class="action-btn glow-btn">ENGAGE TARGETS</button>
      </div>

      <!-- Game Over Overlay -->
      <div id="gameOverScreen" class="overlay">
        <h2 class="game-over-title">MISSION DEFEAT</h2>
        <p class="summary-text">Final Score: <span id="finalScore" class="text-cyan">0</span></p>
        <p class="summary-text">Drones Destroyed: <span id="dronesKilled" class="text-amber">0</span></p>
        <button id="restartBtn" class="action-btn glow-btn">RE-DEPLOY</button>
      </div>
    </div>

    <!-- Mobile Action Footer -->
    <footer class="controls-bar">
      <button id="reloadBtn" class="control-btn reload">🔄 RELOAD (R)</button>
      <button id="rapidBtn" class="control-btn fire">💥 FIRE</button>
    </footer>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  touch-action: manipulation;
}

body {
  background: #05070d;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container {
  width: 100%;
  max-width: 400px;
  height: 100vh;
  max-height: 680px;
  display: flex;
  flex-direction: column;
  background: #0a0d16;
  border: 1px solid rgba(0, 240, 255, 0.25);
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.15);
  position: relative;
}

.hud-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(12, 16, 28, 0.95);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
}

.hud-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hud-tag {
  font-size: 9px;
  letter-spacing: 1px;
  color: #8892b0;
  font-weight: 700;
}

.hud-num {
  font-size: 17px;
  font-weight: 900;
  font-family: monospace;
}

.text-cyan { color: #00f0ff; text-shadow: 0 0 8px rgba(0, 240, 255, 0.6); }
.text-amber { color: #ffb703; text-shadow: 0 0 8px rgba(255, 183, 3, 0.6); }
.text-rose { color: #ff0055; text-shadow: 0 0 8px rgba(255, 0, 85, 0.6); }

.canvas-wrapper {
  flex: 1;
  position: relative;
  background: radial-gradient(circle at center, #101526 0%, #060810 100%);
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: crosshair;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(6, 9, 18, 0.94);
  backdrop-filter: blur(6px);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
  z-index: 10;
}

.overlay.active {
  display: flex;
}

.crosshair-icon {
  font-size: 42px;
  margin-bottom: 8px;
  animation: pulse 1.5s infinite ease-in-out;
}

.title {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #00f0ff;
  text-shadow: 0 0 12px rgba(0, 240, 255, 0.8);
}

.subtitle {
  font-size: 10px;
  letter-spacing: 2px;
  color: #ff007f;
  margin-bottom: 16px;
  font-weight: 700;
}

.guide-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px;
  font-size: 11px;
  color: #ccd6f6;
  text-align: left;
  line-height: 1.7;
  margin-bottom: 20px;
  width: 100%;
}

.action-btn {
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 1px;
  cursor: pointer;
  background: linear-gradient(90deg, #00f0ff, #0077b6);
  color: #000;
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.5);
  transition: transform 0.1s, box-shadow 0.2s;
}

.action-btn:active {
  transform: scale(0.96);
}

.game-over-title {
  font-size: 24px;
  font-weight: 900;
  color: #ff0055;
  text-shadow: 0 0 15px rgba(255, 0, 85, 0.8);
  margin-bottom: 12px;
}

.summary-text {
  font-size: 13px;
  color: #8892b0;
  margin-bottom: 6px;
}

.controls-bar {
  display: flex;
  gap: 10px;
  padding: 10px 14px;
  background: #090c16;
  border-top: 1px solid rgba(0, 240, 255, 0.15);
}

.control-btn {
  flex: 1;
  padding: 11px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  background: #131728;
  color: #fff;
  transition: background 0.15s, transform 0.1s;
}

.control-btn.reload {
  color: #00f0ff;
  border-color: rgba(0, 240, 255, 0.3);
}

.control-btn.fire {
  color: #ff0055;
  background: rgba(255, 0, 85, 0.15);
  border-color: rgba(255, 0, 85, 0.4);
}

.control-btn:active {
  transform: scale(0.95);
  background: rgba(0, 240, 255, 0.2);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}`,
    'script.js': `// CYBER SNIPER - Target Shooting Engine
const canvas = document.getElementById('shooterCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
let wave = 1;
let ammo = 12;
const maxAmmo = 12;
let dronesKilled = 0;
let isPlaying = false;
let crosshairX = canvas.width / 2;
let crosshairY = canvas.height / 2;
let recoilTimer = 0;

// Web Audio Sound Synthesizer
let audioCtx = null;
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playLaserSound() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(900, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch(e) {}
}

function playExplosionSound() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.25);
  } catch(e) {}
}

function playReloadSound() {
  if (!audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    [440, 660, 880].forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.12, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.08 + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.1);
    });
  } catch(e) {}
}

// Target Drones Array
let targets = [];
let particles = [];
let popups = [];

class Target {
  constructor() {
    this.type = Math.random() < 0.25 ? 'gold' : 'drone';
    this.radius = this.type === 'gold' ? 14 : 22;
    this.x = Math.random() < 0.5 ? -30 : canvas.width + 30;
    this.y = 50 + Math.random() * (canvas.height - 140);
    this.vx = (this.x < 0 ? 1 : -1) * (1.8 + Math.random() * 2 + wave * 0.25);
    this.vy = (Math.random() - 0.5) * 1.5;
    this.hp = this.type === 'gold' ? 1 : (wave > 3 ? 2 : 1);
    this.angle = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.angle += 0.05;

    // Bounce vertically
    if (this.y < 40 || this.y > canvas.height - 40) {
      this.vy *= -1;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);

    if (this.type === 'gold') {
      // Golden Bonus Orb
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffb703';
      ctx.shadowColor = '#ffb703';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$', 0, 0);
    } else {
      // Red Cyber Drone
      ctx.rotate(this.angle);
      ctx.fillStyle = '#ff0055';
      ctx.shadowColor = '#ff0055';
      ctx.shadowBlur = 10;

      // Drone Body
      ctx.beginPath();
      ctx.roundRect(-this.radius, -this.radius / 1.5, this.radius * 2, this.radius * 1.3, 6);
      ctx.fill();

      // Drone Eye
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      ctx.fill();
    }

    ctx.restore();
  }
}

// Particle System
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6;
    this.alpha = 1;
    this.color = color;
    this.size = 2 + Math.random() * 3;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.04;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Floating Score Popups
class ScorePopup {
  constructor(x, y, text, color) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
    this.alpha = 1;
  }
  update() {
    this.y -= 1.2;
    this.alpha -= 0.03;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = this.color;
    ctx.font = 'bold 15px monospace';
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}

// Shoot function
function shoot(targetX, targetY) {
  if (!isPlaying) return;
  initAudio();

  if (ammo <= 0) {
    reload();
    return;
  }

  ammo--;
  updateHUD();
  playLaserSound();
  recoilTimer = 5;
  crosshairX = targetX;
  crosshairY = targetY;

  // Check hit collisions
  let hit = false;
  for (let i = targets.length - 1; i >= 0; i--) {
    const t = targets[i];
    const dist = Math.hypot(targetX - t.x, targetY - t.y);

    if (dist < t.radius + 15) {
      hit = true;
      t.hp--;

      if (t.hp <= 0) {
        playExplosionSound();
        const pts = t.type === 'gold' ? 300 : 100;
        score += pts;
        dronesKilled++;

        // Spawn explosion particles
        for (let p = 0; p < 14; p++) {
          particles.push(new Particle(t.x, t.y, t.type === 'gold' ? '#ffb703' : '#ff0055'));
        }

        popups.push(new ScorePopup(t.x, t.y, '+' + pts, t.type === 'gold' ? '#ffb703' : '#00f0ff'));
        targets.splice(i, 1);

        // Check wave progression
        if (dronesKilled % 8 === 0) {
          wave++;
          updateHUD();
        }
      }
      break;
    }
  }

  // Draw flash
  ctx.save();
  ctx.fillStyle = 'rgba(0, 240, 255, 0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function reload() {
  initAudio();
  playReloadSound();
  ammo = maxAmmo;
  updateHUD();
}

function updateHUD() {
  document.getElementById('score').innerText = score;
  document.getElementById('wave').innerText = wave;
  document.getElementById('ammo').innerText = ammo + '/' + maxAmmo;
}

// Game Loop
let lastSpawn = 0;
function gameLoop(timestamp) {
  if (!isPlaying) return;

  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background Grid Line
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Spawn new targets
  if (timestamp - lastSpawn > Math.max(700, 1800 - wave * 100)) {
    if (targets.length < 6) {
      targets.push(new Target());
    }
    lastSpawn = timestamp;
  }

  // Update & Draw Targets
  for (let i = targets.length - 1; i >= 0; i--) {
    const t = targets[i];
    t.update();
    t.draw();

    // Out of screen bounds check
    if ((t.vx > 0 && t.x > canvas.width + 50) || (t.vx < 0 && t.x < -50)) {
      targets.splice(i, 1);
    }
  }

  // Update Particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.alpha <= 0) particles.splice(i, 1);
  }

  // Update Popups
  for (let i = popups.length - 1; i >= 0; i--) {
    const pop = popups[i];
    pop.update();
    pop.draw();
    if (pop.alpha <= 0) popups.splice(i, 1);
  }

  // Draw Crosshair
  drawCrosshair();

  requestAnimationFrame(gameLoop);
}

function drawCrosshair() {
  ctx.save();
  const radius = recoilTimer > 0 ? 28 : 22;
  if (recoilTimer > 0) recoilTimer--;

  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 8;

  // Outer ring
  ctx.beginPath();
  ctx.arc(crosshairX, crosshairY, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Center pip
  ctx.fillStyle = '#ff0055';
  ctx.beginPath();
  ctx.arc(crosshairX, crosshairY, 3, 0, Math.PI * 2);
  ctx.fill();

  // Cross lines
  ctx.beginPath();
  ctx.moveTo(crosshairX - radius - 6, crosshairY);
  ctx.lineTo(crosshairX + radius + 6, crosshairY);
  ctx.moveTo(crosshairX, crosshairY - radius - 6);
  ctx.lineTo(crosshairX, crosshairY + radius + 6);
  ctx.stroke();

  ctx.restore();
}

// Input Handlers
canvas.addEventListener('pointerdown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (canvas.width / rect.width);
  const y = (e.clientY - rect.top) * (canvas.height / rect.height);
  shoot(x, y);
});

canvas.addEventListener('pointermove', (e) => {
  const rect = canvas.getBoundingClientRect();
  crosshairX = (e.clientX - rect.left) * (canvas.width / rect.width);
  crosshairY = (e.clientY - rect.top) * (canvas.height / rect.height);
});

document.getElementById('reloadBtn').addEventListener('click', reload);
document.getElementById('rapidBtn').addEventListener('click', () => {
  shoot(crosshairX, crosshairY);
});

document.getElementById('startBtn').addEventListener('click', () => {
  initAudio();
  document.getElementById('startScreen').classList.remove('active');
  score = 0;
  wave = 1;
  ammo = maxAmmo;
  dronesKilled = 0;
  targets = [];
  isPlaying = true;
  updateHUD();
  requestAnimationFrame(gameLoop);
});

document.getElementById('restartBtn').addEventListener('click', () => {
  document.getElementById('gameOverScreen').classList.remove('active');
  score = 0;
  wave = 1;
  ammo = maxAmmo;
  dronesKilled = 0;
  targets = [];
  isPlaying = true;
  updateHUD();
  requestAnimationFrame(gameLoop);
});
`
  };
}

// ==========================================
// 2. MODERN CALCULATOR APP
// ==========================================
export function getCalculatorFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>CYBER CALC | Neon Scientific Calculator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="calc-wrapper">
    <div class="calc-header">
      <span class="calc-brand">CYBER CALC</span>
      <span class="calc-mode">SCI-FLOAT v2.4</span>
    </div>

    <!-- Display Screen -->
    <div class="calc-display">
      <div id="historyTape" class="history-tape"></div>
      <div id="mainDisplay" class="main-display">0</div>
    </div>

    <!-- Keypad Grid -->
    <div class="keypad">
      <button class="btn fn" data-val="C">AC</button>
      <button class="btn fn" data-val="DEL">⌫</button>
      <button class="btn fn" data-val="%">%</button>
      <button class="btn op" data-val="/">÷</button>

      <button class="btn" data-val="7">7</button>
      <button class="btn" data-val="8">8</button>
      <button class="btn" data-val="9">9</button>
      <button class="btn op" data-val="*">×</button>

      <button class="btn" data-val="4">4</button>
      <button class="btn" data-val="5">5</button>
      <button class="btn" data-val="6">6</button>
      <button class="btn op" data-val="-">−</button>

      <button class="btn" data-val="1">1</button>
      <button class="btn" data-val="2">2</button>
      <button class="btn" data-val="3">3</button>
      <button class="btn op" data-val="+">+</button>

      <button class="btn fn" data-val="sqrt">√</button>
      <button class="btn" data-val="0">0</button>
      <button class="btn" data-val=".">.</button>
      <button class="btn eq" data-val="=">=</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
}

body {
  background: #070913;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.calc-wrapper {
  width: 100%;
  max-width: 360px;
  background: #0f1322;
  border-radius: 24px;
  border: 1px solid rgba(0, 240, 255, 0.3);
  box-shadow: 0 10px 35px rgba(0, 240, 255, 0.15);
  overflow: hidden;
  padding: 18px;
}

.calc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  color: #8892b0;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.calc-brand {
  color: #00f0ff;
}

.calc-display {
  background: #080a14;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px;
  text-align: right;
  margin-bottom: 18px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.history-tape {
  font-size: 13px;
  color: #64748b;
  min-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main-display {
  font-size: 32px;
  font-weight: 800;
  color: #00f0ff;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
  overflow-x: auto;
  white-space: nowrap;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.btn {
  aspect-ratio: 1;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #171d31;
  color: #f1f5f9;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s, background 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:active {
  transform: scale(0.92);
  background: #232c4a;
}

.btn.fn {
  background: #1e263d;
  color: #ffb703;
}

.btn.op {
  background: rgba(0, 240, 255, 0.12);
  color: #00f0ff;
  border-color: rgba(0, 240, 255, 0.3);
}

.btn.eq {
  background: linear-gradient(135deg, #00f0ff, #0077b6);
  color: #000;
  font-size: 22px;
  box-shadow: 0 0 14px rgba(0, 240, 255, 0.4);
}`,
    'script.js': `let currentInput = '0';
let historyText = '';
const display = document.getElementById('mainDisplay');
const historyTape = document.getElementById('historyTape');

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const val = button.getAttribute('data-val');

    if (val === 'C') {
      currentInput = '0';
      historyText = '';
    } else if (val === 'DEL') {
      if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput = '0';
      }
    } else if (val === '=') {
      try {
        historyText = currentInput + ' =';
        const sanitized = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        const res = Function('"use strict"; return (' + sanitized + ')')();
        currentInput = String(Number(res.toFixed(6)));
      } catch (e) {
        currentInput = 'Error';
      }
    } else if (val === 'sqrt') {
      try {
        const num = parseFloat(currentInput);
        historyText = '√(' + currentInput + ')';
        currentInput = String(Number(Math.sqrt(num).toFixed(6)));
      } catch(e) {
        currentInput = 'Error';
      }
    } else {
      if (currentInput === '0' && !isNaN(val)) {
        currentInput = val;
      } else {
        currentInput += val;
      }
    }

    display.innerText = currentInput;
    historyTape.innerText = historyText;
  });
});`
  };
}

// ==========================================
// 3. TASK MANAGER / TODO LIST APP
// ==========================================
export function getTodoListFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>CYBER TASKS | Next-Gen Task Board</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="todo-app">
    <header class="header">
      <div>
        <h1>BYPASS TASKS</h1>
        <p class="subtitle">Autonomous Productivity Board</p>
      </div>
      <div id="statsBadge" class="badge">0 / 0 Done</div>
    </header>

    <!-- Add Task Form -->
    <form id="taskForm" class="task-form">
      <input id="taskInput" type="text" placeholder="Write new task..." required />
      <button type="submit" class="add-btn">+</button>
    </form>

    <!-- Filter Pills -->
    <div class="filter-pills">
      <button class="pill active" data-filter="all">All</button>
      <button class="pill" data-filter="active">Active</button>
      <button class="pill" data-filter="completed">Completed</button>
    </div>

    <!-- Task List -->
    <ul id="taskList" class="task-list"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background: #080b14;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
}

.todo-app {
  width: 100%;
  max-width: 390px;
  background: #0f1322;
  border: 1px solid rgba(0, 240, 255, 0.25);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h1 {
  font-size: 18px;
  font-weight: 800;
  color: #00f0ff;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 11px;
  color: #64748b;
}

.badge {
  font-size: 10px;
  font-weight: 700;
  background: rgba(0, 240, 255, 0.15);
  color: #00f0ff;
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 4px 8px;
  border-radius: 20px;
}

.task-form {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.task-form input {
  flex: 1;
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 14px;
  color: #fff;
  font-size: 13px;
  outline: none;
}

.task-form input:focus {
  border-color: #00f0ff;
}

.add-btn {
  background: #00f0ff;
  color: #000;
  border: none;
  width: 42px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
}

.filter-pills {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
}

.pill {
  flex: 1;
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  font-size: 11px;
  padding: 6px;
  border-radius: 10px;
  cursor: pointer;
}

.pill.active {
  background: rgba(0, 240, 255, 0.2);
  color: #00f0ff;
  border-color: #00f0ff;
  font-weight: 700;
}

.task-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 380px;
  overflow-y: auto;
}

.task-item {
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.task-item.completed span {
  text-decoration: line-through;
  color: #64748b;
}

.task-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  cursor: pointer;
}

.check-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #00f0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.task-item.completed .check-circle {
  background: #00f0ff;
  color: #000;
}

.del-btn {
  background: none;
  border: none;
  color: #f43f5e;
  font-size: 14px;
  cursor: pointer;
}`,
    'script.js': `let tasks = [
  { id: 1, text: 'Deploy bypass root module', completed: true },
  { id: 2, text: 'Execute Target Shooting Game testing', completed: false },
  { id: 3, text: 'Generate VIP Nowempireoff Card', completed: false }
];
let currentFilter = 'all';

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  const filtered = tasks.filter(t => {
    if (currentFilter === 'active') return !t.completed;
    if (currentFilter === 'completed') return t.completed;
    return true;
  });

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    li.innerHTML = \`
      <div class="task-left" onclick="toggleTask(\${task.id})">
        <div class="check-circle">\${task.completed ? '✓' : ''}</div>
        <span>\${task.text}</span>
      </div>
      <button class="del-btn" onclick="deleteTask(\${task.id})">✕</button>
    \`;
    list.appendChild(li);
  });

  const doneCount = tasks.filter(t => t.completed).length;
  document.getElementById('statsBadge').innerText = \`\${doneCount} / \${tasks.length} Done\`;
}

window.toggleTask = function(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  renderTasks();
};

window.deleteTask = function(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
};

document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('taskInput');
  if (input.value.trim()) {
    tasks.unshift({
      id: Date.now(),
      text: input.value.trim(),
      completed: false
    });
    input.value = '';
    renderTasks();
  }
});

document.querySelectorAll('.pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderTasks();
  });
});

renderTasks();`
  };
}

// ==========================================
// 4. DYNAMIC FALLBACK APP GENERATOR
// ==========================================
export function generateDynamicCustomApp(prompt: string): ProjectFiles {
  const lower = prompt.toLowerCase();

  if (
    lower.includes('gym') ||
    lower.includes('fitness') ||
    lower.includes('workout') ||
    lower.includes('कसरत') ||
    lower.includes('जिम') ||
    lower.includes('exercise') ||
    lower.includes('bodybuilding')
  ) {
    return getGymWorkoutAppFiles();
  }

  if (
    lower.includes('restaurant') ||
    lower.includes('food') ||
    lower.includes('burger') ||
    lower.includes('pizza') ||
    lower.includes('khana') ||
    lower.includes('खाना') ||
    lower.includes('होटल') ||
    lower.includes('cafe') ||
    lower.includes('dining') ||
    lower.includes('swiggy') ||
    lower.includes('zomato')
  ) {
    return getRestaurantFoodAppFiles();
  }

  if (
    lower.includes('hospital') ||
    lower.includes('doctor') ||
    lower.includes('clinic') ||
    lower.includes('दवा') ||
    lower.includes('अस्पताल') ||
    lower.includes('medical') ||
    lower.includes('appointment') ||
    lower.includes('health') ||
    lower.includes('medicine')
  ) {
    return getHospitalDoctorAppFiles();
  }

  if (
    lower.includes('crypto') ||
    lower.includes('bitcoin') ||
    lower.includes('stock') ||
    lower.includes('शेयर') ||
    lower.includes('मार्केट') ||
    lower.includes('trade') ||
    lower.includes('trading') ||
    lower.includes('coin') ||
    lower.includes('exchange')
  ) {
    return getCryptoTrackerAppFiles();
  }

  return getUniversalCustomAppFiles(prompt);
}

export function generateLegacyCustomApp(prompt: string): ProjectFiles {
  const cleanTitle = prompt.replace(/(banao|bnao|app|website|game|kro|please|ek|make|create|build)/gi, '').trim() || 'Autonomous Application';
  const displayTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);

  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>${displayTitle} | Bypass Suite</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="logo-box">⚡</div>
      <div>
        <h1 class="app-title">${displayTitle}</h1>
        <p class="app-sub">Synthesized by Nowempireoff Bypass IDE</p>
      </div>
    </header>

    <div class="stat-grid">
      <div class="stat-card">
        <span class="stat-lbl">STATUS</span>
        <span class="stat-val text-cyan">ONLINE</span>
      </div>
      <div class="stat-card">
        <span class="stat-lbl">ITEMS</span>
        <span id="counterVal" class="stat-val text-amber">4</span>
      </div>
      <div class="stat-card">
        <span class="stat-lbl">SCORE</span>
        <span id="scoreVal" class="stat-val text-rose">1,250</span>
      </div>
    </div>

    <!-- Interactive Search / Filter Bar -->
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Search ${displayTitle} entries..." />
      <button id="addEntryBtn" class="primary-btn">+ New</button>
    </div>

    <!-- Dynamic Item Feed -->
    <div class="feed-section">
      <h2 class="section-title">Active Stream</h2>
      <div id="itemsList" class="items-list"></div>
    </div>

    <!-- Action Bar -->
    <div class="bottom-actions">
      <button id="refreshBtn" class="action-btn">🔄 Refresh State</button>
      <button id="boostBtn" class="action-btn highlight">🚀 Action Trigger</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background: #070914;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.app-container {
  width: 100%;
  max-width: 400px;
  background: #0f1322;
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.12);
}

.app-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.logo-box {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #00f0ff, #7928ca);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.app-title {
  font-size: 17px;
  font-weight: 800;
  color: #00f0ff;
  letter-spacing: 0.5px;
}

.app-sub {
  font-size: 10px;
  color: #64748b;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}

.stat-card {
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-lbl {
  font-size: 9px;
  color: #94a3b8;
  font-weight: 700;
}

.stat-val {
  font-size: 14px;
  font-weight: 900;
  margin-top: 2px;
}

.text-cyan { color: #00f0ff; }
.text-amber { color: #ffb703; }
.text-rose { color: #ff007f; }

.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.search-bar input {
  flex: 1;
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 12px;
  color: #fff;
  font-size: 12px;
  outline: none;
}

.search-bar input:focus {
  border-color: #00f0ff;
}

.primary-btn {
  background: #00f0ff;
  color: #000;
  border: none;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}

.section-title {
  font-size: 12px;
  color: #94a3b8;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 14px;
}

.feed-card {
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.15s, border-color 0.15s;
}

.feed-card:hover {
  border-color: rgba(0, 240, 255, 0.4);
}

.card-title {
  font-size: 13px;
  font-weight: 700;
  color: #f1f5f9;
}

.card-desc {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 2px;
}

.card-badge {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 20px;
  background: rgba(0, 240, 255, 0.15);
  color: #00f0ff;
  font-weight: 700;
}

.bottom-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  padding: 10px;
  background: #171d31;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 11px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
}

.action-btn.highlight {
  background: rgba(0, 240, 255, 0.15);
  border-color: #00f0ff;
  color: #00f0ff;
}`,
    'script.js': `let items = [
  { id: 1, title: 'Autonomous Engine Node', desc: 'Active execution pipeline', status: 'READY' },
  { id: 2, title: 'Kernel Security Gate', desc: 'SHA-256 Verified by Nowempireoff', status: 'LOCKED' },
  { id: 3, title: 'Dynamic Micro-service', desc: 'Response rate 12ms latency', status: 'ACTIVE' },
  { id: 4, title: 'VIP Matrix Buffer', desc: 'Synchronized with local storage', status: 'SYNCED' }
];

function renderItems(filter = '') {
  const container = document.getElementById('itemsList');
  container.innerHTML = '';

  const matched = items.filter(it => it.title.toLowerCase().includes(filter.toLowerCase()));

  matched.forEach(it => {
    const card = document.createElement('div');
    card.className = 'feed-card';
    card.innerHTML = \`
      <div>
        <div class="card-title">\${it.title}</div>
        <div class="card-desc">\${it.desc}</div>
      </div>
      <span class="card-badge">\${it.status}</span>
    \`;
    container.appendChild(card);
  });

  document.getElementById('counterVal').innerText = items.length;
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  renderItems(e.target.value);
});

document.getElementById('addEntryBtn').addEventListener('click', () => {
  const name = prompt('Enter item title:');
  if (name) {
    items.unshift({
      id: Date.now(),
      title: name,
      desc: 'User created node at ' + new Date().toLocaleTimeString(),
      status: 'CUSTOM'
    });
    renderItems();
  }
});

document.getElementById('boostBtn').addEventListener('click', () => {
  const current = parseInt(document.getElementById('scoreVal').innerText.replace(/,/g, '')) || 0;
  document.getElementById('scoreVal').innerText = (current + 100).toLocaleString();
});

document.getElementById('refreshBtn').addEventListener('click', () => {
  renderItems();
});

renderItems();`
  };
}

export function getSmartTemplateForPrompt(prompt: string): { files: ProjectFiles; description: string; voiceReply: string } {
  const lower = prompt.toLowerCase();

  // 1. Apple iPhone & MacBook 3D Hardware Design Studio Game (Top Priority Request!)
  if (
    lower.includes('iphone') ||
    lower.includes('macbook') ||
    lower.includes('आईफोन') ||
    lower.includes('मैकबुक') ||
    (lower.includes('apple') && (lower.includes('design') || lower.includes('game') || lower.includes('studio') || lower.includes('लैब'))) ||
    lower.includes('phone design') ||
    lower.includes('design game')
  ) {
    return {
      files: getAppleDesignStudioGameFiles(),
      description: ' Apple Design Studio 3D - iPhone & MacBook Hardware Prototyping Game & Keynote Simulator',
      voiceReply: 'मैंने आपके लिए एक बहुत ही शानदार 3D iPhone और MacBook डिज़ाइनिंग गेम तैयार कर दिया है! इसमें टाइटेनियम फ़िनिश, कैमरा लेंस, लेज़र एनग्रेविंग, और कीनोट लॉन्च सिमुलेटर शामिल हैं। प्रिव्यू में लाइव डिज़ाइन करें!',
    };
  }

  // 2. Nitro Car Racing Highway Game
  if (
    lower.includes('car') ||
    lower.includes('racing') ||
    lower.includes('गाड़ी') ||
    lower.includes('कार') ||
    lower.includes('रेसिंग') ||
    lower.includes('नाइट्रो') ||
    lower.includes('highway')
  ) {
    return {
      files: getCarRacingGameFiles(),
      description: '🏎️ NITRO RACER 3D - 60FPS Cyber Highway Car Racing Game',
      voiceReply: 'मैंने आपके लिए एक 60FPS साइबर हाईवे कार रेसिंग गेम तैयार कर दिया है! स्टीयरिंग बटन्स और नाइट्रो बूस्ट के साथ प्रिव्यू में खेलें।',
    };
  }

  // 3. Digital Canvas Drawing & Paint Studio
  if (
    lower.includes('paint') ||
    lower.includes('drawing') ||
    lower.includes('draw') ||
    lower.includes('sketch') ||
    lower.includes('कैनवास') ||
    lower.includes('ड्राइंग') ||
    lower.includes('पेंट')
  ) {
    return {
      files: getDrawingPaintAppFiles(),
      description: '🎨 Cyber Paint Studio - Touch Drawing Pad & Digital Sketch Canvas',
      voiceReply: 'मैंने आपके लिए एक डिजिटल ड्राइंग और पेंटिंग कैनवास ऐप तैयार कर दिया है। इसमें ब्रश साइज़, कलर पैलेट और डाउनलोड फ़ीचर है।',
    };
  }

  // 4. Music Beat Synth & Drum Pad
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
    return {
      files: getMusicBeatMakerFiles(),
      description: '🎹 Cyber Beat Synth - Web Audio Synthesizer & Drum Machine',
      voiceReply: 'मैंने आपके लिए एक रियल-टाइम म्यूजिक सिंथेसाइज़र और बीट मेकर तैयार कर दिया है! पैड्स पर टैप करके लाइव बीट्स बनाएं।',
    };
  }

  // 5. Target Shooting Game
  if (
    lower.includes('shooting') ||
    lower.includes('shooter') ||
    lower.includes('target') ||
    lower.includes('crosshair') ||
    lower.includes('गन') ||
    lower.includes('बंदूक') ||
    lower.includes('निशाना') ||
    lower.includes('sniper')
  ) {
    return {
      files: getTargetShooterGameFiles(),
      description: 'CYBER SNIPER - Sci-Fi Target Shooting FPS Game with Web Audio Gun FX',
      voiceReply: 'मैंने आपके लिए एक बहुत ही शानदार साइबरपंक शूटिंग गेम तैयार कर दिया है! इसमें टारगेट्स, रीलोड, एमो और साउंड इफेक्ट्स शामिल हैं। प्रिव्यू में खेलें।',
    };
  }

  // 6. Cyberpunk Space Arcade Game
  if (
    lower.includes('cyberpunk') ||
    lower.includes('arcade') ||
    lower.includes('space') ||
    lower.includes('space strike')
  ) {
    return {
      files: getCyberpunkGameFiles(),
      description: 'CYBER STRIKE 2099 - Neon Space Defender Arcade Game',
      voiceReply: 'मैंने आपके लिए साइबरपंक स्पेस आर्केड गेम तैयार कर दिया है! प्रिव्यू टैब में लाइव खेलें।',
    };
  }

  // 7. General Game keyword
  if (lower.includes('game') || lower.includes('गेम') || lower.includes('खेल')) {
    return {
      files: getAppleDesignStudioGameFiles(),
      description: ' Apple Hardware Design Studio 3D Game',
      voiceReply: 'मैंने आपके लिए एक शानदार 3D हार्डवेयर डिज़ाइनिंग गेम तैयार कर दिया है! प्रिव्यू टैब में लाइव खेलें।',
    };
  }

  // 8. Calculator
  if (lower.includes('calc') || lower.includes('कैलकुलेटर') || lower.includes('calculator') || lower.includes('math')) {
    return {
      files: getCalculatorFiles(),
      description: 'CYBER CALC - Neon Scientific Glassmorphic Calculator',
      voiceReply: 'मैंने आपके लिए एक आधुनिक नियोन साइंटिफिक कैलकुलेटर तैयार कर दिया है। प्रिव्यू टैब में चेक करें।',
    };
  }

  // 9. Todo List / Task Manager
  if (lower.includes('todo') || lower.includes('task') || lower.includes('list') || lower.includes('टास्क') || lower.includes('नोट्स')) {
    return {
      files: getTodoListFiles(),
      description: 'BYPASS TASKS - Interactive Filterable Task Board',
      voiceReply: 'मैंने आपके लिए एक बहुत ही खूबसूरत टास्क मैनेजर और टू-डू लिस्ट ऐप तैयार कर दिया है।',
    };
  }

  // 10. Apple / iPhone Showcase
  if (
    lower.includes('apple') ||
    lower.includes('titanium') ||
    lower.includes('mobile landing') ||
    lower.includes('gadget')
  ) {
    return {
      files: getAppleDesignStudioGameFiles(),
      description: ' Apple Design Studio 3D - iPhone & MacBook Hardware Prototyping',
      voiceReply: 'मैंने आपके लिए एक प्रीमियम एप्पल-स्टाइल आईफोन और मैकबुक 3D स्टूडियो तैयार कर दिया है।',
    };
  }

  // 11. Gym, Fitness & Workout Tracker
  if (
    lower.includes('gym') ||
    lower.includes('fitness') ||
    lower.includes('workout') ||
    lower.includes('जिम') ||
    lower.includes('कसरत') ||
    lower.includes('व्यायाम')
  ) {
    return {
      files: getGymWorkoutAppFiles(),
      description: 'TITAN FIT - Hardcore Cyberpunk Gym Routine & Weight Tracker',
      voiceReply: 'मैंने आपके लिए टाइटन फिट जिम और वर्कआउट ट्रैकर ऐप तैयार कर दिया है! प्रिव्यू टैब में लाइव सेट्स, वेट और वर्कआउट्स ट्रैक करें।',
    };
  }

  // 12. Restaurant, Food Delivery & Cafe App
  if (
    lower.includes('restaurant') ||
    lower.includes('food') ||
    lower.includes('burger') ||
    lower.includes('pizza') ||
    lower.includes('खाना') ||
    lower.includes('रेस्टोरेंट') ||
    lower.includes('zomato') ||
    lower.includes('swiggy')
  ) {
    return {
      files: getRestaurantFoodAppFiles(),
      description: 'NEON BITE - Gourmet Food Delivery & Table Reservation',
      voiceReply: 'मैंने आपके लिए नियन बाइट रेस्टोरेंट और फ़ूड डिलीवरी ऐप तैयार कर दिया है! मेनू आइटम कार्ट में जोड़ें और लाइव टेस्ट करें।',
    };
  }

  // 13. Hospital, Doctor & Clinic Healthcare App
  if (
    lower.includes('hospital') ||
    lower.includes('doctor') ||
    lower.includes('clinic') ||
    lower.includes('हॉस्पिटल') ||
    lower.includes('डॉक्टर') ||
    lower.includes('इलाज') ||
    lower.includes('दवा')
  ) {
    return {
      files: getHospitalDoctorAppFiles(),
      description: 'CARE PULSE - Doctor Appointment & Emergency Healthcare Portal',
      voiceReply: 'मैंने आपके लिए केयर पल्स डॉक्टर अपॉइंटमेंट और हॉस्पिटल पोर्टल तैयार कर दिया है! प्रिव्यू में स्पेशलिस्ट बुक करें।',
    };
  }

  // 14. Crypto, Bitcoin & Stocks Tracker
  if (
    lower.includes('crypto') ||
    lower.includes('bitcoin') ||
    lower.includes('btc') ||
    lower.includes('solana') ||
    lower.includes('क्रिप्टो') ||
    lower.includes('ट्रेडिंग')
  ) {
    return {
      files: getCryptoTrackerAppFiles(),
      description: 'NEXUS CRYPTO - Live 24/7 Bitcoin & Altcoin Portfolio Engine',
      voiceReply: 'मैंने आपके लिए नेक्सस क्रिप्टो और बिटकॉइन लाइव मार्केट ट्रैकर तैयार कर दिया है! 24h चार्ट और पोर्टफोलियो लाइव देखें।',
    };
  }

  // 15. Luxury E-Commerce / Sneakers & Fashion Store
  if (
    lower.includes('shop') ||
    lower.includes('store') ||
    lower.includes('ecommerce') ||
    lower.includes('e-commerce') ||
    lower.includes('shoe') ||
    lower.includes('sneaker') ||
    lower.includes('कपड़े') ||
    lower.includes('शॉपिंग')
  ) {
    return {
      files: getEcommerceFashionAppFiles(),
      description: 'URBAN DRIP - Luxury Cyber Streetwear & Sneakers Store',
      voiceReply: 'मैंने आपके लिए अर्बन ड्रिप ई-कॉमर्स फैशन और स्नीकर्स स्टोर तैयार कर दिया है! प्रिव्यू टैब में कार्ट, डिस्काउंट कोड और चेकआउट टेस्ट करें।',
    };
  }

  // 16. AI Quiz & Brain Challenge Master
  if (
    lower.includes('quiz') ||
    lower.includes('exam') ||
    lower.includes('test') ||
    lower.includes('क्विज') ||
    lower.includes('सवाल') ||
    lower.includes('trivia')
  ) {
    return {
      files: getQuizEducationAppFiles(),
      description: 'MIND PULSE - Interactive AI Quiz & Speed Brain Challenge',
      voiceReply: 'मैंने आपके लिए माइंड पल्स एआई क्विज मास्टर तैयार कर दिया है! प्रिव्यू में 15 सेकंड टाइमर के साथ लाइव क्विज खेलें।',
    };
  }

  // 17. System Monitor / Telemetry
  if (
    lower.includes('system') ||
    lower.includes('monitor') ||
    lower.includes('telemetry') ||
    lower.includes('dashboard') ||
    lower.includes('डैशबोर्ड')
  ) {
    return {
      files: getSystemMonitorFiles(),
      description: 'Root Kernel Telemetry & Network Dashboard',
      voiceReply: 'मैंने आपके लिए एक रियल-टाइम सिस्टम मॉनिटर और नेटवर्क टेलीमेट्री डैशबोर्ड तैयार कर दिया है।',
    };
  }

  // 18. Bakery / Artisan Showcase
  if (lower.includes('bakery') || lower.includes('बेकरी') || lower.includes('cafe')) {
    return {
      files: getBakeryWebsiteFiles(),
      description: "Maison d'Élite Bakery - Artisan Showcase",
      voiceReply: 'मैंने आपके लिए एक हाई-एंड बेकरी वेबसाइट तैयार कर दी है। प्रिव्यू में चेक करें।',
    };
  }

  // 19. World Map, Atlas, Globe & Country Explorer (User Priority Request)
  if (
    lower.includes('map') ||
    lower.includes('world map') ||
    lower.includes('मैप') ||
    lower.includes('नक्शा') ||
    lower.includes('atlas') ||
    lower.includes('globe') ||
    lower.includes('ग्लोब') ||
    lower.includes('country') ||
    lower.includes('देश') ||
    lower.includes('geography')
  ) {
    return {
      files: getWorldMapAppFiles(),
      description: 'TERRA GLOBE 360 - Interactive World Map, Real-Time Country Atlas & Quiz',
      voiceReply: 'मैंने आपके लिए एक बहुत ही शानदार इंटरएक्टिव वर्ल्ड मैप और कंट्री एटलस ऐप तैयार कर दिया है! प्रिव्यू में किसी भी देश पर टैप करें, फ़्लाइट डिस्टेंस नापें या वर्ल्ड क्विज खेलें।',
    };
  }

  // 20. Weather Forecast, Climate & Atmospheric Radar
  if (
    lower.includes('weather') ||
    lower.includes('मौसम') ||
    lower.includes('mausam') ||
    lower.includes('climate') ||
    lower.includes('forecast') ||
    lower.includes('radar') ||
    lower.includes('बारिश') ||
    lower.includes('barish') ||
    lower.includes('temperature')
  ) {
    return {
      files: getWeatherForecastAppFiles(),
      description: 'AERO CLIMATE - Live Real-Time Weather Forecast & Radar',
      voiceReply: 'मैंने आपके लिए एक रियल-टाइम वेदर फोरकास्ट और क्लाइमेट रडार ऐप तैयार कर दिया है! शहरों का तापमान, नमी और 5-दिन का पूर्वानुमान लाइव चेक करें।',
    };
  }

  // 21. Instagram Pro Clone (Feed, Stories, Reels, Profile, DMs, Like Hearts)
  if (
    lower.includes('instagram') ||
    lower.includes('insta') ||
    lower.includes('इंस्टाग्राम') ||
    lower.includes('इंस्टा') ||
    (lower.includes('social') && (lower.includes('photo') || lower.includes('feed')))
  ) {
    return {
      files: getInstagramAppFiles(),
      description: 'INSTAGRAM PRO - Stories, Feed, Reels, Profile Grid & DMs Clone',
      voiceReply: 'मैंने आपके लिए इंस्टाग्राम का सेम टू सेम प्रो ऐप तैयार कर दिया है! स्टोरीज़ बार, डबल-टैप हार्ट लाइक, रील्स और प्रोफाइल ग्रिड प्रिव्यू में लाइव चलाएं।',
    };
  }

  // 22. WhatsApp Pro Clone (Chats, Status, Voice Call, Real Messenger)
  if (
    lower.includes('whatsapp') ||
    lower.includes('व्हाट्सएप') ||
    lower.includes('व्हाट्सअप') ||
    lower.includes('chat') ||
    lower.includes('messenger') ||
    lower.includes('telegram') ||
    lower.includes('चैट') ||
    lower.includes('मैसेज') ||
    lower.includes('messaging')
  ) {
    return {
      files: getWhatsAppAppFiles(),
      description: 'WHATSAPP PRO - Real-Time Multi-Chat, Status, Live Replies & Call Simulator',
      voiceReply: 'मैंने आपके लिए व्हाट्सएप का सेम टू सेम रियल-टाइम चैट ऐप तैयार कर दिया है! चैट्स, स्टेटस, वॉयस कॉलिंग और लाइव मैसेजिंग प्रिव्यू में चेक करें।',
    };
  }

  // 23. YouTube Pro Clone (Interactive 4K Video Player, Shorts, Comments, Subscriptions)
  if (
    lower.includes('youtube') ||
    lower.includes('yt') ||
    lower.includes('यूट्यूब') ||
    lower.includes('video player') ||
    lower.includes('वीडियो ऐप') ||
    lower.includes('video app')
  ) {
    return {
      files: getYouTubeAppFiles(),
      description: 'YOUTUBE PRO - 4K Video Player, Equalizer, Shorts Shelf & Live Subscriptions',
      voiceReply: 'मैंने आपके लिए यूट्यूब का सेम टू सेम प्रो वीडियो प्लेयर और शॉर्ट्स ऐप तैयार कर दिया है! ऑडियो इक्वलाइज़र, सब्सक्राइब बटन और कमेंट्स प्रिव्यू में टेस्ट करें।',
    };
  }

  // 24. Twitter / X Pro Clone (Timeline, Tweet Composer, Retweets, Trends)
  if (
    lower.includes('twitter') ||
    lower.includes('ट्विटर') ||
    lower === 'x' ||
    lower.includes(' x ') ||
    lower.startsWith('x ') ||
    lower.includes('tweet') ||
    lower.includes('ट्वीट')
  ) {
    return {
      files: getTwitterXAppFiles(),
      description: '𝕏 PRO (TWITTER) - Post Composer, Real-Time Trends, Retweets & Like Engine',
      voiceReply: 'मैंने आपके लिए 𝕏 (ट्विटर) का सेम टू सेम सोशल टाइमलाइन ऐप तैयार कर दिया है! पोस्ट कंपोज़ करें, री-ट्वीट और लाइव ट्रेंड्स प्रिव्यू में देखें।',
    };
  }

  // 25. Spotify Pro Clone (Audio Synthesizer Engine, Playlists, Equalizer Wave, Lyrics)
  if (
    lower.includes('spotify') ||
    lower.includes('स्पॉटिफाई') ||
    lower.includes('music stream') ||
    lower.includes('music player') ||
    lower.includes('गाने वाला ऐप') ||
    lower.includes('song app')
  ) {
    return {
      files: getSpotifyAppFiles(),
      description: 'SPOTIFY PRO - Web Audio Synth Engine, Playlists & Equalizer Spectrum',
      voiceReply: 'मैंने आपके लिए स्पॉटिफाई का सेम टू सेम म्यूजिक स्ट्रीमिंग ऐप तैयार कर दिया है! वेब ऑडियो सिंथेसाइज़र, लाइव इक्वलाइज़र और बॉटम प्लेयर प्रिव्यू में चालू करें।',
    };
  }

  // 26. TikTok / Reels Pro Clone (Vertical Video Feed, Right Rail, Music Disc Spin)
  if (
    lower.includes('tiktok') ||
    lower.includes('टिकटॉक') ||
    lower.includes('टिक टोक') ||
    lower.includes('reels') ||
    lower.includes('रील्स') ||
    lower.includes('short video') ||
    lower.includes('शॉर्ट वीडियो')
  ) {
    return {
      files: getTikTokAppFiles(),
      description: 'TIKTOK PRO - Fullscreen Vertical Video Feed, Interactive Heart Bursts & Music Vinyl',
      voiceReply: 'मैंने आपके लिए टिकटॉक और रील्स का सेम टू सेम शॉर्ट वीडियो ऐप तैयार कर दिया है! वर्टिकल वीडियो, हार्ट बर्स्ट और रोटेटिंग म्यूजिक डिस्क लाइव चेक करें।',
    };
  }

  // 27. Discord Pro Guild Clone
  if (
    lower.includes('discord') ||
    lower.includes('डिस्कॉर्ड') ||
    lower.includes('guild') ||
    lower.includes('voice channel')
  ) {
    return {
      files: getDiscordAppFiles(),
      description: 'DISCORD PRO - Server Guilds, Voice Lounges, Channels & Bot Reactions',
      voiceReply: 'मैंने आपके लिए डिस्कॉर्ड का सेम टू सेम प्रो ऐप तैयार कर दिया है! टेक्स्ट चैनल्स, वॉयस लाउंज और बॉट ऑटो-रिप्लाई प्रिव्यू में टेस्ट करें।',
    };
  }

  // 28. Telegram Pro Cloud Messenger Clone
  if (
    lower.includes('telegram') ||
    lower.includes('टेलीग्राम') ||
    lower.includes('cloud chat') ||
    lower.includes('mtproto')
  ) {
    return {
      files: getTelegramAppFiles(),
      description: 'TELEGRAM PRO - Cloud Messaging, Voice Notes, Channels & Secret Chats',
      voiceReply: 'मैंने आपके लिए टेलीग्राम का सेम टू सेम प्रो क्लाउड मैसेंजर ऐप तैयार कर दिया है! वॉयस नोट्स, चैनल्स और पिन मैसेजेस लाइव चेक करें।',
    };
  }

  // 29. Netflix Pro Streaming Cinema Clone
  if (
    lower.includes('netflix') ||
    lower.includes('नेटफ्लिक्स') ||
    lower.includes('movie app') ||
    lower.includes('cinema') ||
    lower.includes('फिल्म वाला ऐप')
  ) {
    return {
      files: getNetflixAppFiles(),
      description: 'NETFLIX PRO - 4K Cinema Billboard, Trending Rows & Interactive Player',
      voiceReply: 'मैंने आपके लिए नेटफ्लिक्स का सेम टू सेम 4K स्ट्रीमिंग सिनेमा ऐप तैयार कर दिया है! हीरो बिलबोर्ड, कैटेगरी रोज़ और 4K प्लेयर प्रिव्यू में चलाएं।',
    };
  }

  // 30. Snapchat Pro Camera Streaks Clone
  if (
    lower.includes('snapchat') ||
    lower.includes('स्नैपचैट') ||
    lower.includes('snap') ||
    lower.includes('streak') ||
    lower.includes('स्ट्रीक')
  ) {
    return {
      files: getSnapchatAppFiles(),
      description: 'SNAPCHAT PRO - Camera Viewfinder, 74-Day Streaks, AR Filters & Snap Map',
      voiceReply: 'मैंने आपके लिए स्नैपचैट का सेम टू सेम कैमरा और 74-डे स्ट्रीक ऐप तैयार कर दिया है! एआर फिल्टर्स, शटर और स्ट्रीक्स लाइव चेक करें।',
    };
  }

  // 22. Intelligent Dynamic Custom App Generator for any other user prompt!
  return {
    files: getUniversalCustomAppFiles(prompt),
    description: `Universal Custom Application for "${prompt}"`,
    voiceReply: `मैंने आपके लिए "${prompt}" का कम्प्लीट एप्लीकेशन और कोड तैयार कर दिया है। प्रिव्यू टैब में लाइव चेक करें।`,
  };
}
