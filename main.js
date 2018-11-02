const loadImage = (images) => {
    if (window.images === undefined) {
        let o = {}
        let p = new Promise((res) => {
            Object.keys(images).map((name) => {
                let image = new Image()
                image.src = images[name]
                image.onload = () => {
                    res(image)
                }
            })
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

    let game = new Game((g) => {
        let s = new Scene(g)
        return s
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
}
