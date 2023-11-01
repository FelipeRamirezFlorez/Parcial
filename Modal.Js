// modal.js
export function showModal() {
    // Crear el modal
    let modal = document.createElement('div');
    modal.id = 'Modal';
    modal.innerHTML = `
      <div class="modal-content">
        <p>¿Está seguro que desea ver las demás secciones?</p>
        <button id="accept">Aceptar</button>
        <button id="cancel">Cancelar</button>
      </div>
    `;
    document.body.appendChild(modal);
  
    // Evento para el botón Aceptar
    document.getElementById('accept').addEventListener('click', function() {
      // Remover el modal
      modal.remove();
      // Remover el botón "Ver más"
      document.getElementById('verMas').remove();
      // Mostrar los botones "Servicios" y "Colaboradores"
      document.getElementById('servicio').style.display = 'block';
      document.getElementById('colaborador').style.display = 'block';
      // Mostrar las secciones "Servicios" y "Colaboradores"
      document.getElementById('servicios').style.display = 'block';
      document.getElementById('colaboradores').style.display = 'block';
    });
  
    // Evento para el botón Cancelar
    document.getElementById('cancel').addEventListener('click', function() {
      // Ocultar el modal
      modal.style.display = 'none';
    });
  }