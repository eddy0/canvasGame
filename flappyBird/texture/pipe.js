class Pipe {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.numberOfPipe = 10
        this.gap = 100
        // this.space = 50
        this.speed = 3
        this.init()
    }

    init() {
        for (let i = 0; i < this.numberOfPipe; i++) {
            let p1 = new Img(this.game, 'pipeDown')
            let p2 = new Img(this.game, 'pipeUp')
            log(p1)
            log(p2)
            p1.x = 300 + i * this.gap
            p2.x = p1.x
            p1.y = random(-150, -0)
            p2.y = Math.max(210, this.game.canvas.height - p1.y - p2.h)
            this.pipes.push([p1, p2])
        }
    }

    draw() {
        for (let pair of this.pipes) {
            pair[0].draw()
            pair[1].draw()
        }
    }

    reset(p) {
        let [p1, p2] = p
        p1.x = this.gap * this.numberOfPipe
        p2.x = p1.x
        p1.y = random(-150, 0)
        p2.y = Math.max(210, this.game.canvas.height - p1.y - p2.h)
    }

    update() {
        for (let p of this.pipes) {
            p[0].x -= this.speed
            p[1].x -= this.speed
            if (p[0].x < -100) {
                this.reset(p)
            }
        }
    }
}
