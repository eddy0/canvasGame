class Scene {
    constructor(game) {
        this.game = game
        this.ball = new Ball()
        this.paddle = new Paddle()
        this.block = new Block()
        this.init()
    }

    init() {
        this.game.register({
            a: () => {
                this.paddle.moveLeft()
            },
            d: () => {
                this.paddle.moveRight()
            },
            f: () => {
                this.ball.fire()
            },
        })
    }

    draw() {
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)
        if (this.block.alive) {
            this.game.drawImage(this.block)
        }
        this.game.ctx.fillText('score', 10, 10)
    }

    update() {
        this.ball.move()
        let collide = isCollide(this.ball, this.paddle)
        if (collide) {
            this.ball.reverse()
        }
        if (this.block.collide(this.ball) && this.block.alive) {
            this.block.kill()
            this.ball.reverse()
        }
    }
}
