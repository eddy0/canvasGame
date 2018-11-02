class Scene {
    constructor(game) {
        this.game = game
    }

    // 单例
    static create(...args) {
        if (this.i === undefined) {
            this.i = new this(...args)
        }
        return this.i
    }

    draw() {}

    update() {}
}
