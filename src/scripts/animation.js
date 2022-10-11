import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas) {
    this.canvas = canvas;
    this.stop = () => window.cancelAnimationFrame(this.raf);
    this.running = false;
    this.balls = [];
  }


  /* start the animation or stop it if previously running */
  startAndStop() {
    if(this.balls.length == 0 ){
      console.log("No Balls");
      return;
    }
    
    if(this.running == true){
      this.stop();
      this.running = false;
    }
    
    else {
      this.moveAndDraw();
      this.running = true;
    }
    return this.running;
  }


  moveAndDraw() {
    this.balls.forEach(ball => ball.move());
    this.balls.forEach(ball => ball.draw());
    this.raf = window.requestAnimationFrame(() => this.moveAndDraw());
  }


  addBall() {
    let newBall = new Ball( Math.ceil(Math.random() * (this.canvas.width - Ball.BALL_WIDTH)),
                            Math.ceil(Math.random() * (this.canvas.height - Ball.BALL_WIDTH)),
                            Math.ceil(Math.random() * (Math.random() > 0.5 ? -5 : 5)),
                            Math.ceil(Math.random() * (Math.random() > 0.5 ? -5 : 5)),
                            this.canvas
                          );
    this.balls.push(newBall);
  }
}
