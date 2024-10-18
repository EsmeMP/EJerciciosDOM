function ajuste() {
const div = document.querySelector('div');
const btnColor = document.getElementById('btnColor').value;
const btnTamaño = document.getElementById('btnTamaño').value;
const btnBorde = document.getElementById('btnBorde').value;
const colorBorde = document.getElementById('colorBorde').value;
const btnBordeRad = document.getElementById('btnBordeRad').value;

const ejeX = document.getElementById('ejeX').value;
const ejeY = document.getElementById('ejeY').value;
const btnOpacidad = document.getElementById('btnOpacidad').value;
const btnGrosor = document.getElementById('btnGrosor').value;
const colorSombra = document.getElementById('colorSombra').value;

document.getElementById('figura').style.backgroundColor = btnColor;

document.getElementById('figura').style.width = btnTamaño + "px";

document.getElementById('figura').style.height = btnTamaño + "px";

document.getElementById('figura').style.border = colorBorde
document.getElementById('figura').style.border = btnBorde + "px" + " " + "solid" + " " + colorBorde;

document.getElementById('figura').style.borderRadius = btnBordeRad + "px"

document.getElementById('figura').style.boxShadow = ejeX + "px" + " " + ejeY + "px" + " " + btnOpacidad + "px" + " " + btnGrosor + "px" + " " + colorSombra

}


/* box-shadow: 5px 5px 1000px 100px rgb(201, 22, 22); */
