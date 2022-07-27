
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 .Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 4. Crie e execute uma função que corrija o texto da tag <h1>.
 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */


 //Exercício 1
function texto (){
    return "Estarei trabalhando como dev, exercendo todo o meu aprendizado adquirido na Trybe, não só de hard, mas também de  softskills.";
}

let tagsP = document.getElementsByTagName("p");
tagsP[1].innerText = texto();

//Exercício 2
function backGroundVerde (){
    return "rgb(76,164,109)";
}

let mainColor = document.getElementsByClassName("main-content");
mainColor[0].style.backgroundColor = backGroundVerde();

//Exercício 3
function backGroundBranco (){
    return "white";
}

let centerColor = document.getElementsByClassName("center-content");
centerColor[0].style.backgroundColor = backGroundBranco();

//Exercício 4
function correcaoH1 (){
    return "Exercício 5.1 - JavaScript";
}

let tituloH1 = document.getElementsByTagName("h1")[0].innerText = correcaoH1();

//Exercício 5
function minusculo (){
    return "lowercase";
}

let minusculas = document.getElementsByTagName("p");
for (i=0; i < minusculas.length; i += 1){
    minusculas[i].style.textTransform = minusculo();
}