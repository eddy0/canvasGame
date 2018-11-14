class End extends Scene {
    constructor(game, score) {
        super(game)
        this.score = score
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
        this.game.ctx.fillText(`得分: ${this.score}`, 100, 150)
        this.game.ctx.fillText('game over, 按 r 重新开始', 100, 180)
    }
}
