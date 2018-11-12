class Paddle extends Img {
    constructor(game, name) {
        super(game, name)
        this.x = 150
        this.y = 270
        this.speed = 10
    }

    moveLeft() {
        if (this.x >= 0) {
            this.x -= this.speed
        }
    }

    moveRight() {
        if (this.x + this.w <= this.game.canvas.width) {
            this.x += this.speed
        }
    }

    debug() {
        this.speed = config['paddle-speed']
    }
}

// const Paddle = function(game) {
//     Paddle.prototype = Object.create(Img)
//     this.x = 100
//     this.y = 200
//     this.speed = 5
// }

// Paddle.prototype.moveLeft = function() {
//     this.x -= this.speed
// }

// Paddle.prototype.moveRight = function() {
//     this.x += this.speed
// }
