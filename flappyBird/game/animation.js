class Animation {
    constructor(game) {
        this.game = game
        this.frames = []
        for (let i = 1; i <= 4; i++) {
            let name = `b${i}`
            let img = new Img(game, name)
            img.x = 100
            img.y = 100
            this.frames.push(img)
        }
        this.texture = this.frames[0]
        this.framesIndex = 0
        this.frameCount = 3
    }

    draw() {
        this.game.drawImage(this.texture)
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.framesIndex = (this.framesIndex + 1) % this.frames.length
            this.texture = this.frames[this.framesIndex]
        }
    }
}
