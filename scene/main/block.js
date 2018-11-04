const loadLevel = () => {}
const Block = function(game) {
    this.name = this.constructor.name.toLowerCase()
    this.game = game
    this.image = this.game.images[this.name]
    this.x = 10
    this.y = 20
    this.life = 2
    this.alive = true
}

Block.prototype.kill = function() {
    if (this.life <= 0) {
        this.alive = false
        return
    }

    this.life--
}

Block.prototype.collide = function(a) {
    return isCollide(this, a)
}
