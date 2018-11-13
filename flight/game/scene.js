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
        }
    }
}
