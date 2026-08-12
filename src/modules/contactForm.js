/**
 * MÓDULO: Gestión y Validación del Formulario de Contacto
 */
export function initContactoForm() {
  const form = document.querySelector('#contacto-form');
  const statusContainer = document.querySelector('#form-status');

  if (!form || !statusContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = form.querySelector('input[name="terminos"]:checked')?.value;
    const nombre = form.querySelector('#nombre').value.trim();
    const email = form.querySelector('#email').value.trim();
    const sugerencias = form.querySelector('#sugerencias').value.trim();

    if (terminos !== 'si') {
      statusContainer.className = 'mb-6 p-4 rounded text-xs uppercase tracking-wider font-bold bg-red-950/80 border border-red-800 text-red-300 block';
      statusContainer.textContent = ' Error: Debes aceptar el Código de los Brujos para publicar un contrato.';
      return;
    }

    if (!nombre || !email || !sugerencias) {
      statusContainer.className = 'mb-6 p-4 rounded text-xs uppercase tracking-wider font-bold bg-red-950/80 border border-red-800 text-red-300 block';
      statusContainer.textContent = ' Error: Por favor, rellenar todos los campos del pergamino.';
      return;
    }

    statusContainer.className = 'mb-6 p-4 rounded text-xs uppercase tracking-wider font-bold bg-emerald-950/80 border border-emerald-800 text-emerald-300 block';
    statusContainer.textContent = ' Contrato publicado con éxito. Un brujo de Kaer Morhen responderá a tu solicitud pronto.';
    
    form.reset();
  });
}