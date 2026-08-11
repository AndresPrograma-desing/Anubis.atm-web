export function renderHero() {
    // Ruta local a tu video dentro de la carpeta assets
    const videoSrc = "./assets/video/AnubisApp.mp4";
  
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
              <span class="inline-flex items-center gap-2 bg-black/5 border border-black/10 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full text-neutral-700">
                Gratis · 100% en tu teléfono
              </span>

              <h1 class="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-black leading-[1.1] sm:leading-[1.08]">
                Control que <br class="hidden sm:inline"/>habla claro.
              </h1>

              <p class="text-neutral-700 text-base sm:text-xl font-normal max-w-md mx-auto lg:mx-0 leading-relaxed">
                Escanea tus comprobantes de Pago Móvil y transferencias: Anubis.atm extrae el monto, banco y referencia automáticamente y convierte tus totales a USD, USDT y EUR, todo sin salir de tu teléfono.
              </p>

              <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
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
            </div>
          </div>

          <!-- Columna Derecha: Mockup / Video de la App -->
          <div class="lg:col-span-6 relative flex justify-center">
            <div class="bg-gradient-to-b from-neutral-100/90 to-white/60 backdrop-blur-sm rounded-3xl p-5 sm:p-8 relative overflow-hidden border border-neutral-200/70 shadow-sm flex items-center justify-center w-full max-w-[280px] sm:max-w-md">

              <!-- Contenedor del Video estilo Mockup de Celular -->
              <div class="w-full max-w-[220px] sm:max-w-[320px] bg-black rounded-[2.5rem] p-3 shadow-2xl border-4 border-neutral-800 relative z-10 overflow-hidden">
                <div class="relative w-full overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-neutral-900 flex items-center justify-center">

                  <video
                    src="${videoSrc}"
                    autoplay
                    loop
                    muted
                    playsinline
                    class="w-full h-full object-cover rounded-[2rem]">
                    Tu navegador no soporta reproducción de video.
                  </video>

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