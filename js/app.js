 import { renderHeader } from '../components/header.js';
import { renderHero } from '../components/hero.js';
import { renderFeatures } from '../components/features.js';
import { renderAbout } from '../components/about.js';
import { renderFooter } from '../components/footer.js';

const APK_DRIVE_ID = '1Tufw7xp-_WyWKfVCqLpKRpdLn4R73BGn';

function descargarAPK() {
  const urlDescarga = `https://drive.usercontent.google.com/download?id=${APK_DRIVE_ID}&export=download&confirm=t`;
  window.open(urlDescarga, '_blank', 'noopener');
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
