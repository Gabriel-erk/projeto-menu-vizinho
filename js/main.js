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

// selecionando o elemento do contador do carrinho (span, tipo string)
let contadorCarrinho = document.getElementById('contador-carrinho');

 // verifique se há um valor armazenado no localStorage (armazenamento local)
let valorAtual = localStorage.getItem('contadorCarrinho');


// se houver um valor armazenado, atualize o contador com este valor armazenado 

/*(operador !== significa 'nao igual a', ele retorna verdadeiro se os operandos nao forem iguais e/ou nao forem do mesmo tipo, entao, ao comparar uma variavel com o valor 5 e a variavel com valor "5", ela sera dada como verdadeira, pois seus tipos sao diferentes) - colocar nenhum valor no span ao inves de 0, se nao null nunca sera verificado de fato */
if (valorAtual !== null) {
    contadorCarrinho.textContent = valorAtual;
}

// Seleciona todos os botões de compra
let botoesCompra = document.querySelectorAll('.texto-lanche a');

// adicionando um ouvinte de evento do tipo clique a cada botão de compra

// utilizando forEach pois sao multiplos botoes de compra que quero adicionar esta função
botoesCompra.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // obtendo o valor atual do contador do carrinho e converta em um numero inteiro

        // inicializando uma variavel com o mesmo nome utilizado fora do escopo, pois no escopo desta função, esta variavel nao existe
        let valorAtual = parseInt(contadorCarrinho.textContent);

        // incremente o valor do contador em 1
        valorAtual++

        // atualizando o texto do contador do carrinho com o novo valor
        contadorCarrinho.textContent = valorAtual;

        // armazenando o novo valor do contador no localStorage (armazenamento local, para que, ao trocar de pagina, isto ainda se aplique, o numero nao se perca)
        localStorage.setItem('contadorCarrinho', valorAtual);
    });
});

// verifique se há itens no carrinho quando a pagina for carregada

/* window é um objeto, que fornece acesso ao documento atual (estrutura html da pagina, basicamente, me permite manipular a janela do navegador, podendo maniopular elementos html, alterando estilos, conteudo...), window permite controlar a navegação do usuario, redirecionar o navegador a outra pagina, abrir novas janelas/guias/fechar janela atual... e nele, estou utilizando 'load', que é um evento de "ao carregar a pagina", entao, ao carregar a pagina, a função sera disparada */
window.addEventListener('load', function(){
    let valorAtual = parseInt(contadorCarrinho.textContent);
    
    // Se houver itens no carrinho, remova a classe 'esconder' para mostrar o contador
    if (valorAtual > 0) {
        // removendo classe do elemento
        contadorCarrinho.classList.remove('esconder');
    }
});
