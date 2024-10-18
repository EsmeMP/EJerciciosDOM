const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const snake = {
    x: 0,
    y: 0,

    show: function(){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x *20, this.y * 20, 20, 20);
    }
}

let x = 0;
let y = 0;
let direction = 1;

setInterval(() =>{
    ctx.clearRect(0, 0, 600, 400);
    snake.x = x;
    snake.y = y;
    snake.show();
    if(direction ===1) x++;
    else if(direction ===2) y++;
    else if(direction ===3) x--;
    else y--;
    // Validar Limites de x & y
    if(x > 30) x = 0;
    else if(x < 0) x = 30;
    if(y > 20) y = 0;
    else if(y < 0) x = 20;
}, 100);

