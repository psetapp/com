// Carga el archivo de idioma por defecto (en este caso, inglés).
let currentLanguage = 'en';

//-- Adquiere el idioma que se haya seleccionado.
const idiomaSelector = document.getElementById("idioma");

//-- Variables a traducir.
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

// Manejar el cambio de idioma
idiomaSelector.addEventListener('change', (event) => {
  currentLanguage = event.target.value;
  translate();
});

// Función para traducir las cadenas de texto
function translate() {
  fetch(`../json/${currentLanguage}.json`)
    .then((response) => response.json())
    .then((data) => {
      titulo1.textContent = data.titulo1;
      titulo2.textContent = data.titulo2;
      titulo3.textContent = data.titulo3;
      program1.textContent = data.program1;
      program2.textContent = data.program2;
      program3.textContent = data.program3;
      program4.textContent = data.program4;
      program5.textContent = data.program5;
      tituloCreador.textContent = data.tituloCreador;
      txtCreator.textContent = data.txtCreator;
      subtitulo.textContent = data.subtitulo;
      rrss.textContent = data.rrss;
      indicContact.textContent = data.indicContact;
    });
}

// Inicializa la traducción
translate();