document.getElementById("btnEnviarEmail").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const numero = document.getElementById("numero").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const data = {
        personalizations: [{
            to: [{ email: "psetapp@gmail.com" }]
        }],
        from: { email: email },
        subject: `Notificación de ${nombre} con número de teléfono: ${numero}`,
        content: [{ type: "text/plain", value: mensaje }]
    };

    fetch("https://api.sendgrid.com/v3/mail/send", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer YOUR_SENDGRID_API_KEY",
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