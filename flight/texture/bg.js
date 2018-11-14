class Bg {
    constructor(game) {
        this.game = game
        this.bgs = []
        this.speed = 3
        this.init()
    }

    init() {
        this.bg1 = new Img(this.game, 'bg')
        this.bg1.x = 0
        this.bg1.y = -this.bg1.h
        this.bg2 = new Img(this.game, 'bg')
        this.bg2.x = 0
        this.bg2.y = 0
        this.bgs.push(this.bg1)
        this.bgs.push(this.bg2)
    }

    draw() {
        for (let bg of this.bgs) {
            bg.draw()
        }
    }

    update() {
        // debug
        if (window.enableDebug) {
            this.speed = config['bg_speed'].value
        }

        for (let bg of this.bgs) {
            bg.y += this.speed
            if (bg.y > bg.h) {
                bg.y = -bg.h + this.speed
            }
        }
    }
}
