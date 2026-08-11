export function renderHeader() {
  return `
    <header class="max-w-7xl mx-auto w-full px-6 sm:px-8 pt-6 sm:pt-8 pb-4 relative z-30">
      <div class="flex items-center justify-between">
        <a href="#inicio" class="flex items-center gap-2">
          <span class="font-bold tracking-tighter text-xl sm:text-2xl text-black uppercase">ANUBIS<span class="text-blue-600">.ATM</span></span>
        </a>

        <nav class="hidden md:flex items-center gap-10 text-sm font-medium text-black">
          <a href="#inicio" class="border-b-2 border-black pb-0.5 font-semibold">Inicio</a>
          <a href="#caracteristicas" class="text-neutral-500 hover:text-black transition-colors">Funcionalidades</a>
          <a href="#sobre-app" class="text-neutral-500 hover:text-black transition-colors">Sobre la App</a>
        </nav>

        <div class="flex items-center gap-3">
          <button id="btn-apk-header" class="hidden sm:inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200">
            Descargar APK
          </button>

          <button id="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-black hover:bg-neutral-100 transition-colors">
            <svg id="icon-menu-open" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg id="icon-menu-close" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" class="hidden md:hidden mt-4 flex flex-col gap-1 bg-white border border-neutral-200 rounded-2xl p-4 shadow-lg text-sm font-medium">
        <a href="#inicio" class="px-3 py-2.5 rounded-xl bg-neutral-100 text-black font-semibold">Inicio</a>
        <a href="#caracteristicas" class="px-3 py-2.5 rounded-xl text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors">Funcionalidades</a>
        <a href="#sobre-app" class="px-3 py-2.5 rounded-xl text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors">Sobre la App</a>
        <button id="btn-apk-mobile" class="mt-2 inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
          Descargar APK
        </button>
      </nav>
    </header>
  `;
}
