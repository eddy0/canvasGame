const images = {
    bg: 'img/background.png',
    player: 'img/me1.png',
    bullet: 'img/bullet1.png',
    enemy1: 'img/enemy1.png',
    enemy1_down1: 'img/enemy1_down1.png',
    enemy1_down3: 'img/enemy1_down3.png',
    enemy2: 'img/enemy2.png',
    enemy3: 'img/enemy3.png',
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
