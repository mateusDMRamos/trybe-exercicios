const corDeFundo = document.getElementById('backgroundChange');
const corDaLetra = document.getElementById('fontColorChange');
const aumentoFonte = document.getElementById('sizeUp');
const reducaoFonte = document.getElementById('sizeDown');
const aumentoEspacamento = document.getElementById('spaceUp');
const reducaoEspacamento = document.getElementById('spaceDown');
const fontFamily = document.getElementById('fontFamilyChange');
const caracteristicas = ['backgroundColor', 'color', 'fontSize', 'lineHeight', 'fontFamily'];

corDeFundo.addEventListener('change', () => {
    if (corDeFundo.value !== 'random'){
        document.body.style.backgroundColor = corDeFundo.value;
        localStorage.setItem('backgroundColor', corDeFundo.value);
    } else {
        let rgb = 'rgb(' + Math.random ()*255 + ', ' + Math.random ()*255 + ', ' + Math.random ()*255 + ')';
        document.body.style.backgroundColor = rgb;
        localStorage.setItem('backgroundColor', rgb);
    }
});

corDaLetra.addEventListener('change', () => {
    if (corDaLetra.value !== 'random'){
        document.body.style.color = corDaLetra.value;
        localStorage.setItem('color', corDaLetra.value);
    } else {
        let rgb = 'rgb(' + Math.random ()*255 + ', ' + Math.random ()*255 + ', ' + Math.random ()*255 + ')';
        document.body.style.color = rgb;
        localStorage.setItem('color', rgb);
    }
});

aumentoFonte.addEventListener('click', () => {
    let tamanhoFonte = parseInt(getComputedStyle(document.body).fontSize) + 1 + 'px';
    document.body.style.fontSize = tamanhoFonte;
    localStorage.setItem('fontSize', tamanhoFonte);
});

reducaoFonte.addEventListener('click', () => {
    let tamanhoFonte = parseInt(getComputedStyle(document.body).fontSize) - 1 + 'px';
    document.body.style.fontSize = tamanhoFonte;
    localStorage.setItem('fontSize', tamanhoFonte);
});

aumentoEspacamento.addEventListener('click', () => {
    let tamanhoEspaco = parseInt(getComputedStyle(document.body).lineHeight) + 1 + 'px';
    document.body.style.lineHeight = tamanhoEspaco;
    localStorage.setItem('lineHeight', tamanhoEspaco);
});

reducaoEspacamento.addEventListener('click', () => {
    let tamanhoEspaco = parseInt(getComputedStyle(document.body).lineHeight) - 1 + 'px';
    document.body.style.lineHeight = tamanhoEspaco;
    localStorage.setItem('lineHeight', tamanhoEspaco);
});

fontFamily.addEventListener('change', () => {
    document.body.style.fontFamily = fontFamily.value; 
    localStorage.setItem('fontFamily', fontFamily.value);
});

window.onload = () => {
    for (let index = 0; index < caracteristicas.length; index += 1) {
        if (typeof(Storage) !== undefined) {
            if (localStorage.getItem(caracteristicas[index]) == undefined) {
                let caracteristica = caracteristicas[index]
                let valorInicial = JSON.stringify(document.body.style.caracteristica);
                localStorage.setItem(caracteristica, valorInicial);
            } else {
                let caracteristica = caracteristicas[index]
                document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
                document.body.style.color = localStorage.getItem('color');
                document.body.style.lineHeight = localStorage.getItem('lineHeight');
                document.body.style.fontSize = localStorage.getItem('fontSize');
                document.body.style.fontFamily = localStorage.getItem('fontFamily');

            }
        }
    }
}