import { ProjectFiles } from '../types';

/**
 * World Map & Global Explorer Application
 * Features:
 * - Real Leaflet.js interactive map with dark luxury theme
 * - 25+ major country markers with custom glowing badges & flags
 * - Real-time country info card (Capital, Population, Currency, Local Time, Language)
 * - Continent filtering (Asia, Europe, Americas, Africa, Oceania)
 * - Country search with instant pan & zoom animation
 * - Flight Distance Calculator between any two countries
 * - World Geography Quiz mode with timer and score
 */
export function getWorldMapAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>TERRA GLOBE | Interactive World Map & Atlas</title>
  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="atlas-shell">
    <!-- Top Bar -->
    <header class="atlas-header">
      <div class="brand">
        <div class="globe-icon">🌍</div>
        <div>
          <h1>TERRA GLOBE 360</h1>
          <p>Autonomous Interactive World Atlas</p>
        </div>
      </div>
      <div class="header-actions">
        <button id="quizToggleBtn" class="action-chip text-gold">
          🏆 Play World Quiz
        </button>
        <button id="distToggleBtn" class="action-chip text-cyan">
          ✈️ Measure Distance
        </button>
      </div>
    </header>

    <!-- Search & Filters -->
    <div class="search-filter-bar">
      <div class="search-box">
        <span class="search-ico">🔍</span>
        <input type="text" id="countrySearchInput" placeholder="Search country, capital (e.g. India, Japan, France)..." />
        <button id="clearSearchBtn" class="clear-btn">✕</button>
      </div>
      <div class="continent-pills" id="continentPills">
        <button class="pill active" data-continent="all">🌍 All Continents</button>
        <button class="pill" data-continent="Asia">🌏 Asia</button>
        <button class="pill" data-continent="Europe">🏰 Europe</button>
        <button class="pill" data-continent="Americas">🗽 Americas</button>
        <button class="pill" data-continent="Africa">🦁 Africa</button>
        <button class="pill" data-continent="Oceania">🦘 Oceania</button>
      </div>
    </div>

    <!-- Map Container -->
    <div class="map-viewport">
      <div id="worldMap"></div>

      <!-- Live Coordinates & Zoom HUD -->
      <div class="coords-hud">
        <span id="coordsDisplay">LAT: 20.59° N | LNG: 78.96° E</span>
        <span class="hud-sep">|</span>
        <span id="zoomDisplay">ZOOM: 3x</span>
      </div>

      <!-- Quick Country Pills on Map -->
      <div class="quick-jump-bar">
        <span>Quick Jump:</span>
        <button onclick="flyToCountry('India')">🇮🇳 India</button>
        <button onclick="flyToCountry('United States')">🇺🇸 USA</button>
        <button onclick="flyToCountry('Japan')">🇯🇵 Japan</button>
        <button onclick="flyToCountry('United Kingdom')">🇬🇧 UK</button>
        <button onclick="flyToCountry('Brazil')">🇧🇷 Brazil</button>
        <button onclick="flyToCountry('Australia')">🇦🇺 Australia</button>
        <button onclick="flyToCountry('United Arab Emirates')">🇦🇪 Dubai/UAE</button>
      </div>
    </div>

    <!-- Active Country Detail Drawer / Bottom Panel -->
    <div class="country-dossier" id="countryDossier">
      <div class="dossier-head">
        <div class="country-title-row">
          <span class="flag-emoji" id="flagDisplay">🇮🇳</span>
          <div>
            <h2 id="countryNameDisplay">India</h2>
            <span class="continent-badge" id="continentDisplay">Asia</span>
          </div>
        </div>
        <div class="live-clock-box">
          <span class="clock-lbl">LOCAL TIME</span>
          <span class="clock-val text-gold" id="countryLocalTime">--:--:--</span>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-cell">
          <span class="lbl">CAPITAL</span>
          <span class="val" id="capitalDisplay">New Delhi</span>
        </div>
        <div class="stat-cell">
          <span class="lbl">POPULATION</span>
          <span class="val text-cyan" id="popDisplay">1.43 Billion</span>
        </div>
        <div class="stat-cell">
          <span class="lbl">CURRENCY</span>
          <span class="val" id="currencyDisplay">INR (₹)</span>
        </div>
        <div class="stat-cell">
          <span class="lbl">LANGUAGE</span>
          <span class="val" id="langDisplay">Hindi, English</span>
        </div>
      </div>

      <div class="fun-fact-box">
        <span class="fact-lbl">💡 EXPLORER INSIGHT:</span>
        <p id="factDisplay">Home to the world's highest post office, ancient architectural wonders, and the birthplace of chess and yoga.</p>
      </div>
    </div>

    <!-- Modal 1: Geography Quiz Modal -->
    <div id="quizModal" class="modal-overlay hidden">
      <div class="modal-card">
        <div class="modal-head">
          <span class="badge-tag">🏆 WORLD GEOGRAPHY QUIZ</span>
          <button onclick="closeQuizModal()" class="close-btn">✕</button>
        </div>
        <div class="quiz-body">
          <div class="quiz-q-box">
            <span class="q-counter" id="quizCounter">Question 1 / 5</span>
            <h3 id="quizQuestion">What is the capital of Japan?</h3>
          </div>
          <div class="quiz-options" id="quizOptions"></div>
          <div class="quiz-footer">
            <span>Score: <strong id="quizScore" class="text-gold">0</strong></span>
            <span id="quizTimer" class="text-cyan">⏳ 15s</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 2: Flight Distance Calculator Modal -->
    <div id="distModal" class="modal-overlay hidden">
      <div class="modal-card">
        <div class="modal-head">
          <span class="badge-tag">✈️ FLIGHT DISTANCE MEASURER</span>
          <button onclick="closeDistModal()" class="close-btn">✕</button>
        </div>
        <div class="dist-body">
          <div class="select-row">
            <div>
              <label>Origin Country:</label>
              <select id="originSelect"></select>
            </div>
            <div class="swap-icon">➔</div>
            <div>
              <label>Destination Country:</label>
              <select id="destSelect"></select>
            </div>
          </div>
          <button id="calcDistBtn" class="calc-btn">Calculate Flight Route & Time</button>

          <div id="distResultBox" class="dist-result hidden">
            <div class="result-metric">
              <span>GREAT CIRCLE DISTANCE:</span>
              <strong id="distKmVal" class="text-cyan">-- km</strong>
            </div>
            <div class="result-metric">
              <span>ESTIMATED FLIGHT TIME:</span>
              <strong id="flightTimeVal" class="text-gold">-- hrs</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  user-select: none;
}

