class Scene {
    constructor(game) {
        this.game = game
        this.ball = new Ball(game)
        this.paddle = new Paddle(game)
        this.block = new Block(game)
    }

    init() {
        let keymap = {
            a: () => {
                this.paddle.moveLeft()
            },
            d: () => {
                this.paddle.moveRight()
            },
            f: () => {
                this.ball.fire()
            },
        }
        this.game.register(keymap)
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
        if (this.ball.y > this.paddle.y) {
            let s = new End(this.game)
            this.game.replaceScene(s)
            return
        }
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
