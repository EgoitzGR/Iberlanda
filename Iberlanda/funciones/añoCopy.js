// Ubicación: Iberlanda/funciones/añoCopy.js

function insertarCopyright(nombre) {

    const copyright =
        document.querySelector("#copyright");

    if (copyright) {

        copyright.innerHTML =
            `&copy; ${new Date().getFullYear()} ${nombre}. Todos los derechos reservados.`;

    }
}

insertarCopyright("Taberna Iberlanda");