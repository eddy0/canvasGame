const log = console.log.bind(console)

const e = (sel) => document.querySelector(sel)

function isCollide(a, b) {
    return !(
        a.y + a.height < b.y ||
        a.y > b.y + b.height ||
        a.x + a.width < b.x ||
        a.x > b.x + b.width
    )
}
