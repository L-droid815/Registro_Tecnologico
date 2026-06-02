// Seleccionamos los elementos del DOM mediante sus IDs
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const btnGuardar = document.getElementById('btnGuardar');

// Escuchamos el evento de click en el botón OK
btnGuardar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();

    // Validamos que los campos no estén vacíos
    if (nombre === "" || apellido === "") {
        alert("Por favor, completa los campos de Nombre y Apellido.");
        return; 
    }

    // Preguntamos al usuario si desea guardar los datos en el navegador
    const quiereGuardar = confirm(`¿Deseas guardar a ${nombre} ${apellido} en este navegador?`);

    if (quiereGuardar) {
        // Guardamos los datos en localStorage
        localStorage.setItem('nombreEstudiante', nombre);
        localStorage.setItem('apellidoEstudiante', apellido);
        
        alert("¡Datos guardados con éxito en el navegador!");
    } else {
        alert("Acción cancelada. No se guardó la información.");
    }
});

// Al cargar la página, verificamos si ya hay datos guardados y los mostramos
window.addEventListener('DOMContentLoaded', () => {
    const nombreGuardado = localStorage.getItem('nombreEstudiante');
    const apellidoGuardado = localStorage.getItem('apellidoEstudiante');

    if (nombreGuardado && apellidoGuardado) {
        inputNombre.value = nombreGuardado;
        inputApellido.value = apellidoGuardado;
    }
});