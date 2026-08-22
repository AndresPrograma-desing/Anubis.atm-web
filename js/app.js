import { renderHeader } from '../components/header.js';
import { renderHero } from '../components/hero.js';
import { renderFeatures } from '../components/features.js';
import { renderAbout } from '../components/about.js';
import { renderFooter } from '../components/footer.js';

const APK_URL = 'https://github.com/AndresPrograma-desing/Anubis.atm-web/releases/download/2.0.0/anubis.atmV8.apk';

function descargarAPK() {
  window.location.href = APK_URL;
}

const appContainer = document.getElementById('app');
appContainer.innerHTML = `
  ${renderHeader()}
  ${renderHero()}
  ${renderFeatures()}
  ${renderAbout()}
  ${renderFooter()}
`;

['btn-apk-header', 'btn-apk-hero', 'btn-apk-mobile'].forEach((id) => {
  document.getElementById(id)?.addEventListener('click', descargarAPK);
});

function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-menu-open');
  const iconClose = document.getElementById('icon-menu-close');
  if (!btn || !menu) return;

  const closeMenu = () => {
    menu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden', isHidden);
    iconClose.classList.toggle('hidden', !isHidden);
    btn.setAttribute('aria-expanded', String(isHidden));
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

setupMobileMenu();

function setupHeroSlider() {
  const track = document.getElementById('hero-slider-track');
  if (!track) return;

  const totalSlides = track.children.length;
  let index = 0;

  const goNext = () => {
    index += 1;
    track.style.transition = 'transform 1s ease-in-out';
    track.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides - 1) {
      setTimeout(() => {
        track.style.transition = 'none';
        index = 0;
        track.style.transform = 'translateX(0%)';
      }, 1000);
    }
  };

  setInterval(goNext, 3500);
}

setupHeroSlider();

function setupScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

setupScrollReveal();

function setupTypewriters() {
  const targets = document.querySelectorAll('.type-heading');
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const state = new WeakMap();
  targets.forEach((el) => state.set(el, { html: el.innerHTML, timer: null, running: false }));

  const stopTyping = (el) => {
    const s = state.get(el);
    if (s.timer) clearTimeout(s.timer);
    s.running = false;
  };

  const typeEl = (el) => {
    const s = state.get(el);
    stopTyping(el);
    const tokens = s.html.match(/<[^>]+>|[\s\S]/g) || [];
    el.innerHTML = '';
    el.classList.add('typing-cursor');
    s.running = true;

    let i = 0;
    const tick = () => {
      if (!s.running) return;
      if (i >= tokens.length) {
        el.classList.remove('typing-cursor');
        return;
      }
      const token = tokens[i];
      el.innerHTML += token;
      i += 1;
      s.timer = setTimeout(tick, /^<[^>]+>$/.test(token) ? 0 : 28);
    };
    tick();
  };

  const resetEl = (el) => {
    stopTyping(el);
    el.classList.remove('typing-cursor');
    el.innerHTML = '';
  };

  if (!('IntersectionObserver' in window)) {
    targets.forEach(typeEl);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeEl(entry.target);
        } else {
          resetEl(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  targets.forEach((el) => observer.observe(el));
}

setupTypewriters();

function setupAnnouncementTyper() {
  const el = document.getElementById('announcement-text');
  if (!el) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const text = el.textContent.trim();
  el.textContent = '';
  el.classList.add('typing-cursor');

  let i = 0;
  let deleting = false;

  const tick = () => {
    if (!deleting) {
      i += 1;
      el.textContent = text.slice(0, i);
      if (i === text.length) {
        setTimeout(() => {
          deleting = true;
          tick();
        }, 2000);
        return;
      }
      setTimeout(tick, 40);
    } else {
      i -= 1;
      el.textContent = text.slice(0, i);
      if (i === 0) {
        deleting = false;
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 22);
    }
  };

  tick();
}

setupAnnouncementTyper();
