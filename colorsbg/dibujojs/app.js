const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// // Codigo Paquito
// fillReact(x,y, width, height)
// strokeReact(x,y, width, height)
// arc (x, y, radio, ini, fin, sentido horario)

// ctx.strokeRect(0, 0, 200, 200);
// ctx.fillRect(20, 20, 160, 160);

// ctx.fillStyle = 'yellow';
// ctx.beginPath();
// ctx.arc(100,100,60,0,Math.PI *2, true);
// ctx.fill();

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(80, 90);
// ctx.lineTo( 130, 90);
// ctx.lineTo( 105, 130);
// ctx.lineTo( 105, 13);
// ctx.fill();


// Cara con una hojita
// ctx.fillStyle = 'orange';
// ctx.beginPath();
// ctx.arc(300, 200, 50, 0,Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle = 'green';
// ctx.fillRect(270,180, 20, 5);
// ctx.fillRect(310,180, 20, 5);

// ctx.beginPath();
// ctx.arc(280, 190, 5, 0, Math.PI*2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(320, 190, 5, 0, Math.PI*2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(300, 200, 30, 0, Math.PI, false);
// ctx.fill();

// ctx.beginPath();
// ctx.roundRect(100, 100, 50, 20, 5)
// ctx.fill();

// // Figura redondeada
// ctx.beginPath();
// ctx.roundRect(270, 135, 30, 20,[0, 20, 0, 20])
// ctx.fill();

// Fondo
// ctx.fillStyle = '#001c1c';
ctx.fillRect(0, 0, 600, 400);

