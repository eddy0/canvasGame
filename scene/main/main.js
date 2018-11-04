class SceneMain extends Scene {
    constructor(game, level = 1) {
        super(game)
        this.ball = new Ball(this.game)
        this.paddle = new Paddle(this.game)
        this.currentLevel = level
        this.blocks = loadLevels[this.currentLevel]
        this.score = 0
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
        this.blocks = this.blocks.map((p) => {
            let block = new Block(this.game)
            block.x = p[0]
            block.y = p[1]
            block.life = p[2]
            return block
        })
    }

    drawBlock() {
        this.blocks.map((block, index) => {
            if (!block.alive) {
                this.blocks.splice(1, index)

                log('alive', block)
            }
            if (block.collide(this.ball) && block.alive) {
                block.kill()
                log('block', block.alive, block)
                this.ball.reverse()
                this.score += 100
                return
            } else {
                this.game.drawImage(block)
            }
        })
    }

    draw() {
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)
        this.game.ctx.fillText('score: ' + this.score, 10, 10)
    }

    update() {
        if (this.ball.y > this.paddle.y) {
            let s = new End(this.game)
            this.game.replaceScene(s)
            return
        }
        if (this.blocks.length < 1) {
            this.level += 1
            log(this.level)
            let s = new SceneMain(this.game, this.level)
            this.game.replaceScene(s)
            return
        }
        this.drawBlock()
        this.ball.move()
        let collide = isCollide(this.ball, this.paddle)
        if (collide) {
            this.ball.reverse()
        }
        // if (this.block.collide(this.ball) && this.block.alive) {
        //     this.block.kill()
        //     this.ball.reverse()
        // }
    }
}
