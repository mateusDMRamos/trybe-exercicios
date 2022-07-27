let header = document.getElementById("header-container");
header.style.backgroundColor = "green";

let emergencia = document.getElementsByClassName("emergency-tasks")[0];
emergencia.style.backgroundColor = "pink";

let tituloEmergencia = document.querySelectorAll(".emergency-tasks h3");
for (i = 0; i < tituloEmergencia.length; i += 1){
    tituloEmergencia[i].style.backgroundColor = "purple";
}

let naoEmergencia = document.getElementsByClassName("no-emergency-tasks")[0];
naoEmergencia.style.backgroundColor = "yellow";

let tituloNaoEmergencia = document.querySelectorAll(".no-emergency-tasks h3");
for (i = 0; i < tituloNaoEmergencia.length; i += 1){
    tituloNaoEmergencia[i].style.backgroundColor = "black";
}

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "green";