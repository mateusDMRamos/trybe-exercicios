document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "blue";

document.getElementById('primeiroFilhoDoFilho').innerText = "Jorginho";

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').children[2]);

let filha = document.createElement('section');
filha.id = 'filha';

document.querySelector('#pai').appendChild(filha);

let ondeEstou = document.createElement('section');
ondeEstou.className = 'onde-estou'

document.querySelector('#elementoOndeVoceEsta').appendChild(ondeEstou);

let filhoDoFilho = document.createElement('section');
filhoDoFilho.className = 'primeiroFilhoDoFilhoDoFilho';

document.querySelector('#primeiroFilhoDoFilho').appendChild(filhoDoFilho);

console.log(document.getElementsByClassName('primeiroFilhoDoFilhoDoFilho')[0].parentElement.parentElement.nextElementSibling);

function removeFilho(elemento){
    let excluir = elemento.children;
    for (let index = 0; index < excluir.length; index += 1){
        if(excluir[index].id.includes('ilh') && !excluir[index].id.includes('primeiroFilhoDoFilho') || excluir[index].className.includes('onde-estou')){
            elemento.removeChild(excluir[index]);
            index = -1;
        }
    }
    return elemento;
}


let teste = document.getElementById('pai');
removeFilho(teste);
teste = document.getElementById('elementoOndeVoceEsta');
removeFilho(teste);