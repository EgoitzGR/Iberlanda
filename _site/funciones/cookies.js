document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (!cookieBanner || !acceptBtn || !declineBtn) return;

    // Verificar si ya se ha tomado una decisión
    const cookieDecision = localStorage.getItem("cookiesAccepted");

    if (cookieDecision === null) {
        // Mostrar el banner después de un pequeño retraso
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 500);
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.classList.remove("show");
    });

    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        cookieBanner.classList.remove("show");
    });
});
