const botones = document.querySelectorAll('.btn-detalle');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Cerrar modal al hacer clic en "x"
const cerrarBtns = document.querySelectorAll('.cerrar');
cerrarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
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