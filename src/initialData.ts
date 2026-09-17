import { ProjectFiles, ChatMessage, TerminalEntry, SettingsConfig } from './types';

export const initialProjectFiles: ProjectFiles = {
  'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maison d'Élite | Artisan Bakery</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="banner-pill">⚡ Fresh-Batch Baked Hourly</div>

  <header class="glass-header">
    <div class="brand">
      <span class="logo-mark">🥖</span>
      <div class="brand-text">
        <h1>Maison<span>d'Élite</span></h1>
        <small>Artisan Boulangerie</small>
      </div>
    </div>
    <nav class="nav-links">
      <a href="#about">Story</a>
      <a href="#menu">Crafted Menu</a>
      <button class="btn-order" onclick="openOrderModal()">Order Online</button>
    </nav>
  </header>

  <main class="container">
    <section class="hero-section">
      <span class="hero-tagline">The Art of Fine French Baking</span>
      <h2 class="hero-title">Perfection Crafted<br/>In Every Crust &amp; Layer</h2>
      <p class="hero-desc">Experience authentic slow-fermented organic heritage sourdoughs, layered croissants with Normandy AOP butter, and delicate seasonal berry tarts.</p>
      <div class="hero-actions">
        <a href="#menu" class="btn-primary">Explore Today's Menu</a>
        <button class="btn-secondary" onclick="openStoryModal()">Our Baking Philosophy</button>
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-val">48 hrs</div>
          <div class="metric-lbl">Fermentation Time</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">100%</div>
          <div class="metric-lbl">Organic French Butter</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">4.9 ★</div>
          <div class="metric-lbl">12,000+ Reviews</div>
        </div>
      </div>
    </section>

    <section id="menu" class="menu-section">
      <div class="section-head">
        <span class="sub-head">Our Fresh Selection</span>
        <h3>Handcrafted Daily Specialties</h3>
        <p>Baked in authentic stone-deck ovens before sunrise.</p>
      </div>

      <div class="filter-bar">
        <button class="filter-btn active" onclick="filterMenu('all')">All Items</button>
        <button class="filter-btn" onclick="filterMenu('breads')">Artisanal Breads</button>
        <button class="filter-btn" onclick="filterMenu('viennoiserie')">French Viennoiserie</button>
        <button class="filter-btn" onclick="filterMenu('cakes')">Petite Cakes &amp; Tarts</button>
      </div>

      <div class="menu-grid" id="menuGrid">
        <!-- Injected via JavaScript -->
      </div>
    </section>

    <section id="order-inquiry" class="order-inquiry-box">
      <div class="inquiry-header">
        <span class="badge-tag">Pre-Order &amp; Events</span>
        <h4>Order Custom Cakes or Reserve Fresh Batches</h4>
        <p>Planning a wedding, birthday, or bespoke breakfast gathering? Direct line: +91 98765 43210</p>
      </div>
      <form id="orderForm" onsubmit="handleOrderSubmit(event)">
        <div class="form-row">
          <input type="text" id="custName" placeholder="Full Name" required />
          <input type="email" id="custEmail" placeholder="Email Address" required />
        </div>
        <div class="form-row">
          <select id="cateringType">
            <option value="catering">Select Catering Type</option>
            <option value="wedding">Wedding Cake &amp; Sweet Table</option>
            <option value="corporate">Corporate Breakfast Box</option>
            <option value="daily">Daily Sourdough Subscription</option>
          </select>
        </div>
        <textarea id="notes" placeholder="Describe your request, preferred delivery date &amp; dietary needs..." rows="3"></textarea>
        <button type="submit" class="btn-submit">Send Order Request</button>
      </form>
    </section>
  </main>

  <footer class="app-footer">
    <p>© 2026 Maison d'Élite Bakery. Engineered with ultimate perfection by <strong>Nowempireoff</strong>.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`,
  'style.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #0c0d11;
  color: #f3f4f6;
  line-height: 1.6;
  padding-bottom: 50px;
}

