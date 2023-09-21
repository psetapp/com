const sidebarCollapseButton = document.getElementById('sidebarCollapse');
const indice = document.getElementById('indice');

function toggleMenu() {
    // Cuando se hace clic en el botón, cambia el estado del menú
    if (indice.style.display === 'none' || indice.style.display === '') {
        indice.style.display = 'block'; // Muestra el menú
    } else {
        indice.style.display = 'none'; // Oculta el menú
    }
}

sidebarCollapseButton.addEventListener('click', toggleMenu);
sidebarCollapseButton.addEventListener('touchstart', toggleMenu);