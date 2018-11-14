class Img {
    constructor(game, name) {
        this.game = game
        this.name = name || this.constructor.name.toLowerCase()
        this.image = this.game.images[this.name]
        this.x = 0
        this.y = 0
        this.w = this.image.width
        this.h = this.image.height
    }

    collide(a) {
        return isCollide(this, a)
    }

    draw() {
        this.game.drawImage(this)
    }

    update() {}
}
