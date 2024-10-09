// const body = document.querySelector('body');
// const btnChange = document.getElementsById('btnchange');

// const changeColor = () => {
//     const color = prompt('Ingresa un Color ');
//     body.style.backgroundColor = color;
// }

// btnChange.addEventListener('click', changeColor);

// const body = document.querySelector('body');
// let color= '#FFFFFF';
// const letras = '0123456789ABCDEF';
// const letra= Math.floor(Math.random(letras) * 6);




// const body = document.querySelector('body');
// const btnChange = document.getElementById('btnchange');

// const changeColor = () => {
//     let colores = '#';
//     const letras = '0123456789ABCDEF';
//     for (let i = 0; i < 6; i++){
//         colores += letras[Math.floor(Math.random() * 16)] ;
//     }
//     body.style.backgroundColor = colores;
// }

// btnChange.addEventListener('click', changeColor);

const body = document.querySelector('body');
const btnChange = document.getElementById('btnchange');

const changeColor = () => {
    let rgba = "("
    for (let i = 0; i < 4; i++) {
        let a;
        // rgb += Math.floor(Math.random() * 255)
        if (i<3) {
            a = Math.floor(Math.random() * 255)
        }
        else {
            a = Math.random().toFixed(2);
        }
        rgba += a;
        if (i < 3) {
            rgba += ",";
        }
    }
    rgba += ")";
    console.log(rgba);
    body.style.backgroundColor = "rgba" + rgba;
}
// changeColor();
btnChange.addEventListener('click', changeColor);

// toFixed() ==> REDUCE DECIMAL