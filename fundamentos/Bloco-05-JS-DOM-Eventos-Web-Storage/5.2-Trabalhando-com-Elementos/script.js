document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "blue";

document.getElementById('primeiroFilhoDoFilho').innerText = "Jorginho";

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').children[2]);

let filha = document.createElement('section');
filha.className = 'filha';

document.querySelector('#pai').appendChild(filha);

let ondeEstou = document.createElement('section');
ondeEstou.className = 'onde-estou'

document.querySelector('#elementoOndeVoceEsta').appendChild(ondeEstou);

let filhoDoFilho = document.createElement('section');
filhoDoFilho.className = 'primeiroFilhoDoFilhoDoFilho';

document.querySelector('#primeiroFilhoDoFilho').appendChild(filhoDoFilho);

console.log(document.getElementsByClassName('primeiroFilhoDoFilhoDoFilho')[0].parentElement.parentElement.nextElementSibling);
