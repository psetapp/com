const sidebarCollapseButton = document.getElementById('sidebarCollapse');
const indice = document.getElementById('indice');

sidebarCollapseButton.addEventListener('click', () => {
    // Cuando se hace clic en el botón, cambia el estado del menú
    if (indice.style.display === 'none' || indice.style.display === '') {
        indice.style.display = 'block'; // Muestra el menú
    } else {
        indice.style.display = 'none'; // Oculta el menú
    }
});

sidebarCollapseButton.addEventListener('touchstart', () => {
    // Cuando se hace clic en el botón, cambia el estado del menú
    if (indice.style.display === 'none' || indice.style.display === '') {
        indice.style.display = 'block'; // Muestra el menú
    } else {
        indice.style.display = 'none'; // Oculta el menú
    }
});