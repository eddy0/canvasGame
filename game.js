const Game = function() {
    let canvas = e('#id-canvas-main')
    let ctx = canvas.getContext('2d')

    let g = {
        keydowns: {},
        actions: {},
    }

    g.drawImage = function(item) {
        ctx.drawImage(item.image, item.x, item.y)
    }

    window.addEventListener('keydown', (event) => {
        let k = event.key
        if (g.keydowns[k] !== undefined) {
            g.keydowns[k] = true
        }
    })

    window.addEventListener('keyup', (event) => {
        let k = event.key
        if (g.keydowns[k]) {
            g.keydowns[k] = false
        }
    })

    g.on = function(key, callback) {
        g.keydowns[key] = false
        g.actions[key] = callback
    }

    setInterval(() => {
        Object.keys(g.keydowns).map((key) => {
            if (g.keydowns[key] === true) {
                g.actions[key]()
            }
        })
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        g.update()
        g.draw()
    }, 1000 / 30)

    return g
}
