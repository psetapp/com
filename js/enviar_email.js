emailjs.init("psetapp");

document.addEventListener("DOMContentLoaded", function () {
    const formularioDudas = document.getElementById("cochang");
    formularioDudas.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const numero = document.getElementById("numero").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        const emailData = {
            from: email,
            from_name: nombre,
            from_num: numero,
            to: 'psetapp@gmail.com',
            message: mensaje
        };
        
        emailjs.send("psetapp", undefined, emailData)
            .then(function(response) {
                console.log("Correo enviado con éxito", response);
                alert("Correo enviado con éxito");
                formularioDudas.reset();
            })
            .catch(function(error) {
                console.error("Error al enviar el correo", error);
                alert("Hubo un error al enviar el correo");
            });
    });
});





















document.getElementById("btnEnviarEmail").addEventListener("click", function() {
    

    const URL = 'https://gmail.googleapis.com';

    const data = {
        personalizations: [{
            to: [{ email: "psetapp@gmail.com" }]
        }],
        from: { email: email },
        subject: `Notificación de ${nombre} con número de teléfono: ${numero}`,
        content: [{ type: "text/plain", value: mensaje }]
    };

    fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Mensaje enviado correctamente.");
            })
            .catch(error => {
                console.error(error);
                alert("Error al enviar el mensaje.");
            });
});