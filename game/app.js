const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';
let juegoActivo = true;
let puntaje=0;
let recordMax = localStorage.getItem('recordMax') || 0;
const recordMaxElem = document.getElementById("recordMaxModal");


let snake = [{
        x: 3,
        y: 2,
        show: function(){
            ctx.fillText('🤖', this.x * 20, this.y * 20);
        }
    },
    {
        x: 2,
        y: 2,
        show: function(){
            ctx.fillText('🔳', this.x * 20, this.y * 20);
        }
    },
    {
        x: 1,
        y: 2,
        show: function(){
            ctx.fillText('🔳', this.x * 20, this.y * 20);
        }
    }]

let x = 2;
let y = 1;
let direction = 1;

let food = {
    x: 0,
    y: 0,
    show : function(){
        // ctx.font = '24px serif';
        ctx.fillText('🔋', this.x * 20, this.y * 20);
    },
    fadeIn: function(){
        this.x = Math.floor(Math.random()* 29);
        this.y = Math.floor(Math.random()* 19)+1;
    }
}

let debeCrecer = false;

// let x = 2;
// let y = 1;
// let direction = 1;


function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadeIn();
        debeCrecer = true;
        puntaje++;
        
        if (puntaje > recordMax) {
            recordMax = puntaje;
            localStorage.setItem('recordMax', recordMax);
        }
        actualizarPuntaje();
    }
}

function actualizarPuntaje() {
    const puntajeElem = document.getElementById('puntaje');
    const recordMaxElem = document.getElementById('recordMax');
    if (puntajeElem) puntajeElem.innerText = `Puntaje: ${puntaje}`;
    if (recordMaxElem) recordMaxElem.innerText = `Máximo Record: ${recordMax}`;
}


// function nextMove(x,y){
    // for(let i = snake.lenght - 1; i>0; i--){
        // snake[i].x = snake[i-1].x;
        // snake[i].y =snake[i-1].y;
    // }
    // snake[0].x = x;
    // snake[0].y = y;
// }

function nextMove(x,y){
    for (let i = snake.length - 1; i>0;i--){
        snake[i].x = snake[i-1].x;
        snake[i].y = snake[i-1].y;
    }
    snake[0].x=x;
    snake[0].y=y;

    if (debeCrecer) {
        snake.push({ ...snake[snake.length - 1], show: function() { ctx.fillText('🔳', this.x * 20, this.y * 20); } });
        debeCrecer = false;
    }
}


food.fadeIn();

setInterval(() =>{
    // ctx.clearRect(0,0,600,400);
    // nextMove(x,y);
    // snake[0].x = x;
    // snake[0].y = y;
    // food.show();
    // snake.forEach(s => s.show());
    // eat();
    // if( direction === 1) x++;
    // else if (direction === 2)x--;
    // else if (direction === 3)y++;
    // else y--;
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x,y);
    snake[0].x = x;
    snake[0].y = y;
    food.show();
    snake.forEach(s =>s.show());
    eat();
    if(direction === 1 &&  x < 29) x++;
    else if(direction === 2 && y < 20) y++;
    else if(direction === 3 && x > 0) x--;
    else if(direction === 4 && y > 1) y--;
    // else y--;

    // // // Validar Limites de x & y
    // // if(x > 29) x = 0;
    // // else if(x < 0) x = 29; //
    // // if(y > 20) y = 1;
    // // else if(y < 1) x = 20;

    if (chocar())return;
}, 250);

document.querySelector('body').addEventListener('keydown', e =>{
        // console.log(e.key);
        if (!juegoActivo) return;
        if(e.key==='ArrowRight' && direction!==3) direction = 1;
            else if(e.key==='ArrowDown' && direction!==4) direction =2;
            else if(e.key==='ArrowLeft' && direction !==1) direction =3;
            else if(e.key==='ArrowUp'&& direction !==2) direction =4;
            else ;
    });

    function chocar() {
        if (x < 0 || x > 29 || y < 1 || y > 20) {
            mostrarModal();
            return true;
        }
    
        for (let i = 1; i < snake.length; i++) {
            if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
                mostrarModal();
                return true;
            }
        }
        
        return false;
    }
    
function mostrarModal() {
    juegoActivo = false;
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    
    clearInterval(pausa);
    document.getElementById("puntajeFinal").innerText = `Puntaje final: ${puntaje}`;
    // document.getElementById("recordMax").innerText = `Máximo Record: ${recordMax}`;
    document.getElementById("recordMaxModal").innerText = `Máximo Record: ${recordMax}`;

}

document.getElementById("reiniciar").addEventListener('click', () => {
    const modal = document.getElementById("modal");
    modal.style.display = 'none';
    reiniciarJuego();
});

function reiniciarJuego() {
    x = 2;
    y = 1;
    direction = 1;
    puntaje = 0;
    juegoActivo = true;

    snake = [
        {
            x: 3,
            y: 2,
            show: function() {
                ctx.fillText('🤖', this.x * 20, this.y * 20);
            }
        },
        {
            x: 2,
            y: 2,
            show: function() {
                ctx.fillText('🔳', this.x * 20, this.y * 20);
            }
        },
        {
            x: 1,
            y: 2,
            show: function() {
                ctx.fillText('🔳', this.x * 20, this.y * 20);
            }
        }
    ];

    food.fadeIn();  // Sirve para generar mas comida

    clearInterval(pausa);
    pausa = setInterval(game, 200);
    actualizarPuntaje()
}
let pausa = setInterval(game, 200);


function game() {
    if (!juegoActivo) return;//sirve para bloquear la entrada de teclas

    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    food.show();
    snake.forEach(s => s.show());
    eat();
    
    if (direction === 1 && x < 29) x++;
    else if (direction === 2 && y < 20) y++;
    else if (direction === 3 && x > 0) x--;
    else if (direction === 4 && y > 1) y--;
    
    if (chocar()) return;
}