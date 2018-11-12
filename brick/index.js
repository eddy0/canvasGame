const images = {
    ball: './img/ball.png',
    block: './img/block.png',
    paddle: './img/paddle.png',
}

const __main = () => {
    enableDebug()
    let game = Game.singleton(30, images, (g) => {
        let s = SceneStart.create(g)
        return s
    })
}

__main()
