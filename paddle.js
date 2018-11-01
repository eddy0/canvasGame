const Paddle = function() {
    this.image = imageFromPath('static/paddle.png')
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
