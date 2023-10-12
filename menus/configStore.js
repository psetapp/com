let elegir = document.getElementById('chooseDescrip');
let titulo = document.getElementById('titulo');
let texto = document.getElementById('texto');
let crearEnlace = document.getElementById('enlaceCrear');
const enlace = document.createElement("a");

let eleccion = elegir.getAttribute("name");

elegir.addEventListener('change', cambiarDescrip);

function cambiarDescrip() {

    if(eleccion === 'descripcion1') {
        titulo.textContent = 'The Multiorgasmic Man (Spanish)';
        texto.textContent = 'Do only women have multiple orgasms? Not anymore.'
                            'THE MULTIORGASMIC MAN reveals very psychological physical techniques'
                            'simple that allow men of any age to fulfill their dreams'
                            'and the fantasies of every woman, dramatically increasing the quality'
                            'and amount of her sexual capacity. It does not contain difficult or tedious theories,'
                            'but clear, practical and amazingly effective techniques that can'
                            'use immediately';
        crearEnlace.addEventListener("click", function() {

            enlace.href = "https://mega.nz/file/n3QxGbTC#45X7kspwtBEynAidxYk_znBjPl0gr5i6Su1HXbbtjZc";
            enlace.textContent = "Download";
            enlace.target = "_blank";
        });
    }else if(eleccion === 'descripcion2') {
        titulo.textContent = '50 shades of Gray (Spanish)';
        texto.textContent = 'When literature student Anastasia Steele receives the assignment'
                            'interviewing successful young businessman Christian Grey, she is impressed'
                            'find yourself in front of an attractive, seductive and also very intimidating man. The'
                            'Inexperienced and innocent Ana tries to forget him, but she soon understands how much she wants him';
        crearEnlace.addEventListener("click", function() {

            enlace.href = "https://mega.nz/file/Xi5AWbKD#kzmCCjIBFVgwne9pu0oHfEUE_Nznk6zgTP9d6kyDkns";
            enlace.textContent = "Download";
            enlace.target = "_blank";
        });
    }else if(eleccion === 'descripcion3') {
        titulo.textContent = 'The money game (Spanish)';
        texto.textContent = 'It emphasizes the importance of analyzing financial advice well to differentiate'
                            'what is sales advice for clients from good investment advice. If you don`t make a good distinction'
                            'you end up like many who have lost their money by relying on opinions instead of facts';
        crearEnlace.addEventListener("click", function() {

            enlace.href = "https://mega.nz/file/C7wnlCYB#7N9QLEywYMrqN0evYyjUP0zh4ySedwpYqqimPQys4yg";
            enlace.textContent = "Download";
            enlace.target = "_blank";
        });
    }
}