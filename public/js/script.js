/*Passa o carossel para o lado*/
setInterval(function() {
    document.querySelector('#carouselExampleFade .carousel-control-next').click();
  }, 3000); 


  /*olhinho da senha*/

    function togglePassword(inputId, toggleIcon) {
        const input = document.getElementById(inputId);
        if (input.type === 'password') {
            input.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }

// Detecta quando o usuário faz scroll na página
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-small');

    // Verifica a posição do scroll
    if (window.scrollY > 50) { // Exemplo: quando o scroll passar de 50 pixels
        header.classList.add('active'); // Adiciona a classe .active para mostrar o header menor
    } else {
        header.classList.remove('active'); // Remove a classe .active para esconder o header menor
    }
});
