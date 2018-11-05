class Img {
    constructor(game) {
        this.game = game
        this.name = this.constructor.name.toLowerCase()
        this.image = this.game.images[this.name]
        this.x = 0
        this.y = 0
        this.w = this.image.width
        this.h = this.image.height
    }

    draw() {}

    update() {}
}

class Player extends Img {
    constructor(game) {
        super(game)
    }
}

class Bg extends Img {
    constructor(game) {
        super(game)
    }
}
