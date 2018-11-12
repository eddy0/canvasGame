class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.init()
    }

    __keybind() {
        this.game.register({
            s: () => {
                let s = new SceneMain(this.game)
                this.game.replaceScene(s)
            },
            e: () => {
                let s = new SceneEdit(this.game)
                this.game.replaceScene(s)
            },
        })
    }

    init() {
        this.ball = new Ball(this.game)
        this.ball.x = 120
        this.ball.y = 100
        this.ball.speedY = 3
        let paddle = new Paddle(this.game)
        paddle.x = 100
        paddle.y = 200
        this.add(paddle)
        this.add(this.ball)
    }

    draw() {
        super.draw()
        this.game.ctx.font = '20px sans-serif'
        this.game.ctx.fillText('按 s 开始游戏', 100, 100)
        this.game.ctx.fillText('按 e 编辑关卡', 100, 120)
    }

    update() {
        super.update()
        this.ball.animate()
    }
}
