function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//🚀 Exercício 1:
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let listaDias = document.getElementById('days');
for (let index in decemberDaysList) {
    let dia = document.createElement('li');
    dia.innerText = decemberDaysList[index];
    if (dia.innerText ==24 || dia.innerText ==31) {
        dia.className = "day holiday";
    } else if (dia.innerText ==4 || dia.innerText ==11 || dia.innerText ==18) {
        dia.className = "day friday";        
    } else if (dia.innerText ==25) {
        dia.className = "day holiday friday";
    } else {
        dia.className = "day";
    }
    listaDias.appendChild(dia);
}

//🚀 Exercício 2:
function criaBotao (nome) {
    let botao = document.createElement ('button');
    botao.id = 'btn-holiday';
    botao.innerText = nome;
    return botao;
}
document.getElementsByClassName('buttons-container')[0].appendChild(criaBotao('Feriados'));

//🚀 Exercício 3:

let corBotao = document.getElementById('btn-holiday');
corBotao.addEventListener('click', mudaCor);

function mudaCor () {
    let diasFeriado = document.getElementsByClassName('holiday');
    for (let index = 0; index < diasFeriado.length; index += 1){
        if (diasFeriado[index].style.backgroundColor != 'white') {
            diasFeriado[index].style.backgroundColor = 'white';
        } else {
            diasFeriado[index].style.backgroundColor = 'rgb(238,238,238)';
        }
    }
}

//🚀 Exercício 4:
function criaBotao2 (nome) {
    let botao = document.createElement ('button');
    botao.id = 'btn-friday';
    botao.innerText = nome;
    return botao;
}
document.getElementsByClassName('buttons-container')[0].appendChild(criaBotao2('Sexta-feira'));


//🚀 Exercício 5:
let textoDia = document.getElementById('btn-friday');
textoDia.addEventListener('click', mudaTexto);


function mudaTexto () {
    let sextasFeiras = document.getElementsByClassName('day');
    for (let index = 0; index < sextasFeiras.length; index += 1){
        if ((sextasFeiras[index].className == 'day friday' || sextasFeiras[index].className == 'day holiday friday') && sextasFeiras[index].innerText != "SEXTOU WUHUL") {
            sextasFeiras[index].innerText = "SEXTOU WUHUL";
        } else if ((sextasFeiras[index].className == 'day friday' || sextasFeiras[index].className == 'day holiday friday')) {
            sextasFeiras[index].innerText = index - 1;
        }
    }
}

//🚀 Exercício 6:
let dia = listaDias.children;

for (let index = 0; index < dia.length; index += 1) {
    dia[index].addEventListener('mouseover', zoom);
}
function zoom (evento) {
    let dia = evento.target;
    dia.style.fontSize = '30px';
}

for (let index = 0; index < dia.length; index += 1) {
    dia[index].addEventListener('mouseleave', retira);
}
function retira (evento) {
    let dia = evento.target;
    dia.style.fontSize = '';
}