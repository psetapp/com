document.getElementById('enviarCantidad').addEventListener('click', function() {

    // Obtén la cantidad ingresada por el usuario
    const cantidad = document.getElementById('cantidadUser').value;

    if (cantidad.trim() === "") {
        alert("You must choose an amount");
    }else if(cantidad < 5) {
        alert("It mustn't be possible to choose an amount less than 5€");
    }else {
        
    }
});