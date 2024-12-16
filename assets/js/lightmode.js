function light() {
    var element = document.body;
    var homeImage = document.getElementById("homeImage");
  
    // Alterna a classe "light-mode" no corpo
    element.classList.toggle("light-mode");
  
    // Verifica se o modo claro está ativado
    if (element.classList.contains("light-mode")) {
      homeImage.src = "/assets/image/inverted_image.png"; // Altera para a imagem do modo claro
    } else {
      homeImage.src = "/assets/image/astronautaLogo.png"; // Volta para a imagem do modo escuro
    }
  }
  
  // Animação da imagem ao carregar a página
  document.addEventListener("DOMContentLoaded", () => {
    var homeImage = document.getElementById("homeImage");
    homeImage.style.opacity = "0"; // Inicialmente invisível
    homeImage.style.transform = "translateY(20px)"; // Deslocamento inicial
    homeImage.style.transition = "all 0.8s ease-in-out"; // Define a transição
  
    // Ativa a animação
    setTimeout(() => {
      homeImage.style.opacity = "1";
      homeImage.style.transform = "translateY(0)";
    }, 100); // Pequeno delay para garantir a animação
  });

  
  