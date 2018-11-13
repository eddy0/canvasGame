const config = {
    fps: 30,
    player_speed: 10,
    player_life: 3,
    fire_interval: 3,
    bullet_speed: 5,
    enemy_life: 1,
    enemy_speed: 2,
}

const loadTemplate = (name, value) => {
    let t = `
        <li class="debug-item">
        <span>${name}</span>
        <input id=id-${name} type="range" min="0" max="60" value=${value}/>
        <span class="value">${value}</span>
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
    createDebugList(config)

    pause.addEventListener('click', (event) => {
        window.pause = !window.pause
    })

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
}
