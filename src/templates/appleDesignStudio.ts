import { ProjectFiles } from '../types';

export function getAppleDesignStudioGameFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title> Apple Design Studio 3D | iPhone & MacBook Design Lab</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="studio-app">
    <!-- Top Navigation -->
    <header class="studio-nav">
      <div class="brand">
        <span class="apple-logo"></span>
        <div>
          <h1>Design Studio <span>3D</span></h1>
          <small>Prototyping &amp; Keynote Simulator</small>
        </div>
      </div>

      <div class="nav-metrics">
        <div class="metric-pill">
          <span class="lbl">MSRP</span>
          <span id="msrpVal" class="val text-gold">$1,499</span>
        </div>
        <div class="metric-pill">
          <span class="lbl">Score</span>
          <span id="scoreBadge" class="val text-cyan">98.5 ★</span>
        </div>
        <button id="btnLaunchKeynote" class="btn-keynote">
          <span>🚀 Keynote Launch</span>
        </button>
      </div>
    </header>

    <!-- Device Selector Bar -->
    <div class="device-selector">
      <button class="dev-tab active" data-device="iphone16promax">
        <span class="dev-icon">📱</span>
        <span class="dev-name">iPhone 16 Pro Max</span>
      </button>
      <button class="dev-tab" data-device="iphonefold">
        <span class="dev-icon">📖</span>
        <span class="dev-name">iPhone Fold Ultra</span>
      </button>
      <button class="dev-tab" data-device="macbookpro">
        <span class="dev-icon">💻</span>
        <span class="dev-name">MacBook Pro 16" M4</span>
      </button>
      <button class="dev-tab" data-device="macbookair">
        <span class="dev-icon">💻</span>
        <span class="dev-name">MacBook Air 15"</span>
      </button>
    </div>

    <!-- Main Workspace -->
    <main class="workspace">
      <!-- 3D Viewport Stage -->
      <section class="stage-section">
        <div class="stage-toolbar">
          <div class="view-toggles">
            <button id="btnFlip" class="tool-btn active">🔄 Flip (Front / Back)</button>
            <button id="btnAngle" class="tool-btn">📐 3D Angle</button>
          </div>
          <div class="stage-actions">
            <button id="btnScreenPower" class="tool-btn" title="Toggle Display Power">⚡ Screen: <span id="powerStatus">ON</span></button>
            <button id="btnFlashlight" class="tool-btn" title="Toggle Torch / Glow">💡 Glow: <span id="glowStatus">OFF</span></button>
            <button id="btnSnapshot" class="tool-btn camera-btn" title="Snap Photo">📸 Snap Photo</button>
          </div>
        </div>

        <div class="viewport-canvas-wrap" id="viewportWrap">
          <div class="lighting-reflection"></div>
          
          <!-- Flash Beam Effect -->
          <div id="flashBeam" class="flash-beam"></div>

          <!-- Camera Shutter Flash -->
          <div id="shutterFlash" class="shutter-flash"></div>

          <!-- DEVICE CONTAINER -->
          <div class="device-wrapper" id="deviceWrapper">
            
            <!-- 1. IPHONE 16 PRO MAX / FOLD -->
            <div id="iphoneView" class="device-box iphone-box">
              <!-- FRONT FACE (SCREEN) -->
              <div class="face face-front" id="iphoneFront">
                <div class="iphone-screen" id="iphoneScreen">
                  <!-- Dynamic Island -->
                  <div class="dynamic-island" id="dynamicIsland">
                    <div class="island-camera"></div>
                    <div class="island-pill" id="islandPill">
                      <span class="island-wave">♫</span>
                      <span class="island-text">Starboy - The Weeknd</span>
                      <div class="island-bars">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>

                  <!-- Lock Screen Content -->
                  <div class="lock-screen-content">
                    <div class="lock-time" id="lockTime">09:41</div>
                    <div class="lock-date" id="lockDate">Tuesday, September 15</div>
                    
                    <div class="widget-row">
                      <div class="mini-widget">
                        <span>🔋 96%</span>
                      </div>
                      <div class="mini-widget">
                        <span>☁️ 24°C</span>
                      </div>
                      <div class="mini-widget">
                        <span>⚡ 3.4 GHz</span>
                      </div>
                    </div>

                    <div class="bottom-lock-controls">
                      <button class="lock-circle-btn" onclick="toggleFlashlight()">🔦</button>
                      <span class="swipe-hint">Swipe up to unlock</span>
                      <button class="lock-circle-btn" onclick="snapKeynotePhoto()">📷</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- BACK FACE (CHASSIS) -->
              <div class="face face-back" id="iphoneBack">
                <!-- Camera Plateau Module -->
                <div class="camera-bump" id="cameraBump">
                  <!-- Lenses rendered dynamically via JS -->
                  <div class="lens-cluster" id="lensCluster"></div>
                  <!-- LiDAR & Flash -->
                  <div class="sensor-cluster">
                    <div class="sensor-flash" id="backFlash"></div>
                    <div class="sensor-lidar"></div>
                  </div>
                </div>

                <!-- Center Apple Logo -->
                <div class="apple-center-logo" id="iphoneAppleLogo">
                  <span></span>
                </div>

                <!-- Laser Engraved Signature -->
                <div class="laser-engraving-plate" id="iphoneEngraving">
                  <span id="engravingTextDisplay">Designed by Nowempireoff in California</span>
                </div>

                <div class="bottom-regulatory">
                  <span>Model A3102 • Titanium Edition • Assembled in USA</span>
                </div>
              </div>
            </div>

            <!-- 2. MACBOOK PRO / AIR VIEW -->
            <div id="macbookView" class="device-box macbook-box" style="display: none;">
              <!-- MACBOOK OPEN (KEYBOARD & SCREEN) -->
              <div class="face face-front" id="macbookOpen">
                <!-- Top Display Lid -->
                <div class="mac-display-lid" id="macScreenLid">
                  <div class="mac-screen" id="macScreen">
                    <div class="mac-notch">
                      <div class="mac-cam"></div>
                    </div>
                    <div class="mac-menubar">
                      <span> Finder</span>
                      <span>File Edit View Go Window Help</span>
                      <span class="mac-time">100% 🔋 Tue 9:41 AM</span>
                    </div>
                    <div class="mac-desktop">
                      <div class="mac-desktop-title">macOS Sequoia Pro</div>
                      <small id="macSpecLabel">M4 Max • 16-Core CPU • 40-Core GPU • 128GB RAM</small>
                    </div>
                    <div class="mac-dock">
                      <span>Finder</span><span>Safari</span><span>Xcode</span><span>Logic Pro</span><span>Final Cut</span>
                    </div>
                  </div>
                </div>

                <!-- Bottom Keyboard Base -->
                <div class="mac-base" id="macBase">
                  <!-- Touch Bar / Function Keys -->
                  <div class="mac-touchbar" id="macTouchbar">
                    <span>esc</span>
                    <span class="tb-item">⏮</span>
                    <span class="tb-item">⏯</span>
                    <span class="tb-item">⏭</span>
                    <span class="tb-slider">🔉 ━━━━━●━━</span>
                    <span class="tb-slider">☀️ ━━━━●━━━</span>
                    <span>Siri 🎙</span>
                  </div>

                  <!-- Backlit Keyboard -->
                  <div class="mac-keyboard" id="macKeyboard">
                    <div class="key-row"><span>Q</span><span>W</span><span>E</span><span>R</span><span>T</span><span>Y</span><span>U</span><span>I</span><span>O</span><span>P</span></div>
                    <div class="key-row"><span>A</span><span>S</span><span>D</span><span>F</span><span>G</span><span>H</span><span>J</span><span>K</span><span>L</span></div>
                    <div class="key-row"><span>Z</span><span>X</span><span>C</span><span>V</span><span>B</span><span>N</span><span>M</span></div>
                    <div class="key-row space-row"><span class="space-bar">SPACE</span></div>
                  </div>

                  <!-- Force Touch Trackpad -->
                  <div class="mac-trackpad" id="macTrackpad" onclick="clickTrackpad()">
                    <span>Force Touch Trackpad (Clickable)</span>
                  </div>
                </div>
              </div>

              <!-- MACBOOK CLOSED LID (BACK CHASSIS) -->
              <div class="face face-back" id="macbookClosed">
                <div class="mac-lid-surface" id="macLidSurface">
                  <div class="mac-lid-logo" id="macLidLogo"></div>
                  <div class="mac-lid-engraving" id="macLidEngraving">
                    <span id="macEngravingText">Designed by Nowempireoff</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="stage-footer-info">
          <span>Active Material: <strong id="activeMaterialLbl" class="text-gold">Natural Titanium</strong></span>
          <span>Optics: <strong id="activeOpticsLbl">Pro 48MP Triple Fusion</strong></span>
          <span>Laser Engraving: <strong id="activeEngraveLbl">Active</strong></span>
        </div>
      </section>

      <!-- Customization Deck Sidebar -->
      <aside class="control-deck">
        <!-- Deck Navigation Tabs -->
        <div class="deck-tabs">
          <button class="deck-tab active" data-tab="materials">🎨 Finish</button>
          <button class="deck-tab" data-tab="hardware">⚙️ Hardware</button>
          <button class="deck-tab" data-tab="display">📱 Display</button>
          <button class="deck-tab" data-tab="engrave">✍️ Engraving</button>
          <button class="deck-tab" data-tab="specs">📊 Specs</button>
        </div>

        <div class="deck-body">
          <!-- TAB 1: FINISH & TITANIUM MATERIALS -->
          <div class="tab-pane active" id="pane-materials">
            <h3 class="pane-title">Aerospace Material &amp; Finish</h3>
            <p class="pane-desc">Select Grade 5 Titanium micro-blasted textures &amp; PVD coatings.</p>

            <div class="swatches-grid">
              <button class="swatch-card active" data-color="#9a958d" data-name="Natural Titanium" data-grad="linear-gradient(135deg, #1c1b18, #3e3c36)" data-price="0">
                <span class="color-dot" style="background: #9a958d;"></span>
                <span class="color-name">Natural Titanium</span>
                <span class="color-badge">Standard</span>
              </button>

              <button class="swatch-card" data-color="#c59b7b" data-name="Desert Titanium (Gold)" data-grad="linear-gradient(135deg, #2b1f17, #533e31)" data-price="100">
                <span class="color-dot" style="background: #c59b7b;"></span>
                <span class="color-name">Desert Titanium</span>
                <span class="color-badge">+$100</span>
              </button>

              <button class="swatch-card" data-color="#1c1d1f" data-name="Stealth Black Titanium" data-grad="linear-gradient(135deg, #0a0a0c, #1f2024)" data-price="50">
                <span class="color-dot" style="background: #1c1d1f; border: 1px solid #444;"></span>
                <span class="color-name">Stealth Black</span>
                <span class="color-badge">+$50</span>
              </button>

              <button class="swatch-card" data-color="#00f0ff" data-name="Cyber Neon Cyan" data-grad="linear-gradient(135deg, #021a22, #005060)" data-price="150">
                <span class="color-dot" style="background: #00f0ff; box-shadow: 0 0 8px #00f0ff;"></span>
                <span class="color-name">Cyber Neon</span>
                <span class="color-badge">+$150 VIP</span>
              </button>

              <button class="swatch-card" data-color="#e2e8f0" data-name="Liquid Chrome Silver" data-grad="linear-gradient(135deg, #242830, #5c6270)" data-price="80">
                <span class="color-dot" style="background: #e2e8f0;"></span>
                <span class="color-name">Liquid Chrome</span>
                <span class="color-badge">+$80</span>
              </button>

              <button class="swatch-card" data-color="#1e3a5f" data-name="Cosmic Ocean Blue" data-grad="linear-gradient(135deg, #0d1b2a, #1b3a5b)" data-price="100">
                <span class="color-dot" style="background: #1e3a5f;"></span>
                <span class="color-name">Cosmic Blue</span>
                <span class="color-badge">+$100</span>
              </button>

              <button class="swatch-card" data-color="#1b4332" data-name="Emerald Titanium" data-grad="linear-gradient(135deg, #081c15, #1e4d3b)" data-price="120">
                <span class="color-dot" style="background: #1b4332;"></span>
                <span class="color-name">Emerald Alpine</span>
                <span class="color-badge">+$120</span>
              </button>

              <button class="swatch-card" data-color="#e0a899" data-name="Rose Gold Quartz" data-grad="linear-gradient(135deg, #301b17, #5c3b33)" data-price="90">
                <span class="color-dot" style="background: #e0a899;"></span>
                <span class="color-name">Rose Quartz</span>
                <span class="color-badge">+$90</span>
              </button>
            </div>
          </div>

          <!-- TAB 2: HARDWARE & OPTICS -->
          <div class="tab-pane" id="pane-hardware">
            <!-- iPhone Hardware Options -->
            <div id="iphoneHardwareOpts">
              <h3 class="pane-title">Camera Architecture (iPhone)</h3>
              <p class="pane-desc">Choose optics cluster &amp; image processing sensors.</p>

              <div class="hardware-cards">
                <div class="opt-card active" data-optics="triple" data-price="0">
                  <div class="opt-header">
                    <span class="opt-title">Pro 48MP Triple Fusion</span>
                    <span class="opt-badge">Included</span>
                  </div>
                  <p class="opt-desc">Main 48MP + 12MP Ultra-wide + 12MP 5x Telephoto with LiDAR.</p>
                </div>

                <div class="opt-card" data-optics="quad" data-price="250">
                  <div class="opt-header">
                    <span class="opt-title">Quad 120x Periscope Matrix</span>
                    <span class="opt-badge">+$250</span>
                  </div>
                  <p class="opt-desc">4 Lenses with 120x Optical Folded Glass Periscope &amp; Astro-LiDAR.</p>
                </div>

                <div class="opt-card" data-optics="cyber" data-price="350">
                  <div class="opt-header">
                    <span class="opt-title">Cyber Hexagonal Cluster</span>
                    <span class="opt-badge">+$350 VIP</span>
                  </div>
                  <p class="opt-desc">6 Multi-Spectrum Optical Micro-sensors for Spatial 8K Video capture.</p>
                </div>

                <div class="opt-card" data-optics="minimal" data-price="-100">
                  <div class="opt-header">
                    <span class="opt-title">Stealth Flush Dual Glass</span>
                    <span class="opt-badge">-$100</span>
                  </div>
                  <p class="opt-desc">Ultra-thin flush camera glass without camera bump protrusion.</p>
                </div>
              </div>
            </div>

            <!-- MacBook Hardware Options -->
            <div id="macHardwareOpts" style="display: none;">
              <h3 class="pane-title">MacBook Pro Keyboard &amp; Deck</h3>
              <p class="pane-desc">Configure keyboard backlight, Touch Bar and trackpad.</p>

              <div class="config-row">
                <label>Keyboard Backlight Glow</label>
                <div class="pill-group">
                  <button class="pill-opt active" data-backlight="white">Pure White</button>
                  <button class="pill-opt" data-backlight="cyan">Cyber Cyan</button>
                  <button class="pill-opt" data-backlight="amber">Warm Gold</button>
                  <button class="pill-opt" data-backlight="rgb">RGB Rainbow</button>
                </div>
              </div>

              <div class="config-row">
                <label>Top Control Row</label>
                <div class="pill-group">
                  <button class="pill-opt active" data-control="touchbar">OLED Touch Bar</button>
                  <button class="pill-opt" data-control="keys">Physical Function Keys</button>
                </div>
              </div>

              <div class="config-row">
                <label>Trackpad Dimensions</label>
                <div class="pill-group">
                  <button class="pill-opt active" data-trackpad="mega">Mega Force Touch</button>
                  <button class="pill-opt" data-trackpad="standard">Standard Glass</button>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: DISPLAY & WALLPAPER -->
          <div class="tab-pane" id="pane-display">
            <h3 class="pane-title">OLED Display &amp; OS Wallpaper</h3>
            <p class="pane-desc">Customize Super Retina XDR screen styling &amp; Dynamic Island.</p>

            <div class="config-row">
              <label>Operating System Skin</label>
              <div class="wallpaper-grid">
                <button class="wp-card active" data-wp="liquid" style="background: linear-gradient(135deg, #120e29, #3f1d4f, #094067);">
                  <span>iOS 19 Liquid</span>
                </button>
                <button class="wp-card" data-wp="sequoia" style="background: linear-gradient(135deg, #1b263b, #415a77, #e0a96d);">
                  <span>macOS Sequoia</span>
                </button>
                <button class="wp-card" data-wp="cyber" style="background: linear-gradient(135deg, #050510, #00f0ff33, #ff007f33);">
                  <span>Cyber Synthwave</span>
                </button>
                <button class="wp-card" data-wp="monolith" style="background: linear-gradient(135deg, #090a0f, #1e2230);">
                  <span>Titanium Monolith</span>
                </button>
              </div>
            </div>

            <div class="config-row">
              <label>Notch / Camera Architecture</label>
              <div class="pill-group">
                <button class="pill-opt active" data-notch="island">Dynamic Island 2.0</button>
                <button class="pill-opt" data-notch="hole">Micro Punch-Hole</button>
                <button class="pill-opt" data-notch="under">Bezel-less Horizon</button>
              </div>
            </div>
          </div>

          <!-- TAB 4: LASER ENGRAVING STUDIO -->
          <div class="tab-pane" id="pane-engrave">
            <h3 class="pane-title">Apple Laser Engraving Lab</h3>
            <p class="pane-desc">Laser-etch custom text or serial marks on the aerospace titanium plate.</p>

            <div class="engrave-box">
              <label for="engraveInput">Custom Engraving Text:</label>
              <input type="text" id="engraveInput" value="Designed by Nowempireoff in California" maxlength="42" />
              
              <div class="font-picker">
                <span>Font Style:</span>
                <button class="font-btn active" data-font="sf">Apple SF Pro</button>
                <button class="font-btn" data-font="mono">Cyber Monospace</button>
                <button class="font-btn" data-font="serif">Classic Luxury</button>
              </div>

              <button id="btnBurnEngrave" class="btn-laser">
                <span>⚡ Burn Laser Engraving</span>
              </button>
              <p class="laser-note">Includes precision laser micro-etching with zero structural degradation.</p>
            </div>
          </div>

          <!-- TAB 5: SPECS & BENCHMARK -->
          <div class="tab-pane" id="pane-specs">
            <h3 class="pane-title">Device Spec Sheet &amp; Valuation</h3>
            
            <div class="spec-table">
              <div class="spec-row">
                <span>Silicon Chip:</span>
                <strong id="specChip">Apple A18 Pro (3nm GAA)</strong>
              </div>
              <div class="spec-row">
                <span>Neural Engine:</span>
                <strong>16-Core 38 TOPS AI Core</strong>
              </div>
              <div class="spec-row">
                <span>Enclosure:</span>
                <strong id="specMaterial">Grade 5 Natural Titanium</strong>
              </div>
              <div class="spec-row">
                <span>Camera Sensor:</span>
                <strong id="specCamera">48MP Triple Fusion Optical</strong>
              </div>
              <div class="spec-row">
                <span>Display:</span>
                <strong>ProMotion 120Hz OLED (2,500 nits)</strong>
              </div>
              <div class="spec-row">
                <span>Personalization:</span>
                <strong id="specEngrave">Custom Laser Etched</strong>
              </div>
              <div class="spec-row highlight">
                <span>Base MSRP + Upgrades:</span>
                <strong id="specTotalPrice" class="text-gold">$1,499 USD</strong>
              </div>
            </div>

            <button id="btnSaveSpec" class="btn-save-spec">
              <span>📄 Export Spec Sheet Snapshot</span>
            </button>
          </div>
        </div>
      </aside>
    </main>

    <!-- Keynote Launch Modal -->
    <div id="keynoteModal" class="keynote-modal">
      <div class="keynote-content">
        <canvas id="confettiCanvas" class="confetti-canvas"></canvas>
        <div class="keynote-badge"> SPECIAL EVENT KEYNOTE</div>
        <h2 id="keynoteTitle">Introducing the Custom iPhone 16 Pro Max</h2>
        <p class="keynote-subtitle">"This is without doubt the most astonishing piece of engineering we have ever created." — Tim Cook</p>

        <div class="keynote-device-card" id="keynoteDeviceCard">
          <div class="kd-badge">DESIGNED BY YOU</div>
          <div class="kd-price" id="kdPrice">$1,499</div>
          <div class="kd-desc" id="kdDesc">Crafted in Natural Titanium with Pro Optics &amp; Custom Laser Engraving.</div>
        </div>

        <div class="critics-reviews">
          <div class="review-card">
            <div class="stars">★★★★★ 10/10</div>
            <p>"The industrial design and titanium finish are completely unrivaled."</p>
            <small>— MKBHD (Marques Brownlee)</small>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★ 9.9/10</div>
            <p>"Apple has set a new high-water mark for hardware craftsmanship."</p>
            <small>— The Verge</small>
          </div>
        </div>

        <div class="keynote-actions">
          <button id="btnCloseKeynote" class="btn-primary-keynote">Continue Designing in Studio</button>
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
  user-select: none;
  -webkit-user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
}

