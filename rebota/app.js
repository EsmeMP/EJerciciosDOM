// const lienzo = document.querySelector('#lienzo');
// const ctx = lienzo.getContext('2d');

// const ball = {
    // x: 0,
    // y: 0,
    // show: function(){
        // ctx.fillStyle = `hsl(${this.x}, 50%, 50%)`;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, 10, 0, Math.PI *2);
        // ctx.fill();
    // }
// }

// let x = 10;
// let y = 10;
// let right = true;
// let down = true;

// setInterval(() =>{
    // ctx.clearRect(0, 0, 600, 400);
    // ball.x = x;
    // ball.y = y;
    // ball.show();
    // // Validar right para x

    // x++;
    // y++;

    // if(right){
        // x-=3;
    // }
    // else {x+=3};

    // if(down){
        // y-=3;
    // }
    // else {
        // y+=3;
    // }
    // // if(down) x++;
    // // else y--;


    // right = x >= 609? !right: right;
    // right = y < 1? !right: right;

    // down = x >= 409? !down: down;
    // down = y < 1? !down: down;

// }, 10);
const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function(){
        ctx.fillStyle = `hsl(${this.x},50%,50%)`;
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
}

let x = 50;
let y = 50;
let right = true;
let down = true;

setInterval(() => {
    // ctx.clearRect(0, 0, 600, 400)
    ball.x = x;
    ball.y = y;
    ball.show();
     //validar right para x
    x++;
     //validar right para y
    y++;
    //validar x para cambiar rigth
    //validar y para cambiar down
    if(right){
        x -= 3;
    }else{
        x += 3;
    }if(down){
        y -= 3;
    }else{
        y += 3;}

    right = x >= 600? !right: right;
    right = x < 1? !right: right;
    down = y >= 400? !down: down;
    down = y < 1? !down: down;

}, 1);