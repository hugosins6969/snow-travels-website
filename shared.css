/* =====================================================
   SNOW TRAVELS — SHARED SCRIPT
   Brukes på alle sider
   ===================================================== */

/* ── NAV: solid bakgrunn ved scroll ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('solid', window.scrollY > 40);
});

/* ── MOBILMENY ── */
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}
function closeMobile() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.remove('open');
}

/* ── SPRÅKBYTTER (EN / 中文) ── */
let currentLang = 'en';
function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = currentLang === 'en' ? '中文' : 'EN';
  document.querySelectorAll('[data-en]').forEach(el => {
    const t = el.getAttribute('data-' + currentLang);
    if (t) el.innerHTML = t;
  });
}

/* ── FAQ ACCORDION (kun på faq.html) ── */
function toggleFaq(qEl) {
  const item = qEl.closest('.faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
