const Game = function(images, callback) {
    window.fps = 30

    let g = {
        scene: null,
        keydowns: {},
        actions: {},
    }

    g.images = images

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

    g.update = function() {
        if (g.scene !== null) {
            g.scene.update && g.scene.update()
        }
    }

    g.draw = function() {
        if (g.scene !== null) {
            g.scene.draw && g.scene.draw()
        }
    }

    g.replaceScene = function(scene) {
        g.actions = {}
        g.keydowns = {}
        g.scene = scene
        g.scene.init()
    }

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
        g.scene = callback(g)
        g.scene.init()
        g.run()
    }, 1000 / window.fps)

    return g
}