body {
  background: #030407;
  color: #f5f5f7;
  min-height: 100vh;
  overflow-x: hidden;
}

.studio-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle at 50% 10%, #0e1322 0%, #030407 80%);
}

/* Header */
.studio-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(12, 16, 26, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 50;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.apple-logo {
  font-size: 26px;
  color: #fff;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
}

.brand h1 {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.2px;
}

.brand h1 span {
  color: #00f0ff;
}

.brand small {
  font-size: 10px;
  color: #86868b;
  display: block;
}

.nav-metrics {
  display: flex;
  align-items: center;
  gap: 10px;
}

.metric-pill {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.04);
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.metric-pill .lbl {
  font-size: 9px;
  color: #86868b;
  text-transform: uppercase;
}

.metric-pill .val {
  font-size: 13px;
  font-weight: 800;
  font-family: monospace;
}

.text-gold { color: #f59e0b; }
.text-cyan { color: #00f0ff; }

.btn-keynote {
  background: linear-gradient(135deg, #0071e3, #6366f1);
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 980px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 113, 227, 0.4);
  transition: all 0.2s;
}

.btn-keynote:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 113, 227, 0.6);
}

/* Device Selector Bar */
.device-selector {
  display: flex;
  gap: 8px;
  padding: 8px 20px;
  background: #080b12;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow-x: auto;
}

.dev-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #a1a1a6;
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.dev-tab.active {
  background: rgba(0, 240, 255, 0.12);
  border-color: #00f0ff;
  color: #fff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
}

/* Workspace Layout */
.workspace {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Stage Section */
.stage-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #04060b;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}

.stage-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: rgba(10, 14, 22, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 10;
}

.view-toggles, .stage-actions {
  display: flex;
  gap: 8px;
}

.tool-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.tool-btn.active, .tool-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.tool-btn.camera-btn {
  background: rgba(0, 113, 227, 0.2);
  border-color: #0071e3;
  color: #60a5fa;
}

.viewport-canvas-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  position: relative;
  overflow: hidden;
}

.lighting-reflection {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.flash-beam {
  position: absolute;
  top: 25%;
  right: 32%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 200, 0.4) 40%, transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  z-index: 20;
}

.flash-beam.active {
  opacity: 1;
  filter: blur(10px);
}

.shutter-flash {
  position: absolute;
  inset: 0;
  background: #ffffff;
  opacity: 0;
  pointer-events: none;
  z-index: 99;
  transition: opacity 0.08s;
}

.shutter-flash.snap {
  opacity: 0.95;
}

/* 3D Device Wrapper */
.device-wrapper {
  position: relative;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
}

.device-wrapper.flipped {
  transform: rotateY(180deg);
}

.device-wrapper.angled {
  transform: rotateY(32deg) rotateX(12deg) scale(0.95);
}

/* 1. iPhone 3D Box */
.iphone-box {
  width: 280px;
  height: 560px;
  position: relative;
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 46px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 0 10px #2a2926, 0 0 0 12px #444;
  overflow: hidden;
  transition: all 0.3s;
}

.face-front {
  background: #000;
  z-index: 2;
  border: 4px solid #000;
}

.face-back {
  background: linear-gradient(135deg, #1c1b18, #3e3c36);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* iPhone Screen Front */
.iphone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #120e29, #3f1d4f, #094067);
  border-radius: 42px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: filter 0.3s, background 0.3s;
}

.iphone-screen.screen-off {
  background: #000 !important;
}

.iphone-screen.screen-off .lock-screen-content {
  opacity: 0;
}

/* Dynamic Island */
.dynamic-island {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 20px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 30;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dynamic-island.expanded {
  padding: 8px 16px;
  border-radius: 26px;
  background: #0a0a0f;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.island-camera {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #111;
  border: 1px solid #222;
}

.island-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: #fff;
  font-weight: 600;
}

.island-bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 10px;
}

.island-bars span {
  width: 2px;
  height: 8px;
  background: #00f0ff;
  border-radius: 1px;
  animation: barWave 1s infinite alternate;
}

.island-bars span:nth-child(2) { animation-delay: 0.2s; height: 10px; }
.island-bars span:nth-child(3) { animation-delay: 0.4s; height: 6px; }

@keyframes barWave {
  0% { height: 3px; }
  100% { height: 10px; }
}

.lock-screen-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 16px 20px;
  transition: opacity 0.3s;
}

