$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true, // Ativar o autoplay
  autoplayTimeout: 3000, // Definir o intervalo de tempo em milissegundos (por exemplo, 3000ms = 3 segundos)
  autoplaySpeed: 900,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// definindo funcionalidade da barra lateral (menu-lateral), deixando-o funcional
document.addEventListener("DOMContentLoaded", function () {

  const iconeMenu = document.getElementById("iconeMenu");
  const fecharMenu = document.getElementById("fechar-menu");
  const menuLateral = document.getElementById("menuLateral");

  iconeMenu.addEventListener('click', function() {
    menuLateral.style.right = '0px';
  })

  fecharMenu.addEventListener('click', function() {
    menuLateral.style.right = '-500px';
  })

});

// carrosel carrinho

$('.carroselCarrinho').owlCarousel({
  // definindo que é um loop
  loop:true,
  margin:10,
  // definindo para setas de navegação  naoaparecerem (neste caso, apenas bolinhas)
  nav:false,
  // dizendo que ira dar play automaticamente
  autoplay:true,
  // dizendo o tempo que ira passar cada slide
  autoplayTimeout:5000,
  // dizendo para nao parar quando passar o mouse em cima
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:5
      }
  }
})