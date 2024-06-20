document.addEventListener("DOMContentLoaded", function() {
  // Chequea que el carrusel existe antes de inicializarlo
  var myCarousel = document.querySelector("#myCarousel");
  if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: false // Desactiva el intervalo automático
    });
  }
});

