import { ProjectFiles } from '../types';

/**
 * Live Cyber Weather & Climate Radar Application
 */
export function getWeatherForecastAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>AERO CLIMATE | Live Weather & Atmospheric Radar</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="weather-shell">
    <header class="weather-topbar">
      <div class="brand">
        <span class="logo">⚡</span>
        <div>
          <h1>AERO CLIMATE</h1>
          <p>Real-Time Atmospheric Radar</p>
        </div>
      </div>
      <div class="unit-toggle">
        <button id="btnC" class="unit-btn active">°C</button>
        <button id="btnF" class="unit-btn">°F</button>
      </div>
    </header>

    <!-- City Search -->
    <div class="search-bar">
      <input type="text" id="citySearchInput" placeholder="Search city (e.g. Mumbai, Delhi, Tokyo, London)..." />
      <button id="searchBtn">Search</button>
    </div>

    <!-- Quick City Pills -->
    <div class="quick-cities">
      <button onclick="setCity('New Delhi')">🇮🇳 New Delhi</button>
      <button onclick="setCity('Mumbai')">🇮🇳 Mumbai</button>
      <button onclick="setCity('New York')">🇺🇸 New York</button>
      <button onclick="setCity('Tokyo')">🇯🇵 Tokyo</button>
      <button onclick="setCity('London')">🇬🇧 London</button>
      <button onclick="setCity('Dubai')">🇦🇪 Dubai</button>
    </div>

    <!-- Main Current Weather Hero Card -->
    <div class="current-card">
      <div class="hero-top">
        <div>
          <h2 id="cityName">New Delhi, India</h2>
          <span class="condition-pill" id="weatherCond">Partly Sunny</span>
        </div>
        <div class="weather-emoji" id="weatherIcon">⛅</div>
      </div>

      <div class="temp-row">
        <span class="temp-big" id="tempVal">31</span>
        <span class="temp-unit" id="unitSymbol">°C</span>
      </div>

      <p class="feels-like" id="feelsLike">Feels like 34°C • High: 36°C / Low: 24°C</p>
    </div>

    <!-- 4 Key Atmospheric Metrics -->
    <div class="metrics-grid">
      <div class="metric-card">
        <span class="lbl">HUMIDITY</span>
        <span class="val text-cyan" id="humidityVal">62%</span>
        <span class="sub">Normal</span>
      </div>
      <div class="metric-card">
        <span class="lbl">WIND SPEED</span>
        <span class="val text-gold" id="windVal">14 km/h</span>
        <span class="sub">NE Breeze</span>
      </div>
      <div class="metric-card">
        <span class="lbl">UV INDEX</span>
        <span class="val text-rose" id="uvVal">7.2</span>
        <span class="sub">Very High</span>
      </div>
      <div class="metric-card">
        <span class="lbl">AIR QUALITY</span>
        <span class="val text-green" id="aqiVal">88 AQI</span>
        <span class="sub">Moderate</span>
      </div>
    </div>

    <!-- Hourly Forecast -->
    <div class="section-card">
      <h3>Hourly Temperature & Cloud Cover</h3>
      <div class="hourly-list" id="hourlyList"></div>
    </div>

    <!-- 5-Day Outlook -->
    <div class="section-card">
      <h3>5-Day Climate Outlook</h3>
      <div class="forecast-list" id="forecastList"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#07090f; color:#fff; min-height:100vh; display:flex; justify-content:center; padding:12px; }
