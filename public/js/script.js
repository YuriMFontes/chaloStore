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