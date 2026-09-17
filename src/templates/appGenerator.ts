import { ProjectFiles } from '../types';

/**
 * Intelligent Dynamic Application Generator for Bypass Autonomous IDE
 * Generates rich, complete, interactive apps for any user prompt
 */

// 1. Gym / Fitness / Workout Tracker
export function getGymWorkoutAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TITAN FIT | AI Workout Tracker</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="fit-container">
    <header class="fit-header">
      <div class="brand">
        <span class="logo">⚡</span>
        <div>
          <h1>TITAN FIT</h1>
          <p>AI Hypertrophy & Calorie Engine</p>
        </div>
      </div>
      <span class="live-pill">LIVE SESSION</span>
    </header>

    <div class="metrics-row">
      <div class="metric-card">
        <span class="label">BURNT</span>
        <span class="value text-gold" id="calVal">480</span>
        <span class="sub">kcal</span>
      </div>
      <div class="metric-card">
        <span class="label">REPS DONE</span>
        <span class="value text-cyan" id="repsVal">64</span>
        <span class="sub">total</span>
      </div>
      <div class="metric-card">
        <span class="label">REST TIMER</span>
        <span class="value text-rose" id="timerVal">00:45</span>
        <span class="sub" id="timerStatus">RESTING</span>
      </div>
    </div>

    <!-- Active Exercise Card -->
    <div class="workout-card">
      <div class="card-head">
        <div>
          <span class="badge">ACTIVE EXERCISE</span>
          <h2 id="activeExName">Barbell Incline Bench Press</h2>
        </div>
        <button id="nextExBtn" class="pill-btn">Next ➔</button>
      </div>
      <div class="set-stepper">
        <div class="step-box">
          <span class="step-lbl">SET</span>
          <span class="step-num" id="currentSet">3/4</span>
        </div>
        <div class="step-box">
          <span class="step-lbl">WEIGHT</span>
          <div class="counter">
            <button id="decWt">-</button>
            <span id="wtVal">85 kg</span>
            <button id="incWt">+</button>
          </div>
        </div>
        <div class="step-box">
          <span class="step-lbl">TARGET</span>
          <span class="step-num">10-12</span>
        </div>
      </div>
      <button id="logSetBtn" class="primary-btn">✓ COMPLETE SET & LOG</button>
    </div>

    <!-- Exercise Selector -->
    <div class="routine-section">
      <h3>Today's Chest & Triceps Routine</h3>
      <div class="routine-list" id="routineList"></div>
    </div>

    <!-- Add Custom Exercise -->
    <div class="add-form">
      <input type="text" id="newExInput" placeholder="Add custom exercise (e.g. Cable Flyes)..." />
      <button id="addExBtn">+ Add</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
