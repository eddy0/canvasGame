const config = {
    'ball-speedX': 5,
    'ball-speedY': 5,
    'paddle-speed': 10,
    fps: 30,
}

const enableDebug = function() {
    window.enableDebug = false
    let box = e('.debug-box')
    let button = e('#id-debug')
    button.addEventListener('click', (event) => {
        button.classList.toggle('debug')
        box.classList.toggle('debug')
        window.enableDebug = !window.enableDebug
    })

    box.addEventListener('input', (event) => {
        let self = event.target
        let id = self.id.slice(3)
        let key = config[id]
        let val = self.value
        if (key !== undefined) {
            config[id] = Number(val)
            log(config)
        }
        let p = event.target.parentElement
        let content = p.querySelector('.value')
        content.innerHTML = val
    })

    // let input = e('#id-input-speed input')
    // input.addEventListener('input', (event) => {
    //     let val = input.value
    //     window.fps = Number(val)
    //     let span = e('#id-input-speed span')
    //     span.innerHTML = val
    // })
}

// window.addEventListener('keydown', (event) => {
//     if (event.key === 'p' && window.enableDebug) {
//         ball.fired = false
//     }
// })

// let dragable
// window.addEventListener('mousedown', (event) => {
//     let x = event.offsetX
//     let y = event.offsetY
//     log(event.offsetX)
//     if (
//         x < ball.x + ball.w &&
//         x > ball.x &&
//         y < ball.y + ball.h &&
//         y > ball.y
//     ) {
//         dragable = true
//     }
// })

// window.addEventListener('mousemove', (event) => {
//     if (dragable === true && window.enableDebug) {
//         let x = event.offsetX
//         let y = event.offsetY
//         ball.x = x
//         ball.y = y
//     }
// })

// window.addEventListener('mouseup', () => {
//     dragable = false
// })
// }
