const btnEnviar = document.getElementById('enviarCantidad');

btnEnviar.addEventListener('click', function() {

    // Obtén la cantidad ingresada por el usuario
    const cantidad = document.getElementById('cantidadDonor').value;

    //-- Si la cantidad es equivocada.
    if (!cantidad || isNaN(cantidad) || parseFloat(cantidadDonor) < 5.0) {
        alert("Incorrect amount");
        return;
    }

    // Asignar la cantidad a la entrada oculta del formulario de PayPal
    document.getElementById("paypalAmount").value = cantidadDonor;
    
    // Enviar el formulario a PayPal
    document.forms["paypalForm"].submit();
});