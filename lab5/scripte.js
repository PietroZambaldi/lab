let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//quadrado azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(1,1,50,50);
ctx.strokeRect(1,1,50,50);

//linha azul
ctx.strokeStyle = 'blue';
ctx.moveTo(1,1);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();
ctx.beginPath();

//quadrado vermelho
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect(250,1,50,50);
ctx.strokeRect(250,1,50,50);

//linha vermelha
ctx.strokeStyle = 'red';
ctx.moveTo(150,150);
ctx.lineTo(300,1);
ctx.stroke();
ctx.closePath();

//linha no meio
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(1,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();

//linha roxa
ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(150,150);
ctx.lineTo(150,250);
ctx.stroke();
ctx.closePath();

//quadrado meio esquerdinha baixo
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(1,152,30,30)
ctx.strokeRect(1,152,30,30)
ctx.closePath();

//quadrado meio esquerdinha cima
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(1,118,30,30)
ctx.strokeRect(1,118,30,30)
ctx.closePath();

//quadrado meio direitinha baixo
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(270,152,30,30)
ctx.strokeRect(270,152,30,30)
ctx.closePath();

//quadrado meio direitinha cima
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(270,118,30,30)
ctx.strokeRect(270,118,30,30)
ctx.closePath();

//quadrado vermelho meio
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect(118,152,30,30)
ctx.strokeRect(118,152,30,30)
ctx.closePath();

//escada amarelinha esquerdinha
ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.fillRect(1,240,60,60)
ctx.strokeRect(1,240,60,60)
ctx.closePath();

//tapo branco do amarelo
ctx.beginPath();
ctx.strokeStyle = '#c9c9c9';
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(40,240,52,30)
ctx.strokeRect(40,240,52,30)
ctx.closePath();

//escada pretinha direitinha
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(230,240,90,90)
ctx.strokeRect(230,240,90,90)
ctx.closePath();

//tapo branco do preto
ctx.beginPath();
ctx.strokeStyle = '#c9c9c9';
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(200,240,62,32)
ctx.strokeRect(200,240,62,32)
ctx.closePath();

// bola direita baixo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(200,200,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bola esquerda baixo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,200,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bola central
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'purple';
ctx.arc(150,115,16,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bola esquerda baixo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,200,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arco baixo full
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,50,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arco esquerda
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(149,300,75,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

//arco direita
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(151,300,65,1.5*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

//arco baixo full
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(150,150,60,1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

//arco esqueda meia bomba
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

//arco direita meia bomba
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1.75*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();



let canvas2 = document.getElementById('canvas2');
let ctxa = canvas2.getContext('2d');

// fundo (céu)
ctxa.beginPath();
ctxa.fillStyle = 'mediumaquamarine';
ctxa.fillRect(0, 0, 300, 250);
ctxa.closePath();

// sol
ctxa.beginPath();
ctxa.fillStyle = 'yellow';
ctxa.arc(250, 50, 35, 0, 2 * Math.PI);
ctxa.fill();
ctxa.closePath();

// terra
ctxa.beginPath();
ctxa.fillStyle = 'gray';
ctxa.fillRect(0, 180, 300, 120);
ctxa.closePath();

// casa (quadrado principal)
ctxa.beginPath();
ctxa.fillStyle = 'saddlebrown';
ctxa.fillRect(120, 130, 60, 60);
ctxa.closePath();

// telhado (triângulo)
ctxa.beginPath();
ctxa.fillStyle = 'tomato';
ctxa.moveTo(120, 130);
ctxa.lineTo(150, 100);
ctxa.lineTo(180, 130);
ctxa.closePath();
ctxa.fill();

// porta
ctxa.beginPath();
ctxa.fillStyle = '#4b2e0e'; 
ctxa.fillRect(145, 155, 10, 35);
ctxa.closePath();

// janela esquerda
ctxa.beginPath();
ctxa.fillStyle = 'deepskyblue';
ctxa.fillRect(125, 140, 15, 15);
ctxa.closePath();

// janela direita
ctxa.beginPath();
ctxa.fillStyle = 'deepskyblue';
ctxa.fillRect(160, 140, 15, 15);
ctxa.closePath();

// árvore esquerda (tronco)
ctxa.beginPath();
ctxa.fillStyle = 'sienna';
ctxa.fillRect(60, 150, 10, 30);
ctxa.closePath();

// árvore esquerda (folha)
ctxa.beginPath();
ctxa.fillStyle = 'forestgreen';
ctxa.arc(65, 145, 15, 0, 2 * Math.PI);
ctxa.fill();
ctxa.closePath();

// árvore direita (tronco)
ctxa.beginPath();
ctxa.fillStyle = 'sienna';
ctxa.fillRect(230, 160, 10, 20);
ctxa.closePath();

// árvore direita (folha)
ctxa.beginPath();
ctxa.fillStyle = 'forestgreen';
ctxa.arc(235, 155, 15, 0, 2 * Math.PI);
ctxa.fill();
ctxa.closePath();

// forma azul (esquina inferior esquerda)
ctxa.beginPath();
ctxa.fillStyle = 'dodgerblue';
ctxa.moveTo(0, 180);
ctxa.lineTo(0, 250);
ctxa.lineTo(70, 250);
ctxa.lineTo(70, 220);
ctxa.lineTo(35, 220);
ctxa.lineTo(35, 180);
ctxa.closePath();

//rio
ctxa.beginPath();
ctxa.lineWidth = 2;
ctxa.fillStyle = 'blue';
ctxa.moveTo(0, 200); 
ctxa.arc(0, 200, 40, 1.5 * Math.PI, 2 * Math.PI); 
ctxa.lineTo(0, 200);
ctxa.closePath();
ctxa.fill();

// ctxa.strokeStyle = 'blue';
// ctxa.moveTo(40,200);
// ctxa.lineTo(100,200);
// ctxa.stroke();
// ctxa.closePath();
// ctxa.beginPath();

ctxa.beginPath();
ctxa.lineWidth = 2;
ctxa.strokeStyle = 'blue';
ctxa.fillStyle = 'blue';
ctxa.fillRect(1,200,40,50);
ctxa.strokeRect(1,200,40,50);

ctxa.beginPath();
ctxa.lineWidth = 2;
ctxa.strokeStyle = 'blue';
ctxa.fillStyle = 'blue';
ctxa.fillRect(1,250,90,50);
ctxa.strokeRect(1,250,90,50);

ctxa.beginPath();
ctxa.lineWidth = 2;
ctxa.strokeStyle = 'blue';
ctxa.fillStyle = 'blue';

ctxa.moveTo(90, 300);
ctxa.arc(90, 300, 50, 1.5 * Math.PI, 2 * Math.PI);
ctxa.lineTo(90, 300);
ctxa.closePath();
ctxa.fill();
ctxa.stroke();