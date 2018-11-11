class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.bg = new Bg(game)
        // this.paddle = new Paddle(game)
        // this.block = new Block(game)
        this.groundArray = []
        this.skip = 4
    }

    init() {
        let s = new Animation(this.game)
        this.add(this.bg)
        this.add(s)
        for (let i = 0; i < 30; i++) {
            let g = new Img(this.game, 'ground')
            g.x = i * 15
            g.y = 350
            this.add(g)
            this.groundArray.push(g)
        }
        this.game.register({
            s: () => {
                let s = new SceneMain(this.game)
                this.game.replaceScene(s)
            },
        })
    }

    update() {
        super.update()
        this.skip--
        let offset = -5
        if (this.skip <= 0) {
            offset = 15
            this.skip = 4
        }
        this.groundArray.map((ground) => {
            ground.x += offset
        })
    }

    draw() {
        super.draw()
        // this.game.ctx.fillText('按 s 开始游戏', 100, 100)
    }
}
