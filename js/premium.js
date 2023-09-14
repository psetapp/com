function verificarCorreoPermitido(correoUsuarioActual) {

    fetch('../json/correosPermitidos.json')
    .then(response => response.json())
    .then(data => {
        const correosPermitidos = data.correosPermitidos;
        const btnPremium = document.getElementById("btnAdelante");

        // Verificar si el correo del usuario actual está en la lista permitida
        var esCorreoPermitido = correosPermitidos.includes(correoUsuarioActual);

        // Habilitar o deshabilitar el botón en función de si el correo es permitido
        if (esCorreoPermitido) {
            
        } else {
            alert('Not allowed!');
        }
        })
    .catch(error => console.error('Error al cargar correosPermitidos.json:', error));
}

// Llama a la función para verificar el correo cuando la página se carga
window.onload = () => {
    // Reemplaza 'correoUsuarioActual' con la dirección de correo electrónico del usuario actual
    const correoUsuarioActual = document.getElementById("campoEmail"); // Puedes obtener esto de tu sistema de autenticación
    verificarCorreoPermitido(correoUsuarioActual);
};