.lock-time {
  font-size: 58px;
  font-weight: 800;
  letter-spacing: -2px;
  color: #fff;
  line-height: 1;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.lock-date {
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
  margin-top: 4px;
}

.widget-row {
  display: flex;
  gap: 8px;
  margin-top: 14px;
}

.mini-widget {
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  padding: 5px 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 10px;
  font-weight: 600;
  color: #f1f5f9;
}

.bottom-lock-controls {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lock-circle-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swipe-hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* iPhone Back Chassis */
.camera-bump {
  width: 130px;
  height: 140px;
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.3);
  padding: 12px;
  position: relative;
  backdrop-filter: blur(8px);
}

.lens-cluster {
  width: 100%;
  height: 100%;
  position: relative;
}

.camera-lens {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #3a3a40 0%, #0d0d12 60%, #000 100%);
  border: 3px solid #888;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7), inset 0 0 6px rgba(0, 240, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-lens::after {
  content: '';
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: radial-gradient(circle, #00f0ff 0%, #001020 80%);
  box-shadow: 0 0 4px #00f0ff;
}

/* Triple Setup */
.lens-triple-1 { width: 44px; height: 44px; top: 0; left: 0; }
.lens-triple-2 { width: 44px; height: 44px; bottom: 0; left: 0; }
.lens-triple-3 { width: 44px; height: 44px; top: 32px; right: 0; }

/* Quad Setup */
.lens-quad-1 { width: 36px; height: 36px; top: 0; left: 0; }
.lens-quad-2 { width: 36px; height: 36px; top: 0; right: 8px; }
.lens-quad-3 { width: 36px; height: 36px; bottom: 0; left: 0; }
.lens-quad-4 { width: 36px; height: 36px; bottom: 0; right: 8px; }

.sensor-cluster {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.sensor-flash {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff9d6 0%, #ffcf40 80%);
  box-shadow: 0 0 4px #ffcf40;
}

.sensor-lidar {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #111;
  border: 1px solid #333;
}

.apple-center-logo {
  font-size: 54px;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 30px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  transition: all 0.3s;
}

.laser-engraving-plate {
  margin-top: auto;
  text-align: center;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  max-width: 90%;
  position: relative;
  overflow: hidden;
}

.laser-engraving-plate span {
  font-size: 10px;
  color: #cbd5e1;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.laser-burning {
  animation: laserBurn 0.8s ease-in-out;
}

@keyframes laserBurn {
  0% { box-shadow: 0 0 20px #00f0ff, inset 0 0 10px #00f0ff; color: #fff; }
  50% { box-shadow: 0 0 30px #f59e0b, inset 0 0 15px #f59e0b; color: #fef08a; }
  100% { box-shadow: none; }
}

.bottom-regulatory {
  font-size: 8px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  margin-top: 8px;
}

/* 2. MacBook 3D Box */
.macbook-box {
  width: 480px;
  height: 380px;
  position: relative;
  transform-style: preserve-3d;
}

.mac-display-lid {
  width: 440px;
  height: 270px;
  background: #1c1b18;
  border-radius: 14px 14px 4px 4px;
  border: 4px solid #333;
  padding: 6px;
  margin: 0 auto;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
}

.mac-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1b263b, #415a77, #e0a96d);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.mac-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 16px;
  background: #000;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.mac-cam {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow: 0 0 4px #00f0ff;
}

.mac-menubar {
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
  font-size: 9px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}

.mac-desktop {
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.mac-desktop-title {
  font-size: 20px;
  font-weight: 800;
}

.mac-dock {
  align-self: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  padding: 3px 10px;
  border-radius: 12px;
  display: flex;
  gap: 8px;
  font-size: 9px;
  color: #fff;
  margin-bottom: 4px;
}

.mac-base {
  width: 480px;
  height: 130px;
  background: #252422;
  border-radius: 6px 6px 16px 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -6px;
}

.mac-touchbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 9px;
  color: #00f0ff;
  border: 1px solid #333;
}

.mac-keyboard {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #111;
  padding: 4px;
  border-radius: 6px;
}

.key-row {
  display: flex;
  justify-content: center;
  gap: 3px;
}

.key-row span {
  background: #222;
  color: #fff;
  font-size: 8px;
  padding: 2px 5px;
  border-radius: 3px;
  border-bottom: 1px solid #000;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
}

.space-bar {
  width: 140px;
  text-align: center;
}

.mac-trackpad {
  align-self: center;
  width: 130px;
  height: 38px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #888;
  cursor: pointer;
}

.mac-trackpad:active {
  background: rgba(0, 240, 255, 0.1);
  transform: scale(0.98);
}

/* MacBook Closed Lid */
.mac-lid-surface {
  width: 460px;
  height: 300px;
  background: linear-gradient(135deg, #1c1b18, #3e3c36);
  border-radius: 16px;
  border: 2px solid #555;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
}

.mac-lid-logo {
  font-size: 72px;
  color: #fff;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
}

.mac-lid-engraving {
  font-size: 11px;
  color: #cbd5e1;
  background: rgba(0, 0, 0, 0.3);
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
}

.stage-footer-info {
  display: flex;
  justify-content: space-around;
  padding: 8px 16px;
  background: #080b12;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 11px;
  color: #94a3b8;
}

/* Control Deck (Sidebar) */
.control-deck {
  width: 380px;
  background: #0b0e18;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.deck-tabs {
  display: flex;
  background: #06080f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto;
}

.deck-tab {
  flex: 1;
  padding: 10px 8px;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.deck-tab.active {
  color: #00f0ff;
  border-bottom-color: #00f0ff;
  background: rgba(0, 240, 255, 0.05);
}

.deck-body {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

.pane-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.pane-desc {
  font-size: 11px;
  color: #86868b;
  margin-bottom: 16px;
}

/* Swatches Grid */
.swatches-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.swatch-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: #111624;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #cbd5e1;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.swatch-card.active, .swatch-card:hover {
  background: #172033;
  border-color: #00f0ff;
  color: #fff;
}

.color-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
}

.color-name {
  font-size: 11px;
  font-weight: 600;
  flex: 1;
}

.color-badge {
  font-size: 9px;
  color: #f59e0b;
  font-weight: 700;
}

/* Hardware Options */
.hardware-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.opt-card {
  padding: 10px 12px;
  background: #111624;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.opt-card.active {
  border-color: #00f0ff;
  background: rgba(0, 240, 255, 0.08);
}

.opt-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.opt-title {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}

.opt-badge {
  font-size: 10px;
  font-weight: 700;
  color: #00f0ff;
}

.opt-desc {
  font-size: 10px;
  color: #86868b;
  line-height: 1.4;
}

/* Config Rows */
.config-row {
  margin-bottom: 16px;
}

.config-row label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #cbd5e1;
  margin-bottom: 8px;
}

.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pill-opt {
  background: #111624;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.pill-opt.active {
  background: #0071e3;
  border-color: #0071e3;
  color: #fff;
}

/* Wallpapers */
.wallpaper-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.wp-card {
  height: 54px;
  border-radius: 10px;
  border: 2px solid transparent;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
}

.wp-card.active {
  border-color: #00f0ff;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
}

/* Engraving Lab */
.engrave-box {
  background: #111624;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.engrave-box label {
  display: block;
  font-size: 11px;
  color: #94a3b8;
  margin-bottom: 6px;
}

.engrave-box input {
  width: 100%;
  background: #080b12;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  color: #fff;
  outline: none;
  margin-bottom: 12px;
}

.engrave-box input:focus {
  border-color: #00f0ff;
}

.font-picker {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
  font-size: 11px;
  color: #94a3b8;
}

.font-btn {
  background: #172033;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  cursor: pointer;
}

.font-btn.active {
  background: #00f0ff;
  color: #000;
  font-weight: 700;
}

.btn-laser {
  width: 100%;
  background: linear-gradient(135deg, #00f0ff, #0071e3);
  color: #000;
  font-weight: 800;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);
  transition: all 0.2s;
}

.btn-laser:active {
  transform: scale(0.98);
}

.laser-note {
  font-size: 9px;
  color: #64748b;
  margin-top: 8px;
  text-align: center;
}

/* Specs Sheet */
.spec-table {
  background: #111624;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px;
  margin-bottom: 14px;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 11px;
  color: #94a3b8;
}

.spec-row strong {
  color: #f1f5f9;
}

.spec-row.highlight {
  border-bottom: none;
  padding-top: 12px;
  font-size: 13px;
}

.btn-save-spec {
  width: 100%;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-weight: 700;
  padding: 10px;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
}

/* Keynote Modal */
.keynote-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(25px);
  z-index: 100;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.keynote-modal.active {
  display: flex;
}

.confetti-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.keynote-content {
  width: 100%;
  max-width: 540px;
  background: #0c101c;
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 24px;
  padding: 30px 24px;
  text-align: center;
  box-shadow: 0 25px 70px rgba(0, 240, 255, 0.2);
  position: relative;
  z-index: 10;
}

.keynote-badge {
  font-size: 11px;
  font-weight: 800;
  color: #00f0ff;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.keynote-content h2 {
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
}

.keynote-subtitle {
  font-size: 13px;
  font-style: italic;
  color: #94a3b8;
  margin-bottom: 20px;
}

.keynote-device-card {
  background: linear-gradient(135deg, #172033, #0f1524);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
}

.kd-badge {
  font-size: 10px;
  color: #f59e0b;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.kd-price {
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  margin: 6px 0;
}

.kd-desc {
  font-size: 11px;
  color: #cbd5e1;
}

.critics-reviews {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
  text-align: left;
}

.review-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  padding: 10px;
  font-size: 10px;
}

.review-card .stars {
  color: #f59e0b;
  font-weight: 800;
  margin-bottom: 4px;
}

.review-card p {
  color: #cbd5e1;
  margin-bottom: 4px;
}

.review-card small {
  color: #64748b;
  display: block;
}

.btn-primary-keynote {
  background: #0071e3;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 980px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 113, 227, 0.5);
}

@media (max-width: 768px) {
  .workspace {
    flex-direction: column;
    overflow-y: auto;
  }
  .control-deck {
    width: 100%;
    height: 400px;
  }
  .iphone-box {
    width: 220px;
    height: 440px;
  }
  .macbook-box {
    width: 320px;
    height: 250px;
  }
  .mac-display-lid {
    width: 300px;
    height: 180px;
  }
  .mac-base {
    width: 320px;
  }
}
`,

    'script.js': `// Apple Hardware Design Studio 3D Engine
// Lead Architect: Nowempireoff

let currentDevice = 'iphone16promax';
let isFlipped = false;
let isAngled = false;
let isScreenOn = true;
let isGlowOn = false;
let activeFinish = 'Natural Titanium';
let finishPrice = 0;
let opticsPrice = 0;
let currentOptics = 'triple';

// Audio Synthesizer (Zero External Assets)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;

    if (type === 'snap') {
      // Shutter click
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'laser') {
      // Laser burn zap
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.3);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'click') {
      // Tactile click
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'cheer') {
      // Keynote Applause & crowd roar
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(300 + Math.random() * 500, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.3);
        }, i * 70);
      }
    }
  } catch(e) {}
}

