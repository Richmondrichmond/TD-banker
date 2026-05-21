// Theme handling
function initTheme() {
  const saved = localStorage.getItem('coone_theme') || 'dark';
  setTheme(saved);
}
function setTheme(theme) {
  if (theme === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');
  localStorage.setItem('coone_theme', theme);
}
initTheme();
document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
});

// Authentication simulation (no alerts, just UI)
let isLoggedIn = false;
function updateAuthUI() {
  const authSection = document.getElementById('authSection');
  if (!authSection) return;
  if (isLoggedIn) {
    authSection.innerHTML = `<div class="user-avatar" id="userAvatar">AJ</div>`;
    const avatar = document.getElementById('userAvatar');
    if (avatar) avatar.addEventListener('click', () => { isLoggedIn = false; updateAuthUI(); showToast('Logged out'); });
  } else {
    authSection.innerHTML = `<button class="auth-btn" id="loginBtn">Log in</button>`;
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.addEventListener('click', () => { isLoggedIn = true; updateAuthUI(); showToast('Welcome back, Alex!'); });
  }
}
updateAuthUI();

// Toast messages
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
window.showToast = showToast;

// Highlight active nav link based on current page
function highlightCurrentPage() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
    else link.classList.remove('active');
  });
}
highlightCurrentPage();