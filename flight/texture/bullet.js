class Bullet extends Img {
    constructor(game, name) {
        super(game, name)
        this.type = 'bullet'
        this.setup()
    }

    setup() {
        this.alive = true
        this.life = 1
        this.speed = 10
    }

    kill() {
        if (this.life < 1) {
            this.alive = false
            return
        }
        this.life--
    }

    update() {
        this.y -= this.speed
        if (this.y < 0) {
            this.game.scene.elements = this.game.scene.elements.filter(
                (element) => {
                    return element !== this
                }
            )
        }
    }

    debug() {
        this.speed = config['bullet_speed'].value
    }
}
