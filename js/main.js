$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true, // Ativar o autoplay
    autoplayTimeout: 3000, // Definir o intervalo de tempo em milissegundos (por exemplo, 3000ms = 3 segundos)
    autoplaySpeed: 900,
    responsive:{
        0:{
            items: 1
        },
    }
});

/* fazendo com que, suba o numero de itens no carrinho ao clicar em "comprar" */

let contadorCarrinho = document.getElementById('contador-carrinho');

let valorAtual = localStorage.getItem('contadorCarrinho');

if (valorAtual !== null) {
    contadorCarrinho.textContent = valorAtual;
}

let botoesCompra = document.querySelectorAll('.texto-lanche a');

botoesCompra.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let valorAtual = parseInt(contadorCarrinho.textContent);

        valorAtual++
        contadorCarrinho.textContent = valorAtual;

        localStorage.setItem('contadorCarrinho', valorAtual);
    });
});

window.addEventListener('load', function(){
    let valorAtual = parseInt(contadorCarrinho.textContent);
    
    if (valorAtual > 0) {
        contadorCarrinho.classList.remove('esconder');
    }
});
