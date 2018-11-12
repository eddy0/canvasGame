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
    renderBg()
    let imgs = loadImages()

    Promise.all(imgs).then((result) => {
        let images = {}
        result.forEach((image) => {
            let [name, img] = image
            images[name] = img
        })
        let game = Game.singleton(30, images, (g) => {
            let s = SceneStart.create(g)
            return s
        })
    })
}