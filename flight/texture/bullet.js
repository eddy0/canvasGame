// class Bullets {
//     constructor(game) {
//         this.game = game
//         this.list = []
//         this.name = 'bullets'
//     }

//     draw() {
//         for (let b of this.list) {
//             b.draw()
//         }
//     }

//     update() {
//         for (let b of this.list) {
//             b.update()
//         }
//     }
// }

class Bullet extends Img {
    constructor(game, name) {
        super(game, name)
        this.type = 'bullet'
        this.setup()
    }

    setup() {
        this.alive = true
        this.life = 1
        this.speed = 5
    }

    kill() {
        if (this.life < 1) {
            this.alive = false
            return
        }
        this.life--
    }

    update() {
        if (window.enableDebug) {
            this.speed = config['bullet_speed']
        }

        this.y -= this.speed
        if (this.y < 0) {
            this.game.scene.elements = this.game.scene.elements.filter(
                (element) => {
                    return element !== this
                }
            )
        }
        // if (this.alive === false) {
        //     this.game.scene.elements = this.game.scene.elements.filter(
        //         (e) => e !== this
        //     )
        // }

        // this.game.scene.elements.map((e, i) => {
        //     if (e.type === 'enemy' && isCollide(this, e)) {
        //         // let particles = new ParticleSystem(this.game)
        //         // particles.x = e.x
        //         // particles.y = e.y
        //         // this.add(particles)
        //         this.game.scene.elements = this.game.scene.elements.filter(
        //             (ele) => ele !== this && ele !== e
        //         )
        //         this.game.scene.addEnemy()
        //     }
        // })
    }

    debug() {
        this.speed = config['bullet_speed']
    }
}
