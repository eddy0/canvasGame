const loadImages = () => {
    const images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }

    let imgs = Object.keys(images).map((name) => {
        let path = images[name]
        return imageFromPath(name, path)
    })

    return imgs
}

const __main = () => {
    enableDebug()
    renderBg()
    let imgs = loadImages()

    Promise.all(imgs).then((result) => {
        let images = {}
        result.forEach((image) => {
            let [name, img] = image
            images[name] = img
        })
        let game = new Game(images, (g) => {
            let s = new SceneStart(g)
            return s
        })
    })

    // let paddle = new Paddle()
    // let ball = new Ball()
    // let blocks = []

    // let block = new Block()
}