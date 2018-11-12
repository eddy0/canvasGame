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
        this.game.ctx.font = '16px sans-serif'
        this.game.ctx.fillText('game over\n 按 s 重新开始', 100, 100)
    }
}
