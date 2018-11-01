const loadLevel = () => {}

const Block = function() {
    this.image = imageFromPath('static/block.png')
    this.x = 10
    this.y = 20
    this.life = 2
    this.alive = true
}

Block.prototype.kill = function() {
    console.log('xx')
    if (this.life <= 0) {
        this.alive = false
        return
    }

    this.life--
}

Block.prototype.collide = function(a) {
    return isCollide(this, a)
}
