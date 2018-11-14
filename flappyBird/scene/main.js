class SceneMain extends Scene {
    constructor(game) {
        super(game)
        this.score = 0
        this.init()
    }

    __keybind() {
        let keymap = {
            a: () => {
                this.player.moveLeft()
            },
            d: () => {
                this.player.moveRight()
            },
            w: () => {
                this.player.moveUp()
            },
            s: () => {
                this.player.moveDown()
            },
            f: () => {
                this.player.fire()
            },
        }
        this.game.register(keymap)
    }

    addEnemy() {
        let type = random(1, 2)
        let name = 'enemy' + type
        let e = new Enemy(this.game, name)
        e.life = type
        this.add(e)
    }

    init() {
        this.bg = new Bg(this.game)
        this.player = new Player(this.game)
        this.player.x = 200
        this.player.y = 580
        this.add(this.player)
        this.NumberOfEnemy = 10
        for (let i = 0; i < this.NumberOfEnemy; i++) {
            this.addEnemy()
        }
    }

    gameover() {
        if (this.player.alive === false) {
            let s = new End(this.game, this.score)
            this.game.replaceScene(s)
            return
        }
    }

    draw() {
        this.bg.draw()
        this.game.ctx.fillText('score: ' + this.score, 10, 20)

        this.gameover()

        super.draw()
    }

    update() {
        this.bg.update()

        for (let e of this.elements) {
            if (e.alive === false) {
                this.game.scene.elements = this.game.scene.elements.filter(
                    (element) => element !== e
                )
                if (e.type === 'enemy') {
                    this.score += 100
                    this.addEnemy()
                }
            }
        }

        super.update()
    }
}

// init() {
//     // this.add(this.bg)
//     this.add(this.player)
//     for (let i = 0; i < 10; i++) {
//         let enemy = new Enemy(this.game, 'enemy1')
//         this.add(enemy)
//     }
//     log(this.elements)
// }

// draw() {
//     super.draw()
//     // this.particle.draw()
// }
// update() {
//     super.update()
//     // this.particle.update()
//     this.bg.y += 3
//     if (this.bg.y > this.bg.height) {
//         this.bg.y = -this.bg.height
//     }
// }
// }
