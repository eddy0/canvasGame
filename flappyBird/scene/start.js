class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.setup()
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
