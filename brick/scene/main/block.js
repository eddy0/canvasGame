class Blocks {
    constructor(game, level) {
        this.game = game
        this.blocks = loadLevels[level].map((p) => {
            log(p)
            let block = new Block(this.game)
            block.x = p[0]
            block.y = p[1]
            block.life = p[2]
            return block
        })
    }

    draw() {
        for (let p of this.blocks) {
            p.draw()
        }
    }

    update() {
        this.blocks = this.blocks.filter((block) => {
            return block.alive === true
        })
        for (let p of this.blocks) {
            p.update()
        }
    }
}

class Block extends Img {
    constructor(game) {
        super(game, 'block')
        this.x = 10
        this.y = 20
        this.life = 1
        this.alive = true
    }

    kill() {
        this.life--
        if (this.life < 1) {
            this.alive = false
            return
        }
    }

    draw() {
        if (this.alive === false) {
            return
        }
        super.draw()
    }

    // update() {
    //     let collide = this.collide(this.game.scene.ball)
    //     if (collide) {
    //         this.kill()
    //         this.game.scene.ball.reverse()
    //         this.game.scene.score += 100
    //     }
    // }
}

// const Block = function(game) {
//     this.name = this.constructor.name.toLowerCase()
//     this.game = game
//     this.image = this.game.images[this.name]
//     this.x = 10
//     this.y = 20
//     this.life = 2
//     this.alive = true
// }

// Block.prototype.kill = function() {
//     if (this.life <= 0) {
//         this.alive = false
//         return
//     }

//     this.life--
// }

// Block.prototype.collide = function(a) {
//     return isCollide(this, a)
// }