.banner-pill {
  background: linear-gradient(90deg, #d97706, #f59e0b);
  color: #111827;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  padding: 6px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.glass-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: rgba(18, 20, 29, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mark {
  font-size: 1.8rem;
}

.brand-text h1 {
  font-family: Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fbbf24;
}

.brand-text h1 span {
  color: #f3f4f6;
  font-style: italic;
  font-weight: 400;
}

.brand-text small {
  font-size: 0.68rem;
  color: #9ca3af;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-links a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
}

.nav-links a:hover {
  color: #fbbf24;
}

.btn-order {
  background: #fbbf24;
  color: #18181b;
  border: none;
  padding: 7px 14px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
}

.hero-section {
  text-align: center;
  padding: 20px 0 35px;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fbbf24;
  margin-bottom: 8px;
  font-weight: 600;
}

.hero-title {
  font-family: Georgia, serif;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 14px;
}

.hero-desc {
  font-size: 0.95rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto 22px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.btn-primary {
  background: #fbbf24;
  color: #111827;
  text-decoration: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f3f4f6;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 550px;
  margin: 0 auto;
}

.metric-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 10px;
  border-radius: 12px;
}

.metric-val {
  font-size: 1.3rem;
  font-weight: 800;
  color: #fbbf24;
}

.metric-lbl {
  font-size: 0.72rem;
  color: #9ca3af;
  margin-top: 2px;
}

.menu-section {
  padding: 30px 0;
}

.section-head {
  text-align: center;
  margin-bottom: 20px;
}

.sub-head {
  color: #fbbf24;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.section-head h3 {
  font-family: Georgia, serif;
  font-size: 1.8rem;
  color: #fff;
}

.section-head p {
  color: #9ca3af;
  font-size: 0.85rem;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 6px;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #9ca3af;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.filter-btn.active, .filter-btn:hover {
  background: #fbbf24;
  color: #111827;
  border-color: #fbbf24;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.food-card {
  background: #141721;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  overflow: hidden;
}

.food-img-wrap {
  width: 100%;
  height: 150px;
  position: relative;
  background: #1f2430;
}

.food-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.food-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fbbf24;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
}

.food-info {
  padding: 14px;
}

.food-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.food-desc {
  font-size: 0.8rem;
  color: #9ca3af;
  line-height: 1.4;
  margin-bottom: 12px;
}

.food-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.food-price {
  font-weight: 800;
  color: #fbbf24;
  font-size: 1.05rem;
}

.btn-add {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.4);
  padding: 5px 12px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
}

.btn-add:hover {
  background: #fbbf24;
  color: #111827;
}

.order-inquiry-box {
  background: #181c28;
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 16px;
  padding: 24px;
  margin-top: 30px;
}

.inquiry-header {
  margin-bottom: 18px;
}

.badge-tag {
  display: inline-block;
  background: #374151;
  color: #fbbf24;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 6px;
}

.inquiry-header h4 {
  font-family: Georgia, serif;
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 4px;
}

.inquiry-header p {
  color: #9ca3af;
  font-size: 0.85rem;
}