body {
  background: #060911;
  color: #f1f5f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.atlas-shell {
  width: 100%;
  max-width: 520px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #080d1a;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

/* Header */
.atlas-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #0b1122;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.globe-icon {
  font-size: 24px;
  background: rgba(0, 240, 255, 0.12);
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 6px;
  border-radius: 12px;
  animation: floatGlobe 4s ease-in-out infinite;
}

@keyframes floatGlobe {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.brand h1 {
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: #fff;
}

.brand p {
  font-size: 10px;
  color: #94a3b8;
}

.header-actions {
  display: flex;
  gap: 6px;
}

.action-chip {
  background: #131a30;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e1;
  padding: 6px 10px;
  border-radius: 16px;
  font-size: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
}

.action-chip:hover {
  border-color: #00f0ff;
  background: #182344;
}

/* Search and Filters */
.search-filter-bar {
  padding: 8px 12px;
  background: #090e1c;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.search-box {
  display: flex;
  align-items: center;
  background: #10172b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 8px;
}

.search-ico {
  font-size: 12px;
  opacity: 0.6;
}

.search-box input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 8px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
}

.clear-btn {
  background: none;
  border: none;
  color: #64748b;
  font-size: 12px;
  cursor: pointer;
}

.continent-pills {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;
}

.continent-pills::-webkit-scrollbar {
  display: none;
}

.pill {
  background: #10162a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  padding: 4px 10px;
  border-radius: 14px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
}

.pill.active {
  background: #00f0ff;
  color: #000;
  border-color: #00f0ff;
  font-weight: 900;
}

