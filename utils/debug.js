const enableDebug = function() {
    if (!window.debug) {
        return
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'p') {
        }
    })
    let input = e('#id-input-speed')
    input.addEventListener('input', (event) => {
        let val = input.value
        window.fps = Number(val)
    })

    let dragable
    window.addEventListener('mousedown', (event) => {
        let x = event.offsetX
        let y = event.offsetY
        if (
            x < ball.x + ball.image.width &&
            x > ball.x &&
            y < ball.y + ball.image.height &&
            y > ball.y
        ) {
            dragable = true
        }
    })

    window.addEventListener('mousemove', (event) => {
        if (dragable === true) {
            let x = event.offsetX
            let y = event.offsetY
            ball.x = x
            ball.y = y
        }
    })

    window.addEventListener('mouseup', () => {
        dragable = false
    })
}