.weather-shell { width:100%; max-width:480px; }
.weather-topbar { display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:14px; }
.brand { display:flex; gap:10px; align-items:center; }
.brand .logo { font-size:22px; background:rgba(0,240,255,0.15); border:1px solid rgba(0,240,255,0.4); padding:6px 10px; border-radius:12px; }
.brand h1 { font-size:16px; font-weight:900; color:#00f0ff; letter-spacing:0.5px; }
.brand p { font-size:10px; color:#94a3b8; }
.unit-toggle { display:flex; background:#121828; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:2px; }
.unit-btn { background:none; border:none; color:#94a3b8; padding:4px 10px; border-radius:14px; font-size:11px; font-weight:800; cursor:pointer; }
.unit-btn.active { background:#00f0ff; color:#000; }
.search-bar { display:flex; gap:8px; margin-bottom:10px; }
.search-bar input { flex:1; background:#101628; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:10px 14px; color:#fff; font-size:12px; outline:none; }
.search-bar button { background:#00f0ff; color:#000; border:none; border-radius:12px; padding:0 16px; font-weight:900; font-size:12px; cursor:pointer; }
.quick-cities { display:flex; gap:6px; overflow-x:auto; padding-bottom:8px; margin-bottom:12px; scrollbar-width:none; }
.quick-cities button { background:#141c30; border:1px solid rgba(255,255,255,0.08); color:#cbd5e1; padding:5px 10px; border-radius:14px; font-size:10px; white-space:nowrap; cursor:pointer; }
.quick-cities button:hover { border-color:#00f0ff; }
.current-card { background:linear-gradient(135deg,#131a30,#0d1120); border:1px solid rgba(0,240,255,0.25); border-radius:20px; padding:18px; margin-bottom:14px; box-shadow:0 10px 25px rgba(0,0,0,0.5); }
.hero-top { display:flex; justify-content:space-between; align-items:flex-start; }
.hero-top h2 { font-size:18px; font-weight:900; color:#fff; }
.condition-pill { font-size:10px; font-weight:800; background:rgba(0,240,255,0.15); color:#00f0ff; padding:2px 8px; border-radius:6px; display:inline-block; margin-top:4px; }
.weather-emoji { font-size:42px; filter:drop-shadow(0 0 10px rgba(0,240,255,0.3)); }
.temp-row { display:flex; align-items:baseline; margin:10px 0 4px; }
.temp-big { font-size:48px; font-weight:900; color:#fff; line-height:1; }
.temp-unit { font-size:24px; font-weight:800; color:#00f0ff; margin-left:4px; }
.feels-like { font-size:11px; color:#94a3b8; }
.metrics-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:14px; }
.metric-card { background:#0f1424; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:10px 6px; text-align:center; }
.metric-card .lbl { font-size:8px; color:#64748b; font-weight:800; display:block; }
.metric-card .val { font-size:15px; font-weight:900; margin:3px 0 1px; display:block; }
.metric-card .sub { font-size:9px; color:#94a3b8; }
.text-cyan { color:#00f0ff; }
.text-gold { color:#fbbf24; }
.text-rose { color:#f43f5e; }
.text-green { color:#22c55e; }
.section-card { background:#0f1424; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:14px; margin-bottom:14px; }
.section-card h3 { font-size:12px; font-weight:800; color:#94a3b8; margin-bottom:10px; }
.hourly-list { display:flex; gap:10px; overflow-x:auto; padding-bottom:6px; scrollbar-width:none; }
.hour-box { background:#141c30; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:10px 12px; text-align:center; min-width:68px; }
.hour-time { font-size:10px; color:#64748b; font-weight:700; }
.hour-icon { font-size:20px; margin:4px 0; }
.hour-temp { font-size:13px; font-weight:900; }
.forecast-list { display:flex; flex-direction:column; gap:8px; }
.forecast-row { display:flex; justify-content:space-between; align-items:center; background:#141c30; border-radius:10px; padding:8px 12px; font-size:12px; }
.forecast-row .day { font-weight:700; width:70px; }
.forecast-row .icon { font-size:18px; }
.forecast-row .bar { flex:1; margin:0 12px; height:4px; background:#1e293b; border-radius:2px; position:relative; overflow:hidden; }
.forecast-row .bar-fill { height:100%; background:linear-gradient(90deg,#00f0ff,#fbbf24); border-radius:2px; }
.forecast-row .temps { font-weight:800; }`,

    'script.js': `const cities = {
  "New Delhi": { country: "India", temp: 31, cond: "Sunny & Clear", icon: "☀️", humidity: 55, wind: 12, uv: 8.5, aqi: 140, high: 36, low: 23 },
  "Mumbai": { country: "India", temp: 30, cond: "Tropical Humid", icon: "⛅", humidity: 78, wind: 18, uv: 7.0, aqi: 85, high: 33, low: 26 },
  "New York": { country: "United States", temp: 19, cond: "Breezy & Fair", icon: "🌤️", humidity: 48, wind: 22, uv: 4.5, aqi: 42, high: 22, low: 14 },
  "Tokyo": { country: "Japan", temp: 22, cond: "Clear Skies", icon: "🌸", humidity: 52, wind: 10, uv: 5.8, aqi: 28, high: 24, low: 16 },
  "London": { country: "United Kingdom", temp: 16, cond: "Light Drizzle", icon: "🌧️", humidity: 82, wind: 16, uv: 3.1, aqi: 35, high: 18, low: 11 },
  "Dubai": { country: "UAE", temp: 37, cond: "Golden Heatwave", icon: "🔥", humidity: 42, wind: 14, uv: 9.9, aqi: 95, high: 41, low: 29 }
};

let currentCity = "New Delhi";
let isCelsius = true;

function renderWeather() {
  const data = cities[currentCity] || {
    country: "Global",
    temp: 25,
    cond: "Partly Cloudy",
    icon: "⛅",
    humidity: 50,
    wind: 15,
    uv: 6.0,
    aqi: 50,
    high: 28,
    low: 20
  };

  const displayTemp = isCelsius ? data.temp : Math.round((data.temp * 9/5) + 32);
  const displayHigh = isCelsius ? data.high : Math.round((data.high * 9/5) + 32);
  const displayLow = isCelsius ? data.low : Math.round((data.low * 9/5) + 32);
  const unit = isCelsius ? "°C" : "°F";

  document.getElementById('cityName').innerText = \`\${currentCity}, \${data.country}\`;
  document.getElementById('weatherCond').innerText = data.cond;
  document.getElementById('weatherIcon').innerText = data.icon;
  document.getElementById('tempVal').innerText = displayTemp;
  document.getElementById('unitSymbol').innerText = unit;
  document.getElementById('feelsLike').innerText = \`Feels like \${displayTemp + 2}\${unit} • High: \${displayHigh}\${unit} / Low: \${displayLow}\${unit}\`;

  document.getElementById('humidityVal').innerText = data.humidity + '%';
  document.getElementById('windVal').innerText = data.wind + ' km/h';
  document.getElementById('uvVal').innerText = data.uv;
  document.getElementById('aqiVal').innerText = data.aqi + ' AQI';

  // Render Hourly
  const hourly = document.getElementById('hourlyList');
  hourly.innerHTML = '';
  const hours = ['12 PM', '3 PM', '6 PM', '9 PM', '12 AM', '3 AM'];
  hours.forEach((hr, idx) => {
    const t = isCelsius ? data.temp + (idx % 2 === 0 ? -1 : 2) : Math.round((data.temp * 9/5) + 32);
    const div = document.createElement('div');
    div.className = 'hour-box';
    div.innerHTML = \`
      <div class="hour-time">\${hr}</div>
      <div class="hour-icon">\${data.icon}</div>
      <div class="hour-temp">\${t}\${unit}</div>
    \`;
    hourly.appendChild(div);
  });

  // Render 5-Day
  const forecast = document.getElementById('forecastList');
  forecast.innerHTML = '';
  const days = ['Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  days.forEach((day, idx) => {
    const h = displayHigh - idx;
    const l = displayLow - (idx % 2);
    const row = document.createElement('div');
    row.className = 'forecast-row';
    row.innerHTML = \`
      <span class="day">\${day}</span>
      <span class="icon">\${idx % 2 === 0 ? data.icon : '🌤️'}</span>
      <div class="bar"><div class="bar-fill" style="width:\${60 + idx * 6}%;"></div></div>
      <span class="temps">\${h}° / \${l}°</span>
    \`;
    forecast.appendChild(row);
  });
}

window.setCity = function(name) {
  currentCity = name;
  renderWeather();
};

document.getElementById('searchBtn').addEventListener('click', () => {
  const q = document.getElementById('citySearchInput').value.trim();
  if (q) {
    if (cities[q]) {
      currentCity = q;
    } else {
      cities[q] = {
        country: "World",
        temp: Math.floor(Math.random() * 15) + 18,
        cond: "Clear & Pleasant",
        icon: "☀️",
        humidity: Math.floor(Math.random() * 40) + 40,
        wind: Math.floor(Math.random() * 15) + 5,
        uv: (Math.random() * 6 + 3).toFixed(1),
        aqi: Math.floor(Math.random() * 80) + 30,
        high: 30,
        low: 20
      };
      currentCity = q;
    }
    renderWeather();
  }
});

document.getElementById('btnC').addEventListener('click', () => {
  isCelsius = true;
  document.getElementById('btnC').classList.add('active');
  document.getElementById('btnF').classList.remove('active');
  renderWeather();
});

document.getElementById('btnF').addEventListener('click', () => {
  isCelsius = false;
  document.getElementById('btnF').classList.add('active');
  document.getElementById('btnC').classList.remove('active');
  renderWeather();
});

renderWeather();`
  };
}