/* Map Viewport */
.map-viewport {
  flex: 1;
  position: relative;
  background: #040711;
  min-height: 240px;
}

#worldMap {
  width: 100%;
  height: 100%;
  background: #050913;
}

/* Coordinates & HUD */
.coords-hud {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 400;
  background: rgba(8, 13, 26, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 10px;
  font-family: monospace;
  color: #38bdf8;
  display: flex;
  gap: 8px;
}

.hud-sep {
  opacity: 0.3;
}

/* Quick Jump */
.quick-jump-bar {
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  z-index: 400;
  background: rgba(11, 17, 34, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  font-size: 10px;
  color: #64748b;
  scrollbar-width: none;
}

.quick-jump-bar button {
  background: #18223d;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 10px;
  white-space: nowrap;
  cursor: pointer;
}

.quick-jump-bar button:hover {
  background: #00f0ff;
  color: #000;
}

/* Country Dossier Bottom Panel */
.country-dossier {
  background: #0c1224;
  border-top: 1px solid rgba(0, 240, 255, 0.25);
  padding: 14px 16px;
  box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.6);
  z-index: 500;
}

.dossier-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.country-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.flag-emoji {
  font-size: 32px;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.3));
}

.country-title-row h2 {
  font-size: 18px;
  font-weight: 900;
  color: #fff;
}

.continent-badge {
  font-size: 9px;
  font-weight: 800;
  background: rgba(0, 240, 255, 0.15);
  color: #00f0ff;
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 2px 8px;
  border-radius: 6px;
  letter-spacing: 0.5px;
}

.live-clock-box {
  text-align: right;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 4px 8px;
}

.clock-lbl {
  font-size: 8px;
  color: #64748b;
  font-weight: 800;
  display: block;
}

.clock-val {
  font-family: monospace;
  font-size: 12px;
  font-weight: 900;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 10px;
}

.stat-cell {
  background: #11182e;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 8px 6px;
  text-align: center;
}

.stat-cell .lbl {
  font-size: 8px;
  color: #64748b;
  font-weight: 800;
  display: block;
  margin-bottom: 2px;
}

.stat-cell .val {
  font-size: 11px;
  font-weight: 800;
  color: #f1f5f9;
}

.fun-fact-box {
  background: rgba(0, 240, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.15);
  border-radius: 10px;
  padding: 8px 12px;
}

.fact-lbl {
  font-size: 9px;
  font-weight: 900;
  color: #00f0ff;
  letter-spacing: 0.5px;
}

.fun-fact-box p {
  font-size: 11px;
  color: #cbd5e1;
  margin-top: 2px;
  line-height: 1.4;
}

/* Modals */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal-overlay.hidden {
  display: none;
}

.modal-card {
  width: 100%;
  max-width: 440px;
  background: #0f152a;
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
}

.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.badge-tag {
  font-size: 11px;
  font-weight: 900;
  color: #00f0ff;
}

.close-btn {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 16px;
  cursor: pointer;
}

.quiz-q-box {
  margin-bottom: 14px;
}

.q-counter {
  font-size: 10px;
  color: #64748b;
  font-weight: 800;
}

.quiz-q-box h3 {
  font-size: 16px;
  font-weight: 800;
  margin-top: 4px;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}

.quiz-opt {
  background: #161e38;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 14px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}

.quiz-opt:hover {
  border-color: #00f0ff;
}

.quiz-opt.correct {
  background: rgba(34, 197, 94, 0.25);
  border-color: #22c55e;
  color: #22c55e;
}

.quiz-opt.wrong {
  background: rgba(239, 68, 68, 0.25);
  border-color: #ef4444;
  color: #ef4444;
}

.quiz-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 10px;
  font-size: 12px;
  font-weight: 800;
}

/* Distance Measurer */
.dist-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.select-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.select-row > div {
  flex: 1;
}

.select-row label {
  font-size: 10px;
  color: #94a3b8;
  display: block;
  margin-bottom: 4px;
}

.select-row select {
  width: 100%;
  background: #161e38;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 8px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
}

.swap-icon {
  font-size: 16px;
  color: #00f0ff;
  margin-top: 14px;
}

