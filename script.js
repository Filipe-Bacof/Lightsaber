let light = document.querySelector('.light');

function activate() {
    if (light.style.display === 'none') {
        light.style.display = 'block'
    } else {
        light.style.display = 'none'
    }
}