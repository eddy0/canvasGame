class SceneStart extends Scene {
    constructor(game) {
        super(game)
        // this.ball = new Ball(game)
        // this.paddle = new Paddle(game)
        // this.block = new Block(game)
    }

    init() {
        this.player = new Animation(this.game)
        this.add(this.player)
        this.game.register({
            d: () => {
                log(this.player)
                this.player.moveLeft()
            },
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
