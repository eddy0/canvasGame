class End extends Scene {
    constructor(game, level, score) {
        super(game)
        this.level = level
        this.score = score
    }

    __keybind() {
        this.game.register({
            r: () => {
                let s = new SceneStart(this.game)
                this.game.replaceScene(s)
            },
            e: () => {
                let s = new Editor(this.game)
                this.game.replaceScene(s)
            },
        })
        log(this)
    }

    draw() {
        this.game.ctx.font = '16px sans-serif'
        this.game.ctx.fillText('game over\r 按 r 重新开始', 100, 100)
        this.game.ctx.fillText(`your level: ${this.level}`, 100, 120)
        this.game.ctx.fillText(`your score: ${this.score}`, 100, 140)
    }
}
