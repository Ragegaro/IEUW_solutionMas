// --- Envío del formulario --- 
const form = document.getElementById('contactForm');
const mensajeExito = document.getElementById('mensajeExito');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    };

    // Usar Fetch API para enviar los datos al servidor
    fetch('/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Especificamos que estamos enviando JSON
        },
        body: JSON.stringify(formData)  // Convertimos el objeto a JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Mostrar mensaje de éxito si los datos se guardaron correctamente
            mensajeExito.style.display = 'block';
            form.reset();  // Limpiar el formulario
        } else {
            alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
        }
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
        alert("Hubo un error al procesar el mensaje. Intenta de nuevo.");
    });

    // Ocultar el mensaje después de unos segundos
    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 4000);
});

// JavaScript para el cambio de modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    const btnModoOscuro = document.getElementById('modoOscuroBtn');
    const body = document.body;

    // Verificar si el usuario ya tiene una preferencia guardada
    if (localStorage.getItem('modoOscuro') === 'true') {
        body.classList.add('modo-oscuro');
        btnModoOscuro.innerHTML = '💡'; 
    }

    // Cambiar entre modo oscuro y claro al hacer clic en el botón
    btnModoOscuro.addEventListener('click', function() {
        body.classList.toggle('modo-oscuro');
        
        // Cambiar el ícono dependiendo del modo
        if (body.classList.contains('modo-oscuro')) {
            btnModoOscuro.innerHTML = '💡';
            localStorage.setItem('modoOscuro', 'true');
        } else {
            btnModoOscuro.innerHTML = '🔦';
            localStorage.setItem('modoOscuro', 'false');
        }
    });
});
