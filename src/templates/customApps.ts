import { ProjectFiles } from '../types';

// Real 60FPS Car Racing Highway Game
export function getCarRacingGameFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>🏎️ NITRO RACER 3D | Cyber Highway</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="game-container">
    <div class="hud">
      <div class="hud-box">
        <span class="hud-label">SPEED</span>
        <span id="speedVal" class="hud-val text-cyan">180 KM/H</span>
      </div>
      <div class="hud-box center">
        <span class="hud-label">DISTANCE</span>
        <span id="scoreVal" class="hud-val text-amber">0 M</span>
      </div>
      <div class="hud-box">
        <span class="hud-label">NITRO</span>
        <div class="nitro-bar"><div id="nitroFill" class="nitro-fill"></div></div>
      </div>
    </div>

    <div class="canvas-wrap">
      <canvas id="roadCanvas" width="360" height="520"></canvas>
      <div id="startOverlay" class="overlay active">
        <h2>🏎️ NITRO RACER 3D</h2>
        <p>Cyber Highway Speed Challenge</p>
        <button id="startBtn" class="play-btn">START RACE</button>
      </div>
      <div id="crashOverlay" class="overlay">
        <h2 class="text-red">💥 VEHICLE CRASHED</h2>
        <p>Total Distance: <span id="finalScore">0</span> Meters</p>
        <button id="restartBtn" class="play-btn">RETRY</button>
      </div>
    </div>

    <div class="controls">
      <button id="btnLeft" class="ctrl-btn">◀ STEER LEFT</button>
      <button id="btnNitro" class="ctrl-btn nitro-btn">⚡ NITRO BOOST</button>
      <button id="btnRight" class="ctrl-btn">STEER RIGHT ▶</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { box-sizing: border-box; margin: 0; padding: 0; font-family: monospace; user-select: none; }
