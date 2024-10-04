const div = document.querySelector('div');
const btnColor = document.getElementById('btnColor');
const btnTamaño = document.getElementById('btnTamaño');
const btnBorde = document.getElementById('btnBorde');
const btnBordeRad = document.getElementById('btnBordeRad');
const btnOpacidad = document.getElementById('btnOpacidad');

const changeColor =() => {
    let colores;
    div.style.background = colores;
}
btnColor.addEventListener('clik', changeColor)

const changeSize = () => {
    let size;
    div.style.width = size;
}
btnTamaño.addEventListener('click', changeSize);

const changeBorde = () => {
    let borde;
    div.style.border = borde;
}
btnBordeRad.addEventListener('click', changeBorde);
const changeBorderRad = () => {
    let bordRadius;
    div.style.borderRadius = bordRadius;
}
btnBordeRad.addEventListener('click', changeBorderRad);
const changeOpacity = () => {
    let opacit;
    div.style.opacity = opacit;
}
btnBordeRad.addEventListener('click', changeOpacity);