.form-row {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

input, select, textarea {
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f3f4f6;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.88rem;
  outline: none;
}

input:focus, select:focus, textarea:focus {
  border-color: #fbbf24;
}

.btn-submit {
  width: 100%;
  background: #fbbf24;
  color: #111827;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  margin-top: 10px;
}

.app-footer {
  text-align: center;
  padding: 30px 16px 10px;
  color: #6b7280;
  font-size: 0.8rem;
}`,
  'script.js': `const menuItems = [
  {
    id: 1,
    name: "Golden Butter Croissant",
    category: "viennoiserie",
    price: "₹180",
    badge: "Bestseller",
    desc: "Layered with pure French Normandy butter, resulting in 81 delicate flaky honeycomb layers and an airy center.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Belgian Dark Truffle Cake",
    category: "cakes",
    price: "₹420",
    badge: "Chef Pick",
    desc: "Rich 70% dark Belgian chocolate sponge layered with organic hazelnut crunch and silky ganache.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Artisanal Berry Tart",
    category: "cakes",
    price: "₹260",
    badge: "Fresh",
    desc: "Almond butter shortcrust shell filled with Tahitian vanilla bean cream and topped with wild forest berries.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Heritage Wild Sourdough",
    category: "breads",
    price: "₹210",
    badge: "48h Ferment",
    desc: "Naturally fermented for 48 hours with our 10-year-old starter, offering a crunchy caramelized crust.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
  }
];

function renderMenu(items) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  grid.innerHTML = items.map(item => \`
    <div class="food-card">
      <div class="food-img-wrap">
        <img src="\${item.img}" alt="\${item.name}" loading="lazy" />
        <span class="food-badge">\${item.badge}</span>
      </div>
      <div class="food-info">
        <h4 class="food-title">\${item.name}</h4>
        <p class="food-desc">\${item.desc}</p>
        <div class="food-foot">
          <span class="food-price">\${item.price}</span>
          <button class="btn-add" onclick="addToOrder('\${item.name}')">+ Add to Bag</button>
        </div>
      </div>
    </div>
  \`).join("");
}

function filterMenu(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (window.event && window.event.target) {
    (window.event.target as HTMLElement).classList.add("active");
  }

  if (category === "all") {
    renderMenu(menuItems);
  } else {
    renderMenu(menuItems.filter(i => i.category === category));
  }
}

function addToOrder(name) {
  alert(\`Added \${name} to your order bag!\`);
}

function openOrderModal() {
  const el = document.getElementById("order-inquiry");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function openStoryModal() {
  alert("Maison d'Élite was founded with a passion for traditional French heritage sourdough and artisanal viennoiserie.");
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const name = (document.getElementById("custName") as HTMLInputElement).value;
  alert(\`Thank you \${name}! Your order inquiry has been received. Our chef will confirm within 15 minutes.\`);
  (e.target as HTMLFormElement).reset();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuItems);
});`
};

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'msg-welcome',
    sender: 'maria',
    text: 'नमस्ते Nowempireoff! Bypass Autonomous IDE v3.8 में आपका स्वागत है। आप बिल्डर में कोई भी सोशल ऐप (Instagram, WhatsApp, YouTube, 𝕏, Spotify, TikTok, Discord, Telegram आदि) या 3D गेम लिखें — Google Search Grounding के साथ रियल ऐप बन जाएगा। ऊपर दिए गए "App Ideas Dock" पर टैप करके सभी ऐप्स तुरंत एक्सप्लोर करें!',
    timestamp: 'Just now',
  },
];

export const initialTerminalLines: TerminalEntry[] = [
  { id: 't-1', text: '[SYSTEM] Android root environment initialized successfully', type: 'info', timestamp: '08:29:10' },
  { id: 't-2', text: '[KERNEL] Linux localhost 6.1.43-android14-perf (aarch64)', type: 'dim', timestamp: '08:29:11' },
  { id: 't-3', text: 'root@bypass:/# su -c "bypass_daemon --version"', type: 'cmd', timestamp: '08:29:12' },
  { id: 't-4', text: 'Bypass Autonomous Core v3.8 (Lead Architect: Nowempireoff)', type: 'success', timestamp: '08:29:12' },
  { id: 't-5', text: 'root@bypass:/sdcard/BypassProjects# python3 --version', type: 'cmd', timestamp: '08:30:00' },
  { id: 't-6', text: 'Python 3.11.4 (Bypass Root Native Subsystem)', type: 'info', timestamp: '08:30:00' },
  { id: 't-7', text: 'root@bypass:/# settings get system screen_brightness', type: 'cmd', timestamp: '08:32:15' },
  { id: 't-8', text: '255 (Brightness Level: MAX 100%)', type: 'dim', timestamp: '08:32:15' },
  { id: 't-9', text: 'root@bypass:/# am force-stop com.android.vending', type: 'cmd', timestamp: '08:33:45' },
  { id: 't-10', text: 'KILLED: Process com.android.vending pid=14092', type: 'success', timestamp: '08:33:46' },
  { id: 't-11', text: 'root@bypass:/# sh /system/bin/synthesize_scaffold.sh --type=bakery_luxury', type: 'cmd', timestamp: '08:34:20' },
  { id: 't-12', text: 'WRITTEN: /sdcard/BypassProjects/outputs/index.html (6.3 KB)', type: 'success', timestamp: '08:34:22' },
  { id: 't-13', text: 'WRITTEN: /sdcard/BypassProjects/outputs/style.css (5.1 KB)', type: 'success', timestamp: '08:34:22' },
  { id: 't-14', text: 'WRITTEN: /sdcard/BypassProjects/outputs/script.js (3.2 KB)', type: 'success', timestamp: '08:34:23' },
  { id: 't-15', text: 'HTTP Localhost Server live at: http://127.0.0.1:8080/', type: 'info', timestamp: '08:34:24' },
];

export const defaultSettings: SettingsConfig = {
  topCapsule: true,
  backgroundAssistant: true,
  liveWebSearch: true,
  rootAccess: true,
  autoFixEngine: true,
  voiceRecognition: true,
  voiceOutput: true,
};
