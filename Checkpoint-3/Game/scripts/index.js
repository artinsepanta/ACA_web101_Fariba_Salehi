import Game from "./game";


let canves=document.getElementById("gameScreen");
let ctx=canves.getContext("2");


const GAME_WIDTH=800;
const GAME_HEIGHT=600;  

let game =new Game(GAME_WIDTH,GAME_HEIGHT);



paddle.draw(ctx);

let lastTime = 0;


//images
let imgBall=document.getElementById('img_ball');

function gameLoop(timesStamp){
  let deltaTime = timesStamp - lastTime;
  lastTime = timesStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);


  game.update(deltaTime);
  game.draw(ctx);


  

   requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