body { background: #07090f; color: #fff; min-height: 100vh; padding: 16px; display: flex; justify-content: center; }
.fit-container { width: 100%; max-width: 480px; }
.fit-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
.brand { display: flex; gap: 10px; align-items: center; }
.brand .logo { font-size: 26px; background: rgba(255,215,0,0.15); padding: 8px; border-radius: 12px; border: 1px solid rgba(255,215,0,0.4); }
.brand h1 { font-size: 18px; font-weight: 900; letter-spacing: 0.5px; color: #ffd700; }
.brand p { font-size: 11px; color: #94a3b8; }
.live-pill { font-size: 10px; font-weight: 800; background: rgba(255,0,85,0.2); color: #ff0055; border: 1px solid #ff0055; padding: 4px 8px; border-radius: 20px; animation: pulse 1.8s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.metrics-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
.metric-card { background: #0f1422; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 8px; text-align: center; }
.metric-card .label { font-size: 9px; font-weight: 800; color: #64748b; letter-spacing: 0.5px; }
.metric-card .value { font-size: 20px; font-weight: 900; margin: 4px 0 2px; }
.metric-card .sub { font-size: 10px; color: #94a3b8; }
.text-gold { color: #ffd700; }
.text-cyan { color: #00f0ff; }
.text-rose { color: #ff0055; }
.workout-card { background: linear-gradient(135deg, #131a2e, #0c101d); border: 1px solid rgba(0,240,255,0.3); border-radius: 18px; padding: 16px; margin-bottom: 18px; box-shadow: 0 10px 25px rgba(0,240,255,0.08); }
.card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
.card-head .badge { font-size: 9px; color: #00f0ff; font-weight: 800; letter-spacing: 0.5px; }
.card-head h2 { font-size: 16px; font-weight: 800; color: #fff; margin-top: 2px; }
.pill-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px 12px; border-radius: 20px; font-size: 11px; cursor: pointer; }
.set-stepper { display: grid; grid-template-columns: 1fr 1.6fr 1fr; gap: 8px; margin-bottom: 14px; }
.step-box { background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 8px; text-align: center; }
.step-lbl { font-size: 9px; color: #64748b; font-weight: 700; }
.step-num { font-size: 16px; font-weight: 900; color: #ffd700; margin-top: 4px; display: block; }
.counter { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; }
.counter button { width: 24px; height: 24px; border-radius: 6px; background: rgba(255,255,255,0.15); border: none; color: #fff; font-weight: 900; cursor: pointer; }
.counter span { font-size: 13px; font-weight: 800; color: #00f0ff; }
.primary-btn { width: 100%; padding: 12px; border-radius: 12px; background: linear-gradient(135deg, #00f0ff, #0070f3); border: none; color: #000; font-size: 13px; font-weight: 900; letter-spacing: 0.5px; cursor: pointer; }
.routine-section h3 { font-size: 13px; color: #94a3b8; font-weight: 700; margin-bottom: 10px; }
.routine-item { display: flex; justify-content: space-between; align-items: center; background: #0f1422; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 10px 12px; margin-bottom: 8px; }
.routine-item.done { border-color: rgba(34,197,94,0.4); background: rgba(34,197,94,0.06); }
.item-title { font-size: 13px; font-weight: 700; }
.item-sub { font-size: 11px; color: #64748b; }
.add-form { display: flex; gap: 8px; margin-top: 14px; }
.add-form input { flex: 1; background: #0f1422; border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 10px 12px; color: #fff; font-size: 12px; outline: none; }
.add-form button { background: #ffd700; color: #000; font-weight: 800; border: none; border-radius: 10px; padding: 0 16px; cursor: pointer; font-size: 12px; }`,
    'script.js': `const routine = [
  { name: 'Barbell Incline Bench', sets: '4 sets x 10 reps', done: true },
  { name: 'Dumbbell Flat Press', sets: '3 sets x 12 reps', done: false },
  { name: 'Cable Chest Flyes', sets: '3 sets x 15 reps', done: false },
  { name: 'Triceps Rope Pushdowns', sets: '4 sets x 12 reps', done: false },
  { name: 'Dips Bodyweight', sets: '3 sets x to failure', done: false }
];

let activeIndex = 1;
let weight = 85;
let currentSetNum = 1;
let repsCount = 64;
let calories = 480;
let timerSeconds = 45;
let timerInterval = null;

function renderRoutine() {
  const container = document.getElementById('routineList');
  container.innerHTML = '';
  routine.forEach((ex, idx) => {
    const div = document.createElement('div');
    div.className = 'routine-item ' + (ex.done ? 'done' : '');
    div.innerHTML = \`
      <div>
        <div class="item-title">\${ex.name}</div>
        <div class="item-sub">\${ex.sets}</div>
      </div>
      <button class="pill-btn" onclick="selectExercise(\${idx})">\${idx === activeIndex ? 'ACTIVE' : (ex.done ? '✓' : 'START')}</button>
    \`;
    container.appendChild(div);
  });
}

window.selectExercise = function(idx) {
  activeIndex = idx;
  document.getElementById('activeExName').innerText = routine[idx].name;
  currentSetNum = 1;
  document.getElementById('currentSet').innerText = \`1/4\`;
  renderRoutine();
};

document.getElementById('incWt').addEventListener('click', () => {
  weight += 2.5;
  document.getElementById('wtVal').innerText = weight + ' kg';
});
document.getElementById('decWt').addEventListener('click', () => {
  if (weight > 5) weight -= 2.5;
  document.getElementById('wtVal').innerText = weight + ' kg';
});

document.getElementById('logSetBtn').addEventListener('click', () => {
  repsCount += 10;
  calories += 25;
  currentSetNum++;
  document.getElementById('repsVal').innerText = repsCount;
  document.getElementById('calVal').innerText = calories;

  if (currentSetNum <= 4) {
    document.getElementById('currentSet').innerText = \`\${currentSetNum}/4\`;
  } else {
    routine[activeIndex].done = true;
    window.selectExercise((activeIndex + 1) % routine.length);
  }
  startTimer();
  renderRoutine();
});

document.getElementById('nextExBtn').addEventListener('click', () => {
  window.selectExercise((activeIndex + 1) % routine.length);
});

function startTimer() {
  clearInterval(timerInterval);
  timerSeconds = 60;
  timerInterval = setInterval(() => {
    timerSeconds--;
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    document.getElementById('timerVal').innerText = \`\${mins}:\${secs}\`;
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timerVal').innerText = 'GO!';
    }
  }, 1000);
}

document.getElementById('addExBtn').addEventListener('click', () => {
  const input = document.getElementById('newExInput');
  if (input.value.trim()) {
    routine.push({ name: input.value.trim(), sets: '3 sets x 12 reps', done: false });
    input.value = '';
    renderRoutine();
  }
});

renderRoutine();`
  };
}

// 2. Restaurant / Food Ordering App
export function getRestaurantFoodAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GRILL CRAFT | Artisan Kitchen</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="food-container">
    <header class="app-header">
      <div class="brand">
        <span class="brand-icon">🍔</span>
        <div>
          <h1>GRILL CRAFT</h1>
          <p>Artisan Burgers & Gourmet Bites</p>
        </div>
      </div>
      <button id="cartBtn" class="cart-btn">🛒 <span id="cartCount">0</span></button>
    </header>

    <div class="banner">
      <span class="badge">CHEF SPECIAL</span>
      <h2>Smokehouse Wagyu Burger</h2>
      <p>Smoked gouda, truffle glaze, brioche bun & crispy fries</p>
      <button class="order-now" onclick="addToCart(1)">Add to Feast • ₹449</button>
    </div>

    <!-- Category Tabs -->
    <div class="category-tabs">
      <button class="cat-pill active" onclick="filterCat('all')">All Menu</button>
      <button class="cat-pill" onclick="filterCat('burgers')">Burgers</button>
      <button class="cat-pill" onclick="filterCat('pizzas')">Woodfire Pizza</button>
      <button class="cat-pill" onclick="filterCat('drinks')">Shakes & Drinks</button>
    </div>

    <!-- Menu Grid -->
    <div class="menu-grid" id="menuGrid"></div>

    <!-- Cart Drawer Modal -->
    <div class="modal-overlay" id="cartModal">
      <div class="modal-sheet">
        <div class="sheet-head">
          <h3>Your Feast Basket</h3>
          <button id="closeCart" class="close-btn">✕</button>
        </div>
        <div id="cartItems" class="cart-items-list"></div>
        <div class="bill-breakdown">
          <div class="bill-row"><span>Subtotal</span><span id="subTotal">₹0</span></div>
          <div class="bill-row"><span>GST & Delivery</span><span>₹49</span></div>
          <div class="bill-row total"><span>Total Payable</span><span id="totalBill">₹0</span></div>
        </div>
        <button id="checkoutBtn" class="primary-pay-btn">Confirm Order & Pay ➔</button>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
body { background: #080a0f; color: #fff; min-height: 100vh; padding: 14px; display: flex; justify-content: center; }
.food-container { width: 100%; max-width: 480px; }
.app-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
.brand { display: flex; gap: 10px; align-items: center; }
.brand-icon { font-size: 26px; background: rgba(249,115,22,0.15); padding: 8px; border-radius: 12px; border: 1px solid rgba(249,115,22,0.3); }
.brand h1 { font-size: 17px; font-weight: 900; color: #f97316; letter-spacing: 0.5px; }
.brand p { font-size: 11px; color: #94a3b8; }
.cart-btn { background: #181d2f; border: 1px solid rgba(255,255,255,0.12); color: #fff; padding: 8px 14px; border-radius: 20px; font-weight: 800; font-size: 13px; cursor: pointer; }
.cart-btn span { background: #f97316; color: #000; padding: 2px 7px; border-radius: 10px; font-size: 11px; margin-left: 4px; }
.banner { background: linear-gradient(135deg, #1c1917, #0f172a); border: 1px solid rgba(249,115,22,0.4); border-radius: 18px; padding: 16px; margin-bottom: 16px; }
.banner .badge { font-size: 9px; font-weight: 800; color: #f97316; background: rgba(249,115,22,0.15); padding: 3px 8px; border-radius: 6px; }
.banner h2 { font-size: 17px; margin: 6px 0 4px; color: #fff; }
.banner p { font-size: 11px; color: #94a3b8; margin-bottom: 12px; }
.order-now { background: #f97316; border: none; color: #000; font-weight: 900; padding: 9px 16px; border-radius: 10px; cursor: pointer; font-size: 12px; }
.category-tabs { display: flex; gap: 8px; overflow-x: auto; margin-bottom: 16px; padding-bottom: 4px; }
.cat-pill { background: #131826; border: 1px solid rgba(255,255,255,0.08); color: #94a3b8; padding: 8px 14px; border-radius: 12px; font-size: 12px; font-weight: 700; white-space: nowrap; cursor: pointer; }
.cat-pill.active { background: #f97316; color: #000; font-weight: 900; }
.menu-grid { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.menu-card { display: flex; justify-content: space-between; align-items: center; background: #111523; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px; }
.dish-icon { font-size: 28px; background: rgba(255,255,255,0.04); padding: 10px; border-radius: 12px; margin-right: 12px; }
.dish-info { flex: 1; }
.dish-name { font-size: 14px; font-weight: 800; color: #fff; }
.dish-desc { font-size: 11px; color: #64748b; margin: 2px 0 4px; }
.dish-price { font-size: 13px; font-weight: 900; color: #f97316; }
.add-btn { background: #1e293b; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px 14px; border-radius: 8px; font-weight: 800; font-size: 12px; cursor: pointer; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: none; align-items: flex-end; justify-content: center; z-index: 999; }
.modal-overlay.open { display: flex; }
.modal-sheet { width: 100%; max-width: 480px; background: #0e121d; border-radius: 20px 20px 0 0; padding: 20px; border-top: 1px solid rgba(255,255,255,0.15); max-height: 80vh; overflow-y: auto; }
.sheet-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.close-btn { background: none; border: none; color: #94a3b8; font-size: 18px; cursor: pointer; }
.bill-breakdown { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin: 16px 0; }
.bill-row { display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 6px; }
.bill-row.total { font-size: 15px; font-weight: 900; color: #fff; margin-top: 8px; }
.primary-pay-btn { width: 100%; padding: 14px; background: #f97316; border: none; border-radius: 12px; color: #000; font-weight: 900; font-size: 14px; cursor: pointer; }`,
    'script.js': `const menu = [
  { id: 1, name: 'Smokehouse Wagyu Burger', category: 'burgers', icon: '🍔', desc: 'Aged cheddar, brioche, barbecue reduction', price: 449 },
  { id: 2, name: 'Truffle Mushroom Melt', category: 'burgers', icon: '🍔', desc: 'Sauteed mushrooms, swiss cheese, garlic aioli', price: 349 },
  { id: 3, name: 'Pepperoni Feast Pizza', category: 'pizzas', icon: '🍕', desc: 'San Marzano tomatoes, fresh mozzarella', price: 499 },
  { id: 4, name: 'Quattro Formaggi', category: 'pizzas', icon: '🍕', desc: 'Gorgonzola, parmesan, ricotta, mozzarella', price: 459 },
  { id: 5, name: 'Belgian Chocolate Shake', category: 'drinks', icon: '🥤', desc: 'Dark chocolate ganache, whipped cream', price: 219 },
  { id: 6, name: 'Cold Brew Citrus Nitro', category: 'drinks', icon: '☕', desc: 'Single origin arabica, orange zest infused', price: 189 }
];

let cart = {};

function renderMenu(category = 'all') {
  const container = document.getElementById('menuGrid');
  container.innerHTML = '';
  const filtered = category === 'all' ? menu : menu.filter(m => m.category === category);
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = \`
      <div style="display:flex; align-items:center; flex:1;">
        <span class="dish-icon">\${item.icon}</span>
        <div class="dish-info">
          <div class="dish-name">\${item.name}</div>
          <div class="dish-desc">\${item.desc}</div>
          <div class="dish-price">₹\${item.price}</div>
        </div>
      </div>
      <button class="add-btn" onclick="addToCart(\${item.id})">+ Add</button>
    \`;
    container.appendChild(card);
  });
}

window.addToCart = function(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
};

window.filterCat = function(cat) {
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu(cat);
};

function updateCartUI() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById('cartCount').innerText = count;

  let subtotal = 0;
  const list = document.getElementById('cartItems');
  list.innerHTML = '';

  Object.entries(cart).forEach(([id, qty]) => {
    const item = menu.find(m => m.id === Number(id));
    if (item && qty > 0) {
      subtotal += item.price * qty;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; font-size:13px;';
      row.innerHTML = \`
        <div>\${item.name} x \${qty}</div>
        <div style="font-weight:800;">₹\${item.price * qty}</div>
      \`;
      list.appendChild(row);
    }
  });

  document.getElementById('subTotal').innerText = '₹' + subtotal;
  document.getElementById('totalBill').innerText = '₹' + (subtotal > 0 ? subtotal + 49 : 0);
}

document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartModal').classList.add('open');
});
document.getElementById('closeCart').addEventListener('click', () => {
  document.getElementById('cartModal').classList.remove('open');
});
document.getElementById('checkoutBtn').addEventListener('click', () => {
  alert('🎉 Order placed successfully! Delivery arriving in 24 minutes.');
  cart = {};
  updateCartUI();
  document.getElementById('cartModal').classList.remove('open');
});

renderMenu();`
  };
}

// 3. Hospital / Doctor Booking App
export function getHospitalDoctorAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CARE MED | Smart Hospital & Doctor Booking</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="care-container">
    <header class="care-header">
      <div class="logo-box">🏥</div>
      <div>
        <h1>CARE MED HOSPITAL</h1>
        <p>24/7 Digital OPD & Emergency Services</p>
      </div>
    </header>

    <div class="emergency-banner">
      <div>
        <span class="pulse-dot"></span>
        <strong>EMERGENCY HELPLINE</strong>
      </div>
      <a href="tel:108" class="call-btn">📞 Dial 108 / 112</a>
    </div>

    <!-- Booking Form -->
    <div class="booking-card">
      <h2>Book Doctor Appointment</h2>
      <div class="form-group">
        <label>Patient Name</label>
        <input type="text" id="patientName" placeholder="Enter patient's full name..." value="Aarav Sharma" />
      </div>
      <div class="form-group">
        <label>Select Department / Specialist</label>
        <select id="doctorSelect">
          <option value="Dr. Vikram Sen - Cardiologist (Heart)">Dr. Vikram Sen (Cardiology)</option>
          <option value="Dr. Ananya Roy - Neurologist (Brain)">Dr. Ananya Roy (Neurology)</option>
          <option value="Dr. Rohan Mehta - Orthopedic (Bone)">Dr. Rohan Mehta (Orthopedics)</option>
          <option value="Dr. Priya Kapoor - Pediatrician (Child)">Dr. Priya Kapoor (Pediatrics)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Appointment Date & Slot</label>
        <input type="date" id="appDate" value="2026-09-16" />
      </div>
      <button id="bookBtn" class="primary-btn">Confirm Appointment & Generate Token</button>
    </div>

    <!-- Confirmed Bookings List -->
    <div class="appointments-list">
      <h3>Active Token Records</h3>
      <div id="tokenFeed"></div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }
body { background:#070b14; color:#fff; min-height:100vh; padding:16px; display:flex; justify-content:center; }
.care-container { width:100%; max-width:480px; }
.care-header { display:flex; gap:12px; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:14px; }
.logo-box { font-size:26px; background:rgba(16,185,129,0.15); padding:8px; border-radius:12px; border:1px solid rgba(16,185,129,0.3); }
.care-header h1 { font-size:17px; font-weight:900; color:#10b981; letter-spacing:0.5px; }
.care-header p { font-size:11px; color:#94a3b8; }
.emergency-banner { background:linear-gradient(135deg,rgba(239,68,68,0.2),rgba(185,28,28,0.1)); border:1px solid #ef4444; border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
.pulse-dot { display:inline-block; width:8px; height:8px; background:#ef4444; border-radius:50%; margin-right:6px; animation:ping 1.5s infinite; }
@keyframes ping { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
.call-btn { background:#ef4444; color:#fff; text-decoration:none; padding:6px 12px; border-radius:8px; font-size:11px; font-weight:800; }
.booking-card { background:#0f1524; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:16px; margin-bottom:18px; }
.booking-card h2 { font-size:15px; font-weight:800; margin-bottom:12px; color:#38bdf8; }
.form-group { margin-bottom:12px; }
.form-group label { display:block; font-size:11px; color:#94a3b8; margin-bottom:4px; font-weight:700; }
.form-group input, .form-group select { width:100%; background:#161d31; border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px; color:#fff; font-size:12px; outline:none; }
.primary-btn { width:100%; padding:12px; background:linear-gradient(135deg,#10b981,#059669); border:none; border-radius:10px; color:#000; font-weight:900; cursor:pointer; font-size:13px; margin-top:4px; }
.appointments-list h3 { font-size:13px; color:#94a3b8; margin-bottom:10px; }
.token-card { background:#111827; border:1px solid rgba(16,185,129,0.3); border-radius:12px; padding:12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; }
.token-badge { background:rgba(16,185,129,0.2); color:#10b981; font-weight:900; font-size:16px; padding:6px 12px; border-radius:8px; }`,
    'script.js': `const tokens = [
  { token: 'T-101', patient: 'Aarav Sharma', doctor: 'Dr. Vikram Sen (Cardiology)', date: '2026-09-16' },
  { token: 'T-102', patient: 'Riya Verma', doctor: 'Dr. Ananya Roy (Neurology)', date: '2026-09-16' }
];

let tokenCount = 103;

function renderTokens() {
  const container = document.getElementById('tokenFeed');
  container.innerHTML = '';
  tokens.forEach(t => {
    const div = document.createElement('div');
    div.className = 'token-card';
    div.innerHTML = \`
      <div>
        <div style="font-size:14px; font-weight:800; color:#fff;">\${t.patient}</div>
        <div style="font-size:11px; color:#94a3b8; margin-top:2px;">\${t.doctor}</div>
        <div style="font-size:10px; color:#64748b;">Date: \${t.date}</div>
      </div>
      <div class="token-badge">\${t.token}</div>
    \`;
    container.appendChild(div);
  });
}

document.getElementById('bookBtn').addEventListener('click', () => {
  const patient = document.getElementById('patientName').value.trim();
  const doctor = document.getElementById('doctorSelect').value;
  const date = document.getElementById('appDate').value;

  if (!patient) {
    alert('Please enter patient name');
    return;
  }

  const tokenStr = 'T-' + tokenCount++;
  tokens.unshift({ token: tokenStr, patient, doctor, date });
  renderTokens();
  alert('✅ Appointment confirmed! Token assigned: ' + tokenStr);
});

renderTokens();`
  };
}

// 4. Crypto Portfolio & Live Exchange Simulator
export function getCryptoTrackerAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NEXUS CRYPTO | Live Terminal</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="crypto-app">
    <header class="crypto-head">
      <div>
        <span class="badge">NEXUS EXCHANGE</span>
        <h1>Crypto Terminal</h1>
      </div>
      <div class="balance-box">
        <span class="bal-lbl">PORTFOLIO</span>
        <span class="bal-val" id="totalBalance">$48,250.00</span>
      </div>
    </header>

    <!-- Price Marquee / Active Coin -->
    <div class="coin-focus">
      <div class="focus-head">
        <div>
          <h2>Bitcoin • BTC/USDT</h2>
          <span class="price-val" id="btcPrice">$94,280.50</span>
          <span class="change-tag positive">+4.82% 24h</span>
        </div>
        <div class="chart-canvas-wrap">
          <canvas id="priceCanvas" width="180" height="70"></canvas>
        </div>
      </div>
    </div>

    <!-- Quick Trade Simulator -->
    <div class="trade-box">
      <div class="trade-tabs">
        <button id="buyTab" class="active">BUY</button>
        <button id="sellTab">SELL</button>
      </div>
      <div class="trade-inputs">
        <input type="number" id="tradeAmt" placeholder="Amount in USD..." value="500" />
        <button id="execTradeBtn" class="trade-exec-btn">Execute Order ➔</button>
      </div>
    </div>

    <!-- Watchlist Table -->
    <div class="watchlist-section">
      <h3>Live Market Watch</h3>
      <div id="coinList" class="coin-list"></div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }
body { background:#060811; color:#fff; min-height:100vh; padding:14px; display:flex; justify-content:center; }
.crypto-app { width:100%; max-width:480px; }
.crypto-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08); }
.badge { font-size:9px; font-weight:800; color:#10b981; letter-spacing:0.5px; }
.crypto-head h1 { font-size:18px; font-weight:900; }
.balance-box { text-align:right; }
.bal-lbl { font-size:9px; color:#64748b; font-weight:800; }
.bal-val { font-size:16px; font-weight:900; color:#10b981; }
.coin-focus { background:linear-gradient(135deg,#0d1424,#080d1a); border:1px solid rgba(16,185,129,0.3); border-radius:16px; padding:16px; margin-bottom:14px; }
.focus-head { display:flex; justify-content:space-between; align-items:center; }
.focus-head h2 { font-size:13px; color:#94a3b8; margin-bottom:4px; }
.price-val { font-size:22px; font-weight:900; color:#fff; display:block; }
.change-tag { font-size:10px; font-weight:800; padding:2px 6px; border-radius:6px; }
.change-tag.positive { background:rgba(16,185,129,0.2); color:#10b981; }
.trade-box { background:#0f1422; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; margin-bottom:16px; }
.trade-tabs { display:flex; gap:6px; margin-bottom:10px; }
.trade-tabs button { flex:1; padding:8px; border-radius:8px; border:none; background:#181f33; color:#94a3b8; font-weight:800; cursor:pointer; font-size:12px; }
.trade-tabs button.active { background:#10b981; color:#000; }
.trade-inputs { display:flex; gap:8px; }
.trade-inputs input { flex:1; background:#181f33; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:10px; color:#fff; font-size:12px; outline:none; }
.trade-exec-btn { background:#10b981; color:#000; border:none; border-radius:8px; padding:0 14px; font-weight:900; cursor:pointer; font-size:12px; }
.watchlist-section h3 { font-size:13px; color:#94a3b8; margin-bottom:10px; }
.coin-row { display:flex; justify-content:space-between; align-items:center; background:#0f1422; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:10px 12px; margin-bottom:8px; }`,
    'script.js': `const coins = [
  { sym: 'BTC', name: 'Bitcoin', price: 94280.50, change: '+4.82%' },
  { sym: 'ETH', name: 'Ethereum', price: 3420.10, change: '+2.14%' },
  { sym: 'SOL', name: 'Solana', price: 198.40, change: '+6.80%' },
  { sym: 'AVAX', name: 'Avalanche', price: 38.90, change: '-1.20%' },
  { sym: 'TON', name: 'Toncoin', price: 6.70, change: '+3.40%' }
];

let balance = 48250.00;

function renderWatchlist() {
  const container = document.getElementById('coinList');
  container.innerHTML = '';
  coins.forEach(c => {
    const isUp = c.change.startsWith('+');
    const div = document.createElement('div');
    div.className = 'coin-row';
    div.innerHTML = \`
      <div>
        <div style="font-weight:800; font-size:13px;">\${c.name} <span style="font-size:10px; color:#64748b;">\${c.sym}</span></div>
        <div style="font-size:10px; color:\${isUp ? '#10b981' : '#ef4444'};">\${c.change}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:900; font-size:13px;">$\${c.price.toLocaleString()}</div>
      </div>
    \`;
    container.appendChild(div);
  });
}

function drawWave() {
  const canvas = document.getElementById('priceCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x += 5) {
    const y = 35 + Math.sin((x + Date.now() / 200) * 0.05) * 15;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  requestAnimationFrame(drawWave);
}

document.getElementById('execTradeBtn').addEventListener('click', () => {
  const amt = parseFloat(document.getElementById('tradeAmt').value) || 0;
  balance -= amt;
  document.getElementById('totalBalance').innerText = '$' + balance.toLocaleString(undefined, { minimumFractionDigits: 2 });
  alert('Order filled! Purchased $' + amt + ' in BTC');
});

renderWatchlist();
drawWave();`
  };
}

// 5. Universal Intelligent App Synthesizer (Fallback for any user prompt)
export function getUniversalCustomAppFiles(promptText: string): ProjectFiles {
  const cleanTitle = promptText
    .replace(/(banao|bnao|app|website|game|kro|please|ek|make|create|build|mujhe|chahiye|wala|wali)/gi, '')
    .trim() || 'Autonomous Pro Application';
  const displayTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
  const lower = promptText.toLowerCase();

  // Detect domain for domain-specific initial items and configuration
  let domain = 'utility';
  let badgeIcon = '⚡';
  let metric1Label = 'TOTAL ITEMS';
  let metric1Val = '8';
  let metric2Label = 'EFFICIENCY';
  let metric2Val = '99.2%';
  let metric3Label = 'SCORE / RATING';
  let metric3Val = '4.9 ★';
  let inputPlaceholder = `Add new ${displayTitle} item...`;
  let defaultCategory = 'Active';

  let initialRecords: Array<{ id: number; title: string; subtitle: string; tag: string; metric: string }> = [];

  if (lower.includes('hotel') || lower.includes('travel') || lower.includes('trip') || lower.includes('flight') || lower.includes('booking')) {
    domain = 'travel';
    badgeIcon = '✈️';
    metric1Label = 'DESTINATIONS';
    metric1Val = '12';
    metric2Label = 'AVG RATING';
    metric2Val = '4.8 ★';
    metric3Label = 'BOOKINGS';
    metric3Val = '340+';
    inputPlaceholder = 'Add new destination or resort...';
    defaultCategory = 'Featured';
    initialRecords = [
      { id: 1, title: 'Maldives Overwater Sanctuary', subtitle: '5-Star Luxury Resort with Coral Lagoon Access', tag: 'Luxury', metric: '$450/night' },
      { id: 2, title: 'Swiss Alps Panorama Chalet', subtitle: 'Ski-in Chalet with Panoramic Matterhorn View', tag: 'Mountains', metric: '$380/night' },
      { id: 3, title: 'Tokyo Shinjuku Skyline Suite', subtitle: 'High-floor Cyberpunk View near Transit Hub', tag: 'City Hub', metric: '$220/night' },
      { id: 4, title: 'Goa Coastal Villa & Spa', subtitle: 'Private Beach Access with Sunset Deck', tag: 'Beach', metric: '₹12,000/night' }
    ];
  } else if (lower.includes('expense') || lower.includes('money') || lower.includes('budget') || lower.includes('finance') || lower.includes('salary') || lower.includes('paisa')) {
    domain = 'finance';
    badgeIcon = '💳';
    metric1Label = 'TOTAL BALANCE';
    metric1Val = '$14,250';
    metric2Label = 'MONTHLY SPEND';
    metric2Val = '$2,140';
    metric3Label = 'SAVINGS GOAL';
    metric3Val = '84%';
    inputPlaceholder = 'Log new expense or income...';
    defaultCategory = 'Expense';
    initialRecords = [
      { id: 1, title: 'Cloud Infrastructure Server', subtitle: 'High-speed VPS hosting & SSL renewal', tag: 'Business', metric: '-$120.00' },
      { id: 2, title: 'Autonomous Engine Freelance Payout', subtitle: 'Client contract payment received via Stripe', tag: 'Income', metric: '+$1,850.00' },
      { id: 3, title: 'Fiber Optic Gigabit Internet', subtitle: 'Monthly workspace high-speed connectivity', tag: 'Utilities', metric: '-$65.00' },
      { id: 4, title: 'Hardware Electronics & Displays', subtitle: 'OLED diagnostic display modules', tag: 'Hardware', metric: '-$240.00' }
    ];
  } else if (lower.includes('movie') || lower.includes('video') || lower.includes('stream') || lower.includes('film')) {
    domain = 'media';
    badgeIcon = '🎬';
    metric1Label = 'WATCHLIST';
    metric1Val = '24';
    metric2Label = 'COMPLETED';
    metric2Val = '18';
    metric3Label = 'TOP GENRE';
    metric3Val = 'Sci-Fi';
    inputPlaceholder = 'Add movie or series to watchlist...';
    defaultCategory = 'Sci-Fi';
    initialRecords = [
      { id: 1, title: 'Interstellar Odyssey 2099', subtitle: 'Hard Sci-Fi deep space temporal exploration', tag: 'Sci-Fi', metric: '9.4 ★' },
      { id: 2, title: 'Cyberpunk Chronicles: Neo Tokyo', subtitle: 'High-octane synthwave animated series', tag: 'Anime', metric: '8.9 ★' },
      { id: 3, title: 'The Quantum Heist', subtitle: 'Techno-thriller heist across parallel dimensions', tag: 'Thriller', metric: '8.7 ★' },
      { id: 4, title: 'Silent Cosmos: Deep Abyss', subtitle: 'Documentary exploring hydrothermal vents and planetary oceans', tag: 'Documentary', metric: '9.1 ★' }
    ];
  } else if (lower.includes('habit') || lower.includes('goal') || lower.includes('routine') || lower.includes('planner')) {
    domain = 'habit';
    badgeIcon = '🎯';
    metric1Label = 'ACTIVE HABITS';
    metric1Val = '6';
    metric2Label = 'CURRENT STREAK';
    metric2Val = '14 Days';
    metric3Label = 'COMPLETION';
    metric3Val = '92%';
    inputPlaceholder = 'Add daily habit or milestone...';
    defaultCategory = 'Daily';
    initialRecords = [
      { id: 1, title: 'Morning 5KM Run & Cardio', subtitle: 'Completed at 6:30 AM • Heart rate 142 bpm', tag: 'Fitness', metric: 'Streak: 12d' },
      { id: 2, title: 'Deep Work Coding & System Architecture', subtitle: '3 hours distraction-free focus block', tag: 'Focus', metric: 'Streak: 18d' },
      { id: 3, title: 'Hydration Goal (3.5 Liters)', subtitle: '3.0L logged so far today', tag: 'Health', metric: '85%' },
      { id: 4, title: 'Read 20 Pages of Tech & Philosophy', subtitle: 'Current book: Clean Architecture by Uncle Bob', tag: 'Learning', metric: 'Streak: 9d' }
    ];
  } else {
    // Universal Contextual Application
    domain = 'custom';
    badgeIcon = '✨';
    initialRecords = [
      { id: 1, title: `${displayTitle} - Core Workspace Module`, subtitle: 'Primary operational module initialized and verified', tag: 'Core', metric: 'Active' },
      { id: 2, title: `${displayTitle} - Automation & Telemetry`, subtitle: 'Autonomous background tasks synced with 0ms delay', tag: 'Realtime', metric: '100%' },
      { id: 3, title: `${displayTitle} - User Interface Engine`, subtitle: 'High-performance responsive viewport at 60 FPS', tag: 'Frontend', metric: 'Synced' },
      { id: 4, title: `${displayTitle} - Secure Data Cache`, subtitle: 'Encrypted client-side persistence and export subsystem', tag: 'Security', metric: 'Verified' }
    ];
  }

  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${displayTitle} | Autonomous Engine</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="app-shell">
    <header class="app-topbar">
      <div class="brand">
        <div class="logo-box">${badgeIcon}</div>
        <div>
          <h1>${displayTitle}</h1>
          <p>Architected by Nowempireoff Core Engine</p>
        </div>
      </div>
      <span class="status-chip">ACTIVE 🟢</span>
    </header>

    <!-- Dynamic Metrics Grid -->
    <div class="metrics-grid">
      <div class="card">
        <span class="lbl">${metric1Label}</span>
        <span class="val text-gold" id="statEntries">${metric1Val}</span>
      </div>
      <div class="card">
        <span class="lbl">${metric2Label}</span>
        <span class="val text-cyan">${metric2Val}</span>
      </div>
      <div class="card">
        <span class="lbl">${metric3Label}</span>
        <span class="val text-green" id="statScore">${metric3Val}</span>
      </div>
    </div>

    <!-- Filter & Search Bar -->
    <div class="control-panel">
      <input type="text" id="filterInput" placeholder="Search ${displayTitle} records..." />
      <button id="quickAddBtn" class="add-btn">+ Quick Add</button>
    </div>

    <!-- Live Workspace Feed -->
    <div class="feed-wrapper">
      <div class="feed-header">
        <h2>${displayTitle} Live Feed</h2>
        <span id="recordCountLabel" class="count-badge">${initialRecords.length} Items</span>
      </div>
      <div id="recordsList" class="records-container"></div>
    </div>

    <!-- Interactive Creator Box -->
    <div class="creator-box">
      <h3>Add New ${displayTitle} Entry</h3>
      <div class="input-row">
        <input type="text" id="newTitleInput" placeholder="${inputPlaceholder}" />
        <input type="text" id="newTagInput" placeholder="Tag..." value="${defaultCategory}" />
      </div>
      <button id="saveItemBtn" class="primary-action">Submit & Deploy to Live Feed</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#07090f; color:#f8fafc; min-height:100vh; padding:16px; display:flex; justify-content:center; }
.app-shell { width:100%; max-width:480px; }
.app-topbar { display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:16px; }
.brand { display:flex; gap:12px; align-items:center; }
.logo-box { width:40px; height:40px; border-radius:12px; background:linear-gradient(135deg,#00f0ff,#a855f7); display:flex; align-items:center; justify-content:center; font-size:20px; box-shadow:0 0 15px rgba(0,240,255,0.2); }
.brand h1 { font-size:17px; font-weight:900; color:#fff; }
.brand p { font-size:11px; color:#64748b; }
.status-chip { font-size:10px; font-weight:800; background:rgba(34,197,94,0.15); color:#22c55e; border:1px solid rgba(34,197,94,0.4); padding:4px 8px; border-radius:20px; }
.metrics-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:16px; }
.card { background:#0f1322; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:10px 8px; text-align:center; }
.card .lbl { font-size:9px; color:#64748b; font-weight:800; }
.card .val { font-size:16px; font-weight:900; margin-top:2px; display:block; }
.text-gold { color:#fbbf24; }
.text-cyan { color:#00f0ff; }
.text-green { color:#22c55e; }
.control-panel { display:flex; gap:8px; margin-bottom:16px; }
.control-panel input { flex:1; background:#0f1322; border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 12px; color:#fff; font-size:12px; outline:none; }
.add-btn { background:#00f0ff; color:#000; border:none; border-radius:10px; padding:0 14px; font-weight:900; font-size:12px; cursor:pointer; }
.feed-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
.feed-header h2 { font-size:13px; color:#94a3b8; font-weight:700; }
.count-badge { font-size:11px; font-weight:800; color:#00f0ff; background:rgba(0,240,255,0.1); padding:2px 8px; border-radius:10px; }
.records-container { display:flex; flex-direction:column; gap:8px; margin-bottom:18px; }
.record-item { display:flex; justify-content:space-between; align-items:center; background:#111628; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:12px; transition:transform 0.2s; }
.record-item:hover { transform:translateY(-2px); border-color:rgba(0,240,255,0.4); }
.item-title { font-size:13px; font-weight:800; color:#fff; }
.item-subtitle { font-size:11px; color:#94a3b8; margin-top:2px; }
.item-meta { display:flex; gap:8px; align-items:center; margin-top:4px; }
.tag-chip { font-size:9px; font-weight:800; background:rgba(0,240,255,0.15); color:#00f0ff; padding:2px 8px; border-radius:6px; }
.item-metric { font-size:11px; font-weight:800; color:#fbbf24; }
.item-actions { display:flex; gap:6px; align-items:center; }
.action-btn { background:rgba(239,68,68,0.2); border:1px solid rgba(239,68,68,0.4); color:#ef4444; width:26px; height:26px; border-radius:8px; cursor:pointer; font-weight:900; }
.creator-box { background:#0f1322; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:14px; }
.creator-box h3 { font-size:13px; font-weight:800; margin-bottom:10px; color:#cbd5e1; }
.input-row { display:flex; gap:8px; margin-bottom:10px; }
.input-row input { flex:1; background:#181f33; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px 10px; color:#fff; font-size:12px; outline:none; }
.primary-action { width:100%; padding:12px; background:linear-gradient(135deg,#00f0ff,#7928ca); border:none; border-radius:10px; color:#fff; font-weight:900; font-size:13px; cursor:pointer; }`,

    'script.js': `let records = ${JSON.stringify(initialRecords, null, 2)};

function renderRecords(filterText = '') {
  const container = document.getElementById('recordsList');
  container.innerHTML = '';
  const filtered = records.filter(r =>
    r.title.toLowerCase().includes(filterText.toLowerCase()) ||
    r.subtitle.toLowerCase().includes(filterText.toLowerCase()) ||
    r.tag.toLowerCase().includes(filterText.toLowerCase())
  );

  document.getElementById('recordCountLabel').innerText = filtered.length + ' Items';

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'record-item';
    div.innerHTML = \`
      <div style="flex:1;">
        <div class="item-title">\${item.title}</div>
        <div class="item-subtitle">\${item.subtitle}</div>
        <div class="item-meta">
          <span class="tag-chip">\${item.tag}</span>
          <span class="item-metric">\${item.metric}</span>
        </div>
      </div>
      <div class="item-actions">
        <button class="action-btn" onclick="deleteRecord(\${item.id})">✕</button>
      </div>
    \`;
    container.appendChild(div);
  });
}

window.deleteRecord = function(id) {
  records = records.filter(r => r.id !== id);
  renderRecords(document.getElementById('filterInput').value);
};

document.getElementById('filterInput').addEventListener('input', (e) => {
  renderRecords(e.target.value);
});

document.getElementById('saveItemBtn').addEventListener('click', () => {
  const title = document.getElementById('newTitleInput').value.trim();
  const tag = document.getElementById('newTagInput').value.trim() || 'General';
  if (title) {
    records.unshift({
      id: Date.now(),
      title,
      subtitle: 'Recently added by user • Active in database',
      tag,
      metric: 'New'
    });
    document.getElementById('newTitleInput').value = '';
    renderRecords(document.getElementById('filterInput').value);
  }
});

document.getElementById('quickAddBtn').addEventListener('click', () => {
  document.getElementById('newTitleInput').focus();
});

renderRecords();`
  };
}

// 6. Luxury E-Commerce / Fashion & Shoes Store
export function getEcommerceFashionAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>URBAN DRIP | Luxury Streetwear & Kicks</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="store-shell">
    <header class="store-header">
      <div class="brand">
        <span class="logo">⚡</span>
        <div>
          <h1>URBAN DRIP</h1>
          <p>Cyber Streetwear Edition</p>
        </div>
      </div>
      <button id="cartBtn" class="cart-pill">
        🛒 Cart (<span id="cartCount">0</span>)
      </button>
    </header>

    <!-- Banner -->
    <div class="promo-banner">
      <span>🔥 CODE: <strong>NOWVIP</strong> FOR 25% OFF</span>
    </div>

    <!-- Filter Categories -->
    <div class="category-pills">
      <button class="cat-pill active" onclick="filterCategory('all')">All Kicks & Drip</button>
      <button class="cat-pill" onclick="filterCategory('sneakers')">Sneakers</button>
      <button class="cat-pill" onclick="filterCategory('hoodies')">Hoodies</button>
      <button class="cat-pill" onclick="filterCategory('jackets')">Jackets</button>
    </div>

    <!-- Product Grid -->
    <div id="productGrid" class="product-grid"></div>

    <!-- Cart Drawer / Modal -->
    <div id="cartModal" class="cart-modal hidden">
      <div class="cart-card">
        <div class="cart-top">
          <h3>Shopping Cart</h3>
          <button onclick="toggleCart()" class="close-btn">✕</button>
        </div>
        <div id="cartItemsList" class="cart-items"></div>
        <div class="cart-total-row">
          <span>Total Payable:</span>
          <span id="cartTotalVal" class="total-amt">₹0</span>
        </div>
        <button id="checkoutBtn" class="checkout-btn">Proceed to Express Checkout</button>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }
body { background:#07090e; color:#fff; min-height:100vh; padding:12px; display:flex; justify-content:center; }
.store-shell { width:100%; max-width:480px; position:relative; }
.store-header { display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08); }
.brand { display:flex; gap:10px; align-items:center; }
.brand .logo { font-size:22px; background:linear-gradient(135deg,#00f0ff,#a855f7); border-radius:10px; padding:6px 10px; }
.brand h1 { font-size:17px; font-weight:900; letter-spacing:0.5px; }
.brand p { font-size:10px; color:#94a3b8; }
.cart-pill { background:#00f0ff; color:#000; border:none; padding:8px 14px; border-radius:20px; font-weight:900; font-size:11px; cursor:pointer; }
.promo-banner { background:linear-gradient(90deg,#ff0055,#7928ca); padding:8px; border-radius:10px; text-align:center; font-size:11px; font-weight:800; margin:12px 0; }
.category-pills { display:flex; gap:6px; overflow-x:auto; padding-bottom:8px; margin-bottom:12px; }
.cat-pill { background:#111627; border:1px solid rgba(255,255,255,0.1); color:#94a3b8; padding:6px 12px; border-radius:16px; font-size:11px; font-weight:700; white-space:nowrap; cursor:pointer; }
.cat-pill.active { background:#00f0ff; color:#000; font-weight:800; border-color:#00f0ff; }
.product-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; margin-bottom:20px; }
.product-card { background:#0f1322; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; display:flex; flex-direction:column; justify-content:space-between; transition:border-color 0.2s; }
.product-card:hover { border-color:rgba(0,240,255,0.4); }
.prod-emoji { font-size:36px; text-align:center; margin:8px 0; }
.prod-title { font-size:13px; font-weight:800; color:#fff; }
.prod-price { font-size:14px; font-weight:900; color:#00f0ff; margin:4px 0 8px; }
.buy-btn { background:linear-gradient(135deg,#00f0ff,#0070f3); color:#000; border:none; padding:8px; border-radius:8px; font-weight:800; font-size:11px; cursor:pointer; }
.cart-modal { position:fixed; inset:0; background:rgba(0,0,0,0.8); backdrop-blur:8px; display:flex; align-items:flex-end; justify-content:center; z-index:100; }
.cart-modal.hidden { display:none; }
.cart-card { width:100%; max-width:480px; background:#101526; border-top:1px solid rgba(0,240,255,0.3); border-radius:24px 24px 0 0; padding:20px; }
.cart-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
.cart-top h3 { font-size:16px; font-weight:900; }
.close-btn { background:none; border:none; color:#94a3b8; font-size:18px; cursor:pointer; }
.cart-items { max-height:220px; overflow-y:auto; margin-bottom:14px; }
.cart-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06); font-size:12px; }
.cart-total-row { display:flex; justify-content:space-between; font-size:15px; font-weight:900; margin-bottom:14px; }
.total-amt { color:#00f0ff; }
.checkout-btn { width:100%; padding:12px; background:#00f0ff; color:#000; border:none; border-radius:12px; font-weight:900; font-size:13px; cursor:pointer; }`,
    'script.js': `const products = [
  { id: 1, name: 'Cyber High Top 01', price: 4999, category: 'sneakers', emoji: '👟' },
  { id: 2, name: 'Matrix Neon Runner', price: 3499, category: 'sneakers', emoji: '⚡' },
  { id: 3, name: 'Obsidian Heavy Hoodie', price: 2799, category: 'hoodies', emoji: '🧥' },
  { id: 4, name: 'Chrome Zip Tactical', price: 3199, category: 'hoodies', emoji: '👕' },
  { id: 5, name: 'Cyberpunk Shell Jacket', price: 5999, category: 'jackets', emoji: '🦺' },
  { id: 6, name: 'Tokyo Stealth Puffer', price: 4499, category: 'jackets', emoji: '🥼' }
];

let cart = [];

function renderProducts(cat = 'all') {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);

  filtered.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = \`
      <div>
        <div class="prod-emoji">\${prod.emoji}</div>
        <div class="prod-title">\${prod.name}</div>
        <div class="prod-price">₹\${prod.price.toLocaleString()}</div>
      </div>
      <button class="buy-btn" onclick="addToCart(\${prod.id})">+ Add to Bag</button>
    \`;
    grid.appendChild(card);
  });
}

window.filterCategory = function(cat) {
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts(cat);
};

window.addToCart = function(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    cart.push(item);
    updateCartUI();
  }
};

window.toggleCart = function() {
  const modal = document.getElementById('cartModal');
  modal.classList.toggle('hidden');
};

function updateCartUI() {
  document.getElementById('cartCount').innerText = cart.length;
  const list = document.getElementById('cartItemsList');
  list.innerHTML = '';

  let total = 0;
  cart.forEach((it, idx) => {
    total += it.price;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = \`
      <span>\${it.emoji} \${it.name}</span>
      <div>
        <span style="font-weight:700; color:#00f0ff;">₹\${it.price.toLocaleString()}</span>
        <button onclick="removeFromCart(\${idx})" style="background:none; border:none; color:#ef4444; margin-left:8px; cursor:pointer;">✕</button>
      </div>
    \`;
    list.appendChild(row);
  });

  document.getElementById('cartTotalVal').innerText = '₹' + total.toLocaleString();
}

window.removeFromCart = function(idx) {
  cart.splice(idx, 1);
  updateCartUI();
};

document.getElementById('cartBtn').addEventListener('click', toggleCart);
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your bag is empty!');
    return;
  }
  alert('🎉 Order Placed Successfully! Your order will be delivered with VIP bypass express logistics.');
  cart = [];
  updateCartUI();
  toggleCart();
});

renderProducts('all');`
  };
}

// 7. Interactive Quiz / Brain Challenge App
export function getQuizEducationAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>MIND PULSE | AI Quiz Master</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="quiz-shell">
    <header class="quiz-head">
      <span class="badge">🧠 MIND PULSE AI</span>
      <span class="timer-chip" id="timerBox">⏳ 15s</span>
    </header>

    <div class="progress-bar">
      <div id="progFill" class="prog-fill" style="width: 20%;"></div>
    </div>

    <!-- Question Box -->
    <div class="q-box">
      <span class="q-num" id="qNumText">QUESTION 1 / 5</span>
      <h2 id="qText">What does "AI" stand for?</h2>
    </div>

    <!-- Options -->
    <div id="optionsGrid" class="opts-grid"></div>

    <!-- Stats footer -->
    <div class="quiz-footer">
      <div>SCORE: <strong id="scoreVal" class="text-cyan">0</strong></div>
      <div>STREAK: <strong id="streakVal" class="text-gold">0 🔥</strong></div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }
body { background:#07090e; color:#fff; min-height:100vh; padding:16px; display:flex; justify-content:center; align-items:center; }
.quiz-shell { width:100%; max-width:440px; background:#0f1322; border:1px solid rgba(0,240,255,0.3); border-radius:24px; padding:20px; box-shadow:0 10px 30px rgba(0,0,0,0.5); }
.quiz-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
.badge { font-size:11px; font-weight:900; color:#00f0ff; letter-spacing:0.5px; }
.timer-chip { background:rgba(239,68,68,0.2); border:1px solid rgba(239,68,68,0.4); color:#ef4444; font-size:11px; font-weight:800; padding:4px 10px; border-radius:20px; }
.progress-bar { width:100%; height:6px; background:#1a2238; border-radius:10px; overflow:hidden; margin-bottom:18px; }
.prog-fill { height:100%; background:linear-gradient(90deg,#00f0ff,#a855f7); transition:width 0.3s; }
.q-box { margin-bottom:18px; }
.q-num { font-size:10px; color:#64748b; font-weight:800; letter-spacing:0.5px; }
.q-box h2 { font-size:17px; font-weight:800; color:#fff; margin-top:4px; line-height:1.4; }
.opts-grid { display:flex; flex-direction:column; gap:10px; margin-bottom:20px; }
.opt-btn { background:#151b2e; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px 14px; color:#e2e8f0; font-size:13px; font-weight:700; text-align:left; cursor:pointer; transition:all 0.15s; }
.opt-btn:hover { border-color:#00f0ff; background:#1b233d; }
.opt-btn.correct { background:rgba(34,197,94,0.25); border-color:#22c55e; color:#22c55e; }
.opt-btn.wrong { background:rgba(239,68,68,0.25); border-color:#ef4444; color:#ef4444; }
.quiz-footer { display:flex; justify-content:space-between; font-size:12px; font-weight:700; color:#94a3b8; border-top:1px solid rgba(255,255,255,0.06); padding-top:14px; }
.text-cyan { color:#00f0ff; }
.text-gold { color:#fbbf24; }`,
    'script.js': `const questions = [
  { q: "What does 'AI' stand for?", opts: ["Artificial Intelligence", "Automated Interface", "Active Information", "Autonomous Internet"], ans: 0 },
  { q: "Which programming language is known as the backbone of web development?", opts: ["Python", "JavaScript", "C++", "Rust"], ans: 1 },
  { q: "What is the capital of India?", opts: ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"], ans: 2 },
  { q: "What is the speed of light in vacuum?", opts: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "Infinite"], ans: 1 },
  { q: "Which company created the React JavaScript library?", opts: ["Google", "Microsoft", "Meta (Facebook)", "Apple"], ans: 2 }
];

let curIdx = 0;
let score = 0;
let streak = 0;
let timeLeft = 15;
let timerId = null;

function loadQuestion() {
  clearInterval(timerId);
  timeLeft = 15;
  document.getElementById('timerBox').innerText = '⏳ ' + timeLeft + 's';

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById('timerBox').innerText = '⏳ ' + timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(timerId);
      selectAnswer(-1);
    }
  }, 1000);

  const cur = questions[curIdx];
  document.getElementById('qNumText').innerText = \`QUESTION \${curIdx + 1} / \${questions.length}\`;
  document.getElementById('qText').innerText = cur.q;
  document.getElementById('progFill').style.width = \`\${((curIdx + 1) / questions.length) * 100}%\`;

  const container = document.getElementById('optionsGrid');
  container.innerHTML = '';

  cur.opts.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(idx);
    container.appendChild(btn);
  });
}

function selectAnswer(chosenIdx) {
  clearInterval(timerId);
  const cur = questions[curIdx];
  const buttons = document.querySelectorAll('.opt-btn');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === cur.ans) {
      btn.classList.add('correct');
    } else if (idx === chosenIdx) {
      btn.classList.add('wrong');
    }
  });

  if (chosenIdx === cur.ans) {
    score += 100;
    streak++;
  } else {
    streak = 0;
  }

  document.getElementById('scoreVal').innerText = score;
  document.getElementById('streakVal').innerText = streak + ' 🔥';

  setTimeout(() => {
    curIdx++;
    if (curIdx < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1200);
}

function showResults() {
  const container = document.querySelector('.quiz-shell');
  container.innerHTML = \`
    <div style="text-align:center; padding:20px 0;">
      <div style="font-size:48px; margin-bottom:12px;">🏆</div>
      <h2 style="font-size:22px; font-weight:900; margin-bottom:8px;">Quiz Completed!</h2>
      <p style="color:#94a3b8; font-size:13px; margin-bottom:16px;">Final Score: <span style="color:#00f0ff; font-weight:900; font-size:18px;">\${score}</span> / \${questions.length * 100}</p>
      <button onclick="location.reload()" style="background:#00f0ff; color:#000; border:none; padding:12px 24px; border-radius:12px; font-weight:900; font-size:13px; cursor:pointer;">Play Again 🔄</button>
    </div>
  \`;
}

loadQuestion();`
  };
}
