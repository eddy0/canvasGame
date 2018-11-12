class Ball extends Img {
    constructor(game, name) {
        super(game, name)
        this.directionX = 1
        this.directionY = 1
        this.speedX = 5
        this.speedY = 5
        this.fired = false
    }

    move() {
        if (this.fired) {
            this.x += this.directionX * this.speedX
            this.y += this.directionY * this.speedY
            if (this.x < 0 || this.x > this.game.canvas.width) {
                this.directionX = -1 * this.directionX
            }
            if (this.y < 0 || this.y > this.game.canvas.height) {
                this.directionY = -1 * this.directionY
            }
        }
    }

    fire() {
        this.fired = true
    }

    slideVector() {
        this.speedX = 7
    }

    normalVector() {
        this.speedX = 5
    }

    redirect() {
        this.directionY = -1 * this.directionY
        this.directionX = -1 * this.directionX
    }

    reverse() {
        this.directionY = -1 * this.directionY
    }

    collideSide(element) {
        return element.y < this.y && element.y + element.h > this.y + this.h
    }

    collide(a) {
        return isCollide(this, a)
    }

    debug() {
        this.speedX = config['ball-speedX']
        this.speedY = config['ball-speedY']
    }

    animate() {
        if (this.y > 195 || this.y < 100) {
            this.speedY = -1 * this.speedY
        }
        this.y += this.speedY
    }
}

// const Ball = function(game) {
//     this.name = this.constructor.name.toLowerCase()
//     this.game = game
//     this.image = this.game.images[this.name]
//     this.x = 100
//     this.y = 100
//     this.speedX = 5
//     this.speedY = 5
//     this.fired = false
// }

// Ball.prototype.move = function() {
//     if (this.fired) {
//         this.x += this.speedX
//         this.y += this.speedY
//         if (this.x < 0 || this.x > 400) {
//             this.speedX = -1 * this.speedX
//         }
//         if (this.y < 0 || this.y > 300) {
//             this.speedY = -1 * this.speedY
//         }
//     }
// }

// Ball.prototype.fire = function() {
//     this.fired = true
// }
// Ball.prototype.reverse = function() {
//     this.speedY = -1 * this.speedY
// }

// Ball.prototype.enablepause = function() {
//     window.addEventListener('keyup', (event) => {
//         if (event.key === 'p') {
//             this.fired = false
//         }
//     })
// }

// Ball.prototype.collide = function(a) {
//     return isCollide(this, a)
// }
