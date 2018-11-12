class SceneMain extends Scene {
    constructor(game, level = 0, score = 0) {
        super(game)
        this.currentLevel = level
        this.score = score
        this.interval = 30
        this.init()
        this.debug(this.ball)
        this.debug(this.paddle)
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
        this.ball.x = 180
        this.ball.y = 240
        this.add(this.ball)
        this.paddle = new Paddle(this.game)

        this.add(this.paddle)
        this.blocks = new Blocks(this.game, this.currentLevel)
        this.add(this.blocks)
    }

    draw() {
        if (this.interval > 0) {
            this.interval--
            this.game.ctx.fillText(`第 ${this.currentLevel + 1} 关`, 100, 100)
        }
        super.draw()
        this.game.ctx.fillText('score: ' + this.score, 10, 300)
    }

    gameover() {
        if (this.ball.y > this.game.canvas.height) {
            let s = new End(this.game, this.currentLevel, this.score)
            this.game.replaceScene(s)
            return
        }
    }

    nextStage() {
        if (this.blocks.blocks.length < 1) {
            let s
            this.currentLevel += 1
            log(this.currentLevel)
            if (this.currentLevel === loadLevels.length) {
                s = new End(this.game, this.currentLevel, this.score)
            } else {
                s = new SceneMain(this.game, this.currentLevel, this.score)
            }
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
        if (window.enableDebug) {
            for (let e of this.elements) {
                e.debug && e.debug()
            }
        }

        this.gameover()
        this.nextStage()

        this.ball.move()
        this.checkPaddle()

        this.blocks.blocks.map((block) => {
            if (this.ball.collide(block)) {
                block.kill()
                this.score += 100
                let hitSide = this.ball.collideSide(block)
                if (hitSide) {
                    this.ball.redirect()
                } else {
                    this.ball.reverse()
                }
            }
        })

        super.update()
    }

    debug(ball) {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'p' && window.enableDebug) {
                this.ball.fired = false
            }
        })

        let dragable
        window.addEventListener('mousedown', (event) => {
            let x = event.offsetX
            let y = event.offsetY
            if (
                x < ball.x + ball.w &&
                x > ball.x &&
                y < ball.y + ball.h &&
                y > ball.y
            ) {
                dragable = true
            }
        })

        window.addEventListener('mousemove', (event) => {
            if (
                dragable === true &&
                event.target === this.game.canvas &&
                window.enableDebug
            ) {
                let x = event.offsetX
                let y = event.offsetY
                log(x, y)
                ball.x = x
                ball.y = y
            }
        })

        window.addEventListener('mouseup', () => {
            dragable = false
        })
    }
}
