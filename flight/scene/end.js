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
        this.game.ctx.fillText(`score: ${this.score}`, 100, 150)
        this.game.ctx.fillText('game over, press r to restart ', 100, 180)
    }
}
