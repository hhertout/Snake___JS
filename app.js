const gameSize = 600;
const squareSize = 30;
const canvas = document.getElementById("GAME");
const ctx = canvas.getContext("2d");

const snake = new Snake(squareSize);
const food = new Food();
let currentDirection = "right";

const restartButton = document.getElementById("restart");

function detectKeyPressed() {
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowUp":
        currentDirection = "up";
        break;
      case "ArrowDown":
        currentDirection = "down";
        break;
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
    }
  });
}

function clearScreen() {
  ctx.clearRect(0, 0, gameSize, gameSize);
}

function update() {
  clearScreen();
  snake.update();
  food.draw();
  if (snake.alive == true) {
    setTimeout(update, 100);
  }
}

function start() {
  detectKeyPressed();
  update();
}
start();

/**
 * 
 window.onload = function(){
    let ctx
    let canvas
    let blocksize = 30
    let snakee = [[6,4], [6,3]]

    function CanvasInit(){
        canvas = document.createElement('canvas');
        document.getElementById("Game").appendChild(canvas);
    }
    function CtxInit(){
        ctx = canvas.getContext('2d')
        ctx.fillStyle = "#F00"
        console.log(snakee)
        console.log(Snake.body)
    }

    function refreshCanvas(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
    
    }


    class Snake {
        constructor(body) {
            this.body = snakee
            this.head = snakee[0]
        }
        draw(){
            for(i=0 ; i < snakee.length ; i++){
                ctx.fillStyle = "#F00"
                ctx.fillRect(snakee[0], snakee[1], blocksize, blocksize);
            }
        }
    }

   init()
   CanvasInit()
   CtxInit()
}

 */
