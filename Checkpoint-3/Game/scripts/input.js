import Paddle from "./paddle";
import Game from "./game";

export default class InputHandler{

  constructor(paddle, game){
    document.addEventListener(('keydown') , (event) => {
      alert(event.keycode);

      switch(event.keycode){

        case 37:
        Paddle.moveLeft();
       
        break;

        case 39:
        Paddle.moveRight();
        
        break;

        case 27:
        Game.togglePause();

        break

        case 32:
        GainNode.start();
        
        break;
      }
    
    });


    document.addEventListener(('keyup') , (event) => {
      alert(event.keycode);

      switch(event.keycode){

        case 37:
        if(Paddle.speed<0)Paddle.stop();
        break;

        case 39:
        if(Paddle.speed>0)Paddle.stop();
        break;
      }
    
    });
}  
}