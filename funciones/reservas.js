// Ubicación: Iberlanda/funciones/reservas.js

document.addEventListener("DOMContentLoaded", () => {

    const reservaRadio =
        document.querySelector('input[value="reserva"]');

    const encargoRadio =
        document.querySelector('input[value="encargo"]');

    const formReserva =
        document.getElementById("formReserva");

    const formEncargo =
        document.getElementById("formEncargo");

    if (
        reservaRadio &&
        encargoRadio &&
        formReserva &&
        formEncargo
    ) {

        reservaRadio.addEventListener("change", () => {

            formReserva.style.display = "block";
            formEncargo.style.display = "none";

        });

        encargoRadio.addEventListener("change", () => {

            formReserva.style.display = "none";
            formEncargo.style.display = "block";

        });

    }

});