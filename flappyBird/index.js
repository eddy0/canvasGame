const images = {
    bg: 'img/bg.png',
    bird: 'img/bird1.png',
    ground: 'img/ground.png',
    // bird
    b0: 'img/b0.png',
    b1: 'img/b1.png',
    b2: 'img/b2.png',
    b3: 'img/b3.png',
    // particle
}

const __main = () => {
    enableDebug()
    let game = Game.singleton(30, images, (g) => {
        let s = SceneStart.create(g)
        return s
    })
}

__main()
