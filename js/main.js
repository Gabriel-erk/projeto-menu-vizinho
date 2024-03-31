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

//Essa linha de código está obtendo o valor associado à chave 'contadorCarrinho' armazenado no localStorage do navegador e atribuindo-o à variável valorAtual - o metodo getItem, serve para localizar o valor no local storage do item na chave = (), se nao houver nada, será retornado null
let valorAtual = localStorage.getItem('contadorCarrinho');

// se houver um valor diferente de null, ou seja, se tiver algum valor no carrinho, atualize o contador com este valor armazenado 

if (valorAtual !== null) {
    contadorCarrinho.textContent = valorAtual;
}

// Seleciona todos os botões de compra
let botoesCompra = document.querySelectorAll('.texto-lanche a');

// adicionando um ouvinte de evento do tipo clique a cada botão de compra e atualizando o valor do carrinho

// utilizando forEach pois sao multiplos botoes de compra que quero adicionar esta função
botoesCompra.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let valorAtual = parseInt(contadorCarrinho.textContent);

        valorAtual++
        contadorCarrinho.textContent = valorAtual;

        localStorage.setItem('contadorCarrinho', valorAtual);
    });
});

// verifique se há itens no carrinho quando a pagina for carregada - se houver o contador aparece

window.addEventListener('load', function(){
    let valorAtual = parseInt(contadorCarrinho.textContent);
    
    if (valorAtual > 0) {
        contadorCarrinho.classList.remove('esconder');
    }
});
