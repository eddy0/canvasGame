const images = {
    bg: 'img/background.png',
    w0: 'img/walk/w0.png',
    w1: 'img/walk/w1.png',
    w2: 'img/walk/w2.png',
    w3: 'img/walk/w3.png',
    w4: 'img/walk/w4.png',
    w5: 'img/walk/w5.png',
    // stand
}

const loadImages = (images) => {
    let imgs = Object.keys(images).map((name) => {
        let path = images[name]
        return imageFromPath(name, path)
    })
    return imgs
}

const __main = () => {
    renderBg()
    let imgs = loadImages(images)

    Promise.all(imgs).then((result) => {
        let images = {}
        result.forEach((image) => {
            let [name, img] = image
            images[name] = img
        })
        let game = Game.singleton(30, images, (g) => {
            let s = SceneMain.create(g)
            return s
        })
    })
}
