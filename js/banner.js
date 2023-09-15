// Función para mostrar el banner
function mostrarBanner() {
    $("#myBanner").show(); // Muestra el banner
}

// Cargar el script de Google Tag Manager de forma asíncrona
var scriptTagManager = document.createElement('script');
scriptTagManager.src = "https://www.googletagmanager.com/gtag/js?id=G-Z7BK2RTWNF";
scriptTagManager.async = true;
scriptTagManager.onload = mostrarBanner; // Llama a la función cuando el script se haya cargado
document.head.appendChild(scriptTagManager);

// Resto de tu código JavaScript de Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-Z7BK2RTWNF');