//Mostrar y ocultar menú en pantallas pequeñas 

const menuLabel = document.querySelector('label[for="menu"]');
const menuDiv = document.getElementById('menuDiv');
const menuEnlaces = document.querySelectorAll('#menuDiv a'); //todos los a dentro del ul
const menuCheckbox = document.getElementById('menu'); // El input checkbox

// Agregar el evento de clic al label
menuLabel.addEventListener('click', function() {
    // Alternar la clase para mostrar/ocultar el menú
    if (menuDiv.classList.contains('top-[-100%]')) {
        menuDiv.classList.remove('top-[-100%]');
        menuDiv.classList.add('top-0');
    } else {
        menuDiv.classList.remove('top-0');
        menuDiv.classList.add('top-[-100%]');
    }
});

//Ocultar ul al hacer click a cualquier enlace dentro del ul
menuEnlaces.forEach(link => {
    link.addEventListener('click', function() {
        menuDiv.classList.remove('top-0');
        menuDiv.classList.add('top-[-100%]');
        menuCheckbox.checked = false;
    });
});

//fianal del menú

// función para convertir el nav a position fixed al hacer scroll
//solo en pantallas mayores a 768 pixeles
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 768) { 
        if (window.scrollY > 340) {
            nav.classList.add('fixed', 'top-0', 'backdrop-blur');
        } else {
            nav.classList.remove('fixed', 'top-0', 'backdrop-blur');
        }
    } else {
        nav.classList.remove('fixed', 'top-0', 'backdrop-blur');
    }
});

//validar correo

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email");
    const mensajeError = document.getElementById("mensaje-error");
    const mensajeExitoso = document.getElementById("mensaje-exitoso");
    const button = document.getElementById("button");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();

        // Validar el correo electrónico
        if (!isValidEmail(email)) {
            mensajeError.classList.remove("hidden");
            mensajeExitoso.classList.add("hidden");
            emailInput.classList.add("border-red-500");
            return;
        } else {
            mensajeError.classList.add("hidden");
            emailInput.classList.remove("border-red-500");
        }

        // Enviar el formulario a través de EmailJS
        button.value = "Enviando...";

        const serviceID = "default_service";
        const templateID = "template_3gkiy7h";

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                button.value = "Enviar";
                mensajeExitoso.classList.remove("hidden");
                mensajeError.classList.add("hidden");
                form.reset();
            })
            .catch((err) => {
                console.error("Error al enviar:", err);
                button.value = "Enviar";
                alert("Hubo un error al enviar el formulario. Inténtalo nuevamente.");
            });
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});