.calc-btn {
  background: linear-gradient(135deg, #00f0ff, #0070f3);
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.dist-result {
  background: #11182e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.result-metric {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}

.text-gold { color: #fbbf24; }
.text-cyan { color: #00f0ff; }

/* Custom Leaflet Marker Styling */
.custom-pin {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  border: 2px solid #00f0ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.6);
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
}

.custom-pin:hover {
  transform: scale(1.3);
  border-color: #ffd700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
}`,

    'script.js': `// World Countries Database with real coordinates and data
const countries = [
  {
    name: "India",
    flag: "🇮🇳",
    capital: "New Delhi",
    continent: "Asia",
    population: "1.43 Billion",
    currency: "INR (₹)",
    lang: "Hindi, English",
    coords: [20.5937, 78.9629],
    tzOffset: 5.5,
    fact: "World's largest democracy, birthplace of zero, yoga, chess, and home to the majestic Himalayas."
  },
  {
    name: "United States",
    flag: "🇺🇸",
    capital: "Washington, D.C.",
    continent: "Americas",
    population: "335 Million",
    currency: "USD ($)",
    lang: "English",
    coords: [37.0902, -95.7129],
    tzOffset: -5,
    fact: "Third largest country by land area, home to Silicon Valley, Grand Canyon, and NASA."
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    capital: "Tokyo",
    continent: "Asia",
    population: "125 Million",
    currency: "JPY (¥)",
    lang: "Japanese",
    coords: [36.2048, 138.2529],
    tzOffset: 9,
    fact: "Archipelago of 6,852 islands, world pioneer in robotics, bullet trains, and anime culture."
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    capital: "London",
    continent: "Europe",
    population: "67 Million",
    currency: "GBP (£)",
    lang: "English",
    coords: [55.3781, -3.4360],
    tzOffset: 0,
    fact: "Birthplace of the Industrial Revolution, Shakespeare, Big Ben, and the Greenwich Meridian Line."
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    capital: "Brasília",
    continent: "Americas",
    population: "214 Million",
    currency: "BRL (R$)",
    lang: "Portuguese",
    coords: [-14.2350, -51.9253],
    tzOffset: -3,
    fact: "Home to the Amazon Rainforest (Earth's lungs), Christ the Redeemer, and 5 FIFA World Cups."
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    capital: "Canberra",
    continent: "Oceania",
    population: "26 Million",
    currency: "AUD ($)",
    lang: "English",
    coords: [-25.2744, 133.7751],
    tzOffset: 10,
    fact: "World's smallest continent and largest island, home to the Great Barrier Reef and unique marsupials."
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    capital: "Berlin",
    continent: "Europe",
    population: "84 Million",
    currency: "EUR (€)",
    lang: "German",
    coords: [51.1657, 10.4515],
    tzOffset: 1,
    fact: "Europe's economic powerhouse, famous for Autobahns, engineering prowess, and castles."
  },
  {
    name: "France",
    flag: "🇫🇷",
    capital: "Paris",
    continent: "Europe",
    population: "68 Million",
    currency: "EUR (€)",
    lang: "French",
    coords: [46.2276, 2.2137],
    tzOffset: 1,
    fact: "Most visited country in the world, renowned for the Eiffel Tower, Louvre art, and haute cuisine."
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    capital: "Cairo",
    continent: "Africa",
    population: "111 Million",
    currency: "EGP (£)",
    lang: "Arabic",
    coords: [26.8206, 30.8025],
    tzOffset: 2,
    fact: "Cradle of ancient civilization, home to the Giza Pyramids, Sphinx, and the historic River Nile."
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    capital: "Pretoria",
    continent: "Africa",
    population: "60 Million",
    currency: "ZAR (R)",
    lang: "Zulu, Xhosa, Afrikaans, English",
    coords: [-30.5595, 22.9375],
    tzOffset: 2,
    fact: "Known as the Rainbow Nation, featuring Kruger National Park and iconic Table Mountain."
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    continent: "Asia",
    population: "10 Million",
    currency: "AED (د.إ)",
    lang: "Arabic",
    coords: [23.4241, 53.8478],
    tzOffset: 4,
    fact: "Home to Burj Khalifa (world's tallest building), Palm Jumeirah, and rapid technological innovation."
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    capital: "Ottawa",
    continent: "Americas",
    population: "39 Million",
    currency: "CAD ($)",
    lang: "English, French",
    coords: [56.1304, -106.3468],
    tzOffset: -5,
    fact: "Second largest country by total area, possessing over 60% of all the lakes in the world."
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    capital: "Moscow",
    continent: "Europe",
    population: "144 Million",
    currency: "RUB (₽)",
    lang: "Russian",
    coords: [61.5240, 105.3188],
    tzOffset: 3,
    fact: "Largest country on Earth spanning 11 time zones and two continents (Europe & Asia)."
  },
  {
    name: "China",
    flag: "🇨🇳",
    capital: "Beijing",
    continent: "Asia",
    population: "1.41 Billion",
    currency: "CNY (¥)",
    lang: "Mandarin",
    coords: [35.8617, 104.1954],
    tzOffset: 8,
    fact: "Home to the Great Wall (5,500+ miles long), Terracotta Army, and five millennia of history."
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    capital: "Rome",
    continent: "Europe",
    population: "59 Million",
    currency: "EUR (€)",
    lang: "Italian",
    coords: [41.8719, 12.5674],
    tzOffset: 1,
    fact: "Country with the most UNESCO World Heritage sites, birthplace of the Roman Empire and Renaissance."
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    capital: "Riyadh",
    continent: "Asia",
    population: "36 Million",
    currency: "SAR (﷼)",
    lang: "Arabic",
    coords: [23.8859, 45.0792],
    tzOffset: 3,
    fact: "Home to the holy cities of Mecca and Medina, and the futuristic NEOM megacity project."
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    capital: "Singapore",
    continent: "Asia",
    population: "5.9 Million",
    currency: "SGD ($)",
    lang: "English, Malay, Mandarin, Tamil",
    coords: [1.3521, 103.8198],
    tzOffset: 8,
    fact: "A global financial hub and island city-state famous for Marina Bay Sands and Changi Airport."
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
    capital: "Mexico City",
    continent: "Americas",
    population: "128 Million",
    currency: "MXN ($)",
    lang: "Spanish",
    coords: [23.6345, -102.5528],
    tzOffset: -6,
    fact: "Cradle of Mayan and Aztec civilizations, and introduced chocolate and chili to the world."
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    capital: "Madrid",
    continent: "Europe",
    population: "47 Million",
    currency: "EUR (€)",
    lang: "Spanish",
    coords: [40.4637, -3.7492],
    tzOffset: 1,
    fact: "Second most visited nation, famous for Sagrada Familia, flamenco dancing, and tapas cuisine."
  }
];

let map = null;
let markers = [];
let activeCountry = countries[0];
let clockInterval = null;

// Initialize Leaflet Map with CartoDB Dark Matter tiles
function initMap() {
  if (typeof L === 'undefined') {
    setTimeout(initMap, 200);
    return;
  }

  map = L.map('worldMap', {
    zoomControl: false,
    attributionControl: false,
    minZoom: 1.5,
    maxZoom: 10
  }).setView([20.5937, 78.9629], 3);

  // Dark Luxury CartoDB Tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  // Add zoom control top-right
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Render markers
  renderMarkers(countries);

  // Map events
  map.on('move', () => {
    const center = map.getCenter();
    const lat = center.lat.toFixed(2);
    const lng = center.lng.toFixed(2);
    const latStr = lat >= 0 ? lat + '° N' : Math.abs(lat) + '° S';
    const lngStr = lng >= 0 ? lng + '° E' : Math.abs(lng) + '° W';
    document.getElementById('coordsDisplay').innerText = \`LAT: \${latStr} | LNG: \${lngStr}\`;
    document.getElementById('zoomDisplay').innerText = \`ZOOM: \${map.getZoom().toFixed(1)}x\`;
  });

  // Display initial country
  selectCountry(countries[0]);
  populateDistSelects();
}

function renderMarkers(countryList) {
  // Clear existing
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  countryList.forEach(c => {
    const icon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: \`<div class="custom-pin" title="\${c.name}">\${c.flag}</div>\`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const marker = L.marker(c.coords, { icon }).addTo(map);
    marker.on('click', () => {
      selectCountry(c);
      map.flyTo(c.coords, 5, { duration: 1.2 });
    });
    markers.push(marker);
  });
}

function selectCountry(country) {
  activeCountry = country;
  document.getElementById('countryNameDisplay').innerText = country.name;
  document.getElementById('flagDisplay').innerText = country.flag;
  document.getElementById('continentDisplay').innerText = country.continent;
  document.getElementById('capitalDisplay').innerText = country.capital;
  document.getElementById('popDisplay').innerText = country.population;
  document.getElementById('currencyDisplay').innerText = country.currency;
  document.getElementById('langDisplay').innerText = country.lang;
  document.getElementById('factDisplay').innerText = country.fact;

  updateLocalTime();
}

function updateLocalTime() {
  if (clockInterval) clearInterval(clockInterval);

  function tick() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const targetDate = new Date(utc + (3600000 * activeCountry.tzOffset));
    const hours = String(targetDate.getHours()).padStart(2, '0');
    const mins = String(targetDate.getMinutes()).padStart(2, '0');
    const secs = String(targetDate.getSeconds()).padStart(2, '0');
    document.getElementById('countryLocalTime').innerText = \`\${hours}:\${mins}:\${secs}\`;
  }

  tick();
  clockInterval = setInterval(tick, 1000);
}

window.flyToCountry = function(name) {
  const c = countries.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (c) {
    selectCountry(c);
    map.flyTo(c.coords, 5, { duration: 1.5 });
  }
};

// Search listener
const searchInput = document.getElementById('countrySearchInput');
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  if (!term) {
    renderMarkers(countries);
    return;
  }
  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(term) ||
    c.capital.toLowerCase().includes(term) ||
    c.continent.toLowerCase().includes(term)
  );

  renderMarkers(filtered);
  if (filtered.length > 0) {
    selectCountry(filtered[0]);
    map.flyTo(filtered[0].coords, 4, { duration: 1 });
  }
});

document.getElementById('clearSearchBtn').addEventListener('click', () => {
  searchInput.value = '';
  renderMarkers(countries);
});

// Continent Pills
document.querySelectorAll('#continentPills .pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#continentPills .pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cont = btn.dataset.continent;
    if (cont === 'all') {
      renderMarkers(countries);
      map.flyTo([20, 0], 2);
    } else {
      const filtered = countries.filter(c => c.continent === cont);
      renderMarkers(filtered);
      if (filtered.length > 0) {
        selectCountry(filtered[0]);
        map.flyTo(filtered[0].coords, 3.5);
      }
    }
  });
});

// ==========================================
// QUIZ GAME ENGINE
// ==========================================
const quizData = [
  { q: "What is the capital of Japan?", opts: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"], ans: 1 },
  { q: "Which country has the largest population on Earth?", opts: ["India", "USA", "Russia", "Brazil"], ans: 0 },
  { q: "In which continent is the Amazon Rainforest located?", opts: ["Africa", "Asia", "Americas", "Europe"], ans: 2 },
  { q: "What is the currency of the United Kingdom?", opts: ["Euro", "Dollar", "Pound Sterling (£)", "Franc"], ans: 2 },
  { q: "Canberra is the capital city of which nation?", opts: ["Canada", "New Zealand", "Australia", "Austria"], ans: 2 }
];

let curQ = 0;
let qScore = 0;
let qTimer = null;
let qSecs = 15;

function openQuizModal() {
  document.getElementById('quizModal').classList.remove('hidden');
  curQ = 0;
  qScore = 0;
  loadQuizQ();
}

window.closeQuizModal = function() {
  document.getElementById('quizModal').classList.add('hidden');
  clearInterval(qTimer);
};

document.getElementById('quizToggleBtn').addEventListener('click', openQuizModal);

function loadQuizQ() {
  clearInterval(qTimer);
  qSecs = 15;
  document.getElementById('quizTimer').innerText = '⏳ ' + qSecs + 's';

  qTimer = setInterval(() => {
    qSecs--;
    document.getElementById('quizTimer').innerText = '⏳ ' + qSecs + 's';
    if (qSecs <= 0) {
      clearInterval(qTimer);
      checkAns(-1);
    }
  }, 1000);

  const itm = quizData[curQ];
  document.getElementById('quizCounter').innerText = \`Question \${curQ + 1} / \${quizData.length}\`;
  document.getElementById('quizQuestion').innerText = itm.q;
  document.getElementById('quizScore').innerText = qScore;

  const optBox = document.getElementById('quizOptions');
  optBox.innerHTML = '';
  itm.opts.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.innerText = opt;
    btn.onclick = () => checkAns(idx);
    optBox.appendChild(btn);
  });
}

function checkAns(chosen) {
  clearInterval(qTimer);
  const itm = quizData[curQ];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === itm.ans) b.classList.add('correct');
    else if (i === chosen) b.classList.add('wrong');
  });

  if (chosen === itm.ans) {
    qScore += 100;
  }
  document.getElementById('quizScore').innerText = qScore;

  setTimeout(() => {
    curQ++;
    if (curQ < quizData.length) {
      loadQuizQ();
    } else {
      document.getElementById('quizOptions').innerHTML = \`
        <div style="text-align:center; padding:16px;">
          <h2 style="font-size:20px; font-weight:900; margin-bottom:6px;">🎉 Quiz Completed!</h2>
          <p style="color:#94a3b8; font-size:13px; margin-bottom:14px;">Final Score: \${qScore} / \${quizData.length * 100}</p>
          <button onclick="openQuizModal()" style="background:#00f0ff; color:#000; border:none; padding:10px 20px; border-radius:10px; font-weight:900; font-size:12px; cursor:pointer;">Play Again 🔄</button>
        </div>
      \`;
    }
  }, 1200);
}

// ==========================================
// DISTANCE MEASURER
// ==========================================
function openDistModal() {
  document.getElementById('distModal').classList.remove('hidden');
}

window.closeDistModal = function() {
  document.getElementById('distModal').classList.add('hidden');
};

document.getElementById('distToggleBtn').addEventListener('click', openDistModal);

function populateDistSelects() {
  const orig = document.getElementById('originSelect');
  const dest = document.getElementById('destSelect');
  orig.innerHTML = '';
  dest.innerHTML = '';

  countries.forEach(c => {
    const opt1 = document.createElement('option');
    opt1.value = c.name;
    opt1.text = \`\${c.flag} \${c.name}\`;
    orig.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = c.name;
    opt2.text = \`\${c.flag} \${c.name}\`;
    dest.appendChild(opt2);
  });

  orig.value = "India";
  dest.value = "United States";
}

document.getElementById('calcDistBtn').addEventListener('click', () => {
  const c1 = countries.find(c => c.name === document.getElementById('originSelect').value);
  const c2 = countries.find(c => c.name === document.getElementById('destSelect').value);
  if (!c1 || !c2) return;

  // Haversine Great-Circle Distance
  const R = 6371; // km
  const dLat = (c2.coords[0] - c1.coords[0]) * Math.PI / 180;
  const dLon = (c2.coords[1] - c1.coords[1]) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(c1.coords[0] * Math.PI / 180) * Math.cos(c2.coords[0] * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = Math.round(R * c);

  const hours = (d / 850).toFixed(1); // 850 km/h commercial airliner speed

  document.getElementById('distKmVal').innerText = d.toLocaleString() + ' km';
  document.getElementById('flightTimeVal').innerText = hours + ' hours (approx Boeing 787)';
  document.getElementById('distResultBox').classList.remove('hidden');

  // Draw geodesic line on map
  closeDistModal();
  map.flyToBounds([c1.coords, c2.coords], { padding: [50, 50] });

  // Draw animated flight line
  const polyline = L.polyline([c1.coords, c2.coords], {
    color: '#00f0ff',
    weight: 3,
    opacity: 0.8,
    dashArray: '8, 8'
  }).addTo(map);

  setTimeout(() => map.removeLayer(polyline), 8000);
});

// Boot map
window.addEventListener('load', initMap);
if (document.readyState === 'complete') initMap();
`
  };
}
