class Editor extends Scene {
    constructor(game) {
        super(game)
        this.blocks = []
    }

    init() {
        window.addEventListener('click', (event) => {
            let offsetX = event.offsetX
            let offsetY = event.offsetY
            if (
                offsetX > this.game.canvas.offsetLeft &&
                offsetX <
                    this.game.canvas.offsetLeft +
                        this.game.canvas.width -
                        this.game.images.block.width &&
                offsetY > this.game.canvas.offsetTop &&
                offsetY <
                    this.game.canvas.offsetTop +
                        this.game.canvas.height -
                        this.game.images.block.height
            ) {
                console.log(offsetX, offsetY)
                let b = new Block(this.game)
                b.x = offsetX
                b.y = offsetY
                this.blocks.push(b)
            }
        })
    }

    update() {
        this.blocks.map((block) => this.game.drawImage(block))
    }

    draw() {}
}
