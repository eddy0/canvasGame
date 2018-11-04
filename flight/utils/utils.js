const log = console.log.bind(console)

const e = (sel) => document.querySelector(sel)

const imageFromPath = function(name, path) {
    return new Promise((res, rej) => {
        let image = new Image()
        image.src = path
        image.onload = () => {
            res([name, image])
        }
    })
}

function isCollide(a, b) {
    return !(
        a.y + a.image.height < b.y ||
        a.y > b.y + b.image.height ||
        a.x + a.image.width < b.x ||
        a.x > b.x + b.image.width
    )
}
