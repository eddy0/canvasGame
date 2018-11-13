const images = {
    bg: 'img/background.png',
    player: 'img/me1.png',
    enemy1: 'img/enemy1.png',
    enemy2: 'img/enemy2.png',
    bullet: 'img/bullet1.png',
    // particle
    enemy1_down3: 'img/enemy1_down3.png',
}

const __main = () => {
    enableDebug()
    let game = Game.singleton(30, images, (g) => {
        let s = SceneMain.create(g)
        return s
    })
}

__main()
