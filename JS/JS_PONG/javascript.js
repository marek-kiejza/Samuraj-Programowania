const canvas = document.querySelector('canvas');//do czego sie odwulujemy jak select by id

const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;//nie trzeba px w js
let ballX=cw / 2 - ballSize / 2;
let ballY= ch / 2 - ballSize / 2;

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX =4;
let ballSpeedY =4;

function player() 
{
ctx.fillStyle = 'green';
ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

function AI() 
{
ctx.fillStyle = 'yellow';
ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}

function ball() 
{
ctx.fillStyle = '#ffffff';
ctx.fillRect(ballX, ballY, ballSize, ballSize);
    
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    if(ballY <= 0 || ballY + ballSize  >= ch)
    {
        ballSpeedY= -ballSpeedY;
        speedUp();
    }// -- daje plus
    
    
       if((ballX- ballSize<= playerX && ballY >playerY && ballY<playerY+paddelHeight)||(ballX + ballSize >= aiX && ballY >aiY- ballSize && ballY<aiY+paddelHeight+ ballSize) )
     {
         ballSpeedX= -ballSpeedX;
         speedUp();
     }
    if( ballX <= 0 ||ballX + ballSize >= cw) {
         ballSpeedX=0;
         ballSpeedY=0;   }
     /*if(ballX <= 0 || ballX + ballSize >= cw) {
         ballSpeedX= -ballSpeedX;
         speedUp();    }
  */
   
}

function table()
{
   /*stol*/
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cw, ch);
   /*linia na srodku*/
   /* ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 250, 250);*/
    for(let linePosition = 20; linePosition < ch; linePosition +=30)
    {
        ctx.fillStyle = "gray"
        ctx.fillRect(cw / 2 -lineWidth / 2, linePosition, lineWidth, lineHeight)
    }
}
/* sprawdzanie czy funkcja dziala**
function playerPosition(){
console.log("dziala");
}
window.addEventListener("click",playerPosition)*/
topCanvas = canvas.offsetTop;
console.log(topCanvas) //jak daleko od okna przegl. znajduje sie canvas
function playerPosition(e){
//console.log(e.clientY -topCanvas);
    playerY = e.clientY - topCanvas -paddelHeight/2;
    
    if(playerY >= ch - paddelHeight)
playerY=ch - paddelHeight
    
    if(playerY <= 0)
        playerY =0;
    
   // aiY=playerY;
}
function speedUp()
{
    //predkosc pilki X
    console.log("przyspieszam")
    if(ballSpeedX > 0 && ballSpeedX < 16)
        ballSpeedX += .4;
    else if(ballSpeedX < 0 && ballSpeedX > 16)
        ballSpeedX -= .4;
    
   
    if(ballSpeedY > 0 && ballSpeedY < 16)
        ballSpeedY += .4;
    else if(ballSpeedY < 0 && ballSpeedY > 16)
        ballSpeedX -= .4;
}

//sztuczna inteligencja
function aiPosition()
{
    let middlePaddel = aiY + paddelHeight/2;
    let middleBall = ballY + ballSize / 2;
    if(ballX > 500)
    {
        if(middlePaddel - middleBall > 200)
        {
            //console.log(">+200");
            aiY -=20; 
        }
        else if(middlePaddel - middleBall > 50)
        {
             //console.log("+50-200");
            aiY -=10; 
        }
          else if(middlePaddel - middleBall <  -200)
        {
             //console.log("<-200");
            aiY +=20; 
        }
          else if(middlePaddel - middleBall < -50)
        {
             //console.log("-50-(-200");
            aiY +=10; 
        }
    }
    else if(ballX <= 500 && ballX > 150)
    {
        if(middlePaddel - middleBall > 100)
           {
           aiY -=3;
           }
        if(middlePaddel - middleBall < -100)
           {
           aiY +=3;
           }
    }
}

canvas.addEventListener("mousemove",playerPosition)

function game()
{
    table()
    ball()
    player()
    AI() 
    aiPosition()
}
setInterval(game, 1000 / 60)//wywoluje funkcje z predkoscia klatek na sec