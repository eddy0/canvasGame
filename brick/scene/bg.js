const renderBg = function() {
    let bg = e('#id-canvas-bg')
    let context = bg.getContext('2d')
    context.fillStyle = '#f6f6f6'
    context.fillRect(0, 0, bg.width, bg.height)
}
