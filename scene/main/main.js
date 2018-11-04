class SceneMain extends Scene {
    constructor(game, level = 0) {
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
        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i]
            if (block.alive) {
                this.game.drawImage(block)
            }
        }
    }

    draw() {
        // if (window.enableDebug) {
        //     enableDebug(this.ball)
        // }
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)
        this.drawBlock()
        this.game.ctx.fillText('score: ' + this.score, 10, 10)
    }

    update() {
        if (this.ball.y > this.paddle.y) {
            let s = new End(this.game)
            this.game.replaceScene(s)
            return
        }
        if (this.blocks.length < 1) {
            this.currentLevel += 1
            let s = new SceneMain(this.game, this.currentLevel)
            log(s)
            this.game.replaceScene(s)
            return
        }
        this.ball.move()
        let collide = isCollide(this.ball, this.paddle)
        if (collide) {
            this.ball.reverse()
        }

        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i]
            if (this.ball.collide(block) && block.alive) {
                block.kill()
                this.ball.reverse()
                this.score += 100
                this.blocks.splice(i, 1)
            }
        }
    }
}
