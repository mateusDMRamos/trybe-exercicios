
//1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo);

//2 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

//3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let centro = document.createElement('section');
centro.className = 'center-content';
document.getElementsByClassName('main-content')[0].appendChild(centro);

//4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = 'o DOM é utilizado para comunicar JS com o arquivo HTML, possibilitando a geração de páginas interativas';
document.getElementsByClassName('center-content')[0].appendChild(p);

//5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let esquerda = document.createElement('section');
esquerda.className = 'left-content';
document.getElementsByClassName('main-content')[0].appendChild(esquerda);

//6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let direita = document.createElement('section');
direita.className = 'right-content';
document.getElementsByClassName('main-content')[0].appendChild(direita);

//7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
document.getElementsByClassName('left-content')[0].appendChild(imagem);



//8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let lista = document.createElement('ul');
document.getElementsByClassName('right-content')[0].appendChild(lista);
let numerosEscritos = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < 10; index += 1){
    let li = document.createElement('li');
    li.innerText = numerosEscritos[index];
    document.getElementsByTagName('ul')[0].appendChild(li);
}

//9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1){
    let h3Titulos = document.createElement('h3');
    document.getElementsByClassName('main-content')[0].appendChild(h3Titulos);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
//10 🚀 Adicione a classe title na tag h1 criada;
titulo.className = 'title';

//11 🚀 Adicione a classe description nas 3 tags h3 criadas;
for (let index = 0; index < 3; index += 1){   
    document.getElementsByTagName('h3')[index].className = 'description';
}

//12 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
document.getElementsByClassName('main-content')[0].removeChild(document.getElementsByClassName('left-content')[0]);

//13 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
direita.style.marginRight = 'auto';



// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.