const FEATURES = [
  {
    icon: 'scan',
    title: 'OCR 100% en tu teléfono',
    desc: 'Reconocimiento de texto con ML Kit directo en el dispositivo. No sube tus comprobantes a ningún servidor: el escaneo funciona incluso sin conexión.',
  },
  {
    icon: 'bank',
    title: 'Detecta tu banco automáticamente',
    desc: 'Reconoce comprobantes de BDV, Banesco, Mercantil, BBVA Provincial, BNC, Bancamiga, Pago Móvil, Zelle y Ubii, extrayendo monto, referencia y concepto.',
  },
  {
    icon: 'share',
    title: 'Comparte y listo',
    desc: 'Envía la captura desde tu propia app bancaria con el botón "Compartir" de Android. Anubis.atm la recibe, la procesa y te muestra el resultado para confirmar.',
  },
  {
    icon: 'currency',
    title: 'Conversión a USD, USDT y EUR',
    desc: 'Cada pago se convierte con la tasa oficial BCV, la tasa cripto/USDT y el euro, tomadas al momento del registro para que tu historial refleje el valor real de cada cobro.',
  },
  {
    icon: 'history',
    title: 'Historial con filtros',
    desc: 'Consulta todos tus pagos acumulados, filtra y navega por páginas para encontrar cualquier transacción en segundos.',
  },
  {
    icon: 'lock',
    title: 'Tus datos, en tu dispositivo',
    desc: 'Todo se guarda en una base de datos local (Room). No hay cuentas, ni sincronización en la nube: la información no sale de tu teléfono.',
  },
];

const ICONS = {
  scan: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3M9 9h6v6H9z"/>',
  bank: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6"/>',
  share: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8.68 13.34l6.64 3.32M15.32 7.34L8.68 10.66M18 5a2 2 0 11-4 0 2 2 0 014 0zM6 12a2 2 0 11-4 0 2 2 0 014 0zM18 19a2 2 0 11-4 0 2 2 0 014 0z"/>',
  currency: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 1v22M17 5.5c0-1.93-2.24-3.5-5-3.5S7 3.57 7 5.5 9.24 9 12 9s5 1.57 5 3.5-2.24 3.5-5 3.5-5-1.57-5-3.5"/>',
  history: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 12a9 9 0 109-9 9.75 9.75 0 00-7 3L3 8M3 3v5h5M12 7v5l4 2"/>',
  lock: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-5 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2zM7 9V7a5 5 0 0110 0v2"/>',
};

function featureCard({ icon, title, desc }) {
  return `
    <div class="group bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-7 hover:border-black/20 hover:shadow-md transition-all duration-200">
      <div class="w-11 h-11 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-black group-hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS[icon]}</svg>
      </div>
      <h3 class="text-lg font-bold text-black mb-2 tracking-tight">${title}</h3>
      <p class="text-sm text-neutral-600 leading-relaxed">${desc}</p>
    </div>
  `;
}

export function renderFeatures() {
  return `
    <section id="caracteristicas" class="max-w-7xl mx-auto w-full px-6 sm:px-8 py-16 sm:py-24 relative z-10">
      <div class="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
        <span class="text-xs font-semibold tracking-widest uppercase text-blue-600">Funcionalidades</span>
        <h2 class="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-black leading-tight">
          Todo lo que necesitas para llevar tus cobros al día
        </h2>
        <p class="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Pensada para quienes reciben pagos móviles y transferencias todos los días y necesitan saber, sin esfuerzo, cuánto han acumulado.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        ${FEATURES.map(featureCard).join('')}
      </div>
    </section>
  `;
}
