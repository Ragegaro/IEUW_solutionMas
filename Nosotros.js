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
