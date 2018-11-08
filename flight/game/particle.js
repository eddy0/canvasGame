class ParticleSystem {
    constructor(game) {
        this.game = game
        this.type = 'particleSystem'
        this.setup()
    }

    setup() {
        this.x = 150
        this.y = 100
        this.number = 20
        this.particles = []
        this.interval = 10
    }

    draw() {
        this.particles.map((p, index) => {
            if (this.interval > 0) {
                p.draw()
            }
        })
    }

    update() {
        this.interval--
        if (this.particles.length < this.number) {
            let p = new Particle(this.game)
            let vx = random(-5, 5)
            let vy = random(-5, 5)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        for (let p of this.particles) {
            p.update()
        }
    }
}
