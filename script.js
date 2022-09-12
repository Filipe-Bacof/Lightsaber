let light = document.querySelector('.light');

function activate() {
    if (light.style.display === 'none') {
        light.style.display = 'block';
        abrir.play();
    } else {
        light.style.display = 'none';
        fechar.play();
    }
}


const abrir = new Audio('abre.mp3');
const fechar = new Audio('fecha.mp3');