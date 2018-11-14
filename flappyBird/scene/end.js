class End extends Scene {
    constructor(game, score) {
        super(game)
        this.score = score
        this.setup()
    }

    __keybind() {
        this.game.register({
            r: () => {
                let s = new SceneStart(this.game)
                this.game.replaceScene(s)
            },
        })
    }

    draw() {
        super.draw()
        this.game.ctx.fillText(`得分: ${this.score}`, 50, 100)
        this.game.ctx.fillText('按 r 重新开始', 50, 130)
    }
}
