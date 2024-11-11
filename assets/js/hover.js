// Adiciona a funcionalidade de exibir e ocultar o menu dropdown
document.querySelector(".dropbtn").addEventListener("click", function() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("show");
});

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function(dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        });
    }
};