class MapM {
    constructor(dimension) {
        this.dimension = dimension
    }

    draw() {
        ctx.fillStyle = "#000"

        this.drawLines()
        this.drawColumns()
    }

    drawLines() {
        const LINES = DIMENSION_MAP_WIDTH / DIMENSION_BLOCK

        for (let i = 0; i < LINES; i++) {
            let x = 0
            let y = camera.getPosition({ x: 0, y: (DIMENSION_BLOCK * i) }).y
            let w = DIMENSION_CANVAS.width()
            let h = DIMENSION_LINES_COLUMNS

            ctx.fillRect(x, y, w, h)
        }
    }

    drawColumns() {
        const COLUMNS = DIMENSION_MAP_HEIGHT / DIMENSION_BLOCK

        for (let i = 0; i < COLUMNS; i++) {
            let x = camera.getPosition({ x: (DIMENSION_BLOCK * i), y: 0 }).x
            let y = 0
            let w = DIMENSION_LINES_COLUMNS
            let h = DIMENSION_CANVAS.height()

            ctx.fillRect(x, y, w, h)
        }
    }
}
