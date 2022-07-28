
// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo);

// 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

// 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let centro = document.createElement('section');
centro.className = 'center-content';
document.getElementsByClassName('main-content')[0].appendChild(centro);

// 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = 'o DOM é utilizado para comunicar JS com o arquivo HTML, possibilitando a geração de páginas interativas';
document.getElementsByClassName('center-content')[0].appendChild(p);

// 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 🚀 Adicione a classe title na tag h1 criada;
// 🚀 Adicione a classe description nas 3 tags h3 criadas;
// 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.