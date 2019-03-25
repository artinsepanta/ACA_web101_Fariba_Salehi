export default class Paddle{
  constructor(game){
    this.game.width = game.gameWidth;



    this.width=150;
    this.height=30; 


    this.maxSpeed = 7;
    this.Speed =0 ; 
    
    
    this.position={
      x:game.gameWidth / 2 - this.width / 2,
      y:game.gameHeight - this.height - 10
    };
  }
 

  moveLeft(){
    this.speed = -this.maxSpeed;
  }

  moveRight(){
    this.speed = this.maxSpeed;
  }

  stop(){
    this.speed = 0;
  }
   

  draw(ctx){
    ctx.fillStyle='blue';
    ctx.fillrect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime){

     this.position.x +=this.speed;
    
    if(this.position.x < 0) this.position.x=0;

    if (this.position.x + this.width > this.gameWidth)
        this.position.x = this.gameWidth - this.width;
  }
}