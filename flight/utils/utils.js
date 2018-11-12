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
    return (
        a.y + a.h > b.y && b.y + b.h > a.y && a.x + a.w > b.x && b.x + b.w > b.x
    )
}

const random = function(start, end) {
    return Math.floor(start + Math.random() * (end - start + 1))
}
