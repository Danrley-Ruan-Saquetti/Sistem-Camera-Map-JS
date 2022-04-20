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

        for (let i = 1; i < LINES; i++) {
            const x = camera.getPosition({ x: 0, y: 0 }).x
            const y = camera.getPosition({ x: 0, y: (DIMENSION_BLOCK * i) }).y
            const w = x + (DIMENSION_MAP_WIDTH - x)
            const h = DIMENSION_LINES_COLUMNS

            ctx.fillRect(x, y, w, h)
        }
    }

    drawColumns() {
        const COLUMNS = DIMENSION_MAP_HEIGHT / DIMENSION_BLOCK

        for (let i = 1; i < COLUMNS; i++) {
            const x = camera.getPosition({ x: (DIMENSION_BLOCK * i), y: 0 }).x
            const y = camera.getPosition({ x: 0, y: 0 }).y
            const w = DIMENSION_LINES_COLUMNS
            const h = y + (DIMENSION_MAP_HEIGHT - y)

            ctx.fillRect(x, y, w, h)
        }
    }
}
