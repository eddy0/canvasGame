class Player extends Img {
    constructor(game, name) {
        super(game, name)
        this.type = 'player'
        this.speed = 10
        this.interval = 3
        this.life = Infinity
        this.alive = true
    }

    moveLeft() {
        if (this.x + this.w / 3 > 0) {
            this.x -= this.speed
        }
    }

    moveRight() {
        if (this.x + (this.w * 2) / 3 <= this.game.canvas.width) {
            this.x += this.speed
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.speed
        }
    }

    moveDown() {
        if (this.y + this.w / 2 < this.game.canvas.height) {
            this.y += this.speed
        }
    }

    kill() {
        if (this.life < 1) {
            this.alive = false
            return
        }
        this.life--
    }

    fire() {
        if (this.interval === 0) {
            this.interval = 3
            if (window.enableDebug) {
                this.interval = config['fire_interval']
            }
            let bullet = new Bullet(this.game, 'bullet')
            bullet.x = this.x + this.w / 2
            bullet.y = this.y - 10
            this.game.scene.add(bullet)
        }
    }
    update() {
        if (window.enableDebug) {
            this.speed = config['player_speed']
        }
        if (this.interval > 0) {
            this.interval--
        }
    }
}
