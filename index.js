const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


(function() {
    emailjs.init("tomassachini@hotmail.com"); // Reemplaza "user_id" con tu User ID de EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Obtener los valores del formulario
      var nombre = document.getElementById('nombre').value;
      var correo = document.getElementById('correo').value;
      var mensaje = document.getElementById('mensaje').value;

      // Enviar el correo electrónico
      emailjs.send("service_id", "template_id", {
        from_name: nombre,
        from_email: correo,
        message: mensaje
      })
      .then(function(response) {
        console.log('Correo enviado', response);
        alert('¡El correo se envió correctamente!');
      }, function(error) {
        console.error('Error al enviar el correo', error);
        alert('Hubo un error al enviar el correo.');
      });
    });
  })();