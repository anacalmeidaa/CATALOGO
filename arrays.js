
// const linkCSS = document.createElement('link');
// linkCSS.rel = 'stylesheet';
// linkCSS.href = 'style.css';
// document.head.appendChild(linkCSS);
// //É ÓBVIO MAS EU ESTOU LINKANDO O CSS AO JS

const pesquisa = document.getElementById('busca');

let divPrincipal = document.getElementById('catalogo');
divPrincipal.classList.add('divPrincipal');

let produtos = [
    ['Red Velvet Supremo', 'https://www.google.com/imgres?q=bolo%20red%20velvet&imgurl=https%3A%2F%2Fdinorma.com.br%2Fwp-content%2Fuploads%2F2019%2F11%2FSite-produtos-Bolo-Red-Velvet-02.png&imgrefurl=https%3A%2F%2Fdinorma.com.br%2Fprodutos%2Fbolo-semi-naked-red-velvet%2F&docid=qlbPYqnDvKJxVM&tbnid=NA3kJWNHwolw5M&vet=12ahUKEwiuoveus5aXAxX1KrkGHQK2Gj0QnPAOegQINhAA..i&w=835&h=835&hcb=2&ved=2ahUKEwiuoveus5aXAxX1KrkGHQK2Gj0QnPAOegQINhAA','Massa aveludada com toque de cacau, recheio cremoso de cream cheese artesanal e geleia de morango.', 'Fatia de Bolo','R$ 18,90'],
    ['Éclair de Pistache', 'https://boulangerieepifanny.com/wp-content/uploads/2025/12/eclair_pistache_boulangerie_epifanny.jpg', 'Clássica bomba francesa com massa choux leve, recheio de brigadeiro de pistache e cobertura de chocolate.', 'Doce Francês', 'R$ 16,50'],
    ['Cookies Triplo Chocolate', '', 'Cookie americano com casquinha crocante, massa de baunilha e gotas de chocolate ao leite, meio amargo e branco.', 'Cookies', 'R$ 12,00'],
    ['Banoffee na Taça', '', 'Camadas de biscoito amanteigado, doce de leite cozido, bananas frescas fatiadas e cobertura leve de chantilly.', 'Sobremesa', 'R$ 22,00'],
    ['Macaron de Frutas Vermelhas', '', 'Doce francês com casquinha crocante, recheado com ganache de chocolate branco e redução de frutas vermelhas.', 'Doce Francês', 'R$ 8,50'],
    ['Donut de Cinnamon Roll', '', 'Rosquinha frita super macia, recheada com açúcar mascavo e canela, coberta com glassagem delicada de açúcar.', 'Donuts', 'R$ 13,50'],
    ['Mil-Folhas de Baunilha', '', 'Camadas finas de massa folhada ultra crocante intercaladas com o tradicional creme de confeiteiro de baunilha.', 'Doce Francês', 'R$ 21,50'],
    ['Brownie Fudge com Nozes', '', 'Brownie denso e molhadinho por dentro, feito com chocolate meio amargo nobre e pedaços crocantes de nozes chilenas.' , 'Brownies', 'R$ 14,00'],
];

function mostrarProdutos(listaProdutos) {
    divPrincipal.innerHTML = ' ';

    listaProdutos.forEach((produto) => {
    let div = document.createElement('div');
    div.classList.add('div');

    let titulo = document.createElement('h3');
    titulo.textContent = produto[0];
    titulo.classList.add('titulo');

    let imagem = document.createElement('img');
    imagem.src = produto[1];
    imagem.alt = produto [0];
    imagem.classList.add('imagem');
    
    let desc = document.createElement('p');
    desc.textContent = produto[2];
    desc.classList.add('p1');

    let tipo = document.createElement('p');
    tipo.textContent = produto[3];
    tipo.classList.add('p2');

    let precos = document.createElement('h5');
    precos.textContent = produto[4];
    precos.classList.add('precos');

    div.appendChild(titulo);
    div.appendChild(imagem);
    div.appendChild(desc);
    div.appendChild(tipo);
    div.appendChild(precos);

    divPrincipal.appendChild(div);
    });
};

mostrarProdutos(produtos);

pesquisa.addEventListener('input', () => {

    const texto = pesquisa.value.toLowerCase().trim();

    const resultado = produtos.filter((produto) => {
        
        return(
            produto[0].toLowerCase().includes(texto) ||
            produto[2].toLowerCase().includes(texto) ||
            produto[3].toLowerCase().includes(texto)
        )

    });

    mostrarProdutos(resultado);
});

        
