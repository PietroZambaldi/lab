let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

let mao = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'mao.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.largura/2, this.y - this.altura/2, this.largura, this.altura);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    mao.desenha();
    requestAnimationFrame(animacao)
}
animacao();

canvas.addEventListener('mousemove',function(evento){
rect = canvas.getBoundingClientRect();
x_mouse = evento.clientX - rect.left;
y_mouse = evento.clientY - rect.top;
console.log(x_mouse, y_mouse);
mao.x = x_mouse;
mao.y = y_mouse;

if (mao.x < 0 + 0.5*mao.largura){
    mao.x = 0 + 0.5*mao.largura;
}

if (mao.x > 300 - 0.5*mao.largura){
    mao.x = 300 - 0.5*mao.largura
}

if (mao.y < 0 + 0.5*mao.largura){
    mao.y = 0 + 0.5*mao.largura;
}

if (mao.y > 300 - 0.5*mao.largura){
    mao.y = 300 - 0.5*mao.largura
}
});