body { background: #05070d; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.game-container { width: 100%; max-width: 400px; height: 100vh; max-height: 720px; background: #0a0d18; border: 1px solid rgba(0,240,255,0.3); border-radius: 20px; display: flex; flex-direction: column; overflow: hidden; }
.hud { display: flex; justify-content: space-between; padding: 12px 16px; background: rgba(0,0,0,0.6); border-bottom: 1px solid rgba(255,255,255,0.1); }
.hud-box { display: flex; flex-direction: column; }
.hud-label { font-size: 9px; color: #888; }
.hud-val { font-size: 14px; font-weight: 800; }
.text-cyan { color: #00f0ff; }
.text-amber { color: #f59e0b; }
.text-red { color: #ef4444; }
.nitro-bar { width: 60px; height: 8px; background: #222; border-radius: 4px; overflow: hidden; margin-top: 4px; }
.nitro-fill { width: 100%; height: 100%; background: #00f0ff; transition: width 0.1s; }
.canvas-wrap { flex: 1; position: relative; background: #111; display: flex; justify-content: center; }
canvas { width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); display: none; flex-direction: column; justify-content: center; align-items: center; gap: 14px; }
.overlay.active { display: flex; }
.play-btn { background: #00f0ff; color: #000; border: none; padding: 12px 28px; border-radius: 30px; font-weight: 800; cursor: pointer; font-size: 14px; }
.controls { display: flex; gap: 8px; padding: 12px; background: #080b12; }
.ctrl-btn { flex: 1; padding: 16px 8px; background: #171d31; border: 1px solid rgba(255,255,255,0.1); color: #fff; font-weight: bold; border-radius: 10px; cursor: pointer; }
.ctrl-btn:active { background: #00f0ff; color: #000; }
.nitro-btn { background: rgba(245,158,11,0.2); border-color: #f59e0b; color: #f59e0b; }`,
    'script.js': `const canvas = document.getElementById('roadCanvas');
const ctx = canvas.getContext('2d');
let running = false;
let score = 0;
let speed = 6;
let isNitro = false;
let player = { x: 180, y: 440, w: 36, h: 64, vx: 0, color: '#00f0ff' };
let obstacles = [];
let roadLines = [];

for (let i = 0; i < 10; i++) {
  roadLines.push({ y: i * 60 });
}

function spawnObstacle() {
  const lanes = [80, 140, 200, 260];
  const x = lanes[Math.floor(Math.random() * lanes.length)];
  const colors = ['#ff0055', '#ffb703', '#a855f7', '#22c55e'];
  obstacles.push({
    x: x - 18,
    y: -70,
    w: 36,
    h: 60,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 3 + Math.random() * 2
  });
}

function loop() {
  if (!running) return;
  ctx.fillStyle = '#1c1f2b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Road Borders & lines
  ctx.fillStyle = '#334155';
  ctx.fillRect(40, 0, 10, canvas.height);
  ctx.fillRect(canvas.width - 50, 0, 10, canvas.height);

  const currentSpeed = isNitro ? speed * 1.8 : speed;
  score += Math.floor(currentSpeed / 2);
  document.getElementById('scoreVal').innerText = score + ' M';
  document.getElementById('speedVal').innerText = Math.floor(currentSpeed * 26) + ' KM/H';

  // Road dash lines
  ctx.fillStyle = '#f8fafc';
  roadLines.forEach(l => {
    l.y += currentSpeed;
    if (l.y > canvas.height) l.y = -40;
    ctx.fillRect(130, l.y, 6, 30);
    ctx.fillRect(220, l.y, 6, 30);
  });

  // Player Car
  player.x += player.vx;
  player.x = Math.max(55, Math.min(canvas.width - 90, player.x));

  ctx.fillStyle = player.color;
  ctx.shadowColor = player.color;
  ctx.shadowBlur = 12;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  // windshield
  ctx.fillStyle = '#000';
  ctx.shadowBlur = 0;
  ctx.fillRect(player.x + 6, player.y + 14, player.w - 12, 14);

  // Obstacles
  if (Math.random() < 0.03) spawnObstacle();
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obs = obstacles[i];
    obs.y += currentSpeed - obs.speed;
    ctx.fillStyle = obs.color;
    ctx.fillRect(obs.x, obs.y, obs.w, obs.h);

    // Collision detection
    if (
      player.x < obs.x + obs.w &&
      player.x + player.w > obs.x &&
      player.y < obs.y + obs.h &&
      player.y + player.h > obs.y
    ) {
      running = false;
      document.getElementById('crashOverlay').classList.add('active');
      document.getElementById('finalScore').innerText = score;
      return;
    }

    if (obs.y > canvas.height + 80) obstacles.splice(i, 1);
  }

  requestAnimationFrame(loop);
}

document.getElementById('startBtn').onclick = () => {
  document.getElementById('startOverlay').classList.remove('active');
  score = 0;
  obstacles = [];
  player.x = 160;
  running = true;
  requestAnimationFrame(loop);
};

document.getElementById('restartBtn').onclick = () => {
  document.getElementById('crashOverlay').classList.remove('active');
  score = 0;
  obstacles = [];
  player.x = 160;
  running = true;
  requestAnimationFrame(loop);
};

// Steer buttons
const bLeft = document.getElementById('btnLeft');
const bRight = document.getElementById('btnRight');
const bNitro = document.getElementById('btnNitro');

bLeft.onmousedown = bLeft.ontouchstart = () => { player.vx = -7; };
bLeft.onmouseup = bLeft.ontouchend = () => { player.vx = 0; };
bRight.onmousedown = bRight.ontouchstart = () => { player.vx = 7; };
bRight.onmouseup = bRight.ontouchend = () => { player.vx = 0; };
bNitro.onmousedown = bNitro.ontouchstart = () => { isNitro = true; };
bNitro.onmouseup = bNitro.ontouchend = () => { isNitro = false; };

window.onkeydown = (e) => {
  if (e.key === 'ArrowLeft') player.vx = -7;
  if (e.key === 'ArrowRight') player.vx = 7;
  if (e.key === ' ') isNitro = true;
};
window.onkeyup = (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.vx = 0;
  if (e.key === ' ') isNitro = false;
};
`
  };
}

// Drawing & Canvas Paint Studio App
export function getDrawingPaintAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎨 Cyber Paint Studio | Digital Drawing Pad</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="paint-app">
    <header class="paint-header">
      <div class="logo">🎨 Cyber Paint</div>
      <div class="actions">
        <button id="clearBtn" class="btn">Clear</button>
        <button id="downloadBtn" class="btn btn-primary">Download</button>
      </div>
    </header>

    <div class="canvas-wrap">
      <canvas id="paintCanvas" width="360" height="480"></canvas>
    </div>

    <div class="toolbar">
      <div class="palette">
        <button class="color-btn active" style="background:#00f0ff" data-c="#00f0ff"></button>
        <button class="color-btn" style="background:#ff0055" data-c="#ff0055"></button>
        <button class="color-btn" style="background:#ffb703" data-c="#ffb703"></button>
        <button class="color-btn" style="background:#22c55e" data-c="#22c55e"></button>
        <button class="color-btn" style="background:#ffffff" data-c="#ffffff"></button>
        <button class="color-btn" style="background:#000000; border:1px solid #444;" data-c="#000000"></button>
      </div>
      <div class="brush-size">
        <span>Size:</span>
        <input type="range" id="sizeRange" min="2" max="30" value="6" />
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }
body { background: #070a12; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.paint-app { width: 100%; max-width: 420px; height: 100vh; max-height: 720px; background: #0e1322; border: 1px solid rgba(0,240,255,0.2); border-radius: 16px; display: flex; flex-direction: column; overflow: hidden; }
.paint-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #13192d; border-bottom: 1px solid rgba(255,255,255,0.1); }
.logo { font-size: 15px; font-weight: bold; color: #00f0ff; }
.btn { background: #1d2540; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 12px; cursor: pointer; }
.btn-primary { background: #00f0ff; color: #000; font-weight: bold; }
.canvas-wrap { flex: 1; background: #fff; display: flex; align-items: center; justify-content: center; }
canvas { background: #ffffff; cursor: crosshair; touch-action: none; }
.toolbar { padding: 12px 16px; background: #13192d; display: flex; justify-content: space-between; align-items: center; }
.palette { display: flex; gap: 8px; }
.color-btn { width: 26px; height: 26px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; }
.color-btn.active { border-color: #fff; transform: scale(1.15); }
.brush-size { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #888; }
.brush-size input { width: 80px; }`,
    'script.js': `const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
let painting = false;
let color = '#00f0ff';
let lineWidth = 6;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';

function startPos(e) {
  painting = true;
  draw(e);
}
function endPos() {
  painting = false;
  ctx.beginPath();
}
function draw(e) {
  if (!painting) return;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
  const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startPos);
canvas.addEventListener('mouseup', endPos);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', startPos);
canvas.addEventListener('touchend', endPos);
canvas.addEventListener('touchmove', draw);

document.querySelectorAll('.color-btn').forEach(b => {
  b.onclick = () => {
    document.querySelectorAll('.color-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    color = b.dataset.c;
  };
});

document.getElementById('sizeRange').oninput = (e) => {
  lineWidth = e.target.value;
};

document.getElementById('clearBtn').onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

document.getElementById('downloadBtn').onclick = () => {
  const link = document.createElement('a');
  link.download = 'cyber-sketch.png';
  link.href = canvas.toDataURL();
  link.click();
};
`
  };
}

// Interactive Music Beat Maker & Synth
export function getMusicBeatMakerFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎹 Cyber Beat Synth | Web Audio Music Station</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="music-station">
    <header class="top-nav">
      <h2>🎹 CYBER BEAT LAB</h2>
      <span class="bpm-pill">BPM: 128</span>
    </header>

    <div class="synth-pads">
      <div class="pad-grid">
        <button class="beat-pad pad-kick" data-note="kick">🥁 KICK</button>
        <button class="beat-pad pad-snare" data-note="snare">💥 SNARE</button>
        <button class="beat-pad pad-hihat" data-note="hihat">⚡ HI-HAT</button>
        <button class="beat-pad pad-synth" data-note="synth1">✨ LEAD C4</button>
        <button class="beat-pad pad-synth" data-note="synth2">🎵 LEAD E4</button>
        <button class="beat-pad pad-synth" data-note="synth3">🎶 LEAD G4</button>
        <button class="beat-pad pad-bass" data-note="bass1">🔊 SUB BASS</button>
        <button class="beat-pad pad-laser" data-note="laser">🚀 FX ZAP</button>
      </div>
    </div>

    <div class="visualizer">
      <canvas id="audioVisualizer" width="340" height="80"></canvas>
    </div>

    <footer class="info">
      <span>Tap pads to synthesize live analog waveform tones</span>
    </footer>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { box-sizing: border-box; margin: 0; padding: 0; font-family: monospace; user-select: none; }
body { background: #060810; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.music-station { width: 100%; max-width: 400px; height: 100vh; max-height: 700px; background: #0c101c; border: 1px solid rgba(0,240,255,0.3); border-radius: 20px; display: flex; flex-direction: column; overflow: hidden; padding: 16px; justify-content: space-between; }
.top-nav { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; }
.top-nav h2 { font-size: 16px; color: #00f0ff; }
.bpm-pill { background: rgba(245,158,11,0.2); border: 1px solid #f59e0b; color: #f59e0b; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; }
.pad-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
.beat-pad { height: 90px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.1); background: #151b2e; color: #cbd5e1; font-weight: 800; font-size: 13px; cursor: pointer; transition: all 0.1s; }
.beat-pad:active { transform: scale(0.96); }
.pad-kick { border-color: #ef4444; color: #f87171; }
.pad-kick:active { background: #ef4444; color: #000; box-shadow: 0 0 20px #ef4444; }
.pad-snare { border-color: #00f0ff; color: #00f0ff; }
.pad-snare:active { background: #00f0ff; color: #000; box-shadow: 0 0 20px #00f0ff; }
.pad-synth { border-color: #a855f7; color: #c084fc; }
.pad-synth:active { background: #a855f7; color: #000; box-shadow: 0 0 20px #a855f7; }
.pad-bass { border-color: #f59e0b; color: #f59e0b; }
.pad-bass:active { background: #f59e0b; color: #000; box-shadow: 0 0 20px #f59e0b; }
.pad-laser { border-color: #22c55e; color: #4ade80; }
.pad-laser:active { background: #22c55e; color: #000; box-shadow: 0 0 20px #22c55e; }
.visualizer { background: #070912; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); padding: 8px; display: flex; justify-content: center; }
.info { text-align: center; font-size: 10px; color: #64748b; }`,
    'script.js': `const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const now = audioCtx.currentTime;

  if (type === 'kick') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.3);
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'snare') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  } else if (type.startsWith('synth')) {
    const freqs = { synth1: 261.63, synth2: 329.63, synth3: 392.00 };
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freqs[type] || 440, now);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'bass1') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(65, now);
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  } else {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }
}

document.querySelectorAll('.beat-pad').forEach(pad => {
  pad.addEventListener('click', () => {
    playTone(pad.dataset.note);
  });
});
`
  };
}
