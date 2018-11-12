class SceneEdit extends Scene {
    constructor(game) {
        super(game)
        this.blocks = []
        this.interval = 10
        this.init()
    }

    __keybind() {
        this.game.register({
            u: () => {
                if (this.interval < 0) {
                    this.interval = 10
                    this.blocks.pop()
                    this.updateDiv()
                }
            },
        })
    }

    init() {
        this.game.canvas.addEventListener('click', (event) => {
            let offsetX = event.offsetX
            let offsetY = event.offsetY
            console.log(offsetX, offsetY)
            let b = new Block(this.game)
            b.x = offsetX - b.w / 2
            b.y = offsetY - b.y / 2
            log('distance too narrow', this.occupied(b))
            if (this.occupied(b) === false) {
                this.blocks.push(b)
                this.updateDiv(this.blocks)
            }
        })
    }

    occupied(b) {
        if (this.blocks.length < 1) {
            return false
        }
        return this.blocks.some((block) => {
            return block.collide(b)
        })
    }

    updateDiv() {
        let result = []
        for (let i = 0; i < this.blocks.length; i++) {
            let b = this.blocks[i]
            let level = [b.x, b.y, 1]
            result.push(level)
        }
        const div = e('#id-editor')
        let r = JSON.stringify(result, null, 2)
        div.innerHTML = r
    }

    update() {
        if (this.interval > -1) {
            this.interval--
        }
        this.blocks.map((block) => {
            this.game.drawImage(block)
        })
    }

    draw() {
        this.game.ctx.fillText('Edit mode', 100, 100)
        this.game.ctx.fillText('按 u 撤销', 100, 130)
    }
}
