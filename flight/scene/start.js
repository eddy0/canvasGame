class SceneStart extends Scene {
    constructor(game) {
        super(game)
        // this.ball = new Ball(game)
        // this.paddle = new Paddle(game)
        // this.block = new Block(game)
    }

    init() {
        let s = new Animation(this.game)
        this.add(s)
        this.game.register({
            s: () => {
                let s = new SceneMain(this.game)
                this.game.replaceScene(s)
            },
        })
    }

    draw() {
        super.draw()
        // this.game.ctx.fillText('按 s 开始游戏', 100, 100)
    }
}
