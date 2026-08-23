document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('whatsappForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // 1. Reemplaza este número por el WhatsApp real del Abogado Arévalo (con el código de país 57 delante)
        const telefonoAbogado = "573102672633"; 

        // 2. Capturar los valores que el usuario escribió en el formulario
        const nombre = document.getElementById('name').value.trim();
        const telefonoCliente = document.getElementById('phone').value.trim();
        const situacion = document.getElementById('message').value.trim();

        /* 3. Construir el mensaje formateado para WhatsApp.
           Usamos '%0A' para simular los saltos de línea (Enter) en el texto de WhatsApp 
           y '*' para poner palabras en negrita.
        */
        const mensajeWA = `*NUEVA CONSULTA DESDE LA WEB*%0A%0A` +
                          `*Nombre:* ${nombre}%0A` +
                          `*Contacto:* ${telefonoCliente}%0A%0A` +
                          `*Situación del caso:*%0A${situacion}`;

        // 4. Crear la URL oficial de la API de WhatsApp
        const urlWhatsApp = `https://wa.me/${telefonoAbogado}?text=${mensajeWA}`;

        // 5. Abrir la conversación en una pestaña nueva de forma segura
        window.open(urlWhatsApp, '_blank');
    });
});

function openTab(evt, tabName) {
    // 1. Ocultar todos los contenidos de las pestañas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // 2. Desactivar el estado 'active' de todos los botones
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // 3. Mostrar la pestaña actual y activar el botón presionado
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}