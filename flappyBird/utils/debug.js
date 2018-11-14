const config = {
    fps: { value: 30, max: 60 },
    // player_speed: { value: 10, max: 60 },
    // player_life: { value: 3, max: 10000 },
    // fire_interval: { value: 5, max: 60 },
    // bullet_speed: { value: 13, max: 60 },
    // enemy_life: { value: 2, max: 10 },
    // enemy_speed: { value: 3, max: 20 },
    // bg_speed: { value: 3, max: 10 },
}

const loadTemplate = (name, value) => {
    let t = `
        <li class="debug-item">
        <span>${name}</span>
        <input id=id-${name} type="range" min="0" max=${value.max} 
        value=${value.value} />
        <span class="value">${value.value}</span>
    </li>
    `
    return t
}

const createDebugList = (config) => {
    let box = e('.debug-box')
    Object.keys(config).map((key) => {
        let val = config[key]
        box.insertAdjacentHTML('beforeend', loadTemplate(key, val))
    })
}

const enableDebug = function() {
    window.enableDebug = false
    let box = e('.debug-box')
    let button = e('#id-debug')
    let pause = e('#id-button-pause')

    pause.addEventListener('click', (event) => {
        pause.classList.toggle('pause')
        window.pause = !window.pause
    })

    button.addEventListener('click', (event) => {
        button.classList.toggle('debug')
        box.classList.toggle('debug')
        window.enableDebug = !window.enableDebug
        if (box.childElementCount === 0) {
            createDebugList(config)
        }
    })

    box.addEventListener('input', (event) => {
        let self = event.target
        let id = self.id.slice(3)
        let key = config[id]
        let val = self.value
        if (key !== undefined) {
            config[id].value = Number(val)
            log(config)
        }
        let p = event.target.parentElement
        let content = p.querySelector('.value')
        content.innerHTML = val
    })
}
