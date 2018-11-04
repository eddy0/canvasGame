class Editor extends Scene {
    constructor(game) {
        super(game)
        this.blocks = []
    }

    init() {
        this.game.canvas.addEventListener('click', (event) => {
            let offsetX = event.offsetX
            let offsetY = event.offsetY
            console.log(offsetX, offsetY)
            let b = new Block(this.game)
            b.x = offsetX
            b.y = offsetY
            this.blocks.push(b)
            this.updateDiv(this.blocks)
        })
    }

    updateDiv() {
        let result = []
        for (let i = 0; i < this.blocks.length; i++) {
            let b = this.blocks[i]
            let level = [b.x, b.y]
            result.push(level)
        }
        const div = e('#id-editor')
        let r = JSON.stringify(result, null, 2)
        div.innerHTML = r
    }

    update() {
        this.blocks.map((block) => this.game.drawImage(block))
    }

    draw() {
        this.game.ctx.fillText('debug mode', 100, 100)
    }
}
