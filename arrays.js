
// const linkCSS = document.createElement('link');
// linkCSS.rel = 'stylesheet';
// linkCSS.href = 'style.css';
// document.head.appendChild(linkCSS);
// //É ÓBVIO MAS EU ESTOU LINKANDO O CSS AO JS

const pesquisa = document.getElementById('busca');

let divPrincipal = document.getElementById('catalogo');
divPrincipal.classList.add('divPrincipal');

let produtos = [
    ['Noiva','abu', 'livro','R$ 52,40'],
    ['Parceira','d', 'livro', 'R$ 66,40'],
    ['A hipótese do amor','h', 'livro', 'R$ 73,22'],
    ['Kindle','k', 'eletrônico', 'R$ 1.368,96'],
    ['MacBook','m', 'Notebook', 'R$ 51.979,46'],
    ['Notebook Dell','n', 'Notebook', 'R$ 3.599,10'],
];

function mostrarProdutos(listaProdutos) {
    divPrincipal.innerHTML = ' ';

    listaProdutos.forEach((produto) => {
        let div = document.createElement('div');
        div.classList.add('div');

    let titulo = document.createElement('h3');
    titulo.textContent = produto[0];
    titulo.classList.add('titulo');

    
    let desc = document.createElement('p');
    desc.textContent = produto[1];
    desc.classList.add('p1');

    let tipo = document.createElement('p');
    tipo.textContent = produto[2];
    tipo.classList.add('p2');

    let precos = document.createElement('h5');
    precos.textContent = produto[3];
    precos.classList.add('precos');

    div.appendChild(titulo);
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
            produto[1].toLowerCase().includes(texto) ||
            produto[2].toLowerCase().includes(texto) ||
            produto[3].toLowerCase().includes(texto)
        )

    });

    mostrarProdutos(resultado);
});

        
