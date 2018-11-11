class Scene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    // 单例
    static create(...args) {
        if (this.i === undefined) {
            this.i = new this(...args)
        }
        return this.i
    }

    add(element) {
        element.scene = this
        this.elements.push(element)
    }

    draw() {
        this.elements.map((element) => {
            element.draw()
        })
    }

    recycle(element, index) {
        if (element.type === 'bullet' && element.y < 10) {
            this.elements.splice(index, 1)
        }
        if (element.type === 'bullet') {
            this.elements.map((e, i) => {
                if (e.type === 'enemy' && isCollide(element, e)) {
                    let particles = new ParticleSystem(this.game)
                    particles.x = e.x
                    particles.y = e.y
                    this.add(particles)
                    this.elements = this.elements.filter(
                        (ele) => ele !== element && ele !== e
                    )
                }
            })
        }
    }

    update() {
        this.elements.map((element, i) => {
            if (element.update) {
                this.recycle(element, i)
                element.update()
            }
        })
    }
}
