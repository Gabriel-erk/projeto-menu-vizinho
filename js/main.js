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

// carrosel 2, carrinho

$(".owl-carousel-second").owlCarousel({
  loop: true,
  margin: 10,
  nav: true, // Ativar a navegação anterior/próxima
  dots: false,
  autoplay: false, // Desativar o autoplay para que os usuários possam controlar manualmente
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});