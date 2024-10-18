const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 287;
let y = 198;
let width = 6;
let height = 4;
let crece= true;

setInterval(()=> {
    // limpiar rectangulo
    ctx.clearRect(0,0, 600, 400);
    ctx.fillStyle = `hsl(${width},50%,50%)`;
    // ctx.beginPath();
    ctx.fillRect(x, y, width, height, Math.PI * 2);
    // Actualizar valores x y
    // ctx.fill();

    if(crece){
        width+=6;
        x-=3;
        height +=4;
        y-=2;
    } else {
        width-= 6;
        x+=3;
        height -=4;
        y+=2;
    }
    crece = width > 600? !crece: crece;
    // crece = width< 1? !crece: crece;
    // if(crece) height++;
    // else height --;width
    // crece = height > 600? !crece: crece;
    crece = height< 3? !crece: crece;
    // validar limites para actualizar crece
}, 100);



// ctx.fillStyle = 'pink';
// ctx.beginPath();
// ctx.roundRect(267, 192, 13, 23)
// ctx.fill();

// let x = 0;
// let y = 0;
// let width = 4;
// let height = 2;
// let creceWidth = true;
// let creceHeight = true;

// setInterval(() => {
    // // Limpiar rectángulo
    // ctx.clearRect(0, 0, 600, 400);
    
    // // Dibujar el rectángulo
    // ctx.fillStyle = `hsl(${width}, 50%, 50%)`;
    // ctx.beginPath();
    // ctx.roundRect(x, y, width, height, Math.PI * 2);
    // ctx.fill();
    
    // // Actualizar ancho
    // if (creceWidth) {
        // width++;
    // } else {
        // width--;
    // }

    // // Limitar el ancho entre 4 y 600
    // if (width >= 600 || width <= 4) {
        // creceWidth = !creceWidth;
    // }

    // // Actualizar altura
    // if (creceHeight) {
        // height++;
    // } else {
        // height--;
    // }

    // // Limitar la altura entre 2 y 200
    // if (height >= 400 || height <= 2) {
        // creceHeight = !creceHeight;
    // }

// }, 10);