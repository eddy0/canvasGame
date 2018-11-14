class Ground {
    constructor(game) {
        this.game = game
        this.grounds = []
        this.skipCount = 4
        this.init()
    }

    init() {
        for (let i = 0; i < 15; i++) {
            let g = new Img(this.game, 'ground')
            g.y = 370
            g.x = i * g.w
            this.grounds.push(g)
        }
    }

    draw() {
        for (let g of this.grounds) {
            g.draw()
        }
    }

    update() {
        // debug

        this.skipCount--
        let offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let g of this.grounds) {
            g.x += offset
        }
    }
}
