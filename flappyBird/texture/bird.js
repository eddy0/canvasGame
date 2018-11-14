class Bird extends Img {
    constructor(game) {
        super(game, 'bird')
        this.type = 'Bird'
        this.life = 1
        this.init()
    }

    init() {
        this.alive = true
        this.x = 200
        this.y = 300
        this.speedY = 3
        this.gy = 10
        this.speed = random(2, 5)
        this.jump = 10
    }

    jump() {
        this.y -= this.jump
    }

    kill() {
        if (this.life < 1) {
            this.alive = false
            return
        }
        this.life--
    }

    update() {
        this.y += this.speedY

        // 超出画布部分回收
        if (this.y > 400) {
            this.y = 400
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
        // this.life = config['enemy_life'].value
        this.speed = config['enemy_speed'].value
    }
}
