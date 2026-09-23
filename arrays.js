
const linkCSS = document.createElement('link');
linkCSS.rel = 'stylesheet';
linkCSS.href = 'style.css';
document.head.appendChild(linkCSS);
//É ÓBVIO MAS EU ESTOU LINKANDO O CSS AO JS

const searchInput = document.getElementById('search');

let divPrincipal = document.getElementById('catalogo');
divPrincipal.classList.add('divPrincipal');

let produtos = [
    ['Noiva', 'Misery Lark, filha do vampiro mais poderoso do sudoeste, nunca foi bem-vista pelos seres de sua espécie. Ela passa seus dias anonimamente em meio aos humanos, isolada, até que é chamada para firmar um acordo de paz entre vampiros e licanos, seus inimigos mortais. Para isso, será obrigada a se casar com Lowe Moreland.Licanos são lobisomens cruéis e imprevisíveis, e o alfa do bando, Lowe, não é exceção. Ele governa o grupo com autoridade absoluta, mas também com justiça. Pela forma como acompanha cada passo de Misery, fica claro que não confia nela. E ele não poderia estar mais certo...', 'livro','52,40'],
    ['Parceira', 'Serena Paris é órfã e não tem um bando para chamar de seu. Ela também é a primeira híbrida de humano e licano a vir a público. A jovem se expôs com a intenção de curar uma ruptura de séculos entre as espécies, mas admitir a verdade a transformou em alvo.Quando se vê no centro das maquinações políticas entre licanos, vampiros e humanos, resta a Serena uma única opção: obter a proteção de Koen Alexander.', 'livro', '66,40'],
    ['A hipótese do amor', 'Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência - não em algo incontrolável como o amor.Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas.Sem muitas opções, ela resolve inventar um namoro de mentira e, num momento de pânico, beija o primeiro homem que vê pela frente.', 'livro', '73,22'],
    ['Kindle', 'Amazon Kindle Colorsoft Signature Edition com Tela 7,05" Antirreflexo, 32 GB, Preto', 'eletrônico', '1.368,96'],
    ['MacBook', 'Apple 2026 MacBook Pro (de 16 polegadas, Apple M5 Max chip with 18-core CPU and 40-core GPU, 48GB Memória unificada, 2 TB) - Preto-espacial', 'Notebook', '51.979,46'],
    ['Notebook Dell', 'Notebook Dell 15 15-I1300-A30P, Intel Core i5-1334U, Windows 11 Home', 'Notebook', '3.599,10'],
];
produtos.forEach((produto) => {
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


        
