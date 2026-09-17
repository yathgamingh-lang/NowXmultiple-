/**
 * Bypass Autonomous IDE - Social Apps Suite
 * High-fidelity, fully interactive clones:
 * - Instagram Pro (Feed, Stories, Reels, Profile, DMs, Like Hearts)
 * - WhatsApp Pro (Chat List, Live Chat, Voice Notes, Status, Call Simulator)
 * - YouTube Pro (Video Player, Shorts Feed, Comments, Subscriptions)
 * - Twitter / X Pro (Post Composer, Live Trends, Hashtags, Retweets, Likes)
 * - Spotify Pro (Audio Synth Engine, Playlists, Equalizer Waves, Lyrics)
 * - TikTok Pro (Vertical Video Feed, Right Action Rail, Music Vinyl Spin)
 * 
 * Lead Architect: Nowempireoff
 */

import { ProjectFiles } from '../types';

// 1. INSTAGRAM PRO CLONE
export function getInstagramAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Instagram Pro | Autonomous Clone</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="insta-shell">
    <!-- Top Navigation -->
    <header class="insta-header">
      <div class="logo">Instagram</div>
      <div class="header-actions">
        <button id="heartNotifBtn" class="icon-btn" title="Activity">❤️</button>
        <button id="dmBtn" class="icon-btn" title="Messages">💬<span class="badge">3</span></button>
      </div>
    </header>

    <!-- Main View Container -->
    <main id="mainContent" class="main-container">
      <!-- Stories Bar -->
      <section class="stories-bar" id="storiesBar">
        <div class="story-circle active-user" onclick="viewStory(0)">
          <div class="story-ring"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120" alt="Your Story" /></div>
          <span>Your Story</span>
        </div>
        <div class="story-circle unread" onclick="viewStory(1)">
          <div class="story-ring"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120" alt="alex_dev" /></div>
          <span>alex_dev</span>
        </div>
        <div class="story-circle unread" onclick="viewStory(2)">
          <div class="story-ring"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120" alt="sarah_ux" /></div>
          <span>sarah_ux</span>
        </div>
        <div class="story-circle unread" onclick="viewStory(3)">
          <div class="story-ring"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="nowempire" /></div>
          <span>nowempire</span>
        </div>
        <div class="story-circle unread" onclick="viewStory(4)">
          <div class="story-ring"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120" alt="elena_3d" /></div>
          <span>elena_3d</span>
        </div>
      </section>

      <!-- Feed Posts -->
      <div class="feed-posts" id="feedPosts">
        <!-- Post 1 -->
        <article class="post-card" id="post-1">
          <div class="post-header">
            <div class="user-meta">
              <img class="avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="nowempireoff" />
              <div>
                <div class="username-row"><strong>nowempireoff</strong> <span class="verified-check">✓</span></div>
                <span class="location">Tokyo Cyber District</span>
              </div>
            </div>
            <button class="more-btn">•••</button>
          </div>
          <div class="post-image-box" ondblclick="handleDoubleTapHeart(1)">
            <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800" alt="Cyberpunk Setup" />
            <div class="double-tap-heart" id="heart-anim-1">❤️</div>
          </div>
          <div class="post-actions">
            <div class="left-actions">
              <button class="action-btn" id="like-btn-1" onclick="toggleLike(1)">🤍</button>
              <button class="action-btn" onclick="openComments(1)">💬</button>
              <button class="action-btn" onclick="sharePost(1)">🚀</button>
            </div>
            <button class="action-btn" onclick="toggleBookmark(1)" id="bm-1">🔖</button>
          </div>
          <div class="post-likes" id="likes-count-1">4,892 likes</div>
          <div class="post-caption">
            <strong>nowempireoff</strong> Synthesized this cyber luxury setup using Autonomous AI Engine ⚡ Who wants the code? #coding #tech #cyberpunk
          </div>
          <div class="view-comments" onclick="openComments(1)">View all 148 comments</div>
          <div class="post-time">2 HOURS AGO</div>
        </article>

        <!-- Post 2 -->
        <article class="post-card" id="post-2">
          <div class="post-header">
            <div class="user-meta">
              <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120" alt="sarah_ux" />
              <div>
                <div class="username-row"><strong>sarah_ux</strong> <span class="verified-check">✓</span></div>
                <span class="location">San Francisco, CA</span>
              </div>
            </div>
            <button class="more-btn">•••</button>
          </div>
          <div class="post-image-box" ondblclick="handleDoubleTapHeart(2)">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" alt="Architecture" />
            <div class="double-tap-heart" id="heart-anim-2">❤️</div>
          </div>
          <div class="post-actions">
            <div class="left-actions">
              <button class="action-btn" id="like-btn-2" onclick="toggleLike(2)">🤍</button>
              <button class="action-btn" onclick="openComments(2)">💬</button>
              <button class="action-btn" onclick="sharePost(2)">🚀</button>
            </div>
            <button class="action-btn" onclick="toggleBookmark(2)" id="bm-2">🔖</button>
          </div>
          <div class="post-likes" id="likes-count-2">1,940 likes</div>
          <div class="post-caption">
            <strong>sarah_ux</strong> Golden hour architectural photography ✨ The shadows today were simply breathtaking.
          </div>
          <div class="view-comments" onclick="openComments(2)">View all 42 comments</div>
          <div class="post-time">5 HOURS AGO</div>
        </article>
      </div>

      <!-- Reels Tab Container (Hidden by default) -->
      <div class="reels-view" id="reelsView" style="display:none;">
        <div class="reel-card">
          <div class="reel-bg-visual" style="background: linear-gradient(135deg, #4f46e5, #06b6d4, #10b981);">
            <div class="reel-overlay-text">
              <div class="code-highlight">
                <code>// Autonomous AI Synthesizer<br/>const app = build("Autonomous Social Suite");</code>
              </div>
            </div>
          </div>
          <div class="reel-actions-rail">
            <div class="rail-item" onclick="toggleReelLike()"><span id="reelHeartIcon">❤️</span><small id="reelLikes">84.2K</small></div>
            <div class="rail-item" onclick="openComments(99)"><span>💬</span><small>1.2K</small></div>
            <div class="rail-item" onclick="alert('Reel shared successfully!')"><span>🚀</span><small>Share</small></div>
            <div class="rail-item spinning-disc"><span>🎵</span></div>
          </div>
          <div class="reel-info">
            <div class="reel-user"><strong>@nowempireoff</strong> • <button class="follow-btn">Follow</button></div>
            <p>Future of Web Development with Autonomous IDE 🚀✨</p>
            <div class="reel-audio-track">🎵 Original Audio - Nowempireoff Beats</div>
          </div>
        </div>
      </div>

      <!-- Profile View Container (Hidden by default) -->
      <div class="profile-view" id="profileView" style="display:none;">
        <div class="profile-header">
          <div class="profile-avatar-wrap">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" alt="Profile" />
          </div>
          <div class="profile-stats">
            <div class="stat-col"><strong>48</strong><span>Posts</span></div>
            <div class="stat-col"><strong>124K</strong><span>Followers</span></div>
            <div class="stat-col"><strong>382</strong><span>Following</span></div>
          </div>
        </div>
        <div class="profile-bio">
          <h4>Nowempireoff</h4>
          <p>Lead Architect @ Bypass Autonomous IDE ⚡</p>
          <p>Crafting intelligent real-time applications, 3D engines & root toolchains 💎</p>
          <a href="#" class="bio-link">linktr.ee/nowempireoff</a>
        </div>
        <div class="profile-actions-row">
          <button class="p-btn primary">Edit Profile</button>
          <button class="p-btn">Share Profile</button>
          <button class="p-btn icon">⚙️</button>
        </div>
        <div class="profile-grid">
          <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300" alt="Grid 1" />
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300" alt="Grid 2" />
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300" alt="Grid 3" />
          <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300" alt="Grid 4" />
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300" alt="Grid 5" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300" alt="Grid 6" />
        </div>
      </div>
    </main>

    <!-- Bottom App Navigation Bar -->
    <nav class="insta-bottom-nav">
      <button class="nav-item active" onclick="switchTab('feed')" id="nav-feed">🏠</button>
      <button class="nav-item" onclick="switchTab('explore')" id="nav-explore">🔍</button>
      <button class="nav-item create-btn" onclick="createNewPost()">➕</button>
      <button class="nav-item" onclick="switchTab('reels')" id="nav-reels">🎬</button>
      <button class="nav-item" onclick="switchTab('profile')" id="nav-profile">
        <img class="mini-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80" alt="Avatar" />
      </button>
    </nav>

    <!-- Story Viewer Modal -->
    <div id="storyModal" class="story-modal" style="display:none;">
      <div class="story-progress-bar"><div class="fill" id="storyProgress"></div></div>
      <div class="story-top-user">
        <img id="modalStoryAvatar" src="" alt="Avatar" />
        <span id="modalStoryUser">user</span>
        <button class="close-story" onclick="closeStory()">✕</button>
      </div>
      <div class="story-content" id="storyContent">
        <h2 id="storyText">Exploring the Next-Gen Autonomous Web! 🚀</h2>
      </div>
    </div>

    <!-- Comments Sheet -->
    <div id="commentsSheet" class="sheet-modal" style="display:none;">
      <div class="sheet-header">
        <h3>Comments</h3>
        <button onclick="closeComments()">✕</button>
      </div>
      <div class="comments-list" id="commentsList">
        <div class="comment-item"><strong>dev_sarah</strong> Looks stunning! Love the color palette 🔥</div>
        <div class="comment-item"><strong>alex_coder</strong> Is this running live on client? Incredible work.</div>
      </div>
      <form class="comment-input-row" onsubmit="submitComment(event)">
        <input type="text" id="newCommentInput" placeholder="Add a comment for nowempireoff..." />
        <button type="submit">Post</button>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; user-select:none; }
