document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a elementos HTML
    const titulo1 = document.getElementById("titulo1");
    const titulo2 = document.getElementById("titulo2");
    const titulo3 = document.getElementById("titulo3");
    const program1 = document.getElementById("program1");
    const program2 = document.getElementById("program2");
    const program3 = document.getElementById("program3");
    const program4 = document.getElementById("program4");
    const program5 = document.getElementById("program5");
    const tituloCreador = document.getElementById("tituloCreador");
    const txtCreator = document.getElementById("txtCreator");
    const subtitulo = document.getElementById("subtitulo");
    const rrss = document.getElementById("rrss");
    const indicContact = document.getElementById("indicContact");
    const idiomaSelector = document.getElementById("idioma");
  
    // Función para cambiar el idioma
    function cambiarIdioma() {
      const idiomaSeleccionado = idiomaSelector.value;
      const archivoIdioma = document.getElementById(idiomaSeleccionado);
  
      titulo1.textContent = archivoIdioma.titulo1;
      titulo2.textContent = archivoIdioma.titulo2;
      titulo3.textContent = archivoIdioma.titulo3;
      program1.textContent = archivoIdioma.program1;
      program2.textContent = archivoIdioma.program2;
      program3.textContent = archivoIdioma.program3;
      program4.textContent = archivoIdioma.program4;
      program5.textContent = archivoIdioma.program5;
      tituloCreador.textContent = archivoIdioma.tituloCreador;
      txtCreator.textContent = archivoIdioma.txtCreator;
      subtitulo.textContent = archivoIdioma.subtitulo;
      rrss.textContent = archivoIdioma.rrss;
      indicContact.textContent = archivoIdioma.indicContact;
    }
  
    // Asociar evento de cambio de idioma al selector
    idiomaSelector.addEventListener("change", cambiarIdioma);
  
    // Inicializar la página con el idioma predeterminado
    cambiarIdioma();
  });
  