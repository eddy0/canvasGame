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
        this.elements.push(element)
    }

    draw() {
        this.elements.map((element) => {
            this.game.drawImage(element)
        })
    }

    recycle(element, index) {
        if (element.type === 'bullet' && element.y < 10) {
            this.elements.splice(index, 1)
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
