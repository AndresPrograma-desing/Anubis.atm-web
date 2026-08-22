export function renderHero() {
    // Rutas locales a los SVG dentro de la carpeta assets
    const heroSlides = [
      { src: "./assets/financial-advisor.svg", alt: "Ilustración de un asesor financiero usando la app Anubis.atm" },
      { src: "./assets/payment.svg", alt: "Ilustración de un pago digital gestionado con Anubis.atm" },
    ];

    return `
      <main id="inicio" class="max-w-7xl mx-auto w-full px-6 sm:px-8 my-auto py-10 sm:py-14 lg:py-20 relative">

        <!-- Fondos de Manchas Azules Difuminadas -->
        <div class="absolute inset-0 z-0 pointer-events-none overflow-visible flex justify-center items-center">
          <div class="absolute -top-10 -left-20 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[100px]"></div>
          <div class="absolute top-20 left-40 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-[90px]"></div>
          <div class="absolute top-60 -left-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        </div>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

          <!-- Columna Izquierda: Texto -->
          <div class="lg:col-span-6 space-y-8 pr-0 lg:pr-6 text-center lg:text-left">
            <div class="relative space-y-6 sm:space-y-8">
              <div class="reveal flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span class="inline-flex items-center gap-2 bg-black/5 border border-black/10 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full text-neutral-700">
                  Gratis · 100% en tu teléfono
                </span>
              </div>

              <h1 class="reveal type-heading [transition-delay:80ms] text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-black leading-[1.1] sm:leading-[1.08]">
                Control que <br class="hidden sm:inline"/>habla claro.
              </h1>

              <p class="reveal [transition-delay:160ms] text-neutral-700 text-base sm:text-xl font-normal max-w-md mx-auto lg:mx-0 leading-relaxed">
                Escanea tus comprobantes de Pago Móvil y transferencias: Anubis.atm extrae el monto, banco y referencia automáticamente y convierte tus totales a USD, USDT y EUR, todo sin salir de tu teléfono.
              </p>

              <div class="reveal [transition-delay:240ms] pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button id="btn-apk-hero" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-neutral-800 text-white font-medium px-7 py-3.5 rounded-2xl text-sm transition-all shadow-sm">
                  <span>Instalar aplicación</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <a href="#caracteristicas" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-black text-black font-medium px-7 py-3.5 rounded-2xl text-sm transition-all">
                  Ver funcionalidades
                </a>
              </div>

              <!-- Mini gráfico animado -->
              <div class="reveal [transition-delay:320ms] flex items-end gap-2.5 h-16 mx-auto lg:mx-0 w-fit bg-white/70 backdrop-blur-sm border border-neutral-200/70 rounded-2xl px-7 py-5 shadow-sm">
                <span class="hero-chart-bar bg-blue-600" style="animation-duration:1.5s; animation-delay:0s"></span>
                <span class="hero-chart-bar bg-indigo-400" style="animation-duration:1.8s; animation-delay:.2s"></span>
                <span class="hero-chart-bar bg-blue-600" style="animation-duration:1.4s; animation-delay:.1s"></span>
                <span class="hero-chart-bar bg-indigo-400" style="animation-duration:1.9s; animation-delay:.35s"></span>
                <span class="hero-chart-bar bg-blue-600" style="animation-duration:1.6s; animation-delay:.15s"></span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Ilustración de la App -->
          <div class="reveal [transition-delay:120ms] lg:col-span-6 relative flex justify-center">
            <div class="bg-gradient-to-b from-neutral-100/90 to-white/60 backdrop-blur-sm rounded-3xl p-5 sm:p-8 relative overflow-hidden border border-neutral-200/70 shadow-sm flex items-center justify-center w-full max-w-[280px] sm:max-w-md">

              <!-- Bucle de Ilustraciones SVG -->
              <div id="hero-slider" class="w-full max-w-[220px] sm:max-w-[320px] relative z-10 overflow-hidden">
                <div id="hero-slider-track" class="flex">
                  ${heroSlides.map(({ src, alt }) => `
                  <img src="${src}" alt="${alt}" class="w-full h-auto flex-shrink-0" />
                  `).join('')}
                  <img src="${heroSlides[0].src}" alt="" aria-hidden="true" class="w-full h-auto flex-shrink-0" />
                </div>
              </div>

              <!-- Resplandor azul detrás de la tarjeta -->
              <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </main>
    `;
  }