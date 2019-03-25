export default class Ball{
  constructor(game){
    this.image = document.getElementById("img_ball");
    
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game =game;
     this.size=25;
     this.reset();
  }

  reset(){
    this.position = {x:10 ,y:400};
    this.speed ={x:4, y:-2 };
  }

  draw(ctx){
    ctx.drawImage( 
      this.image, 
      this.position.x,
      this.position.y,
      this.size, 
      this.size
     );
  }


  update(deltaTime){

    console.log(this.game.paddle.position.x);
    this.position.x +=this.speed.x;
    this.position.y +=this.speed.y;

    //wall on left or right

    if(this.position.x + this.size > this.gameWidth or this.position.x < 0){
      this. speed.x = -this.speed.x;

    }

      //wall on top 

      if( this.position.y < 0){
        this. speed.y = -this.speed.y;
      }
      
      //bottom of game
      if(this.position.y+this.size>this.gameHeight){
        this.game.lives--;
        this.reset();
      }

      //check collision with paddle
      let bottomOfBall =this.position.y+this.size;
      let topOfPadlle = this.game.paddle.position.y;
      let leftSideOfPaddle =ths.game.paddle.position.x;
      let rightSideOfPaddle =ths.game.paddle.position.x + this.game.paddle.width;


      if(
        bottomOfBall>=topOfPaddle
        && this.position.x>= leftSideOfPaddle
        && this.position.x + this.size<= rightSideOfPaddle)
        {
        this.speed= - this.speed;
        this.position.y = this.game.paddle.position-this.size;
      }
    
  }
}