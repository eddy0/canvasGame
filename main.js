const loadImage = (images) => {
    if (window.images === undefined) {
        let o = {}
        Object.keys(images).map((name) => {
            let image = new Image()
            image.src = images[name]
            o[name] = image
        })
        window.images = o
    }
}

const __main = () => {
    enableDebug()
    const images = {
        ball: 'static/ball.png',
        block: 'static/block.png',
        paddle: 'static/paddle.png',
    }
    loadImage(images)
    renderBg()

    let paddle = new Paddle()
    let ball = new Ball()
    let blocks = []

    let block = new Block()
    ball.enablepause()

    let game = new Game()

    game.register({
        a: () => {
            paddle.moveLeft()
        },
        d: () => {
            paddle.moveRight()
        },
        f: () => {
            ball.fire()
        },
    })

    let dragable
    window.addEventListener('mousedown', (event) => {
        let x = event.offsetX
        let y = event.offsetY
        if (
            x < ball.x + ball.image.width &&
            x > ball.x &&
            y < ball.y + ball.image.height &&
            y > ball.y
        ) {
            dragable = true
        }
    })

    window.addEventListener('mousemove', (event) => {
        if (dragable === true) {
            let x = event.offsetX
            let y = event.offsetY
            ball.x = x
            ball.y = y
        }
    })

    window.addEventListener('mouseup', () => {
        dragable = false
    })

    game.update = function() {
        ball.move()
        let collide = isCollide(ball, paddle)
        if (collide) {
            ball.reverse()
        }
        if (block.collide(ball) && block.alive) {
            block.kill()
            ball.reverse()
        }
    }

    game.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)
        if (block.alive) {
            game.drawImage(block)
        }
        game.ctx.fillText('score', 10, 10)
    }
}
