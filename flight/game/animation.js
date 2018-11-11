class Animation {
    constructor(game) {
        this.game = game
        this.frames = {
            idle: [],
            walk: [],
        }
        this.condition = 'idle'
        for (let i = 0; i < 6; i++) {
            let name = `w${i}`
            let img = new Img(game, name)
            img.x = 100
            img.y = 100
            this.frames['walk'].push(img)
            if (i === 0) {
                this.frames['idle'].push(img)
            }
        }
        this.texture = this.frames.idle[0]
        this.framesIndex = 0
        this.frameCount = 3
    }

    moveLeft() {
        this.condition = 'walk'
        this.texture.x += 10
    }

    draw() {
        this.game.drawImage(this.texture)
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            if (this.condition === 'walk') {
                this.framesIndex =
                    (this.framesIndex + 1) % this.frames.walk.length
                this.texture = this.frames.walk[this.framesIndex]
            } else {
                this.framesIndex = 0
                this.texture = this.frames.idle[this.framesIndex]
            }
        }
    }
}
