class SceneMain extends Scene {
    constructor(game, level = 0) {
        super(game)
        this.currentLevel = level
        this.score = 0
        this.interval = 30
        this.init()
    }

    __keybind() {
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

    init() {
        this.ball = new Ball(this.game)
        this.ball.x = 100
        this.ball.y = 100
        this.add(this.ball)
        this.paddle = new Paddle(this.game)
        this.paddle.x = 100
        this.paddle.y = 200
        this.add(this.paddle)
        this.blocks = new Blocks(this.game, this.currentLevel)
        this.add(this.blocks)
    }

    draw() {
        if (this.interval > 0) {
            this.interval--
            this.game.ctx.fillText(`第 ${this.currentLevel + 1} 关`, 100, 100)
        }
        // if (window.enableDebug) {
        //     enableDebug(this.ball)
        // }

        super.draw()
        this.game.ctx.fillText('score: ' + this.score, 10, 300)
    }

    gameover() {
        if (this.ball.y > this.game.canvas.height) {
            let s = new End(this.game)
            this.game.replaceScene(s)
            return
        }
    }

    nextStage() {
        if (this.blocks.length < 1) {
            this.currentLevel += 1
            let s = new SceneMain(this.game, this.currentLevel)
            this.game.replaceScene(s)
            return
        }
    }

    checkPaddle() {
        let collide = this.ball.collide(this.paddle)
        let valid =
            this.ball.y + this.ball.h < this.paddle.h / 2 + this.paddle.y

        if (valid && collide) {
            if (
                this.paddle.w / 4 + this.paddle.x < this.ball.x &&
                (this.paddle.w / 4) * 3 + this.paddle.x > this.ball.x
            ) {
                this.ball.normalVector()
            } else {
                this.ball.slideVector()
            }
            this.ball.reverse()
        }
    }

    update() {
        this.gameover()
        this.nextStage()

        this.ball.move()
        this.checkPaddle()

        this.blocks.blocks.map((block) => {
            if (this.ball.collide(block)) {
                log('collide')
                block.kill()
                this.ball.reverse()
                this.score += 100
            }
        })
        // for (let i = 0; i < this.blocks.blocks.length; i++) {
        //     let block = this.blocks[i]
        //     log(block)
        //     if (this.ball.collide(block)) {
        //         log('collide')
        //         block.kill()
        //         this.ball.reverse()
        //         this.score += 100
        //     }
        // }

        super.update()
    }
}
