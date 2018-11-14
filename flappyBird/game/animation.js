class Animation {
    constructor(game) {
        this.game = game
        this.frames = {
            idle: [],
            run: [],
        }
        this.init()
    }

    init() {
        this.animationName = 'idle'
        this.frameIndex = 0
        this.frameCount = 3
        for (let i = 0; i < this.frameCount + 1; i++) {
            let name = `b${i}`
            let img = this.game.images[name]
            this.frames[this.animationName].push(img)
        }
        log(this.frames)
        this.texture = this.frames[this.animationName][0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.rotation = 0
        this.alpha = 1
        this.flipX = false
        this.gy = 10
        this.vy = 0
    }

    jump() {
        this.alpha = 1
        this.vy = -10
        this.rotation = -45
    }

    draw() {
        let context = this.game.ctx
        context.save()
        let w2 = this.w / 2
        let h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.globalAlpha = this.alpha

        context.rotate((this.rotation * Math.PI) / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }

    update() {
        if (this.alpha > 0.5) {
            this.alpha -= 0.05
        }

        this.y += this.vy
        this.vy += this.gy * 0.2
        let h = 360
        if (this.y > h) {
            this.y = h
        }

        // update rotate
        if (this.rotation < 45) {
            this.rotation += 5
        }

        // animate
        let s = this.animationName
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames[s].length
            this.texture = this.frames[s][this.frameIndex]
        }
    }

    move(x, keystatus) {
        this.flipX = x < 0
        this.x += x
    }
}
