// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional
    
    // Aquí puedes agregar código para enviar el formulario mediante AJAX, por ejemplo
    // Puedes usar fetch() para enviar los datos a un servidor o simplemente mostrar un mensaje de éxito
    // Por ejemplo:
    // fetch('url-donde-procesas-el-formulario', {
    //     method: 'POST',
    //     body: new FormData(this)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Formulario enviado con éxito!');
    // })
    // .catch(error => {
    //     alert('Ocurrió un error al enviar el formulario. Inténtalo nuevamente.');
    // });

    // Ejemplo básico de mensaje de éxito:
    alert('Formulario enviado con éxito!');
});
