// === LANGUAGE TOGGLE ===
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  const btn = document.getElementById('langBtn');
  btn.textContent = currentLang === 'en' ? '中文' : 'EN';
  updateLanguage();
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const text = el.getAttribute('data-' + currentLang);
    if (!text) return;
    if (el.tagName === 'INPUT') {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });
  // Update chat placeholder
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.placeholder = currentLang === 'zh' ? '用中文提问...' : 'Ask anything...';
  }
}

// === MOBILE MENU ===
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('open');
}

// === NAV SCROLL EFFECT ===
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10,26,18,0.98)';
  } else {
    nav.style.background = 'rgba(10,26,18,0.95)';
  }
});

// === AI CHAT ===
function toggleChat() {
  const box = document.getElementById('chatBox');
  box.classList.toggle('open');
  if (box.classList.contains('open')) {
    document.getElementById('chatInput').focus();
  }
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  const userText = input.value.trim();
  if (!userText) return;

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.textContent = userText;
  messages.appendChild(userMsg);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  // Loading indicator
  const loading = document.createElement('div');
  loading.className = 'chat-msg loading bot';
  loading.textContent = currentLang === 'zh' ? '正在思考...' : 'Thinking...';
  messages.appendChild(loading);
  messages.scrollTop = messages.scrollHeight;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are the friendly AI guide for Snow Travels, Tromsø's #1 rated northern lights tour company on GetYourGuide. Answer questions about tours, pricing, guides, and the northern lights. Be warm, enthusiastic and passionate — just like the guides. Keep answers short (2-4 sentences max). Always mention the REDNOTE10 promo code (10% off) when relevant. 

Key facts:
- VIP Minibus Tour: 2,400 kr per person, max 15 guests, 4-6 hours
- Group Bus Tour: 1,200 kr per person, max 50 guests, 4-6 hours
- 98% aurora success rate over recent years
- Guides: Kamil (Experience guide & lead guide, Aurora Seeker), Hassan (Local guide & lead guide, Tromsø local, speaks Chinese), Marius (Founder & lead guide)
- Free professional photos, thermal suits, hot meal included
- Free rebooking if no lights seen
- Most trusted RedNote partner in Tromsø
- Book via GetYourGuide, Viator, or direct email
- RedNote users get 10% off with code REDNOTE10

If asked in Chinese, respond in Chinese. Otherwise respond in English.`,
        messages: [{ role: 'user', content: userText }]
      })
    });

    const data = await response.json();
    loading.remove();

    const botMsg = document.createElement('div');
    botMsg.className = 'chat-msg bot';
    botMsg.textContent = data.content?.[0]?.text || (currentLang === 'zh' ? '抱歉，请稍后再试。' : 'Sorry, please try again in a moment.');
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;

  } catch (err) {
    loading.remove();
    const errMsg = document.createElement('div');
    errMsg.className = 'chat-msg bot';
    errMsg.textContent = currentLang === 'zh' ? '抱歉，暂时无法连接。请发邮件给我们！' : 'Sorry, connection issue. Please email us directly!';
    messages.appendChild(errMsg);
    messages.scrollTop = messages.scrollHeight;
  }
}

// === SMOOTH SCROLL OFFSET FOR FIXED NAV ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
