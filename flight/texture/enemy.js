// class Enemies {
//     constructor(game) {
//         this.game = game
//         this.name = 'enemies'
//         this.list = []
//         this.init()
//     }

//     init() {
//         this.amount = 10
//         for (let i = 0; i < this.amount; i++) {
//             this.addEnemy()
//         }
//     }

//     addEnemy() {
//         let name = 'enemy' + random(1, 2)
//         let e = new Enemy(this.game, name)
//         this.list.push(e)
//     }

//     draw() {
//         for (let e of this.list) {
//             e.draw()
//         }
//     }

//     update() {
//         if (this.list.length < this.amount) {
//             this.addEnemy()
//         }
//         for (let e of this.list) {
//             e.update()
//         }
//     }
// }

class Enemy extends Img {
    constructor(game, name) {
        super(game, name)
        this.type = 'enemy'
        this.life = 1
        this.init()
    }

    init() {
        this.alive = true
        this.x = random(0, 300)
        this.y = random(-200, 0)
        this.speed = random(2, 5)
    }

    kill() {
        if (this.life < 1) {
            this.alive = false
            return
        }
        this.life--
        this.image = this.game.images['enemy1']
    }

    update() {
        this.y += this.speed

        // 超出画布部分回收

        if (this.y > 800) {
            this.init()
        }
        // 碰撞
        this.game.scene.elements.map((element, index) => {
            if (
                isCollide(this, element) &&
                (element.type === 'player' || element.type === 'bullet')
            ) {
                // console.group('check')
                // log(this, this.x, this.y, this.w, this.h)
                // log(element, element.x, element.y, element.w, element.h)
                // console.groupEnd()
                this.kill()
                element.kill()
            }
        })

        // 死亡粒子效果
        if (this.alive === false) {
            let particles = new ParticleSystem(this.game)
            particles.x = this.x
            particles.y = this.y
            this.game.scene.add(particles)
        }
    }
}
