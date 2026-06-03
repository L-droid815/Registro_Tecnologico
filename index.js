// 1. Seleccionamos TODOS los elementos del DOM mediante sus IDs
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputCedula = document.getElementById('cedula');
const inputNotas = document.getElementById('notas');
const inputAsistencias = document.getElementById('asistencias');
const inputPassword = document.getElementById('password');

const btnGuardar = document.getElementById('btnGuardar');
const btnPassword = document.getElementById('btnPassword');

// 2. LÓGICA PARA GUARDAR TODOS LOS DATOS (Botón OK)
btnGuardar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const cedula = inputCedula.value.trim();
    const notas = inputNotas.value.trim();
    const asistencias = inputAsistencias.value.trim();
    const password = inputPassword.value.trim();

    // Validamos que los campos obligatorios o todos los campos tengan contenido
    if (!nombre || !apellido || !cedula || !notas || !asistencias || !password) {
        alert("Por favor, completa todos los campos antes de guardar.");
        return; 
    }

    // Preguntamos al usuario si desea guardar
    const quiereGuardar = confirm(`¿Deseas guardar los datos de ${nombre} ${apellido} en este navegador?`);

    if (quiereGuardar) {
        // Guardamos absolutamente todos los datos en el localStorage del navegador
        localStorage.setItem('nombreEstudiante', nombre);
        localStorage.setItem('apellidoEstudiante', apellido);
        localStorage.setItem('cedulaEstudiante', cedula);
        localStorage.setItem('notasEstudiante', notas);
        localStorage.setItem('asistenciasEstudiante', asistencias);
        localStorage.setItem('passwordEstudiante', password);
        
        alert("¡Todos los datos se han guardado con éxito en el navegador!");
    } else {
        alert("Acción cancelada. No se guardó la información.");
    }
});

// 3. LÓGICA PARA CAMBIAR LA CONTRASEÑA
btnPassword.addEventListener('click', () => {
    // Verificamos si ya existe una contraseña guardada previamente
    const contrasenaActual = localStorage.getItem('passwordEstudiante');

    if (contrasenaActual) {
        // Si ya existe, pedimos la contraseña vieja por seguridad
        const validacion = prompt("Introduce tu contraseña actual para poder cambiarla:");
        
        if (validacion !== contrasenaActual) {
            alert("La contraseña actual es incorrecta. No se puede realizar el cambio.");
            return; 
        }
    } else {
        // Si no hay contraseña en localStorage, usamos la que esté escrita en el input en ese momento
        if (!inputPassword.value.trim()) {
            alert("Primero debes asignar y guardar una contraseña en el formulario.");
            return;
        }
    }

    // Pedimos la nueva contraseña
    const nuevaContrasena = prompt("Introduce tu nueva contraseña:");

    if (nuevaContrasena === null) {
        alert("Acción cancelada.");
        return;
    }

    if (nuevaContrasena.trim() === "") {
        alert("La contraseña no puede estar vacía.");
        return;
    }

    // Confirmación de la nueva contraseña
    const confirmarContrasena = prompt("Confirma tu nueva contraseña:");

    if (nuevaContrasena === confirmarContrasena) {
        const passwordLimpia = nuevaContrasena.trim();
        
        // Actualizamos tanto el localStorage como el campo de texto en la pantalla
        localStorage.setItem('passwordEstudiante', passwordLimpia);
        inputPassword.value = passwordLimpia;
        
        alert("¡Contraseña actualizada con éxito en el navegador!");
    } else {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
    }
});

// 4. AL CARGAR LA PÁGINA: Recuperamos todos los datos automáticamente
window.addEventListener('DOMContentLoaded', () => {
    const nombreGuardado = localStorage.getItem('nombreEstudiante');
    const apellidoGuardado = localStorage.getItem('apellidoEstudiante');
    const cedulaGuardada = localStorage.getItem('cedulaEstudiante');
    const notasGuardadas = localStorage.getItem('notasEstudiante');
    const asistenciasGuardadas = localStorage.getItem('asistenciasEstudiante');
    const passwordGuardada = localStorage.getItem('passwordEstudiante');

    // Si existen datos guardados, los auto-rellenamos en los inputs correspondientes
    if (nombreGuardado) inputNombre.value = nombreGuardado;
    if (apellidoGuardado) inputApellido.value = apellidoGuardado;
    if (cedulaGuardada) inputCedula.value = cedulaGuardada;
    if (notasGuardadas) inputNotas.value = notasGuardadas;
    if (asistenciasGuardadas) inputAsistencias.value = asistenciasGuardadas;
    if (passwordGuardada) inputPassword.value = passwordGuardada;
});