// Render Lenses
function renderOptics(type) {
  const cluster = document.getElementById('lensCluster');
  cluster.innerHTML = '';

  if (type === 'triple') {
    cluster.innerHTML = \`
      <div class="camera-lens lens-triple-1"></div>
      <div class="camera-lens lens-triple-2"></div>
      <div class="camera-lens lens-triple-3"></div>
    \`;
    document.getElementById('activeOpticsLbl').innerText = 'Pro 48MP Triple Fusion';
    document.getElementById('specCamera').innerText = '48MP Triple Fusion Optical (24/28/35mm)';
  } else if (type === 'quad') {
    cluster.innerHTML = \`
      <div class="camera-lens lens-quad-1"></div>
      <div class="camera-lens lens-quad-2"></div>
      <div class="camera-lens lens-quad-3"></div>
      <div class="camera-lens lens-quad-4"></div>
    \`;
    document.getElementById('activeOpticsLbl').innerText = 'Quad 120x Periscope Matrix';
    document.getElementById('specCamera').innerText = 'Quad Matrix (120x Folded Periscope Glass)';
  } else if (type === 'cyber') {
    cluster.innerHTML = \`
      <div class="camera-lens" style="width:28px;height:28px;top:0;left:0"></div>
      <div class="camera-lens" style="width:28px;height:28px;top:0;right:10px"></div>
      <div class="camera-lens" style="width:28px;height:28px;top:38px;left:0"></div>
      <div class="camera-lens" style="width:28px;height:28px;top:38px;right:10px"></div>
      <div class="camera-lens" style="width:28px;height:28px;bottom:0;left:0"></div>
      <div class="camera-lens" style="width:28px;height:28px;bottom:0;right:10px"></div>
    \`;
    document.getElementById('activeOpticsLbl').innerText = 'Cyber Hexagonal 6-Lens';
    document.getElementById('specCamera').innerText = 'Hexagonal 6-Lens Spatial Array (8K 120fps)';
  } else if (type === 'minimal') {
    cluster.innerHTML = \`
      <div class="camera-lens" style="width:36px;height:36px;top:10px;left:10px"></div>
      <div class="camera-lens" style="width:36px;height:36px;bottom:10px;left:10px"></div>
    \`;
    document.getElementById('activeOpticsLbl').innerText = 'Stealth Flush Dual';
    document.getElementById('specCamera').innerText = 'Stealth Flush Dual 48MP Lenses';
  }
}

// Update Price & Valuation
function updateValuation() {
  let basePrice = currentDevice.includes('iphone') ? 1199 : 1999;
  if (currentDevice === 'iphonefold') basePrice = 1799;
  if (currentDevice === 'macbookair') basePrice = 1299;

  const total = basePrice + finishPrice + opticsPrice;
  document.getElementById('msrpVal').innerText = '$' + total.toLocaleString();
  document.getElementById('specTotalPrice').innerText = '$' + total.toLocaleString() + ' USD';
  document.getElementById('kdPrice').innerText = '$' + total.toLocaleString();
  
  const score = Math.min(99.9, 94.5 + (finishPrice > 0 ? 2.5 : 0) + (opticsPrice > 0 ? 2.5 : 0));
  document.getElementById('scoreBadge').innerText = score.toFixed(1) + ' ★';
}

// Switch Device
document.querySelectorAll('.dev-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    playSound('click');
    document.querySelectorAll('.dev-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    currentDevice = tab.dataset.device;
    const isMac = currentDevice.includes('macbook');

    const iphoneView = document.getElementById('iphoneView');
    const macbookView = document.getElementById('macbookView');
    const iphoneHardwareOpts = document.getElementById('iphoneHardwareOpts');
    const macHardwareOpts = document.getElementById('macHardwareOpts');

    if (isMac) {
      iphoneView.style.display = 'none';
      macbookView.style.display = 'block';
      iphoneHardwareOpts.style.display = 'none';
      macHardwareOpts.style.display = 'block';
      document.getElementById('specChip').innerText = currentDevice === 'macbookpro' ? 'Apple M4 Max (16-Core CPU / 40-Core GPU)' : 'Apple M3 Slim';
      document.getElementById('keynoteTitle').innerText = 'Introducing the Custom ' + (currentDevice === 'macbookpro' ? 'MacBook Pro 16"' : 'MacBook Air 15"');
    } else {
      iphoneView.style.display = 'block';
      macbookView.style.display = 'none';
      iphoneHardwareOpts.style.display = 'block';
      macHardwareOpts.style.display = 'none';
      document.getElementById('specChip').innerText = currentDevice === 'iphonefold' ? 'Apple A18 Pro Fold Edition' : 'Apple A18 Pro Bionic (3nm GAA)';
      document.getElementById('keynoteTitle').innerText = 'Introducing the Custom ' + (currentDevice === 'iphonefold' ? 'iPhone Fold Ultra' : 'iPhone 16 Pro Max');
    }

    updateValuation();
  });
});

// Flip View
document.getElementById('btnFlip').addEventListener('click', () => {
  playSound('click');
  isFlipped = !isFlipped;
  const wrap = document.getElementById('deviceWrapper');
  if (isFlipped) {
    wrap.classList.add('flipped');
  } else {
    wrap.classList.remove('flipped');
  }
});

// 3D Angle
document.getElementById('btnAngle').addEventListener('click', () => {
  playSound('click');
  isAngled = !isAngled;
  const wrap = document.getElementById('deviceWrapper');
  const btn = document.getElementById('btnAngle');
  if (isAngled) {
    wrap.classList.add('angled');
    btn.classList.add('active');
  } else {
    wrap.classList.remove('angled');
    btn.classList.remove('active');
  }
});

// Screen Power Toggle
document.getElementById('btnScreenPower').addEventListener('click', () => {
  playSound('click');
  isScreenOn = !isScreenOn;
  document.getElementById('powerStatus').innerText = isScreenOn ? 'ON' : 'OFF';
  document.getElementById('iphoneScreen').classList.toggle('screen-off', !isScreenOn);
  document.getElementById('macScreen').style.opacity = isScreenOn ? '1' : '0.1';
});

// Glow / Flashlight Toggle
function toggleFlashlight() {
  playSound('click');
  isGlowOn = !isGlowOn;
  document.getElementById('glowStatus').innerText = isGlowOn ? 'ON' : 'OFF';
  document.getElementById('flashBeam').classList.toggle('active', isGlowOn);
  document.getElementById('iphoneAppleLogo').style.textShadow = isGlowOn ? '0 0 20px #00f0ff, 0 0 35px #00f0ff' : 'none';
  document.getElementById('macLidLogo').style.textShadow = isGlowOn ? '0 0 25px rgba(255,255,255,0.9)' : 'none';
}
document.getElementById('btnFlashlight').addEventListener('click', toggleFlashlight);

// Snapshot Photo
function snapKeynotePhoto() {
  playSound('snap');
  const flash = document.getElementById('shutterFlash');
  flash.classList.add('snap');
  setTimeout(() => flash.classList.remove('snap'), 120);
}
document.getElementById('btnSnapshot').addEventListener('click', snapKeynotePhoto);

// Dynamic Island Expansion
const island = document.getElementById('dynamicIsland');
island.addEventListener('click', () => {
  playSound('click');
  island.classList.toggle('expanded');
});

// Swatches / Finish Picker
document.querySelectorAll('.swatch-card').forEach(card => {
  card.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.swatch-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    activeFinish = card.dataset.name;
    finishPrice = parseInt(card.dataset.price) || 0;
    const grad = card.dataset.grad;
    const color = card.dataset.color;

    document.getElementById('activeMaterialLbl').innerText = activeFinish;
    document.getElementById('specMaterial').innerText = 'Grade 5 ' + activeFinish;
    document.getElementById('iphoneBack').style.background = grad;
    document.getElementById('macLidSurface').style.background = grad;

    updateValuation();
  });
});

// Hardware Optics Picker
document.querySelectorAll('.opt-card').forEach(card => {
  card.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.opt-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    currentOptics = card.dataset.optics;
    opticsPrice = parseInt(card.dataset.price) || 0;
    renderOptics(currentOptics);
    updateValuation();
  });
});

// Wallpaper Picker
document.querySelectorAll('.wp-card').forEach(card => {
  card.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.wp-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const grad = card.style.background;
    document.getElementById('iphoneScreen').style.background = grad;
    document.getElementById('macScreen').style.background = grad;
  });
});

// Laser Engraving
document.getElementById('btnBurnEngrave').addEventListener('click', () => {
  const text = document.getElementById('engraveInput').value || 'Designed by Nowempireoff in California';
  playSound('laser');
  
  const iphonePlate = document.getElementById('iphoneEngraving');
  const macPlate = document.getElementById('macLidEngraving');
  document.getElementById('engravingTextDisplay').innerText = text;
  document.getElementById('macEngravingText').innerText = text;

  iphonePlate.classList.add('laser-burning');
  macPlate.classList.add('laser-burning');
  setTimeout(() => {
    iphonePlate.classList.remove('laser-burning');
    macPlate.classList.remove('laser-burning');
  }, 900);
});

// Trackpad Click
function clickTrackpad() {
  playSound('click');
}

// Deck Tabs
document.querySelectorAll('.deck-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.deck-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const pane = document.getElementById('pane-' + tab.dataset.tab);
    if (pane) pane.classList.add('active');
  });
});

// Keynote Modal
const keynoteModal = document.getElementById('keynoteModal');
document.getElementById('btnLaunchKeynote').addEventListener('click', () => {
  playSound('cheer');
  keynoteModal.classList.add('active');
  launchConfetti();
});

document.getElementById('btnCloseKeynote').addEventListener('click', () => {
  playSound('click');
  keynoteModal.classList.remove('active');
});

// Confetti Engine
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#00f0ff', '#f59e0b', '#ec4899', '#ffffff', '#6366f1'];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.5) * 14 - 3,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
    });
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // gravity
      p.alpha -= 0.008;
      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.restore();
      }
    });
    if (alive && keynoteModal.classList.contains('active')) {
      requestAnimationFrame(frame);
    }
  }
  requestAnimationFrame(frame);
}

// Export Spec Sheet
document.getElementById('btnSaveSpec').addEventListener('click', () => {
  playSound('click');
  alert('Spec sheet snapshot created! Stored in local project artifacts.');
});

// Initial Setup
renderOptics('triple');
updateValuation();
`
  };
}
