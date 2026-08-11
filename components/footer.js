export function renderFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="relative z-20 border-t border-neutral-200/60">
      <div class="max-w-7xl mx-auto w-full px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div class="text-center sm:text-left">
          &copy; ${currentYear} Anubis.atm. Todos los derechos reservados.
        </div>
        <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium text-neutral-700">
          <span>Android Nativo</span>
          <span class="text-neutral-300">•</span>
          <span>OCR Integrado</span>
          <span class="text-neutral-300">•</span>
          <span>Base de Datos Local</span>
        </div>
      </div>
    </footer>
  `;
}
