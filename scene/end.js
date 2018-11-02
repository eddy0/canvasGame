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
        })
    }

    draw() {
        this.game.ctx.fillText('end', 100, 100)
    }
}
