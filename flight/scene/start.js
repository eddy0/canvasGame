class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.init()
    }

    __keybind() {
        this.game.register({
            d: () => {
                this.player.moveLeft()
            },
            s: () => {
                let s = new SceneMain(this.game)
                this.game.replaceScene(s)
            },
        })
    }

    init() {
        this.player = new Player(this.game)
        this.player.x = 150
        this.player.y = 400
        this.add(this.player)
        this.bg = new Bg(this.game)
    }

    update() {
        this.bg.update()
        this.player.fire()
        super.update()
    }

    draw() {
        this.bg.draw()
        super.draw()
        this.game.ctx.font = '20px sans-serif'
        this.game.ctx.fillText('按 s 开始游戏', 100, 100)
    }
}
