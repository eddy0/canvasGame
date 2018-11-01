const Game = function() {
    window.fps = 30

    let g = {
        keydowns: {},
        actions: {},
    }

    g.canvas = e('#id-canvas-main')

    g.ctx = g.canvas.getContext('2d')

    g.drawImage = function(item) {
        g.ctx.drawImage(item.image, item.x, item.y)
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

    g.fire = function(key) {
        g.actions[key]()
    }

    g.register = function(map) {
        Object.keys(map).map((key) => {
            g.keydowns[key] = false
            g.actions[key] = map[key]
        })
    }

    g.start = () => {}

    g.run = () => {
        Object.keys(g.actions).map((key) => {
            if (g.keydowns[key] === true) {
                g.fire(key)
            }
        })
        g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.update()
        g.draw()
        setTimeout(() => {
            g.run()
        }, 1000 / window.fps)
    }
    setTimeout(() => {
        g.run()
    }, 1000 / window.fps)

    return g
}