body { background:#000; color:#fff; display:flex; justify-content:center; min-height:100vh; overflow-x:hidden; }
.insta-shell { width:100%; max-width:440px; height:100vh; display:flex; flex-direction:column; background:#000; border-left:1px solid #1a1a1a; border-right:1px solid #1a1a1a; position:relative; overflow:hidden; }

/* Top Header */
.insta-header { height:50px; display:flex; justify-content:space-between; align-items:center; padding:0 16px; border-bottom:1px solid #1a1a1a; }
.insta-header .logo { font-size:22px; font-weight:800; font-family:'Brush Script MT', cursive, sans-serif; letter-spacing:0.5px; background:linear-gradient(45deg,#f58529,#dd2a7b,#8134af); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
.header-actions { display:flex; gap:14px; align-items:center; }
.icon-btn { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; position:relative; }
.badge { position:absolute; top:-4px; right:-6px; background:#ff3040; color:#fff; font-size:10px; font-weight:800; border-radius:10px; padding:1px 5px; }

/* Main Scrollable Feed */
.main-container { flex:1; overflow-y:auto; padding-bottom:60px; scrollbar-width:none; }
.main-container::-webkit-scrollbar { display:none; }

/* Stories Bar */
.stories-bar { display:flex; gap:14px; padding:12px 14px; overflow-x:auto; border-bottom:1px solid #161616; scrollbar-width:none; }
.stories-bar::-webkit-scrollbar { display:none; }
.story-circle { display:flex; flex-direction:column; align-items:center; gap:4px; cursor:pointer; flex-shrink:0; }
.story-circle span { font-size:11px; color:#c7c7c7; max-width:64px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; }
.story-ring { width:64px; height:64px; border-radius:50%; padding:2px; display:flex; align-items:center; justify-content:center; }
.story-circle.unread .story-ring { background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
.story-circle.active-user .story-ring { border:1px solid #333; }
.story-ring img { width:100%; height:100%; object-fit:cover; border-radius:50%; border:2px solid #000; }

/* Post Card */
.post-card { border-bottom:1px solid #161616; margin-bottom:8px; }
.post-header { display:flex; justify-content:space-between; align-items:center; padding:10px 14px; }
.user-meta { display:flex; align-items:center; gap:10px; }
.avatar { width:34px; height:34px; border-radius:50%; object-fit:cover; }
.username-row { font-size:13px; font-weight:700; display:flex; align-items:center; gap:4px; }
.verified-check { color:#0095f6; font-size:11px; }
.location { font-size:11px; color:#8e8e8e; display:block; }
.more-btn { background:none; border:none; color:#fff; font-size:14px; cursor:pointer; }
.post-image-box { width:100%; aspect-ratio:1/1; position:relative; overflow:hidden; background:#111; }
.post-image-box img { width:100%; height:100%; object-fit:cover; }
.double-tap-heart { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(0); font-size:75px; transition:transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275); pointer-events:none; }
.double-tap-heart.pop { transform:translate(-50%,-50%) scale(1.2); }

.post-actions { display:flex; justify-content:space-between; padding:10px 14px 4px 14px; }
.left-actions { display:flex; gap:16px; }
.action-btn { background:none; border:none; color:#fff; font-size:20px; cursor:pointer; transition:transform 0.15s; }
.action-btn:active { transform:scale(1.25); }
.post-likes { padding:0 14px; font-size:13px; font-weight:700; margin-bottom:4px; }
.post-caption { padding:0 14px; font-size:13px; line-height:1.4; color:#e0e0e0; margin-bottom:4px; }
.view-comments { padding:0 14px; font-size:12px; color:#8e8e8e; cursor:pointer; margin-bottom:4px; }
.post-time { padding:0 14px 10px 14px; font-size:10px; color:#6e6e6e; letter-spacing:0.2px; }

/* Reels View */
.reels-view { width:100%; height:calc(100vh - 110px); position:relative; background:#000; }
.reel-card { width:100%; height:100%; position:relative; display:flex; flex-direction:column; justify-content:flex-end; }
.reel-bg-visual { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding:20px; text-align:center; }
.code-highlight { background:rgba(0,0,0,0.7); padding:16px; border-radius:12px; border:1px solid rgba(255,255,255,0.2); font-family:monospace; font-size:13px; color:#38bdf8; }
.reel-actions-rail { position:absolute; right:12px; bottom:80px; display:flex; flex-direction:column; gap:16px; align-items:center; }
.rail-item { display:flex; flex-direction:column; align-items:center; font-size:24px; cursor:pointer; }
.rail-item small { font-size:11px; font-weight:700; margin-top:2px; }
.spinning-disc { animation:spin 4s linear infinite; font-size:26px; }
@keyframes spin { 100% { transform:rotate(360deg); } }
.reel-info { position:relative; z-index:2; padding:16px; background:linear-gradient(transparent, rgba(0,0,0,0.85)); }
.reel-user { display:flex; align-items:center; gap:8px; font-size:13px; margin-bottom:6px; }
.follow-btn { background:none; border:1px solid #fff; color:#fff; border-radius:6px; padding:2px 8px; font-size:11px; font-weight:700; cursor:pointer; }
.reel-info p { font-size:13px; line-height:1.4; margin-bottom:6px; }
.reel-audio-track { font-size:11px; color:#ccc; }

/* Profile View */
.profile-view { padding:14px; }
.profile-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
.profile-avatar-wrap img { width:78px; height:78px; border-radius:50%; object-fit:cover; border:2px solid #333; }
.profile-stats { display:flex; gap:20px; text-align:center; }
.stat-col strong { display:block; font-size:16px; }
.stat-col span { font-size:12px; color:#8e8e8e; }
.profile-bio h4 { font-size:14px; margin-bottom:2px; }
.profile-bio p { font-size:12px; color:#d0d0d0; line-height:1.4; }
.bio-link { font-size:12px; color:#38bdf8; text-decoration:none; font-weight:600; display:block; margin-top:3px; }
.profile-actions-row { display:flex; gap:8px; margin:14px 0; }
.p-btn { flex:1; background:#1c1c1e; border:none; color:#fff; padding:8px 0; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; }
.p-btn.icon { flex:none; width:34px; }
.profile-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:2px; }
.profile-grid img { width:100%; aspect-ratio:1/1; object-fit:cover; }

/* Bottom Nav */
.insta-bottom-nav { position:absolute; bottom:0; left:0; right:0; height:50px; background:#000; border-top:1px solid #1a1a1a; display:flex; justify-content:space-around; align-items:center; }
.nav-item { background:none; border:none; color:#fff; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; }
.mini-avatar { width:24px; height:24px; border-radius:50%; object-fit:cover; border:1px solid #555; }
.create-btn { background:linear-gradient(135deg,#f09433,#dc2743); width:32px; height:32px; border-radius:8px; font-size:14px; }

/* Modals */
.story-modal { position:absolute; inset:0; background:#0a0a0a; z-index:100; display:flex; flex-direction:column; padding:16px; }
.story-progress-bar { height:3px; background:rgba(255,255,255,0.3); border-radius:2px; overflow:hidden; margin-bottom:12px; }
.story-progress-bar .fill { width:0%; height:100%; background:#fff; transition:width 0.1s linear; }
.story-top-user { display:flex; align-items:center; gap:10px; }
.story-top-user img { width:32px; height:32px; border-radius:50%; object-fit:cover; }
.story-top-user span { font-size:13px; font-weight:700; flex:1; }
.close-story { background:none; border:none; color:#fff; font-size:20px; cursor:pointer; }
.story-content { flex:1; display:flex; align-items:center; justify-content:center; text-align:center; padding:20px; }

.sheet-modal { position:absolute; bottom:0; left:0; right:0; height:60%; background:#1a1a1a; border-radius:18px 18px 0 0; z-index:110; display:flex; flex-direction:column; padding:14px; box-shadow:0 -10px 30px rgba(0,0,0,0.8); }
.sheet-header { display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #2a2a2a; padding-bottom:8px; margin-bottom:10px; }
.sheet-header h3 { font-size:14px; font-weight:700; }
.sheet-header button { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; }
.comments-list { flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px; font-size:12px; }
.comment-input-row { display:flex; gap:8px; padding-top:10px; border-top:1px solid #2a2a2a; }
.comment-input-row input { flex:1; background:#2a2a2a; border:none; border-radius:20px; padding:8px 14px; color:#fff; font-size:12px; outline:none; }
.comment-input-row button { background:none; border:none; color:#0095f6; font-weight:700; cursor:pointer; }`,

    'script.js': `const state = {
  likes: { 1: 4892, 2: 1940 },
  liked: { 1: false, 2: false },
  bookmarked: { 1: false, 2: false },
  reelLikes: 84200,
  reelLiked: false,
  activeStoryIndex: 0
};

const storiesData = [
  { user: 'Your Story', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120', text: 'Building next-gen Autonomous Web experiences with Nowempireoff 🚀' },
  { user: 'alex_dev', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120', text: 'New 60FPS WebGL graphics renderer deployed! Check it out 🔥' },
  { user: 'sarah_ux', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120', text: 'Coffee + Clean Minimalist UI design = Pure Bliss ☕✨' },
  { user: 'nowempire', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120', text: 'Bypass Autonomous IDE Engine v4.0 is now officially live! 💎' },
  { user: 'elena_3d', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120', text: 'Shaders rendered in under 4 milliseconds with Three.js ⚡' }
];

window.toggleLike = function(postId) {
  state.liked[postId] = !state.liked[postId];
  state.likes[postId] += state.liked[postId] ? 1 : -1;
  const btn = document.getElementById('like-btn-' + postId);
  const count = document.getElementById('likes-count-' + postId);
  btn.innerText = state.liked[postId] ? '❤️' : '🤍';
  count.innerText = state.likes[postId].toLocaleString() + ' likes';
};

window.handleDoubleTapHeart = function(postId) {
  if (!state.liked[postId]) {
    toggleLike(postId);
  }
  const heartAnim = document.getElementById('heart-anim-' + postId);
  heartAnim.classList.add('pop');
  setTimeout(() => heartAnim.classList.remove('pop'), 700);
};

window.toggleBookmark = function(postId) {
  state.bookmarked[postId] = !state.bookmarked[postId];
  const btn = document.getElementById('bm-' + postId);
  btn.style.color = state.bookmarked[postId] ? '#f59e0b' : '#fff';
};

window.toggleReelLike = function() {
  state.reelLiked = !state.reelLiked;
  state.reelLikes += state.reelLiked ? 1 : -1;
  document.getElementById('reelHeartIcon').innerText = state.reelLiked ? '❤️' : '🤍';
  document.getElementById('reelLikes').innerText = (state.reelLikes / 1000).toFixed(1) + 'K';
};

window.switchTab = function(tabName) {
  document.getElementById('feedPosts').style.display = tabName === 'feed' ? 'block' : 'none';
  document.getElementById('storiesBar').style.display = tabName === 'feed' ? 'flex' : 'none';
  document.getElementById('reelsView').style.display = tabName === 'reels' ? 'block' : 'none';
  document.getElementById('profileView').style.display = tabName === 'profile' ? 'block' : 'none';

  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const activeBtn = document.getElementById('nav-' + tabName);
  if (activeBtn) activeBtn.classList.add('active');

  if (tabName === 'explore') {
    alert('Explore Feed: Curated trending AI, Architecture & Design posts!');
    switchTab('feed');
  }
};

let storyTimer = null;
window.viewStory = function(idx) {
  const story = storiesData[idx];
  document.getElementById('modalStoryAvatar').src = story.avatar;
  document.getElementById('modalStoryUser').innerText = story.user;
  document.getElementById('storyText').innerText = story.text;
  document.getElementById('storyModal').style.display = 'flex';

  const progress = document.getElementById('storyProgress');
  progress.style.width = '0%';
  clearInterval(storyTimer);
  let pct = 0;
  storyTimer = setInterval(() => {
    pct += 3;
    progress.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(storyTimer);
      closeStory();
    }
  }, 100);
};

window.closeStory = function() {
  clearInterval(storyTimer);
  document.getElementById('storyModal').style.display = 'none';
};

window.openComments = function(postId) {
  document.getElementById('commentsSheet').style.display = 'flex';
};

window.closeComments = function() {
  document.getElementById('commentsSheet').style.display = 'none';
};

window.submitComment = function(e) {
  e.preventDefault();
  const input = document.getElementById('newCommentInput');
  const text = input.value.trim();
  if (text) {
    const list = document.getElementById('commentsList');
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.innerHTML = '<strong>you</strong> ' + text;
    list.appendChild(div);
    input.value = '';
    list.scrollTop = list.scrollHeight;
  }
};

window.createNewPost = function() {
  const caption = prompt('Enter caption for your new Instagram post:');
  if (caption) {
    alert('Post created successfully with image and added to your profile grid!');
  }
};

window.sharePost = function(id) {
  alert('Post link copied to clipboard: https://instagram.com/p/nowempireoff-' + id);
};`
  };
}

// 2. WHATSAPP PRO CLONE
export function getWhatsAppAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>WhatsApp Pro | Autonomous Messenger</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="wa-shell">
    <!-- Top Bar -->
    <header class="wa-header">
      <div class="wa-title">WhatsApp</div>
      <div class="wa-actions">
        <button class="icon-btn" onclick="triggerSearch()">🔍</button>
        <button class="icon-btn" onclick="openMenu()">⋮</button>
      </div>
    </header>

    <!-- Top Tabs (Chats, Status, Calls) -->
    <nav class="wa-tabs">
      <button class="tab-btn active" id="tab-chats" onclick="switchWaTab('chats')">CHATS <span class="tab-badge">4</span></button>
      <button class="tab-btn" id="tab-status" onclick="switchWaTab('status')">STATUS</button>
      <button class="tab-btn" id="tab-calls" onclick="switchWaTab('calls')">CALLS</button>
    </nav>

    <!-- Chat List Screen -->
    <section id="chatsScreen" class="wa-screen active">
      <div class="search-bar-wrap" id="searchWrap" style="display:none;">
        <input type="text" id="searchInput" placeholder="Search chats or messages..." oninput="filterChats()" />
      </div>

      <div class="chat-list" id="chatListContainer">
        <!-- Chat 1 -->
        <div class="chat-item" onclick="openChatRoom('nowempireoff', 'Nowempireoff (Lead Architect)', 'Online', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120')">
          <div class="avatar-box"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="Avatar" /><span class="online-indicator"></span></div>
          <div class="chat-info">
            <div class="row-top"><strong>Nowempireoff</strong><span class="time">11:42 AM</span></div>
            <div class="row-bottom"><span class="msg-preview">✓✓ Autonomous full-stack social apps are deployed!</span><span class="unread-pill">2</span></div>
          </div>
        </div>

        <!-- Chat 2 -->
        <div class="chat-item" onclick="openChatRoom('sarah_dev', 'Sarah Jenkins', 'Last seen today at 10:15 AM', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120')">
          <div class="avatar-box"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120" alt="Avatar" /></div>
          <div class="chat-info">
            <div class="row-top"><strong>Sarah Jenkins</strong><span class="time">Yesterday</span></div>
            <div class="row-bottom"><span class="msg-preview">✓✓ The 60FPS Canvas UI runs super smooth.</span></div>
          </div>
        </div>

        <!-- Chat 3 -->
        <div class="chat-item" onclick="openChatRoom('alex_ai', 'Alex Rivera', 'Typing...', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120')">
          <div class="avatar-box"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120" alt="Avatar" /></div>
          <div class="chat-info">
            <div class="row-top"><strong>Alex Rivera</strong><span class="time">Wednesday</span></div>
            <div class="row-bottom"><span class="msg-preview typing-text">typing...</span><span class="unread-pill">1</span></div>
          </div>
        </div>

        <!-- Chat 4 -->
        <div class="chat-item" onclick="openChatRoom('dev_group', 'Cyber Core Dev Team (8)', '8 participants', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120')">
          <div class="avatar-box"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120" alt="Group" /></div>
          <div class="chat-info">
            <div class="row-top"><strong>Cyber Core Dev Team</strong><span class="time">Monday</span></div>
            <div class="row-bottom"><span class="msg-preview">Elena: Sent new 3D target shooter assets 🎯</span><span class="unread-pill">5</span></div>
          </div>
        </div>
      </div>

      <button class="fab-chat" onclick="openNewChatModal()">💬</button>
    </section>

    <!-- Status Screen -->
    <section id="statusScreen" class="wa-screen" style="display:none;">
      <div class="my-status-card" onclick="alert('Status updated!')">
        <div class="avatar-box"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="My Status" /><span class="plus-icon">+</span></div>
        <div class="chat-info">
          <strong>My status</strong>
          <span class="msg-preview">Tap to add status update</span>
        </div>
      </div>
      <div class="section-title">RECENT UPDATES</div>
      <div class="chat-item" onclick="alert('Viewing Sarah Jenkins Status...')">
        <div class="avatar-box status-ring"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120" alt="Avatar" /></div>
        <div class="chat-info">
          <strong>Sarah Jenkins</strong>
          <span class="msg-preview">Today, 8:30 AM</span>
        </div>
      </div>
    </section>

    <!-- Calls Screen -->
    <section id="callsScreen" class="wa-screen" style="display:none;">
      <div class="chat-item" onclick="simulateCall('Nowempireoff')">
        <div class="avatar-box"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="Call" /></div>
        <div class="chat-info">
          <strong>Nowempireoff</strong>
          <span class="msg-preview call-incoming">↙ Incoming Voice Call • 12 mins</span>
        </div>
        <button class="call-btn">📞</button>
      </div>
    </section>

    <!-- Active Conversation Room View -->
    <div id="chatRoom" class="chat-room" style="display:none;">
      <header class="room-header">
        <button class="back-btn" onclick="closeChatRoom()">←</button>
        <img class="room-avatar" id="roomAvatar" src="" alt="Avatar" />
        <div class="room-meta">
          <strong id="roomName">Name</strong>
          <span id="roomStatus">Online</span>
        </div>
        <div class="room-actions">
          <button class="icon-btn" onclick="startVideoCall()">📹</button>
          <button class="icon-btn" onclick="startVoiceCall()">📞</button>
          <button class="icon-btn">⋮</button>
        </div>
      </header>

      <div class="messages-board" id="messagesBoard">
        <!-- Messages will be rendered here -->
      </div>

      <!-- Input Bar -->
      <footer class="room-footer">
        <div class="input-bubble">
          <button class="sub-btn" onclick="insertEmoji('😊')">😊</button>
          <input type="text" id="chatMessageInput" placeholder="Message" onkeydown="handleInputKey(event)" />
          <button class="sub-btn" onclick="attachFile()">📎</button>
          <button class="sub-btn" onclick="cameraSnapshot()">📷</button>
        </div>
        <button class="voice-send-btn" id="sendBtn" onclick="sendMessage()">➤</button>
      </footer>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#0b141a; color:#e9edef; display:flex; justify-content:center; min-height:100vh; overflow:hidden; }
.wa-shell { width:100%; max-width:440px; height:100vh; display:flex; flex-direction:column; background:#111b21; position:relative; border-left:1px solid #222d34; border-right:1px solid #222d34; }

/* Top Header */
.wa-header { height:54px; background:#202c33; display:flex; justify-content:space-between; align-items:center; padding:0 16px; }
.wa-title { font-size:19px; font-weight:700; color:#00a884; letter-spacing:0.5px; }
.wa-actions { display:flex; gap:16px; }
.icon-btn { background:none; border:none; color:#aebac1; font-size:18px; cursor:pointer; }

/* Tabs */
.wa-tabs { display:flex; background:#202c33; border-bottom:1px solid #2a3942; }
.tab-btn { flex:1; background:none; border:none; color:#8696a0; padding:12px 0; font-size:13px; font-weight:700; cursor:pointer; position:relative; }
.tab-btn.active { color:#00a884; }
.tab-btn.active::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:#00a884; }
.tab-badge { background:#00a884; color:#111b21; font-size:10px; font-weight:900; border-radius:10px; padding:1px 5px; margin-left:4px; }

/* Screens */
.wa-screen { flex:1; overflow-y:auto; position:relative; }
.search-bar-wrap { padding:8px 12px; background:#111b21; }
.search-bar-wrap input { width:100%; background:#202c33; border:none; border-radius:8px; padding:8px 14px; color:#fff; font-size:13px; outline:none; }

/* Chat Item */
.chat-item { display:flex; align-items:center; padding:12px 16px; border-bottom:1px solid rgba(134,150,160,0.08); cursor:pointer; transition:background 0.15s; }
.chat-item:hover { background:#202c33; }
.avatar-box { position:relative; width:46px; height:46px; margin-right:12px; flex-shrink:0; }
.avatar-box img { width:100%; height:100%; border-radius:50%; object-fit:cover; }
.online-indicator { position:absolute; bottom:2px; right:2px; width:10px; height:10px; background:#00a884; border:2px solid #111b21; border-radius:50%; }
.status-ring { border:2px solid #00a884; border-radius:50%; padding:2px; }
.chat-info { flex:1; overflow:hidden; }
.row-top { display:flex; justify-content:space-between; margin-bottom:4px; }
.row-top strong { font-size:15px; color:#e9edef; font-weight:600; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; }
.row-top .time { font-size:11px; color:#8696a0; }
.row-bottom { display:flex; justify-content:space-between; align-items:center; }
.msg-preview { font-size:13px; color:#8696a0; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:240px; }
.typing-text { color:#00a884; font-weight:600; }
.unread-pill { background:#00a884; color:#111b21; font-size:11px; font-weight:800; border-radius:12px; padding:1px 6px; }

/* Floating Action Button */
.fab-chat { position:absolute; bottom:20px; right:20px; width:52px; height:52px; background:#00a884; border:none; border-radius:50%; color:#111b21; font-size:22px; cursor:pointer; box-shadow:0 4px 14px rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; }

/* Active Chat Room */
.chat-room { position:absolute; inset:0; background:#0b141a; display:flex; flex-direction:column; z-index:50; background-image:radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0); background-size:24px 24px; }
.room-header { height:56px; background:#202c33; display:flex; align-items:center; padding:0 8px; gap:8px; border-bottom:1px solid #2a3942; }
.back-btn { background:none; border:none; color:#aebac1; font-size:20px; cursor:pointer; padding:6px; }
.room-avatar { width:38px; height:38px; border-radius:50%; object-fit:cover; }
.room-meta { flex:1; overflow:hidden; }
.room-meta strong { font-size:14px; color:#e9edef; display:block; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; }
.room-meta span { font-size:11px; color:#00a884; display:block; }
.room-actions { display:flex; gap:12px; }

.messages-board { flex:1; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:10px; }
.message-bubble { max-width:75%; padding:8px 12px; border-radius:8px; font-size:13px; line-height:1.4; position:relative; word-break:break-word; }
.message-bubble.incoming { align-self:flex-start; background:#202c33; color:#e9edef; border-top-left-radius:2px; }
.message-bubble.outgoing { align-self:flex-end; background:#005c4b; color:#e9edef; border-top-right-radius:2px; }
.msg-time { font-size:9.5px; color:rgba(255,255,255,0.6); float:right; margin-left:8px; margin-top:4px; }

.room-footer { padding:8px; display:flex; align-items:center; gap:8px; background:#202c33; }
.input-bubble { flex:1; background:#2a3942; border-radius:24px; display:flex; align-items:center; padding:4px 10px; gap:6px; }
.sub-btn { background:none; border:none; color:#8696a0; font-size:16px; cursor:pointer; }
.input-bubble input { flex:1; background:none; border:none; color:#fff; font-size:13px; outline:none; }
.voice-send-btn { width:44px; height:44px; border-radius:50%; background:#00a884; border:none; color:#111b21; font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center; }`,

    'script.js': `const chatRoomsData = {
  nowempireoff: [
    { text: "Hey! How is the Autonomous IDE experience running?", sender: "incoming", time: "11:38 AM" },
    { text: "It is incredible! Everything is ultra fast and instant 🚀", sender: "outgoing", time: "11:40 AM" },
    { text: "Autonomous full-stack social apps are deployed! Test out all interactive components.", sender: "incoming", time: "11:42 AM" }
  ],
  sarah_dev: [
    { text: "Hey did you see the new Three.js 3D canvas shader?", sender: "incoming", time: "Yesterday" },
    { text: "The 60FPS Canvas UI runs super smooth.", sender: "outgoing", time: "Yesterday" }
  ],
  alex_ai: [
    { text: "Connecting autonomous agent toolchain...", sender: "incoming", time: "Wednesday" }
  ],
  dev_group: [
    { text: "Elena: Sent new 3D target shooter assets 🎯", sender: "incoming", time: "Monday" }
  ]
};

let currentContactId = 'nowempireoff';

window.openChatRoom = function(id, name, status, avatar) {
  currentContactId = id;
  document.getElementById('roomName').innerText = name;
  document.getElementById('roomStatus').innerText = status;
  document.getElementById('roomAvatar').src = avatar;
  renderMessages();
  document.getElementById('chatRoom').style.display = 'flex';
};

window.closeChatRoom = function() {
  document.getElementById('chatRoom').style.display = 'none';
};

function renderMessages() {
  const board = document.getElementById('messagesBoard');
  board.innerHTML = '';
  const list = chatRoomsData[currentContactId] || [];
  list.forEach(msg => {
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble ' + msg.sender;
    bubble.innerHTML = msg.text + '<span class="msg-time">' + msg.time + (msg.sender === 'outgoing' ? ' ✓✓' : '') + '</span>';
    board.appendChild(bubble);
  });
  board.scrollTop = board.scrollHeight;
}

window.sendMessage = function() {
  const input = document.getElementById('chatMessageInput');
  const text = input.value.trim();
  if (text) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (!chatRoomsData[currentContactId]) chatRoomsData[currentContactId] = [];
    chatRoomsData[currentContactId].push({ text, sender: 'outgoing', time });
    renderMessages();
    input.value = '';

    // Auto simulated smart reply
    setTimeout(() => {
      const replies = [
        "Got your message! Processing autonomous updates ⚡",
        "Confirmed! Synced with Nowempireoff Core Engine.",
        "Awesome! Let's continue building high-performance features 💎"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      chatRoomsData[currentContactId].push({ text: randomReply, sender: 'incoming', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
      renderMessages();
    }, 1000);
  }
};

window.handleInputKey = function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
};

window.switchWaTab = function(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.wa-screen').forEach(scr => scr.style.display = 'none');

  document.getElementById('tab-' + tabName).classList.add('active');
  document.getElementById(tabName + 'Screen').style.display = 'block';
};

window.triggerSearch = function() {
  const wrap = document.getElementById('searchWrap');
  wrap.style.display = wrap.style.display === 'none' ? 'block' : 'none';
};

window.startVoiceCall = function() {
  alert('Connecting Secure WhatsApp Voice Call with ' + document.getElementById('roomName').innerText + '... 📞');
};

window.startVideoCall = function() {
  alert('Connecting HD WhatsApp Video Call (60FPS Encrypted) with ' + document.getElementById('roomName').innerText + '... 📹');
};

window.insertEmoji = function(emoji) {
  const input = document.getElementById('chatMessageInput');
  input.value += emoji;
  input.focus();
};

window.attachFile = function() {
  alert('Attachment Picker: Document, Camera, Gallery, Audio, Location, Contact');
};

window.cameraSnapshot = function() {
  alert('Camera viewfinder initialized. Capturing quick snap...');
};`
  };
}

// 3. YOUTUBE & SHORTS PRO CLONE
export function getYouTubeAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>YouTube Pro | Autonomous Video Studio</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="yt-shell">
    <!-- Top Navigation Header -->
    <header class="yt-header">
      <div class="brand">
        <span class="play-icon">▶</span>
        <span class="yt-title">YouTube</span>
      </div>
      <div class="yt-header-icons">
        <button class="icon-btn" onclick="alert('Cast to Smart TV / Monitor active')">📺</button>
        <button class="icon-btn">🔔<span class="yt-badge">9+</span></button>
        <button class="icon-btn" onclick="toggleSearch()">🔍</button>
        <img class="profile-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80" alt="Avatar" />
      </div>
    </header>

    <!-- Filter Categories Chips -->
    <div class="filter-chips">
      <button class="chip active">All</button>
      <button class="chip">AI Coding</button>
      <button class="chip">Cyberpunk</button>
      <button class="chip">Gaming 3D</button>
      <button class="chip">Synthwave Music</button>
      <button class="chip">Live Streams</button>
    </div>

    <!-- Main View Feed -->
    <main class="yt-feed" id="ytFeed">
      <!-- Active Interactive Video Player Card -->
      <section class="player-card">
        <div class="video-stage" id="videoStage">
          <canvas id="visualizerCanvas"></canvas>
          <div class="video-overlay-controls">
            <button id="playBtn" class="play-toggle" onclick="togglePlay()">▶</button>
            <div class="video-time-bar">
              <input type="range" id="videoScrubber" value="25" min="0" max="100" oninput="updateScrubber(this.value)" />
              <div class="time-meta"><span id="timeCurrent">01:42</span> / <span>06:30</span></div>
            </div>
          </div>
        </div>

        <div class="video-details">
          <h2 class="video-title">Building Autonomous Full-Stack AI Operating Systems in 2026 | Nowempireoff</h2>
          <div class="view-stats">1.4M views • 2 days ago • #ArtificialIntelligence #Coding</div>
          
          <div class="action-buttons-row">
            <button class="action-pill" id="likeBtn" onclick="toggleLike()"><span id="likeIcon">👍</span> <span id="likeCount">142K</span></button>
            <button class="action-pill" onclick="alert('Disliked')">👎</button>
            <button class="action-pill" onclick="shareVideo()">Share ↗</button>
            <button class="action-pill" onclick="remixShort()">Remix ⚡</button>
            <button class="action-pill" onclick="savePlaylist()">+ Save</button>
          </div>

          <!-- Channel Bar -->
          <div class="channel-bar">
            <img class="channel-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="Channel" />
            <div class="channel-info">
              <strong>Nowempireoff Core</strong>
              <span>850K subscribers</span>
            </div>
            <button class="sub-btn" id="subBtn" onclick="toggleSubscribe()">Subscribe</button>
          </div>

          <!-- Comments Preview Box -->
          <div class="comments-box" onclick="openCommentsSheet()">
            <div class="box-top"><strong>Comments</strong> <span>2,489</span></div>
            <div class="top-comment">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60" alt="User" />
              <p>This autonomous IDE is absolutely mind blowing! Everything runs with 0 latency.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Shorts Shelf Horizontal -->
      <section class="shorts-shelf">
        <div class="shelf-title">⚡ Shorts</div>
        <div class="shorts-row">
          <div class="short-card" onclick="openShortModal('3D iPhone Design Game Live')">
            <div class="short-thumb" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">📱</div>
            <span class="short-title">3D iPhone Design Game </span>
            <span class="short-views">840K views</span>
          </div>
          <div class="short-card" onclick="openShortModal('60FPS Car Racing Game in Canvas')">
            <div class="short-thumb" style="background:linear-gradient(135deg,#06b6d4,#3b82f6)">🏎️</div>
            <span class="short-title">Nitro Highway Racer 3D</span>
            <span class="short-views">1.2M views</span>
          </div>
          <div class="short-card" onclick="openShortModal('Leaflet GIS Interactive World Map')">
            <div class="short-thumb" style="background:linear-gradient(135deg,#10b981,#059669)">🌍</div>
            <span class="short-title">Terra 360 World Atlas</span>
            <span class="short-views">520K views</span>
          </div>
        </div>
      </section>
    </main>

    <!-- Bottom Navigation Bar -->
    <nav class="yt-bottom-nav">
      <button class="nav-btn active"><span>🏠</span><small>Home</small></button>
      <button class="nav-btn" onclick="alert('Shorts Player: Swipe vertically for infinite curated video reels!')"><span>⚡</span><small>Shorts</small></button>
      <button class="nav-btn upload-btn" onclick="alert('Upload Video, Create Short, or Go Live!')">➕</button>
      <button class="nav-btn" onclick="alert('Subscriptions: Nowempireoff, Verge, Fireship, MKBHD')"><span>📑</span><small>Subscriptions</small></button>
      <button class="nav-btn"><span>📁</span><small>Library</small></button>
    </nav>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#0f0f0f; color:#f1f1f1; display:flex; justify-content:center; min-height:100vh; overflow:hidden; }
.yt-shell { width:100%; max-width:440px; height:100vh; display:flex; flex-direction:column; background:#0f0f0f; position:relative; border-left:1px solid #272727; border-right:1px solid #272727; }

/* Header */
.yt-header { height:50px; display:flex; justify-content:space-between; align-items:center; padding:0 14px; background:#0f0f0f; border-bottom:1px solid #212121; }
.brand { display:flex; align-items:center; gap:4px; }
.play-icon { background:#ff0000; color:#fff; font-size:12px; font-weight:900; padding:2px 7px; border-radius:6px; }
.yt-title { font-size:18px; font-weight:800; letter-spacing:-0.5px; }
.yt-header-icons { display:flex; align-items:center; gap:12px; }
.icon-btn { background:none; border:none; color:#f1f1f1; font-size:17px; cursor:pointer; position:relative; }
.yt-badge { position:absolute; top:-4px; right:-6px; background:#ff0000; color:#fff; font-size:9px; font-weight:900; border-radius:10px; padding:1px 4px; }
.profile-avatar { width:26px; height:26px; border-radius:50%; object-fit:cover; }

/* Filter Chips */
.filter-chips { display:flex; gap:8px; padding:10px 14px; overflow-x:auto; scrollbar-width:none; background:#0f0f0f; border-bottom:1px solid #212121; }
.filter-chips::-webkit-scrollbar { display:none; }
.chip { background:#272727; border:none; color:#f1f1f1; padding:6px 12px; border-radius:8px; font-size:12px; font-weight:600; cursor:pointer; white-space:nowrap; }
.chip.active { background:#f1f1f1; color:#0f0f0f; }

/* Feed & Player */
.yt-feed { flex:1; overflow-y:auto; padding-bottom:60px; }
.player-card { margin-bottom:16px; }
.video-stage { width:100%; aspect-ratio:16/9; background:#000; position:relative; overflow:hidden; }
#visualizerCanvas { width:100%; height:100%; display:block; }
.video-overlay-controls { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:space-between; padding:12px; background:linear-gradient(rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.7)); }
.play-toggle { align-self:center; margin-top:auto; margin-bottom:auto; width:54px; height:54px; border-radius:50%; background:rgba(0,0,0,0.7); border:2px solid #fff; color:#fff; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; }
.video-time-bar { width:100%; }
.video-time-bar input { width:100%; accent-color:#ff0000; cursor:pointer; }
.time-meta { display:flex; justify-content:space-between; font-size:11px; color:#aaa; font-family:monospace; }

.video-details { padding:12px 14px; }
.video-title { font-size:15px; font-weight:700; line-height:1.4; margin-bottom:6px; }
.view-stats { font-size:12px; color:#aaa; margin-bottom:12px; }
.action-buttons-row { display:flex; gap:8px; overflow-x:auto; scrollbar-width:none; margin-bottom:14px; }
.action-buttons-row::-webkit-scrollbar { display:none; }
.action-pill { background:#272727; border:none; color:#f1f1f1; padding:6px 14px; border-radius:18px; font-size:12px; font-weight:600; cursor:pointer; white-space:nowrap; display:flex; align-items:center; gap:6px; }

/* Channel Bar */
.channel-bar { display:flex; align-items:center; gap:10px; margin-bottom:14px; border-top:1px solid #272727; border-bottom:1px solid #272727; padding:10px 0; }
.channel-avatar { width:38px; height:38px; border-radius:50%; object-fit:cover; }
.channel-info { flex:1; }
.channel-info strong { display:block; font-size:13px; }
.channel-info span { font-size:11px; color:#aaa; }
.sub-btn { background:#f1f1f1; color:#0f0f0f; border:none; border-radius:18px; padding:6px 14px; font-size:12px; font-weight:700; cursor:pointer; }
.sub-btn.subscribed { background:#272727; color:#f1f1f1; }

/* Comments Box */
.comments-box { background:#272727; border-radius:10px; padding:10px 12px; cursor:pointer; }
.box-top { font-size:12px; margin-bottom:6px; }
.box-top span { color:#aaa; margin-left:4px; }
.top-comment { display:flex; gap:8px; align-items:center; font-size:12px; color:#ddd; }
.top-comment img { width:22px; height:22px; border-radius:50%; }

/* Shorts Shelf */
.shorts-shelf { padding:14px; border-top:4px solid #212121; }
.shelf-title { font-size:15px; font-weight:700; margin-bottom:10px; }
.shorts-row { display:flex; gap:10px; overflow-x:auto; scrollbar-width:none; }
.shorts-row::-webkit-scrollbar { display:none; }
.short-card { flex-shrink:0; width:130px; cursor:pointer; }
.short-thumb { width:100%; aspect-ratio:9/16; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:32px; }
.short-title { font-size:12px; font-weight:600; display:block; margin-top:4px; line-height:1.3; }
.short-views { font-size:10px; color:#aaa; }

/* Bottom Nav */
.yt-bottom-nav { height:50px; background:#0f0f0f; border-top:1px solid #212121; display:flex; justify-content:space-around; align-items:center; position:absolute; bottom:0; left:0; right:0; }
.nav-btn { background:none; border:none; color:#f1f1f1; display:flex; flex-direction:column; align-items:center; font-size:16px; cursor:pointer; }
.nav-btn small { font-size:9.5px; margin-top:2px; }
.nav-btn.active { color:#ff0000; }
.upload-btn { width:36px; height:36px; border-radius:50%; border:1px solid #444; font-size:18px; }`,

    'script.js': `let isPlaying = false;
let isLiked = false;
let likesCount = 142000;
let isSubscribed = false;
let animFrame = null;

const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawVisualizer() {
  ctx.fillStyle = '#0a0d16';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const bars = 40;
  const barWidth = canvas.width / bars;
  const time = Date.now() * 0.003;

  for (let i = 0; i < bars; i++) {
    const height = isPlaying 
      ? Math.sin(time + i * 0.2) * (canvas.height * 0.35) + (canvas.height * 0.4)
      : 20;
    
    const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
    grad.addColorStop(0, '#ff0000');
    grad.addColorStop(1, '#ff7700');
    
    ctx.fillStyle = grad;
    ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 2, height);
  }

  // Draw Center Logo / Play State
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(isPlaying ? '⚡ AUTONOMOUS 4K STREAMING' : 'CLICK TO STREAM', canvas.width / 2, canvas.height / 2 - 20);

  animFrame = requestAnimationFrame(drawVisualizer);
}
drawVisualizer();

window.togglePlay = function() {
  isPlaying = !isPlaying;
  document.getElementById('playBtn').innerText = isPlaying ? '❚❚' : '▶';
};

window.toggleLike = function() {
  isLiked = !isLiked;
  likesCount += isLiked ? 1 : -1;
  document.getElementById('likeIcon').innerText = isLiked ? '❤️' : '👍';
  document.getElementById('likeCount').innerText = (likesCount / 1000).toFixed(0) + 'K';
};

window.toggleSubscribe = function() {
  isSubscribed = !isSubscribed;
  const btn = document.getElementById('subBtn');
  btn.innerText = isSubscribed ? 'Subscribed ✓' : 'Subscribe';
  btn.classList.toggle('subscribed', isSubscribed);
};

window.updateScrubber = function(val) {
  const currentSeconds = Math.floor((val / 100) * 390);
  const m = Math.floor(currentSeconds / 60);
  const s = currentSeconds % 60;
  document.getElementById('timeCurrent').innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
};

window.shareVideo = function() {
  alert('YouTube Video Link Copied to Clipboard!');
};

window.remixShort = function() {
  alert('Sound & Video Segment Clipped for Shorts Creation!');
};

window.savePlaylist = function() {
  alert('Video saved to "Watch Later" & "Autonomous AI Projects" Playlist!');
};

window.openCommentsSheet = function() {
  alert('Comments: 2,489 Active Discussion Threads by Developers Worldwide.');
};

window.openShortModal = function(title) {
  alert('Launching YouTube Short: ' + title);
};`
  };
}

// 4. TWITTER / X PRO CLONE
export function getTwitterXAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>X Pro | Autonomous Social Timeline</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="x-shell">
    <!-- Top Bar -->
    <header class="x-header">
      <img class="header-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80" alt="Avatar" />
      <div class="x-logo">𝕏</div>
      <button class="upgrade-btn">Upgrade</button>
    </header>

    <!-- Top Feed Tabs (For You / Following) -->
    <div class="feed-tabs">
      <button class="f-tab active" id="tab-foryou" onclick="switchXFeed('foryou')">For you</button>
      <button class="f-tab" id="tab-following" onclick="switchXFeed('following')">Following</button>
    </div>

    <!-- Main Scrollable Timeline -->
    <main class="x-timeline" id="xTimeline">
      <!-- Tweet Compose Box -->
      <div class="composer-box">
        <img class="composer-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80" alt="Avatar" />
        <div class="compose-right">
          <textarea id="tweetInput" placeholder="What is happening?!" rows="2"></textarea>
          <div class="compose-tools">
            <div class="tool-icons">
              <span>🖼️</span><span>📊</span><span>😀</span><span>📍</span>
            </div>
            <button class="post-btn" onclick="publishTweet()">Post</button>
          </div>
        </div>
      </div>

      <!-- Feed Container -->
      <div id="postsList">
        <!-- Tweet 1 -->
        <article class="tweet-card">
          <img class="author-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="Nowempireoff" />
          <div class="tweet-body">
            <div class="tweet-author-line">
              <strong>Nowempireoff</strong>
              <span class="blue-tick">✓</span>
              <span class="handle">@nowempireoff</span>
              <span class="dot">•</span>
              <span class="time">15m</span>
            </div>
            <p class="tweet-content">
              Autonomous IDE v4.0 is now live worldwide. Instant code generation, 3D games, and real-time social clones with zero lag. Try typing any app prompt! 🚀⚡
            </p>
            <div class="tweet-actions">
              <button class="action-btn" onclick="replyTweet(1)">💬 <span>142</span></button>
              <button class="action-btn" id="rt-btn-1" onclick="toggleRetweet(1)">🔁 <span id="rt-count-1">840</span></button>
              <button class="action-btn" id="like-btn-1" onclick="toggleTweetLike(1)">🤍 <span id="like-count-1">3.4K</span></button>
              <button class="action-btn">📊 <span>124K</span></button>
              <button class="action-btn" onclick="shareTweet()">↗</button>
            </div>
          </div>
        </article>

        <!-- Tweet 2 -->
        <article class="tweet-card">
          <img class="author-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120" alt="Sarah" />
          <div class="tweet-body">
            <div class="tweet-author-line">
              <strong>Sarah Jenkins</strong>
              <span class="blue-tick">✓</span>
              <span class="handle">@sarah_jenkins</span>
              <span class="dot">•</span>
              <span class="time">2h</span>
            </div>
            <p class="tweet-content">
              The attention to detail in high-end UI engineering never gets old. Crisp borders, harmonic typography, and instant tactile feedback are what define craftsmanship.
            </p>
            <div class="tweet-actions">
              <button class="action-btn" onclick="replyTweet(2)">💬 <span>28</span></button>
              <button class="action-btn" id="rt-btn-2" onclick="toggleRetweet(2)">🔁 <span id="rt-count-2">190</span></button>
              <button class="action-btn" id="like-btn-2" onclick="toggleTweetLike(2)">🤍 <span id="like-count-2">910</span></button>
              <button class="action-btn">📊 <span>45K</span></button>
              <button class="action-btn" onclick="shareTweet()">↗</button>
            </div>
          </div>
        </article>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav class="x-bottom-nav">
      <button class="nav-item active">🏠</button>
      <button class="nav-item" onclick="openExploreTrends()">🔍</button>
      <button class="nav-item" onclick="alert('Grok AI Assistant connected.')">✨</button>
      <button class="nav-item">🔔</button>
      <button class="nav-item">✉️</button>
    </nav>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#000; color:#e7e9ea; display:flex; justify-content:center; min-height:100vh; overflow:hidden; }
.x-shell { width:100%; max-width:440px; height:100vh; display:flex; flex-direction:column; background:#000; border-left:1px solid #2f3336; border-right:1px solid #2f3336; position:relative; }

/* Header */
.x-header { height:52px; display:flex; justify-content:space-between; align-items:center; padding:0 16px; border-bottom:1px solid #2f3336; }
.header-avatar { width:30px; height:30px; border-radius:50%; object-fit:cover; }
.x-logo { font-size:22px; font-weight:900; }
.upgrade-btn { background:#fff; color:#000; border:none; border-radius:18px; padding:6px 14px; font-size:12px; font-weight:800; cursor:pointer; }

/* Tabs */
.feed-tabs { display:flex; border-bottom:1px solid #2f3336; }
.f-tab { flex:1; background:none; border:none; color:#71767b; padding:12px 0; font-size:14px; font-weight:700; cursor:pointer; position:relative; }
.f-tab.active { color:#fff; }
.f-tab.active::after { content:''; position:absolute; bottom:0; left:35%; right:35%; height:4px; background:#1d9bf0; border-radius:4px; }

/* Timeline */
.x-timeline { flex:1; overflow-y:auto; padding-bottom:60px; }
.composer-box { display:flex; padding:14px; border-bottom:1px solid #2f3336; gap:12px; }
.composer-avatar { width:38px; height:38px; border-radius:50%; object-fit:cover; }
.compose-right { flex:1; }
.compose-right textarea { width:100%; background:none; border:none; color:#fff; font-size:15px; resize:none; outline:none; font-family:inherit; }
.compose-tools { display:flex; justify-content:space-between; align-items:center; margin-top:8px; border-top:1px solid #222; padding-top:8px; }
.tool-icons { display:flex; gap:10px; color:#1d9bf0; font-size:16px; cursor:pointer; }
.post-btn { background:#1d9bf0; color:#fff; border:none; border-radius:20px; padding:6px 16px; font-weight:700; font-size:13px; cursor:pointer; }

/* Tweets */
.tweet-card { display:flex; gap:12px; padding:12px 14px; border-bottom:1px solid #2f3336; }
.author-avatar { width:38px; height:38px; border-radius:50%; object-fit:cover; flex-shrink:0; }
.tweet-body { flex:1; }
.tweet-author-line { display:flex; align-items:center; gap:4px; font-size:14px; margin-bottom:4px; }
.blue-tick { color:#1d9bf0; font-size:12px; font-weight:900; }
.handle, .dot, .time { color:#71767b; font-size:13px; }
.tweet-content { font-size:14px; line-height:1.45; margin-bottom:10px; color:#e7e9ea; }
.tweet-actions { display:flex; justify-content:space-between; color:#71767b; font-size:12px; max-width:320px; }
.action-btn { background:none; border:none; color:#71767b; cursor:pointer; display:flex; align-items:center; gap:4px; font-size:12px; }
.action-btn:hover { color:#1d9bf0; }

/* Bottom Nav */
.x-bottom-nav { height:50px; background:#000; border-top:1px solid #2f3336; display:flex; justify-content:space-around; align-items:center; position:absolute; bottom:0; left:0; right:0; }
.nav-item { background:none; border:none; color:#fff; font-size:20px; cursor:pointer; }`,

    'script.js': `const tweetState = {
  likes: { 1: 3400, 2: 910 },
  liked: { 1: false, 2: false },
  rts: { 1: 840, 2: 190 },
  rted: { 1: false, 2: false }
};

window.publishTweet = function() {
  const input = document.getElementById('tweetInput');
  const text = input.value.trim();
  if (text) {
    const list = document.getElementById('postsList');
    const article = document.createElement('article');
    article.className = 'tweet-card';
    article.innerHTML = \`
      <img class="author-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="Avatar" />
      <div class="tweet-body">
        <div class="tweet-author-line">
          <strong>Nowempireoff</strong>
          <span class="blue-tick">✓</span>
          <span class="handle">@nowempireoff</span>
          <span class="dot">•</span>
          <span class="time">Just now</span>
        </div>
        <p class="tweet-content">\${text}</p>
        <div class="tweet-actions">
          <button class="action-btn">💬 <span>0</span></button>
          <button class="action-btn">🔁 <span>0</span></button>
          <button class="action-btn">🤍 <span>0</span></button>
          <button class="action-btn">📊 <span>1</span></button>
          <button class="action-btn">↗</button>
        </div>
      </div>
    \`;
    list.insertBefore(article, list.firstChild);
    input.value = '';
  }
};

window.toggleTweetLike = function(id) {
  tweetState.liked[id] = !tweetState.liked[id];
  tweetState.likes[id] += tweetState.liked[id] ? 1 : -1;
  const btn = document.getElementById('like-btn-' + id);
  const count = document.getElementById('like-count-' + id);
  btn.innerHTML = (tweetState.liked[id] ? '❤️' : '🤍') + ' <span>' + (tweetState.likes[id] / 1000).toFixed(1) + 'K</span>';
  btn.style.color = tweetState.liked[id] ? '#f91880' : '#71767b';
};

window.toggleRetweet = function(id) {
  tweetState.rted[id] = !tweetState.rted[id];
  tweetState.rts[id] += tweetState.rted[id] ? 1 : -1;
  const btn = document.getElementById('rt-btn-' + id);
  btn.innerHTML = '🔁 <span>' + tweetState.rts[id] + '</span>';
  btn.style.color = tweetState.rted[id] ? '#00ba7c' : '#71767b';
};

window.openExploreTrends = function() {
  alert('Trending on 𝕏:\\n#1 • AutonomousIDE\\n#2 • #NowempireoffCore\\n#3 • #AppleKeynote\\n#4 • #TechRevolution');
};

window.shareTweet = function() {
  alert('Post link copied to clipboard: https://x.com/nowempireoff/status/178942');
};`
  };
}

// 5. SPOTIFY PRO CLONE
export function getSpotifyAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Spotify Pro | Autonomous Music Streamer</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="sp-shell">
    <!-- Top Bar -->
    <header class="sp-header">
      <div class="greeting">Good evening</div>
      <div class="header-actions">
        <button class="sp-icon-btn">🔔</button>
        <button class="sp-icon-btn">🕒</button>
        <button class="sp-icon-btn">⚙️</button>
      </div>
    </header>

    <!-- Filter Tags -->
    <div class="sp-tags">
      <button class="sp-tag active">All</button>
      <button class="sp-tag">Music</button>
      <button class="sp-tag">Podcasts</button>
    </div>

    <!-- Main Scroll Body -->
    <main class="sp-content">
      <!-- Quick Grid (6 items) -->
      <div class="quick-grid">
        <div class="quick-card" onclick="playTrack('Cyberpunk Odyssey 2099', 'Nowempireoff Beats', 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200')">
          <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200" alt="Cover" />
          <span>Cyberpunk Odyssey</span>
        </div>
        <div class="quick-card" onclick="playTrack('Lofi Coding Sanctuary', 'Chillhop AI', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200')">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200" alt="Cover" />
          <span>Lofi Coding Lounge</span>
        </div>
        <div class="quick-card" onclick="playTrack('Top 50 - Global Hits', 'Spotify Charts', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200')">
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200" alt="Cover" />
          <span>Top 50 - Global</span>
        </div>
        <div class="quick-card" onclick="playTrack('Deep Electronic Synth', 'Synthwave Masters', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200')">
          <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200" alt="Cover" />
          <span>Synthwave 80s</span>
        </div>
      </div>

      <!-- Section: Made for You -->
      <section class="sp-section">
        <h3>Made For You</h3>
        <div class="horizontal-cards">
          <div class="h-card" onclick="playTrack('Daily Mix 1', 'Daft Punk, Kavinsky', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300')">
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" alt="Mix 1" />
            <strong>Daily Mix 1</strong>
            <p>Daft Punk, The Weeknd, Kavinsky</p>
          </div>
          <div class="h-card" onclick="playTrack('Release Radar', 'Updated today', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300')">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" alt="Mix 2" />
            <strong>Release Radar</strong>
            <p>Catch all the latest music from artists you follow.</p>
          </div>
        </div>
      </section>

      <!-- Live Web Audio Synthesizer Waveform -->
      <section class="synth-station">
        <div class="synth-header">
          <strong>LIVE EQUALIZER VISUALIZER</strong>
          <span class="live-dot">🟢 LIVE AUDIO</span>
        </div>
        <canvas id="spCanvas" width="380" height="70"></canvas>
      </section>
    </main>

    <!-- Bottom Now Playing Bar -->
    <div class="now-playing-dock" id="nowPlayingDock">
      <img id="dockCover" src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=120" alt="Track Cover" />
      <div class="track-meta">
        <strong id="dockTitle">Cyberpunk Odyssey 2099</strong>
        <span id="dockArtist">Nowempireoff Beats</span>
      </div>
      <button class="dock-action" onclick="toggleHeart(this)">💚</button>
      <button class="dock-action play-round" id="dockPlayBtn" onclick="togglePlayMusic()">▶</button>
    </div>

    <!-- Bottom Navigation -->
    <nav class="sp-bottom-nav">
      <button class="sp-nav-item active"><span>🏠</span><small>Home</small></button>
      <button class="sp-nav-item" onclick="alert('Search: Songs, Artists, Podcasts, Genres')"><span>🔍</span><small>Search</small></button>
      <button class="sp-nav-item" onclick="alert('Your Library: 48 Playlists, 120 Liked Songs')"><span>📚</span><small>Your Library</small></button>
    </nav>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#121212; color:#fff; display:flex; justify-content:center; min-height:100vh; overflow:hidden; }
.sp-shell { width:100%; max-width:440px; height:100vh; display:flex; flex-direction:column; background:linear-gradient(to bottom, #1e3a2f, #121212 40%); border-left:1px solid #222; border-right:1px solid #222; position:relative; }

/* Header */
.sp-header { height:54px; display:flex; justify-content:space-between; align-items:center; padding:0 16px; }
.greeting { font-size:20px; font-weight:800; }
.header-actions { display:flex; gap:14px; }
.sp-icon-btn { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; }

/* Tags */
.sp-tags { display:flex; gap:8px; padding:6px 16px 14px 16px; }
.sp-tag { background:#2a2a2a; border:none; color:#fff; padding:6px 14px; border-radius:18px; font-size:12px; font-weight:600; cursor:pointer; }
.sp-tag.active { background:#1db954; color:#000; font-weight:700; }

/* Content */
.sp-content { flex:1; overflow-y:auto; padding:0 16px 120px 16px; }
.quick-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:20px; }
.quick-card { display:flex; align-items:center; background:#282828; border-radius:6px; overflow:hidden; cursor:pointer; transition:background 0.2s; }
.quick-card:hover { background:#383838; }
.quick-card img { width:52px; height:52px; object-fit:cover; }
.quick-card span { font-size:12px; font-weight:700; padding:0 10px; line-height:1.2; }

.sp-section { margin-bottom:20px; }
.sp-section h3 { font-size:18px; font-weight:800; margin-bottom:12px; }
.horizontal-cards { display:flex; gap:14px; overflow-x:auto; scrollbar-width:none; }
.horizontal-cards::-webkit-scrollbar { display:none; }
.h-card { width:140px; flex-shrink:0; background:#181818; padding:10px; border-radius:8px; cursor:pointer; }
.h-card img { width:100%; aspect-ratio:1/1; border-radius:6px; object-fit:cover; margin-bottom:8px; }
.h-card strong { font-size:13px; display:block; margin-bottom:2px; }
.h-card p { font-size:11px; color:#a7a7a7; line-height:1.3; }

.synth-station { background:#181818; border-radius:10px; padding:12px; margin-top:10px; border:1px solid #282828; }
.synth-header { display:flex; justify-content:space-between; font-size:11px; margin-bottom:8px; }
.live-dot { color:#1db954; font-weight:800; }
#spCanvas { width:100%; height:70px; display:block; background:#0d0d0d; border-radius:6px; }

/* Now Playing Bottom Dock */
.now-playing-dock { position:absolute; bottom:52px; left:8px; right:8px; height:56px; background:#282828; border-radius:8px; display:flex; align-items:center; padding:0 12px; gap:10px; box-shadow:0 8px 24px rgba(0,0,0,0.7); }
.now-playing-dock img { width:42px; height:42px; border-radius:4px; object-fit:cover; }
.track-meta { flex:1; overflow:hidden; }
.track-meta strong { display:block; font-size:12px; color:#fff; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; }
.track-meta span { font-size:10px; color:#b3b3b3; display:block; }
.dock-action { background:none; border:none; color:#fff; font-size:16px; cursor:pointer; }
.play-round { width:32px; height:32px; border-radius:50%; background:#fff; color:#000; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900; }

/* Bottom Nav */
.sp-bottom-nav { height:52px; background:#121212; border-top:1px solid #222; display:flex; justify-content:space-around; align-items:center; position:absolute; bottom:0; left:0; right:0; }
.sp-nav-item { background:none; border:none; color:#b3b3b3; display:flex; flex-direction:column; align-items:center; font-size:16px; cursor:pointer; }
.sp-nav-item.active { color:#fff; }
.sp-nav-item small { font-size:9.5px; margin-top:2px; }`,

    'script.js': `let isPlayingAudio = false;
let audioCtx = null;
let oscillator = null;

const canvas = document.getElementById('spCanvas');
const ctx = canvas.getContext('2d');

function renderEqualizer() {
  ctx.fillStyle = '#0d0d0d';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const bars = 36;
  const barWidth = canvas.width / bars;
  const t = Date.now() * 0.005;

  for (let i = 0; i < bars; i++) {
    const h = isPlayingAudio 
      ? Math.abs(Math.sin(t + i * 0.3)) * 48 + 8 
      : 4;
    
    ctx.fillStyle = isPlayingAudio ? '#1db954' : '#444';
    ctx.fillRect(i * barWidth, canvas.height - h, barWidth - 3, h);
  }

  requestAnimationFrame(renderEqualizer);
}
renderEqualizer();

window.playTrack = function(title, artist, cover) {
  document.getElementById('dockTitle').innerText = title;
  document.getElementById('dockArtist').innerText = artist;
  document.getElementById('dockCover').src = cover;
  if (!isPlayingAudio) {
    togglePlayMusic();
  }
};

window.togglePlayMusic = function() {
  isPlayingAudio = !isPlayingAudio;
  document.getElementById('dockPlayBtn').innerText = isPlayingAudio ? '❚❚' : '▶';

  if (isPlayingAudio) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
    } catch(e) {}
  }
};

window.toggleHeart = function(btn) {
  btn.innerText = btn.innerText === '💚' ? '🤍' : '💚';
};`
  };
}

// 6. TIKTOK / REELS SHORT VIDEO APP CLONE
export function getTikTokAppFiles(): ProjectFiles {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>TikTok Pro | Autonomous Short Video Feed</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="tt-shell">
    <!-- Top Header Tabs -->
    <header class="tt-header">
      <button class="live-btn">LIVE</button>
      <div class="tab-pair">
        <button class="t-tab">Following</button>
        <button class="t-tab active">For You</button>
      </div>
      <button class="search-btn">🔍</button>
    </header>

    <!-- Fullscreen Video Card -->
    <main class="tt-feed-stage" id="videoFeedStage">
      <div class="tt-visual-bg" id="visualStage">
        <div class="floating-cyber-cube"></div>
      </div>

      <!-- Right Action Rail -->
      <aside class="right-action-rail">
        <div class="avatar-action" onclick="alert('Followed @nowempireoff!')">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" alt="Avatar" />
          <span class="plus-badge">+</span>
        </div>
        <div class="action-item" onclick="toggleHeartLike()">
          <span class="act-icon" id="heartIcon">🤍</span>
          <small id="heartLikes">184.2K</small>
        </div>
        <div class="action-item" onclick="openCommentsSheet()">
          <span class="act-icon">💬</span>
          <small>4,812</small>
        </div>
        <div class="action-item" onclick="bookmarkVideo()">
          <span class="act-icon" id="bmIcon">🔖</span>
          <small>32.1K</small>
        </div>
        <div class="action-item" onclick="shareVideo()">
          <span class="act-icon">↗</span>
          <small>Share</small>
        </div>
        <div class="spinning-disc-box">
          <div class="disc-art">🎵</div>
        </div>
      </aside>

      <!-- Bottom Info Overlay -->
      <div class="bottom-info">
        <h4 class="creator-name">@nowempireoff</h4>
        <p class="video-caption">Creating full-stack autonomous social media clones in seconds with real web tools! #coding #ai #cyberpunk #future</p>
        <div class="music-track-marquee">
          <span>🎵 Original Sound - Nowempireoff Cyber Bass VIP Mix</span>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation Bar -->
    <nav class="tt-bottom-nav">
      <button class="tt-nav active"><span>🏠</span><small>Home</small></button>
      <button class="tt-nav"><span>👥</span><small>Friends</small></button>
      <button class="tt-create-btn" onclick="createNewShort()">➕</button>
      <button class="tt-nav"><span>💬</span><small>Inbox</small></button>
      <button class="tt-nav"><span>👤</span><small>Profile</small></button>
    </nav>
  </div>

  <script src="script.js"></script>
</body>
</html>`,

    'style.css': `* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; user-select:none; }
body { background:#000; color:#fff; display:flex; justify-content:center; min-height:100vh; overflow:hidden; }
.tt-shell { width:100%; max-width:440px; height:100vh; display:flex; flex-direction:column; background:#000; position:relative; overflow:hidden; }

/* Top Header */
.tt-header { position:absolute; top:0; left:0; right:0; height:50px; display:flex; justify-content:space-between; align-items:center; padding:0 16px; z-index:20; background:linear-gradient(rgba(0,0,0,0.6), transparent); }
.live-btn { background:none; border:none; color:#fff; font-weight:800; font-size:13px; cursor:pointer; }
.tab-pair { display:flex; gap:16px; }
.t-tab { background:none; border:none; color:#888; font-size:15px; font-weight:700; cursor:pointer; }
.t-tab.active { color:#fff; border-bottom:2px solid #fff; padding-bottom:2px; }
.search-btn { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; }

/* Video Feed Stage */
.tt-feed-stage { flex:1; position:relative; display:flex; flex-direction:column; justify-content:flex-end; }
.tt-visual-bg { position:absolute; inset:0; background:linear-gradient(135deg, #18052e, #0c1a30, #052623); display:flex; align-items:center; justify-content:center; }
.floating-cyber-cube { width:120px; height:120px; border:2px solid #00f0ff; box-shadow:0 0 30px #00f0ff; animation:rotateCube 6s linear infinite; border-radius:16px; }
@keyframes rotateCube { 100% { transform:rotate(360deg) scale(1.1); } }

/* Right Rail */
.right-action-rail { position:absolute; right:12px; bottom:80px; display:flex; flex-direction:column; gap:16px; align-items:center; z-index:10; }
.avatar-action { position:relative; width:44px; height:44px; cursor:pointer; }
.avatar-action img { width:100%; height:100%; border-radius:50%; border:2px solid #fff; object-fit:cover; }
.plus-badge { position:absolute; bottom:-4px; left:50%; transform:translateX(-50%); background:#fe2c55; color:#fff; border-radius:50%; width:16px; height:16px; font-size:11px; font-weight:900; display:flex; align-items:center; justify-content:center; }
.action-item { display:flex; flex-direction:column; align-items:center; cursor:pointer; }
.act-icon { font-size:26px; }
.action-item small { font-size:11px; font-weight:700; margin-top:2px; }
.spinning-disc-box { width:40px; height:40px; border-radius:50%; background:#222; border:8px solid #111; display:flex; align-items:center; justify-content:center; animation:spinDisc 3s linear infinite; }
@keyframes spinDisc { 100% { transform:rotate(360deg); } }

/* Bottom Info */
.bottom-info { position:relative; z-index:10; padding:16px; background:linear-gradient(transparent, rgba(0,0,0,0.85)); }
.creator-name { font-size:15px; font-weight:800; margin-bottom:6px; }
.video-caption { font-size:13px; line-height:1.4; color:#eee; margin-bottom:8px; }
.music-track-marquee { font-size:12px; color:#ccc; }

/* Bottom Nav */
.tt-bottom-nav { height:50px; background:#000; border-top:1px solid #1c1c1c; display:flex; justify-content:space-around; align-items:center; z-index:20; }
.tt-nav { background:none; border:none; color:#888; display:flex; flex-direction:column; align-items:center; font-size:16px; cursor:pointer; }
.tt-nav.active { color:#fff; }
.tt-nav small { font-size:9px; margin-top:2px; }
.tt-create-btn { background:linear-gradient(90deg,#00f2fe,#fe2c55); width:40px; height:28px; border-radius:8px; border:none; color:#000; font-weight:900; font-size:14px; cursor:pointer; }`,

    'script.js': `let isLiked = false;
let likes = 184200;

window.toggleHeartLike = function() {
  isLiked = !isLiked;
  likes += isLiked ? 1 : -1;
  const icon = document.getElementById('heartIcon');
  icon.innerText = isLiked ? '❤️' : '🤍';
  document.getElementById('heartLikes').innerText = (likes / 1000).toFixed(1) + 'K';
};

window.openCommentsSheet = function() {
  alert('TikTok Comments: 4,812 comments on this viral video!');
};

window.bookmarkVideo = function() {
  const bm = document.getElementById('bmIcon');
  bm.style.color = bm.style.color === 'rgb(250, 204, 21)' ? '#fff' : '#facc15';
};

window.shareVideo = function() {
  alert('Video URL copied to clipboard: https://tiktok.com/@nowempireoff/video/73918');
};

window.createNewShort = function() {
  alert('Camera recorder active with 60FPS AR filters!');
};`
  };
}
