
// const linkCSS = document.createElement('link');
// linkCSS.rel = 'stylesheet';
// linkCSS.href = 'style.css';
// document.head.appendChild(linkCSS);
// //É ÓBVIO MAS EU ESTOU LINKANDO O CSS AO JS

const pesquisa = document.getElementById('busca');

let divPrincipal = document.getElementById('catalogo');
divPrincipal.classList.add('divPrincipal');

let produtos = [
    ['Red Velvet Supremo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlvNAsPrUi832k-8-FyjWjtj_jB8YJO-FQEbdaqw7Tw&s=10','Massa aveludada com toque de cacau, recheio cremoso de cream cheese artesanal e geleia de morango.', 'Fatia de Bolo','R$ 18,90'],
    ['Éclair de Pistache', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCeIBzvny3hsK40-E-4VlBkcxblAJzGbm4wKWv4DYuQ&s=10', 'Clássica bomba francesa com massa choux leve, recheio de brigadeiro de pistache e cobertura de chocolate.', 'Doce Francês', 'R$ 16,50'],
    ['Cookies Triplo Chocolate', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxZl1Z-JCbBSSQnZ24LhwcXkXitg5pECTVtUFaJ2AJg&s=10', 'Cookie americano com casquinha crocante, massa de baunilha e gotas de chocolate ao leite, meio amargo e branco.', 'Cookies', 'R$ 12,00'],
    ['Banoffee na Taça', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWVHuaFAszD-G7P8YthN0gWveK2fveHPfYVdpeGb3DA&s', 'Camadas de biscoito amanteigado, doce de leite cozido, bananas frescas fatiadas e cobertura leve de chantilly.', 'Sobremesa', 'R$ 22,00'],
    ['Macaron de Frutas Vermelhas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JD_gCtYjZb-BOwpmdcksh6G252_SBO8PgbIBmQzSpA&s=10', 'Doce francês com casquinha crocante, recheado com ganache de chocolate branco e redução de frutas vermelhas.', 'Doce Francês', 'R$ 8,50'],
    ['Donut de Cinnamon Roll', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_DWvn-PRDB9tpp2rKICx7DNR4S3ceGBCW7fGmAuq-A&s=10', 'Rosquinha frita super macia, recheada com açúcar mascavo e canela, coberta com glassagem delicada de açúcar.', 'Donuts', 'R$ 13,50'],
    ['Mil-Folhas de Baunilha', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC24q0dXFCoeZLBmq0RZvjrvnvoza6bFHuAWIGkfdyag&s=10', 'Camadas finas de massa folhada ultra crocante intercaladas com o tradicional creme de confeiteiro de baunilha.', 'Doce Francês', 'R$ 21,50'],
    ['Brownie Fudge com Nozes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPghD8a-pe5kqb1yyMHa6vFIEMVGw6Uu66k7r4sTgjw&s=10', 'Brownie denso e molhadinho por dentro, feito com chocolate meio amargo nobre e pedaços crocantes de nozes chilenas.' , 'Brownies', 'R$ 14,00'],
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

function tirarAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

pesquisa.addEventListener('input', () => {

    const texto = tirarAcentos(pesquisa.value.toLowerCase().trim());

    const resultado = produtos.filter((produto) => {
        
        return(
            tirarAcentos(produto[0].toLowerCase()).includes(texto) ||
            tirarAcentos(produto[2].toLowerCase()).includes(texto) ||
            tirarAcentos(produto[3].toLowerCase()).includes(texto)
        )

    });

    mostrarProdutos(resultado);
});

        
