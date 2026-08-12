/**
 * MÓDULO: Carga dinámica de componentes HTML (Header / Footer)
 */
export async function cargarComponentes() {
  const headerContainer = document.querySelector('#navbar-container');
  const footerContainer = document.querySelector('#footer-container');

  if (headerContainer) {
    try {
      const resp = await fetch('/componentes/header.html');
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      headerContainer.innerHTML = await resp.text();
    } catch (error) {
      console.error('Error al cargar el header:', error);
      headerContainer.innerHTML = `
        <div class="p-4 bg-red-950/50 border border-red-800 text-red-200 text-center text-xs">
          No se pudo cargar la navegación principal.
        </div>
      `;
    }
  }

  if (footerContainer) {
    try {
      const resp = await fetch('/componentes/footer.html');
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      footerContainer.innerHTML = await resp.text();
    } catch (error) {
      console.error('Error al cargar el footer:', error);
      footerContainer.innerHTML = `
        <div class="p-4 bg-zinc-900 border-t border-zinc-800 text-zinc-500 text-center text-xs">
          © The Witcher Wiki
        </div>
      `;
    }
  }
}