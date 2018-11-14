class SceneMain extends Scene {
    constructor(game) {
        super(game)
        this.score = 0
        this.setup()
        this.start = false
        this.over = false
        this.interval = 60
        this.hint = 30
        this.init()
    }

    __keybind() {
        let keymap = {
            w: () => {
                if (this.start === false) {
                    this.start = true
                }
                this.bird.jump()
            },
        }
        this.game.register(keymap)
    }

    init() {
        this.pipe = new Pipe(this.game)
        this.add(this.pipe)
        // ground 需要挡住柱子
        this.ground = new Ground(this.game)
        this.add(this.ground)
    }

    gameover() {
        if (this.over === true) {
            let s = new End(this.game, this.score)
            this.game.replaceScene(s)
            return
        }
    }

    checkDeath() {
        this.pipe.pipes.map((p) => {
            let [up, down] = p
            if (isCollide(this.bird, up) || isCollide(this.bird, down)) {
                this.over = true
            }
        })
    }

    updateScore() {
        this.interval--
        if (this.interval === 0) {
            this.interval = 60
            this.score += 100
        }
    }

    draw() {
        super.draw()
        // hint
        if (this.hint > 0) {
            this.game.ctx.fillText('按 w 飞行 ', 50, 50)
        }

        this.game.ctx.fillText('score: ' + this.score, 10, 20)
    }

    update() {
        super.update()
        // start
        this.hint--
        if (this.start === false && this.bird.y > 150 && this.bird.y < 160) {
            this.bird.jump()
        }

        this.gameover()

        this.checkDeath()

        this.updateScore()
    }
}
