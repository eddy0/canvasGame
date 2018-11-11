const config = {
    player_speed: 10,
    bullet_interval: 3,
}

class Img {
    constructor(game, name) {
        this.game = game
        this.name = name || this.constructor.name.toLowerCase()
        this.image = this.game.images[this.name]
        this.x = 0
        this.y = 0
        this.width = this.image.width
        this.height = this.image.height
    }

    draw() {
        this.game.drawImage(this)
    }

    update() {}
}

class Player extends Img {
    constructor(game, name) {
        super(game, name)
        this.speed = 10
        this.interval = 3
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        if (this.interval === 0) {
            this.interval = config['bullet_interval']
            let bullet = new Bullet(this.game)
            bullet.x = this.x + this.width / 2
            bullet.y = this.y - 10
            this.game.scene.add(bullet)
        }
    }
    update() {
        this.speed = config['player_speed']
        if (this.interval > 0) {
            this.interval--
        }
    }
}

class Bg extends Img {
    constructor(game, name) {
        super(game, name)
    }
}

class Enemy extends Img {
    constructor(game, name) {
        super(game, name)
        this.type = 'enemy'
        this.setup()
    }

    setup() {
        this.x = random(0, 300)
        this.y = random(-200, 0)
        this.speed = random(2, 5)
    }

    update() {
        this.y += this.speed
        if (this.y > 800) {
            this.setup()
        }
    }
}

class Bullet extends Img {
    constructor(game) {
        super(game, 'bullet')
        this.type = 'bullet'
        this.setup()
    }

    setup() {
        this.speed = 5
    }
    update() {
        this.y -= this.speed
    }
}

class Particle extends Img {
    constructor(game) {
        super(game, 'enemy1_down3')
        this.life = 60
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        let factor = 0.01
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}
