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
    botao.id = 'btn-holliday';
    botao.innerText = nome;
    return botao;
}
document.getElementsByClassName('buttons-container')[0].appendChild(criaBotao('Feriados'));