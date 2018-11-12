class Game {
    constructor(fps, images, callback) {
        this.fps = fps
        this.images = images
        this.callback = callback
        // this.__config.bind(this)
        // this.__init.bind(this)
        // this.__start.bind(this)
        // this.fire.bind(this)
        // this.register.bind(this)
        // this.update.bind(this)
        // this.draw.bind(this)
        // this.drawImage.bind(this)
        // this.replaceScene.bind(this)
        // this.run.bind(this)
        this.__config()
        this.__init()
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
        this.__setup()
    }

    __setup() {
        window.addEventListener('keydown', (event) => {
            let k = event.key
            if (this.keydowns[k] !== undefined) {
                this.keydowns[k] = 'down'
            }
        })

        window.addEventListener('keyup', (event) => {
            let k = event.key
            if (this.keydowns[k]) {
                this.keydowns[k] = 'up'
            }
        })
    }

    loadImages(images) {
        let imgs = Object.keys(images).map((name) => {
            let path = images[name]
            return imageFromPath(name, path)
        })
        return imgs
    }

    // imageByName(name) {
    //     log(this.game)
    //     let img = this.game.images[name]
    //     return img
    // }

    __init() {
        let imgs = this.loadImages(this.images)
        Promise.all(imgs)
            .then((result) => {
                result.forEach((image) => {
                    let [name, img] = image
                    this.images[name] = img
                })
            })
            .then(() => {
                this.__start()
            })
    }

    __start() {
        setTimeout(() => {
            this.scene = this.callback(this)
            this.scene.__keybind()
            this.run()
        }, 1000 / this.fps)
    }

    fire(key, status) {
        this.actions[key](status)
    }

    // todo: 这个尝试改成 return的时候把这个函数删除, 或者返回一个其他的状态
    register(map) {
        Object.keys(map).map((key) => {
            this.keydowns[key] = 'up'
            this.actions[key] = map[key]
        })
    }

    update() {
        if (this.scene !== null) {
            this.scene.update && this.scene.update()
        }
    }

    drawImage(image) {
        this.ctx.drawImage(image.image, image.x, image.y)
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
        this.scene.__keybind()
    }

    run() {
        Object.keys(this.actions).map((key) => {
            let status = this.keydowns[key]
            if (status === 'down') {
                this.fire(key, status)
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
