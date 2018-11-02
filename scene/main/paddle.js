const Paddle = function(game) {
    this.name = this.constructor.name.toLowerCase()
    this.game = game
    this.image = this.game.images[this.name]
    this.x = 100
    this.y = 200
    this.speed = 5
}

Paddle.prototype.moveLeft = function() {
    this.x -= this.speed
}

Paddle.prototype.moveRight = function() {
    this.x += this.speed
}
