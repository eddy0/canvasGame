class Enemy extends Img {
    constructor(game, name) {
        super(game, name)
        this.type = 'enemy'
        this.life = 1
        this.init()
    }

    init() {
        this.alive = true
        this.x = random(0, 300)
        this.y = random(-200, 0)
        this.speed = random(2, 5)
    }

    kill() {
        if (this.life < 1) {
            this.alive = false
            return
        }
        this.life--
        // downgrade
        if (this.life === 1) {
            this.image = this.game.images['enemy1']
        }
    }

    update() {
        this.y += this.speed

        // 超出画布部分回收
        if (this.y > 800) {
            this.init()
        }

        // 碰撞
        this.game.scene.elements.map((element, index) => {
            if (
                this.collide(element) &&
                (element.type === 'player' || element.type === 'bullet')
            ) {
                this.kill()
                element.kill()
            }
        })

        // 死亡粒子效果
        if (this.alive === false) {
            let particles = new ParticleSystem(this.game)
            particles.x = this.x
            particles.y = this.y
            this.game.scene.add(particles)
        }
    }

    debug() {
        this.life = config['enemy_life']
        this.speed = config['enemy_speed']
    }
}
