const STEPS = [
  {
    n: '01',
    title: 'Captura o comparte',
    desc: 'Toma una foto del comprobante, elige una imagen de tu galería, o comparte la captura directo desde tu app bancaria con el botón "Compartir" de Android.',
  },
  {
    n: '02',
    title: 'Anubis.atm lee el comprobante',
    desc: 'El OCR en el dispositivo identifica el banco, el monto, la referencia y el concepto en segundos, sin enviar la imagen a ningún servidor.',
  },
  {
    n: '03',
    title: 'Confirmas y se acumula',
    desc: 'Revisas los datos extraídos, guardas el pago y tu total se actualiza al instante en bolívares, USD, USDT y EUR según la tasa del momento.',
  },
];

const STATS = [
  { value: '9', label: 'Bancos y métodos reconocidos' },
  { value: '3', label: 'Monedas de conversión: USD, USDT y EUR' },
  { value: '0', label: 'Conexión requerida para escanear' },
];

export function renderAbout() {
  return `
    <section id="sobre-app" class="relative z-10 py-16 sm:py-24 bg-black text-brand-cream overflow-hidden">
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto w-full px-6 sm:px-8 relative">
        <div class="reveal max-w-2xl space-y-4 mb-14 sm:mb-20">
          <span class="text-xs font-semibold tracking-widest uppercase text-blue-400">Sobre la app</span>
          <h2 class="type-heading text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Hecha para quien vive del Pago Móvil.
          </h2>
          <p class="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Si trabajas con delivery, ventas, propinas o cualquier ingreso que llega en pagos pequeños y sueltos por transferencia,
            sabes lo tedioso que es sumar comprobantes a mano. Anubis.atm hace ese trabajo por ti: escanea, entiende y acumula
            cada pago automáticamente, y te dice cuánto equivale en dólares o euros al momento de recibirlo.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          ${STEPS.map(
            (s, i) => `
            <div class="reveal [transition-delay:${i * 100}ms] space-y-3">
              <span class="text-sm font-mono text-blue-400">${s.n}</span>
              <h3 class="text-lg sm:text-xl font-bold tracking-tight">${s.title}</h3>
              <p class="text-sm text-neutral-400 leading-relaxed">${s.desc}</p>
            </div>
          `
          ).join('')}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10 border-t border-white/10">
          ${STATS.map(
            (s, i) => `
            <div class="reveal [transition-delay:${i * 100}ms] text-center sm:text-left">
              <div class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">${s.value}</div>
              <div class="text-sm text-neutral-400 mt-2">${s.label}</div>
            </div>
          `
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
