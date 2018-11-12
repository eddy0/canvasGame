class Paddle extends Img {
    constructor(game, name) {
        super(game, name)
        this.x = 100
        this.y = 200
        this.speed = 10
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
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
