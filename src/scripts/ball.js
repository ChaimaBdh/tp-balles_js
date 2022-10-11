
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {


    static BALL_WIDTH = 48;


    get context() {
        return this.canvas.getContext('2d')
    }

    constructor(x, y, deltaX, deltaY, canvas){
        this.x  = x;
        this.y  = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.canvas = canvas;
        this.image = this.createImage();
    }

    draw() {
	    this.context.drawImage(this.image, this.x, this.y);
    }


    move() {
        this.context.clearRect(this.x, this.y, Ball.BALL_WIDTH, Ball.BALL_WIDTH);
        if(this.x < 0 || (this.x + Ball.BALL_WIDTH) > this.canvas.width)
            this.deltaX *= -1;
        if(this.y < 0 || (this.y + Ball.BALL_WIDTH) > this.canvas.height)
            this.deltaY *= -1;
        this.x -= this.deltaX;
        this.y -= this.deltaY;
    }

    collisionWith(obstacle) {
        let p1 = {'x' : Math.max(this.x, obstacle.x),'y' : Math.max(this.y, obstacle.y)};
        let p2 = {'x' : Math.min(this.x + Ball.BALL_WIDTH, obstacle.x + obstacle.width),'y' : Math.min(this.y + Ball.BALL_WIDTH, obstacle.y + obstacle.height)};
        console.log(p1, p2);

        return p1.x < p2.x && p1.y < p2.y;
    }

    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
        const ballImg = new Image();
        ballImg.width = Ball.BALL_WIDTH;
        ballImg.src = ballImgSrc;
        return ballImg;
    }

}
