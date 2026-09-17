import { ProjectFiles } from './types';
import { CustomAIDefinition } from './components/AIMakerStudio';

// 1. Interactive Free Fire & BGMI Pro Sensi Suite Web App
export function getSensiAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Free Fire Pro Sensi & Headshot Suite</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800;900&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="logo-box">
        <span class="game-icon">⚡</span>
        <div>
          <h1>PRO SENSI HEADSHOT SUITE</h1>
          <p class="subtitle">CALIBRATED BY @NOWEMPIREOFF • 120FPS KERNEL</p>
        </div>
      </div>
      <div class="status-badge">
        <span class="pulse-dot"></span> ZERO TOUCH DELAY
      </div>
    </header>

    <!-- Game Tabs -->
    <div class="game-selector">
      <button class="game-tab active" data-game="freefire">Free Fire MAX</button>
      <button class="game-tab" data-game="bgmi">BGMI / PUBG</button>
      <button class="game-tab" data-game="codm">COD Mobile</button>
    </div>

    <!-- Phone RAM / DPI Selector -->
    <div class="spec-card">
      <div class="spec-item">
        <label>Device RAM</label>
        <select id="ramSelect">
          <option value="4gb">4 GB RAM (High Drag Sensi)</option>
          <option value="6gb">6 GB RAM (Balanced)</option>
          <option value="8gb" selected>8 GB RAM (Esports Pro)</option>
          <option value="12gb">12 GB+ RAM (Ultra Smooth)</option>
        </select>
      </div>
      <div class="spec-item">
        <label>Drag Technique</label>
        <select id="dragSelect">
          <option value="onetap">⚡ 1-Tap Straight Drag</option>
          <option value="jdrag">🔥 J-Drag Headshot</option>
          <option value="rotation">🔄 Full Rotation Drag</option>
        </select>
      </div>
    </div>

    <!-- Live Calculated Sensi Sliders -->
    <div class="sensi-board">
      <div class="board-header">
        <span>CALCULATED SENSITIVITY PRESETS</span>
        <button id="copyBtn" class="action-btn">📋 COPY CONFIG</button>
      </div>

      <div class="slider-row">
        <div class="slider-label">
          <span>General Sensitivity</span>
          <span class="val-badge" id="valGeneral">98</span>
        </div>
        <input type="range" id="sliderGeneral" min="50" max="100" value="98">
      </div>

      <div class="slider-row">
        <div class="slider-label">
          <span>Red Dot Scope</span>
          <span class="val-badge" id="valRedDot">94</span>
        </div>
        <input type="range" id="sliderRedDot" min="50" max="100" value="94">
      </div>

      <div class="slider-row">
        <div class="slider-label">
          <span>2X Scope</span>
          <span class="val-badge" id="val2x">88</span>
        </div>
        <input type="range" id="slider2x" min="40" max="100" value="88">
      </div>

      <div class="slider-row">
        <div class="slider-label">
          <span>4X Scope</span>
          <span class="val-badge" id="val4x">82</span>
        </div>
        <input type="range" id="slider4x" min="30" max="100" value="82">
      </div>

      <div class="slider-row">
        <div class="slider-label">
          <span>Sniper Scope</span>
          <span class="val-badge" id="valSniper">54</span>
        </div>
        <input type="range" id="sliderSniper" min="20" max="100" value="54">
      </div>
    </div>

    <!-- Drag Headshot Practice Area -->
    <div class="drag-practice-card">
      <div class="practice-header">
        <span>🎯 1-TAP DRAG VELOCITY TESTER</span>
        <span id="dragScore">SWIPE UP TO TEST</span>
      </div>
      <div id="dragPad" class="drag-pad">
        <div class="target-head" id="targetHead">🎯 AIM</div>
        <div class="fire-button" id="fireButton">🔥 DRAG ME UP</div>
      </div>
    </div>

    <!-- Extra Hardware Recommendations -->
    <div class="telemetry-box">
      <div class="tel-row">
        <span>Recommended Phone DPI:</span>
        <strong id="dpiVal" class="gold">440 DPI</strong>
      </div>
      <div class="tel-row">
        <span>Optimal Fire Button Size:</span>
        <strong id="btnSizeVal" class="gold">48%</strong>
      </div>
      <div class="tel-row">
        <span>Touch Sampling Rate:</span>
        <strong class="green">360 Hz (Sub-0.05ms)</strong>
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
}
body {
  background: #060810;
  color: #fff;
  font-family: 'Rajdhani', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 16px;
}
.app-container {
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 255, 204, 0.2);
  padding-bottom: 10px;
}
.logo-box {
  display: flex;
  align-items: center;
  gap: 8px;
}
.game-icon {
  font-size: 24px;
  background: rgba(0, 255, 204, 0.1);
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 204, 0.3);
}
h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #00ffcc;
  letter-spacing: 1px;
}
.subtitle {
  font-size: 9px;
  color: #8892b0;
  letter-spacing: 0.5px;
}
.status-badge {
  font-size: 9px;
  color: #00ffcc;
  background: rgba(0, 255, 204, 0.1);
  border: 1px solid rgba(0, 255, 204, 0.4);
  padding: 4px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 700;
}
.pulse-dot {
  width: 6px;
  height: 6px;
  background: #00ffcc;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ffcc;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
.game-selector {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}
.game-tab {
  background: #101422;
  border: 1px solid #1f2740;
  color: #8892b0;
  padding: 8px 4px;
  border-radius: 10px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
}
.game-tab.active {
  background: #00ffcc;
  color: #060810;
  border-color: #00ffcc;
  box-shadow: 0 0 12px rgba(0, 255, 204, 0.3);
}
.spec-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background: #0c101d;
  border: 1px solid #1a223a;
  padding: 10px;
  border-radius: 12px;
}
.spec-item label {
  display: block;
  font-size: 10px;
  color: #8892b0;
  margin-bottom: 4px;
}
.spec-item select {
  width: 100%;
  background: #141b2f;
  border: 1px solid #243054;
  color: #fff;
  padding: 6px;
  border-radius: 8px;
  font-size: 11px;
  font-family: 'Rajdhani', sans-serif;
  outline: none;
}
.sensi-board {
  background: #0c101d;
  border: 1px solid #1a223a;
  padding: 12px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.board-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  color: #00ffcc;
  border-bottom: 1px solid #1a223a;
  padding-bottom: 6px;
}
.action-btn {
  background: rgba(0, 255, 204, 0.15);
  border: 1px solid #00ffcc;
  color: #00ffcc;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 10px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  cursor: pointer;
}
.slider-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.slider-label {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #cbd5e1;
}
.val-badge {
  color: #00ffcc;
  font-weight: 800;
  font-family: 'Orbitron', sans-serif;
}
input[type="range"] {
  accent-color: #00ffcc;
  height: 4px;
  width: 100%;
}
.drag-practice-card {
  background: #0c101d;
  border: 1px solid #1a223a;
  padding: 12px;
  border-radius: 14px;
}
.practice-header {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 8px;
}
.drag-pad {
  height: 120px;
  background: #060810;
  border: 2px dashed rgba(245, 158, 11, 0.4);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  touch-action: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.target-head {
  padding: 4px 10px;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid #ef4444;
  color: #fca5a5;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 800;
}
.fire-button {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: #000;
  font-weight: 900;
  font-size: 11px;
  padding: 8px 18px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
  cursor: grab;
  user-select: none;
  transition: transform 0.1s;
}
.telemetry-box {
  background: #0c101d;
  border: 1px solid #1a223a;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
}
.tel-row {
  display: flex;
  justify-content: space-between;
  color: #94a3b8;
}
.gold { color: #f59e0b; font-weight: 700; }
.green { color: #10b981; font-weight: 700; }`,

    'script.js': `// Pro Sensi Engine Logic
const sliders = {
  general: document.getElementById('sliderGeneral'),
  redDot: document.getElementById('sliderRedDot'),
  scope2x: document.getElementById('slider2x'),
  scope4x: document.getElementById('slider4x'),
  sniper: document.getElementById('sliderSniper'),
};

const valBadges = {
  general: document.getElementById('valGeneral'),
  redDot: document.getElementById('valRedDot'),
  scope2x: document.getElementById('val2x'),
  scope4x: document.getElementById('val4x'),
  sniper: document.getElementById('valSniper'),
};

// Update labels on slider move
Object.keys(sliders).forEach(key => {
  sliders[key].addEventListener('input', (e) => {
    valBadges[key].innerText = e.target.value;
  });
});

// Game & RAM calculation presets
const ramSelect = document.getElementById('ramSelect');
const dragSelect = document.getElementById('dragSelect');
const dpiVal = document.getElementById('dpiVal');
const btnSizeVal = document.getElementById('btnSizeVal');
const gameTabs = document.querySelectorAll('.game-tab');

let currentGame = 'freefire';

gameTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    gameTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentGame = tab.dataset.game;
    recalculateSensi();
  });
});

ramSelect.addEventListener('change', recalculateSensi);
dragSelect.addEventListener('change', recalculateSensi);

function recalculateSensi() {
  const ram = ramSelect.value;
  let mult = ram === '12gb' ? 1.05 : ram === '8gb' ? 1.0 : ram === '6gb' ? 0.95 : 0.9;

  if (currentGame === 'freefire') {
    setValues(Math.round(98 * mult), Math.round(94 * mult), Math.round(88 * mult), Math.round(82 * mult), Math.round(54 * mult));
    dpiVal.innerText = ram === '12gb' ? '480 DPI' : ram === '8gb' ? '440 DPI' : '411 DPI';
    btnSizeVal.innerText = ram === '4gb' ? '54%' : '48%';
  } else if (currentGame === 'bgmi') {
    setValues(Math.round(145 * mult), Math.round(62 * mult), Math.round(44 * mult), Math.round(26 * mult), Math.round(14 * mult));
    dpiVal.innerText = '420 DPI (Gyroscope Recommended)';
    btnSizeVal.innerText = '130%';
  } else {
    setValues(Math.round(90 * mult), Math.round(85 * mult), Math.round(78 * mult), Math.round(68 * mult), Math.round(50 * mult));
    dpiVal.innerText = '440 DPI';
    btnSizeVal.innerText = '50%';
  }
}

function setValues(gen, red, s2, s4, snip) {
  sliders.general.value = Math.min(100, gen);
  valBadges.general.innerText = sliders.general.value;
  sliders.redDot.value = Math.min(100, red);
  valBadges.redDot.innerText = sliders.redDot.value;
  sliders.scope2x.value = Math.min(100, s2);
  valBadges.scope2x.innerText = sliders.scope2x.value;
  sliders.scope4x.value = Math.min(100, s4);
  valBadges.scope4x.innerText = sliders.scope4x.value;
  sliders.sniper.value = Math.min(100, snip);
  valBadges.sniper.innerText = sliders.sniper.value;
}

// Copy Config
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = \`PRO SENSI CONFIG: General \${sliders.general.value} | RedDot \${sliders.redDot.value} | 2X \${sliders.scope2x.value} | 4X \${sliders.scope4x.value} | DPI \${dpiVal.innerText}\`;
  navigator.clipboard.writeText(text);
  const btn = document.getElementById('copyBtn');
  btn.innerText = '✔ COPIED!';
  setTimeout(() => btn.innerText = '📋 COPY CONFIG', 1500);
});

// Drag Pad Interactive Drag Headshot tester
const fireButton = document.getElementById('fireButton');
const dragScore = document.getElementById('dragScore');
let startY = 0;
let startTime = 0;

fireButton.addEventListener('pointerdown', (e) => {
  startY = e.clientY;
  startTime = Date.now();
  fireButton.setPointerCapture(e.pointerId);
});

fireButton.addEventListener('pointermove', (e) => {
  if (!startY) return;
  const deltaY = startY - e.clientY;
  if (deltaY > 0) {
    fireButton.style.transform = \`translateY(-\${Math.min(60, deltaY)}px)\`;
  }
});

fireButton.addEventListener('pointerup', (e) => {
  if (!startY) return;
  const deltaY = startY - e.clientY;
  const elapsed = Math.max(1, Date.now() - startTime);
  const velocity = Math.round((deltaY / elapsed) * 100);

  if (deltaY > 35) {
    dragScore.innerHTML = \`💥 PERFECT HEADSHOT! Velocity: \${velocity} px/ms\`;
    dragScore.style.color = '#ef4444';
  } else {
    dragScore.innerHTML = \`⚠️ DRAG HIGHER! Speed: \${velocity} px/ms\`;
    dragScore.style.color = '#f59e0b';
  }

  fireButton.style.transform = 'translateY(0)';
  startY = 0;
});
`,
  };
}

// 2. Custom Floating Crosshair & Claw HUD App
export function getHudOverlayAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pro Gaming Crosshair & Claw HUD Studio</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="studio-wrapper">
    <div class="hud-canvas-container" id="hudContainer">
      <!-- Live Crosshair Center -->
      <div class="crosshair-anchor" id="crosshairAnchor">
        <div class="crosshair-element" id="crosshairElement"></div>
      </div>

      <!-- Simulated Game Target -->
      <div class="target-dummy">
        <div class="head">HEAD</div>
        <div class="chest">BODY</div>
      </div>

      <!-- 4-Claw HUD Buttons On Screen -->
      <div class="hud-button fire" id="hudFire">🔥 FIRE</div>
      <div class="hud-button scope" id="hudScope">🎯 SCOPE</div>
      <div class="hud-button jump" id="hudJump">⬆️ JUMP</div>
      <div class="hud-button crouch" id="hudCrouch">🧎 CROUCH</div>
      <div class="hud-button gloo" id="hudGloo">🛡️ GLOO</div>
    </div>

    <!-- Controls Panel -->
    <div class="controls-panel">
      <div class="panel-header">
        <h2>CROSSHAIR &amp; CLAW HUD DESIGNER</h2>
        <span class="badge">PRO ESPORTS</span>
      </div>

      <div class="control-group">
        <label>Crosshair Style</label>
        <div class="btn-grid">
          <button class="style-btn active" data-style="dot">Dot Point</button>
          <button class="style-btn" data-style="circle">Circle Reticle</button>
          <button class="style-btn" data-style="classic">Classic +</button>
          <button class="style-btn" data-style="diamond">Diamond</button>
        </div>
      </div>

      <div class="control-group">
        <label>Neon Color</label>
        <div class="color-picker">
          <span class="color-dot active" style="background: #00ffcc" data-color="#00ffcc"></span>
          <span class="color-dot" style="background: #ff0055" data-color="#ff0055"></span>
          <span class="color-dot" style="background: #ffea00" data-color="#ffea00"></span>
          <span class="color-dot" style="background: #39ff14" data-color="#39ff14"></span>
          <span class="color-dot" style="background: #ffffff" data-color="#ffffff"></span>
        </div>
      </div>

      <div class="control-group">
        <div class="label-row">
          <span>Crosshair Size</span>
          <span id="sizeVal">12px</span>
        </div>
        <input type="range" id="sizeRange" min="4" max="28" value="12">
      </div>

      <div class="control-group">
        <div class="label-row">
          <span>HUD Preset</span>
        </div>
        <div class="btn-grid">
          <button class="hud-tab active" data-claw="4claw">4-Finger Claw</button>
          <button class="hud-tab" data-claw="3claw">3-Finger Claw</button>
          <button class="hud-tab" data-claw="2thumb">2-Thumb Casual</button>
        </div>
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
}
body {
  background: #070913;
  color: #fff;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}
.studio-wrapper {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.hud-canvas-container {
  height: 280px;
  background: radial-gradient(circle at center, #141b2d 0%, #080a14 100%);
  border: 1px solid #1f2a48;
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.crosshair-anchor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  pointer-events: none;
}
.crosshair-element {
  width: 12px;
  height: 12px;
  background: #00ffcc;
  border-radius: 50%;
  box-shadow: 0 0 12px #00ffcc;
  transition: all 0.15s;
}
.target-dummy {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.25;
  pointer-events: none;
}
.target-dummy .head {
  width: 40px;
  height: 40px;
  border: 2px solid #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 800;
  color: #ef4444;
}
.target-dummy .chest {
  width: 70px;
  height: 70px;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 800;
  color: #3b82f6;
}
.hud-button {
  position: absolute;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: grab;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.hud-button.fire { width: 56px; height: 56px; bottom: 20px; right: 20px; border-color: #f59e0b; color: #f59e0b; }
.hud-button.scope { width: 44px; height: 44px; top: 20px; right: 20px; border-color: #00ffcc; color: #00ffcc; }
.hud-button.jump { width: 42px; height: 42px; bottom: 85px; right: 26px; }
.hud-button.crouch { width: 42px; height: 42px; bottom: 20px; right: 90px; }
.hud-button.gloo { width: 46px; height: 46px; bottom: 20px; left: 20px; border-color: #3b82f6; color: #93c5fd; }

.controls-panel {
  background: #0d1222;
  border: 1px solid #1a233d;
  border-radius: 18px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1a233d;
  padding-bottom: 8px;
}
h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 11px;
  color: #00ffcc;
  letter-spacing: 0.5px;
}
.badge {
  font-size: 9px;
  background: rgba(0, 255, 204, 0.15);
  color: #00ffcc;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 700;
}
.control-group label {
  font-size: 11px;
  color: #94a3b8;
  display: block;
  margin-bottom: 4px;
}
.label-row {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #94a3b8;
  margin-bottom: 4px;
}
.btn-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.btn-grid button {
  background: #141b2f;
  border: 1px solid #243152;
  color: #cbd5e1;
  padding: 6px 2px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
}
.btn-grid button.active {
  background: #00ffcc;
  color: #000;
  border-color: #00ffcc;
  font-weight: 700;
}
.color-picker {
  display: flex;
  gap: 8px;
}
.color-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.15s;
}
.color-dot.active {
  transform: scale(1.2);
  border-color: #fff;
}
input[type="range"] {
  width: 100%;
  accent-color: #00ffcc;
}`,

    'script.js': `const crosshair = document.getElementById('crosshairElement');
const sizeRange = document.getElementById('sizeRange');
const sizeVal = document.getElementById('sizeVal');
const styleButtons = document.querySelectorAll('.style-btn');
const colorDots = document.querySelectorAll('.color-dot');
const hudTabs = document.querySelectorAll('.hud-tab');

let activeColor = '#00ffcc';
let activeStyle = 'dot';

// Size Change
sizeRange.addEventListener('input', (e) => {
  const size = e.target.value;
  sizeVal.innerText = size + 'px';
  crosshair.style.width = size + 'px';
  crosshair.style.height = size + 'px';
});

// Color Change
colorDots.forEach(dot => {
  dot.addEventListener('click', () => {
    colorDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    activeColor = dot.dataset.color;
    crosshair.style.background = activeColor;
    crosshair.style.boxShadow = \`0 0 10px \${activeColor}\`;
    if (activeStyle === 'circle') {
      crosshair.style.borderColor = activeColor;
    }
  });
});

// Style Change
styleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    styleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeStyle = btn.dataset.style;

    if (activeStyle === 'dot') {
      crosshair.style.borderRadius = '50%';
      crosshair.style.border = 'none';
      crosshair.style.background = activeColor;
    } else if (activeStyle === 'circle') {
      crosshair.style.borderRadius = '50%';
      crosshair.style.border = \`2px solid \${activeColor}\`;
      crosshair.style.background = 'transparent';
    } else if (activeStyle === 'diamond') {
      crosshair.style.borderRadius = '2px';
      crosshair.style.transform = 'rotate(45deg)';
      crosshair.style.background = activeColor;
    } else if (activeStyle === 'classic') {
      crosshair.style.borderRadius = '0';
      crosshair.style.background = activeColor;
    }
  });
});

// Make HUD Buttons draggable on the canvas
const buttons = document.querySelectorAll('.hud-button');
buttons.forEach(btn => {
  let isDragging = false;
  let startX, startY, origLeft, origTop;

  btn.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    origLeft = btn.offsetLeft;
    origTop = btn.offsetTop;
    btn.setPointerCapture(e.pointerId);
  });

  btn.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    btn.style.left = (origLeft + dx) + 'px';
    btn.style.top = (origTop + dy) + 'px';
    btn.style.bottom = 'auto';
    btn.style.right = 'auto';
  });

  btn.addEventListener('pointerup', () => {
    isDragging = false;
  });
});
`,
  };
}

// 3. Standalone Generated Custom AI Web App
export function getCustomAIAppFiles(ai: CustomAIDefinition): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>${ai.name} • Standalone Custom AI</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="chat-container">
    <!-- AI Brand Header -->
    <header class="ai-header">
      <div class="brand">
        <div class="ai-avatar">${ai.emoji}</div>
        <div>
          <h1>${ai.name}</h1>
          <p class="tagline">${ai.category} • ${ai.tone}</p>
        </div>
      </div>
      <div class="online-pill">
        <span class="dot"></span> Online &amp; Autonomous
      </div>
    </header>

    <!-- Quick Prompt Suggestions -->
    <div class="chips-row">
      <button class="chip" data-text="नमस्ते! आप क्या-क्या कर सकते हैं?">🌟 Introduction</button>
      <button class="chip" data-text="मुझे अपनी सबसे बेहतरीन टिप या एडवाइस दो!">⚡ Best Tip</button>
      <button class="chip" data-text="मेरे लिए एक नया मास्टर प्लान बनाओ!">🎯 Master Plan</button>
    </div>

    <!-- Messages Window -->
    <div class="chat-feed" id="chatFeed">
      <div class="msg ai">
        <div class="avatar-small">${ai.emoji}</div>
        <div class="bubble">
          <div class="sender-name">${ai.name}</div>
          <div class="text">${ai.sampleGreeting}</div>
        </div>
      </div>
    </div>

    <!-- Input Box -->
    <form class="input-form" id="chatForm">
      <input 
        type="text" 
        id="userInput" 
        placeholder="Type anything to ask ${ai.name}..." 
        autocomplete="off"
      />
      <button type="submit" id="sendBtn">
        <span>Send</span> ➔
      </button>
    </form>
  </div>
  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #090b14;
  color: #f1f5f9;
  font-family: 'Outfit', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 12px;
}
.chat-container {
  width: 100%;
  max-width: 460px;
  background: #101424;
  border: 1px solid #1e2642;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  height: 94vh;
}
.ai-header {
  padding: 14px 16px;
  background: #141a30;
  border-bottom: 1px solid #202a4a;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ai-avatar {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
}
h1 {
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.3px;
}
.tagline {
  font-size: 11px;
  color: #94a3b8;
}
.online-pill {
  font-size: 10px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981;
  padding: 4px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
}
.dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
}
.chips-row {
  display: flex;
  gap: 6px;
  padding: 8px 12px;
  overflow-x: auto;
  border-bottom: 1px solid #1a2238;
}
.chip {
  background: #171e36;
  border: 1px solid #253154;
  color: #cbd5e1;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 12px;
  white-space: nowrap;
  cursor: pointer;
}
.chat-feed {
  flex: 1;
  padding: 14px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.msg {
  display: flex;
  gap: 8px;
  max-width: 86%;
}
.msg.ai { align-self: flex-start; }
.msg.user { align-self: flex-end; flex-direction: row-reverse; }
.avatar-small {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: #1e2642;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
}
.bubble {
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13px;
  line-height: 1.5;
}
.msg.ai .bubble {
  background: #171e36;
  border: 1px solid #253154;
  color: #e2e8f0;
  border-top-left-radius: 4px;
}
.msg.user .bubble {
  background: linear-gradient(135deg, #a855f7, #7c3aed);
  color: #fff;
  border-top-right-radius: 4px;
}
.sender-name {
  font-size: 10px;
  font-weight: 700;
  color: #a855f7;
  margin-bottom: 2px;
}
.input-form {
  padding: 10px 12px;
  background: #141a30;
  border-top: 1px solid #202a4a;
  display: flex;
  gap: 8px;
}
input[type="text"] {
  flex: 1;
  background: #090b14;
  border: 1px solid #222c4c;
  color: #fff;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 13px;
  outline: none;
  font-family: 'Outfit', sans-serif;
}
button#sendBtn {
  background: linear-gradient(135deg, #a855f7, #6366f1);
  color: #fff;
  border: none;
  padding: 0 16px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}`,

    'script.js': `const chatFeed = document.getElementById('chatFeed');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chips = document.querySelectorAll('.chip');

// Persona Prompt definition baked in
const systemPersona = ${JSON.stringify(ai.systemPrompt)};
const aiName = ${JSON.stringify(ai.name)};
const aiEmoji = ${JSON.stringify(ai.emoji)};

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    userInput.value = chip.dataset.text;
    chatForm.dispatchEvent(new Event('submit'));
  });
});

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  // Append User message
  appendMessage('user', text);
  userInput.value = '';

  // Show thinking indicator
  const thinkingId = appendThinking();

  try {
    const res = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: text,
        mode: 'AI Maker',
        customSystemPrompt: systemPersona,
        customAiName: aiName
      })
    });
    const data = await res.json();
    removeThinking(thinkingId);
    appendMessage('ai', data.text || \`[\${aiName}]: कार्य पूर्ण!\`);
  } catch (err) {
    removeThinking(thinkingId);
    appendMessage('ai', \`नमस्ते! मैं \${aiName} हूँ। आपने पूछा: "\${text}"। मैं आपकी सहायता करने के लिए तैयार हूँ।\`);
  }
});

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.className = \`msg \${sender}\`;
  if (sender === 'ai') {
    div.innerHTML = \`
      <div class="avatar-small">\${aiEmoji}</div>
      <div class="bubble">
        <div class="sender-name">\${aiName}</div>
        <div class="text">\${text}</div>
      </div>
    \`;
  } else {
    div.innerHTML = \`
      <div class="bubble">
        <div class="text">\${text}</div>
      </div>
    \`;
  }
  chatFeed.appendChild(div);
  chatFeed.scrollTop = chatFeed.scrollHeight;
}

function appendThinking() {
  const id = 'thinking-' + Date.now();
  const div = document.createElement('div');
  div.id = id;
  div.className = 'msg ai';
  div.innerHTML = \`
    <div class="avatar-small">\${aiEmoji}</div>
    <div class="bubble" style="opacity: 0.6; font-style: italic;">
      \${aiName} is thinking...
    </div>
  \`;
  chatFeed.appendChild(div);
  chatFeed.scrollTop = chatFeed.scrollHeight;
  return id;
}

function removeThinking(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}
`,
  };
}
