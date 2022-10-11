import Animation from './animation';

export default class AnimationWithObstacle extends Animation {

    constructor(canvas, obstacle){

        super(canvas);
        this.obstacle = obstacle;

         window.addEventListener("keyup",(event)=> {
            this.obstacle.noMove();
         });
    }


    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.obstacle.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.obstacle.moveRight();
                break;
            case "ArrowUp":
            case "Up":
                this.obstacle.moveUP();
                break;
            case "ArrowDown":
            case "Down":
                this.obstacle.moveDown();
                break;
            default: this.obstacle.noMove();
                     return;
        }
        event.preventDefault();
     }


     keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
            case "ArrowRight":
            case "Right":
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.obstacle.noMove();
                break;
            default: return;
        }
        event.preventDefault();
    }

    moveAndDraw(){
        this.obstacle.move(this.canvas);
        this.obstacle.draw();
        this.balls.forEach(ball => ball.move());
        this.balls = this.balls.filter(ball => !ball.collisionWith(this.obstacle),this);
        this.balls.forEach(ball => ball.draw());
        this.raf = window.requestAnimationFrame(() =>  this.moveAndDraw());
    }
}
