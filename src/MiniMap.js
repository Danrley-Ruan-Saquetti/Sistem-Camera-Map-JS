class MiniMap {
    constructor(position, dimension) {
        this.position = position
        this.dimension = dimension
    }

    getPos_Dim(xObj, yObj, wObj, hObj) {
        let x = ((xObj * this.dimension.width()) / DIMENSION_MAP_WIDTH) + this.position.x()
        let y = ((yObj * this.dimension.height()) / DIMENSION_MAP_HEIGHT) + this.position.y()
        let w = ((wObj * this.dimension.width()) / DIMENSION_MAP_WIDTH)
        let h = ((hObj * this.dimension.height()) / DIMENSION_MAP_HEIGHT)

        if (w > this.dimension.width()) w = this.dimension.width()
        if (h > this.dimension.height()) h = this.dimension.height()

        return { x, y, w, h }
    }

    draw() {
        ctx.fillStyle = "#000"
        ctx.fillRect(this.position.x() - DIMENSION_LINES_COLUMNS, this.position.y() - DIMENSION_LINES_COLUMNS, this.dimension.width() + (DIMENSION_LINES_COLUMNS * 2), this.dimension.height() + (DIMENSION_LINES_COLUMNS * 2))
        ctx.fillStyle = "#fff"
        ctx.fillRect(this.position.x(), this.position.y(), this.dimension.width(), this.dimension.height())

        this.drawCamera()
        this.drawPlayer()
    }

    drawCamera() {
        let camPD = this.getPos_Dim(camera.getXMaster(), camera.getYMaster(), camera.dimension.width(), camera.dimension.height())

        ctx.fillStyle = "#000"
        ctx.fillRect(camPD.x - DIMENSION_LINES_COLUMNS, camPD.y - DIMENSION_LINES_COLUMNS, camPD.w + (DIMENSION_LINES_COLUMNS * 2), camPD.h + (DIMENSION_LINES_COLUMNS * 2))
        ctx.fillStyle = "#fff"
        ctx.fillRect(camPD.x, camPD.y, camPD.w, camPD.h)
    }

    drawPlayer() {
        let plaPD = this.getPos_Dim(player.position.x, player.position.y, player.dimension.width, player.dimension.height)

        ctx.fillStyle = player.color
        ctx.fillRect(plaPD.x, plaPD.y, plaPD.w, plaPD.h)
    }
}
