const log = console.log.bind(console)

const e = (sel) => document.querySelector(sel)

function isCollide(a, b) {
    return !(
        a.y + a.image.height < b.y ||
        a.y > b.y + b.image.height ||
        a.x + a.image.width < b.x ||
        a.x > b.x + b.image.width
    )
}
