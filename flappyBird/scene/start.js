class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.init()
    }

    __keybind() {
        this.game.register({
            w: () => {
                this.bird.jump()
            },
            s: () => {
                let s = new SceneMain(this.game)
                this.game.replaceScene(s)
            },
        })
    }

    init() {
        // bg
        let bg = new Img(this.game, 'bg')
        this.add(bg)
        // ground

        this.ground = new Ground(this.game)
        this.add(this.ground)
        log(this.ground)

        // bird
        this.bird = new Animation(this.game)
        this.bird.x = this.game.canvas.width / 2 - 50
        this.bird.y = 150
        this.add(this.bird)
    }

    update() {
        super.update()
        if (this.bird.y > 100 && this.bird.y < 160) {
            this.bird.jump()
        }
    }

    draw() {
        // this.bg.draw()
        super.draw()
        this.game.ctx.font = '20px sans-serif'
        this.game.ctx.fillText('按 s 开始游戏', 100, 100)
    }
}
