class Scene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    __keybind() {}

    // 单例
    static create(...args) {
        if (this.i === undefined) {
            this.i = new this(...args)
        }
        return this.i
    }

    setup() {
        // bg
        let bg = new Img(this.game, 'bg')
        this.add(bg)
        // ground

        this.ground = new Ground(this.game)
        this.add(this.ground)

        // bird
        this.bird = new Animation(this.game)
        this.bird.x = this.game.canvas.width / 2 - 50
        this.bird.y = 150
        this.add(this.bird)
    }

    add(element) {
        this.elements.push(element)
    }

    draw() {
        for (let e of this.elements) {
            e.draw()
        }
    }

    update() {
        if (window.pause) {
            return
        }

        for (let e of this.elements) {
            e.update()
            // debug
            if (window.enableDebug) {
                e.debug && e.debug()
            }
        }
    }
}
