// Muestra un mensaje de alerta
function showAlert() {
    alert("¡Gracias por visitar mi sitio web!");
}

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('formMessage').textContent = `¡Gracias por tu mensaje, ${name}!`;
        this.reset();
    } else {
        document.getElementById('formMessage').textContent = 'Por favor, completa todos los campos.';
    }
});
