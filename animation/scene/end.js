class End extends Scene {
    constructor(game) {
        super(game)
    }

    init() {
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
    }

    draw() {
        this.game.ctx.fillText('game over', 100, 100)
    }
}
