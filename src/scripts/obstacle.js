import MoveState from './moveState'

export default class Obstacle {

    get context() {
        return this.canvas.getContext('2d')
    }


    constructor(x, y, width, height, canvas) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
    }


    draw() {
	    this.context.fillRect(this.x, this.y, this.width, this.height);
    }


    moveLeft() {
        this.shiftX = - 10;
        this.moving = MoveState.LEFT;
    }


    moveRight() {
        this.shiftX = + 10;
        this.moving = MoveState.RIGHT;
    }

    moveDown() {
        this.shiftY = + 10;
        this.moving = MoveState.DOWN;
    }

    moveUP() {
        this.shiftY = - 10;
        this.moving = MoveState.UP;
    }

    noMove() {
        this.shiftY = - 10;
        this.moving = MoveState.NONE;
        console.log("")
    }


    move(box) {
        this.context.clearRect(this.x, this.y, this.width, this.height);
        if(this.moving === MoveState.NONE)
            return;
        if(this.moving === MoveState.LEFT) {
          this.x = Math.max(0, this.x + this.shiftX);
        }
        if(this.moving === MoveState.RIGHT) {
          this.x = Math.min(box.width - this.width, this.x + this.shiftX);
        }
        if(this.moving === MoveState.UP) {
            this.y = Math.max(0, this.y + this.shiftY);
        }
        if(this.moving === MoveState.DOWN) {
            this.y = Math.min(box.height - this.height, this.y + this.shiftY);
        }
    }
}