ctx.fillStyle = '#fff';
ctx.strokeStyle = '#000';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(481, 100, 50, 0,Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#2d878f';
ctx.strokeStyle = '#1d6d6d';
ctx.lineWidth = 1;

ctx.beginPath();
ctx.ellipse(200, 290, 383, 15, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(300, 200, 303, 10, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(20, 100, 303, 5, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// otro color
ctx.fillStyle = '#1d6d6d';
ctx.strokeStyle = '#0a4146';
ctx.lineWidth = 1;

ctx.beginPath();
ctx.ellipse(350, 300, 303, 10, 6.2, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(380, 220, 303, 10, 0, 3, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(260, 95, 303, 5, 0, 4, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Cabeza (morado)
ctx. fillStyle = '#7B60C1';
ctx.beginPath();
// ctx.arc(300, 250, 70, 0, Math.PI *2, true);
ctx.ellipse(300, 280, 83, 65, 0, 0, Math.PI * 2);
ctx.fill();

ctx.lineWidth = 2;
ctx.strokeStyle = '#2E2D72';
ctx.stroke();

// Orejitas
ctx.fillStyle = '#7B60C1';
ctx.beginPath();
ctx.roundRect(260, 185, 30, 39,[8, 26, 0, 30])
ctx.fill();
ctx.roundRect(350, 210, 35, 37, [29, 8, 30, 0]);
ctx.fill();

ctx.lineWidth = 2;
ctx.strokeStyle = '#2E2D72';
ctx.stroke();


//Cabeza blanca
ctx. fillStyle = '#fff';
ctx.beginPath();
ctx.ellipse(319, 287, 68, 59, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(290, 239, 23, 10, 2.8, 0, Math.PI * 2);
ctx.fill();


// Cabeza (nariz)
ctx. fillStyle = '#b80d5f';
ctx.beginPath();
ctx.ellipse(333, 285, 12, 8, 0, 0, Math.PI * 2);
ctx.fill();

//Mejilla izquierda
ctx.fillStyle = '#f5bbf6';
ctx.beginPath();
ctx.arc(261, 271, 12, 0,Math.PI * 2, true);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#232466';
ctx.stroke();

// Mejilla derecha
ctx.fillStyle = '#f5bbf6';
ctx.beginPath();
ctx.ellipse(372, 296, 6, 10, 0.3, 0, Math.PI * 2);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#232466';
ctx.stroke();

// //Fondo de boca
// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.arc(320, 288, 48, 3.5,Math.PI * 2, true);
// ctx.fill();

//ojo izquierdo
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.ellipse(296, 257, 17, 21, 0, 0, Math.PI * 2);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#000';
ctx.stroke();

//ojo derecho
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.ellipse(365, 270, 11, 17, 9.3, 0, Math.PI * 2);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#000';
ctx.stroke();

// pupila izquierda
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(296, 258, 7, 10.5, 0.1, 0, Math.PI * 2);
ctx.fill();

// triangulo izquierdo
ctx.fillStyle = '#fff';
ctx.beginPath();
ctx.moveTo(295, 255);
ctx.lineTo( 302, 265);
ctx.lineTo( 310, 260);
ctx.fill();

// Pupila xd
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(360, 269, 5, 8, 0, 0, Math.PI * 2);
ctx.fill();

// Pupila derecha
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(80, 90);
ctx.lineTo( 130, 90);
ctx.lineTo( 105, 130);

// triangulo derecho
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(365, 269);
ctx.lineTo( 360, 269);
ctx.lineTo( 365, 280);
ctx.fill();

// Rosita de Orejitas
ctx.fillStyle = '#fcbef7';
ctx.beginPath();
ctx.roundRect(267, 192, 13, 23,[8, 26, 0, 30])
ctx.fill();
ctx.roundRect(360, 222, 13, 16, [39, 3, 29, 0]);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#482876';
ctx.stroke();

ctx.lineWidth = 1;
ctx.strokeStyle = '#482876';
ctx.stroke();

// Triangulo de arriba
ctx.fillStyle = '#23246e';
ctx.beginPath();
ctx.moveTo(313, 232);
ctx.lineTo( 299, 233);
ctx.lineTo( 305, 222);

ctx.moveTo(362, 243);
ctx.lineTo( 365, 251);
ctx.lineTo( 353, 250);
ctx.fill();

// Boca(morado)
ctx. fillStyle = '#5d0304';
ctx.beginPath();
ctx.ellipse(305, 305, 50, 38, 16, 28, Math.PI * 2);
ctx.fill();

ctx.lineWidth = 2;
ctx.strokeStyle = '#000';
ctx.stroke();

// ctx. fillStyle = 'RED';
// ctx.beginPath();
// // ctx.arc(300, 250, 70, 0, Math.PI *2, true);
// ctx.ellipse(319, 307, 50, 34, 16, 28, Math.PI * 2);
// ctx.fill();

// Dientes
ctx.save();
ctx.translate(310 + 10 / 2, 297 + 20 / 2);
ctx.rotate(Math.PI / 6.2);

ctx.fillStyle = 'white';
ctx.fillRect(-14 / 2, -16 / 2, 10, 17);

ctx.strokeStyle = 'black'; // Color del contorno
ctx.lineWidth = 1; // Grosor del contorno (ajustable)
ctx.strokeRect(-14 / 2, -16 / 2, 10, 17);
ctx.restore();


ctx.save();
ctx.translate(320 + 10 / 2, 297 + 20 / 2);
ctx.rotate(Math.PI / 6.2);

ctx.fillStyle = 'white';
ctx.fillRect(-14 / 2, -12 / 2, 10, 17);

ctx.strokeStyle = 'black'; // Color del contorno
ctx.lineWidth = 1; // Grosor del contorno (ajustable)
ctx.strokeRect(-14 / 2, -12 / 2, 10, 17);
ctx.restore();

// Lengua
ctx. fillStyle = '#8c2f2f';
ctx.beginPath();
ctx.ellipse(294, 360, 29, 28, 12, 11, Math.PI * 2);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#000';
ctx.stroke();

// Cuernitos
ctx.save();
ctx.translate(360 + 10 / 2, 175 + 29 / 2);
ctx.rotate(Math.PI / 6.2);
ctx.fillStyle = '#b495c8';
ctx.fillRect(-14 / 2, -19 / 2, 7, 57);
ctx.strokeStyle = '#482876';
ctx.strokeRect(-14 / 2, -19 / 2, 7, 57);
ctx.restore();


ctx.fillStyle = '#b495c8';
ctx.strokeStyle = '#482876';
ctx.lineWidth = 1;

ctx.fillRect(295, 150, 7, 70);
ctx.strokeRect(295, 150, 7, 70);

ctx.beginPath();
ctx.roundRect(280, 175, 18, 15, [30, 100, 20, 100]);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(295, 175, 18, 15, [29, 5, 30, 0]);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(280, 145, 18, 15, [30, 100, 20, 100]);
ctx.fill();
ctx.stroke(); // Contorno de la forma

ctx.beginPath();
ctx.roundRect(295, 145, 18, 15, [29, 5, 30, 0]);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(357, 170, 10, 16, [30, 100, 20, 100]);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 177, 18, 15, [29, 5, 30, 0]);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(337, 193, 15, 16, [30, 100, 20, 100]);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 200, 18, 15, [29, 5, 30, 0]);
ctx.fill();
ctx.stroke();

// Manos
ctx.fillStyle = '#7B60C1';
ctx.strokeStyle = '#2E2D72';
ctx.lineWidth = 2;

ctx.beginPath();
ctx.ellipse(168, 309, 25, 34, 10.2, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(443, 342, 22, 32, 6, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Bolsa de dulces
ctx.beginPath();
ctx.moveTo(170, 340);
ctx.bezierCurveTo(130, 280, 270, 310, 260, 349);
ctx.bezierCurveTo(380, 342, 350, 305, 440, 335);
ctx.bezierCurveTo(450, 400, 350, 450, 490, 440);
ctx.lineTo(250, 400);
ctx.bezierCurveTo(160, 410, 190, 400, 170, 350);
ctx.fillStyle = '#585184';
ctx.fill();
ctx.strokeStyle = '#2E2D72';
ctx.lineWidth = 3;
ctx.stroke();

// Dedos
ctx.fillStyle = '#7B60C1';
ctx.strokeStyle = '#2E2D72';
ctx.lineWidth = 3;

ctx.beginPath();
ctx.ellipse(191, 302, 12, 17, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(423, 330, 12, 17, 3.1, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Dulces
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.ellipse(221, 360, 10, 12, 5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(320, 370, 12, 15, 4, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(390, 380, 12, 15, 7, 14, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'pink';
ctx.beginPath();
ctx.ellipse(255, 360, 10, 10, 4, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(350, 392, 12, 15, 6.5, 9, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(290, 388, 10, 14, 6.8, 9, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.ellipse(271, 370, 10, 10, 4, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(370, 392, 12, 15, 6.5, 9, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(310, 392, 10, 14, 6.8, 9, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(275, 385, 10, 10, 6.8, 9, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(340, 375, 10, 15, 2, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(300, 372, 10, 14, 2, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.ellipse(249, 374, 20, 10, 6.9, 2, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(250, 376, 5, 10, 8.5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(329, 392, 10, 15, 6.6, 9, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(289, 370, 8, 14, 2.5, 0, Math.PI * 2);
ctx.fill();

ctx.save();
ctx.translate(400 + 10 / 2, 305 + 99 / 2);
ctx.rotate(Math.PI / 5.2);
ctx.fillStyle = 'gray';
ctx.fillRect(-7 / 2, -9 / 2, 5, 20);
ctx.restore();

ctx.save();
ctx.translate(210 + 10 / 2, 340 + 29 / 2);
ctx.rotate(Math.PI / 1.4);
ctx.fillStyle = 'gray';
ctx.fillRect(-7 / 2, -1 / 2, 5, 40);
ctx.restore();
ctx.save();

