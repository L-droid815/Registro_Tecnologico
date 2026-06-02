// Seleccionamos los elementos del DOM mediante sus IDs
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const btnGuardar = document.getElementById('btnGuardar');
const btnPassword = document.getElementById('btnPassword'); // Nuevo botón

// --- LÓGICA PARA GUARDAR ESTUDIANTE ---
btnGuardar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();

    if (nombre === "" || apellido === "") {
        alert("Por favor, completa los campos de Nombre y Apellido.");
        return; 
    }

    const quiereGuardar = confirm(`¿Deseas guardar a ${nombre} ${apellido} en este navegador?`);

    if (quiereGuardar) {
        localStorage.setItem('nombreEstudiante', nombre);
        localStorage.setItem('apellidoEstudiante', apellido);
        alert("¡Datos guardados con éxito en el navegador!");
    } else {
        alert("Acción cancelada. No se guardó la información.");
    }
});

// --- LÓGICA PARA CAMBIAR LA CONTRASEÑA ---
btnPassword.addEventListener('click', () => {
    // 1. Verificamos si ya existe una contraseña guardada previa
    const contrasenaActual = localStorage.getItem('passwordEstudiante');

    if (contrasenaActual) {
        // Si ya existe, le pedimos que introduzca la contraseña vieja para mayor seguridad
        const validacion = prompt("Introduce tu contraseña actual:");
        
        if (validacion !== contrasenaActual) {
            alert("La contraseña actual es incorrecta. No se puede cambiar.");
            return; // Corta la ejecución si no coincide
        }
    }

    // 2. Pedimos la nueva contraseña
    const nuevaContrasena = prompt("Introduce tu nueva contraseña:");

    // Validamos que no acepte espacios vacíos o que no haya cancelado el prompt
    if (nuevaContrasena === null) {
        alert("Acción cancelada.");
        return;
    }

    if (nuevaContrasena.trim() === "") {
        alert("La contraseña no puede estar vacía.");
        return;
    }

    // 3. Confirmación de la nueva contraseña
    const confirmarContrasena = prompt("Confirma tu nueva contraseña:");

    if (nuevaContrasena === confirmarContrasena) {
        // Guardamos la nueva contraseña en localStorage
        localStorage.setItem('passwordEstudiante', nuevaContrasena.trim());
        alert("¡Contraseña actualizada con éxito!");
    } else {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
    }
});

// --- CARGAR DATOS AL INICIAR ---
window.addEventListener('DOMContentLoaded', () => {
    const nombreGuardado = localStorage.getItem('nombreEstudiante');
    const apellidoGuardado = localStorage.getItem('apellidoEstudiante');

    if (nombreGuardado && apellidoGuardado) {
        inputNombre.value = nombreGuardado;
        inputApellido.value = apellidoGuardado;
    }
});