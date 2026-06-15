// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e){
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior:'smooth'
        });
    });
});

// La función de acceso administrador
function accesoAdmin() {
    const password = prompt("Clave de acceso:");
    if (password === "ADMIN2026") {
        window.location.href = "contingencia.html";
    }
}