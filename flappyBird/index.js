const images = {
    bg: 'img/bg.png',
    ground: 'img/ground.png',
    b1: 'img/b1.png',
    b2: 'img/b2.png',
    b3: 'img/b3.png',
    b4: 'img/b4.png',
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
            let s = SceneStart.create(g)
            return s
        })
    })
}
