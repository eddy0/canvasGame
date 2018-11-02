class Game {
    constructor(fps, images, callback) {
        this.fps = fps
        this.images = images
        this.callback = callback
        this.__config.bind(this)
        this.__init.bind(this)
        this.__start.bind(this)
        this.fire.bind(this)
        this.register.bind(this)
        this.update.bind(this)
        this.draw.bind(this)
        this.drawImage.bind(this)
        this.replaceScene.bind(this)
        this.run.bind(this)
        this.__config()
        this.__init()
        this.__start()
    }

    static singleton(...args) {
        if (this.i === undefined) {
            this.i = new this(...args)
        }
        return this.i
    }

    __config() {
        let schema = {
            canvas: document.querySelector('#id-canvas-main'),
            scene: null,
            keydowns: {},
            actions: {},
        }
        Object.keys(schema).map((name) => {
            this[name] = schema[name]
        })
        this.ctx = this.canvas.getContext('2d')
    }

    __init() {
        window.addEventListener('keydown', (event) => {
            let k = event.key
            if (this.keydowns[k] !== undefined) {
                this.keydowns[k] = true
            }
        })

        window.addEventListener('keyup', (event) => {
            let k = event.key
            if (this.keydowns[k]) {
                this.keydowns[k] = false
            }
        })
    }

    __start() {
        setTimeout(() => {
            this.scene = this.callback(this)
            this.scene.init()
            this.run()
        }, 1000 / this.fps)
    }

    fire(key) {
        this.actions[key]()
    }

    register(map) {
        Object.keys(map).map((key) => {
            this.keydowns[key] = false
            this.actions[key] = map[key]
        })
    }

    update() {
        if (this.scene !== null) {
            this.scene.update && this.scene.update()
        }
    }

    drawImage(item) {
        this.ctx.drawImage(item.image, item.x, item.y)
    }

    draw() {
        if (this.scene !== null) {
            this.scene.draw && this.scene.draw()
        }
    }

    replaceScene(scene) {
        this.actions = {}
        this.keydowns = {}
        this.scene = scene
        this.scene.init()
    }

    run() {
        Object.keys(this.actions).map((key) => {
            if (this.keydowns[key] === true) {
                this.fire(key)
            }
        })
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.update()
        this.draw()
        setTimeout(() => {
            this.run()
        }, 1000 / this.fps)
    }
}

/*

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
*/
