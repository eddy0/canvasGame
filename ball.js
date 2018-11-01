const Ball = function() {
    this.image = imageFromPath('static/ball.png')
    this.x = 100
    this.y = 100
    this.speedX = 5
    this.speedY = 5
    this.fired = false
}

Ball.prototype.move = function() {
    if (this.fired) {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > 400) {
            this.speedX = -1 * this.speedX
        }
        if (this.y < 0 || this.y > 300) {
            this.speedY = -1 * this.speedY
        }
    }
}

Ball.prototype.fire = function() {
    this.fired = true
}
Ball.prototype.reverse = function() {
    this.speedY = -1 * this.speedY
}

Ball.prototype.enablepause = function() {
    window.addEventListener('keyup', (event) => {
        if (event.key === 'p') {
            this.fired = false
        }
    })
}
