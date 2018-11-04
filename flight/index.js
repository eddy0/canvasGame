const images = {
    bg: 'img/background.png',
    player: 'img/me1.png',
    enemy1: 'img/enemy1.png',
}

const loadImages = (images) => {
    let imgs = Object.keys(images).map((name) => {
        let path = images[name]
        return imageFromPath(name, path)
    })
    return imgs
}

const __main = () => {
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
