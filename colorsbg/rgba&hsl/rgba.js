function ajuste () {
const body = document.querySelector('body');
const btnRojo = document.getElementById('btnRojo').value;
const btnVerde = document.getElementById('btnVerde').value;
const btnAzul = document.getElementById('btnAzul').value;
const btnOpacidad = document.getElementById('btnOpacidad').value;
const btnhsl = document.getElementById('btnhsl').value;
const inputs = document.getElementById('inputs');



const color = "rgba(" + btnRojo + ", " + btnVerde + ", " + btnAzul + ", " + btnOpacidad + ")";
// document.querySelector('body').style.backgroundColor = color;
const colorhsl = "hsl(" + btnhsl + ", " + "30%, " + "80%)"
body.style.backgroundColor = color;
inputs.style.backgroundColor= colorhsl;
console.log(colorhsl)
console.log(color)

}

// hsl(100, 100%, 100%);

