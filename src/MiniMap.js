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

        if (x < this.position.x()) x = this.position.x()
        else if (x + w > this.position.x() + this.dimension.width()) x = this.dimension.width() - w
        if (y < this.position.y()) y = this.position.y()
        else if (y + h > this.position.y() + this.dimension.height()) y = this.position.y() - h

        return { x, y, w, h }
    }

    draw() {
        ctx.fillStyle = "#000"
        ctx.fillRect(this.position.x() - 1, this.position.y() - 1, this.dimension.width() + 2, this.dimension.height() + 2)
        ctx.fillStyle = "#fff"
        ctx.fillRect(this.position.x(), this.position.y(), this.dimension.width(), this.dimension.height())

        this.drawCamera()
        this.drawPlayer()
    }

    drawCamera() {
        let camPD = this.getPos_Dim(camera.getXMaster(), camera.getYMaster(), camera.dimension.width(), camera.dimension.height())

        ctx.fillStyle = "#000"
        ctx.fillRect(camPD.x - 1, camPD.y - 1, camPD.w + 2, camPD.h + 2)
        ctx.fillStyle = "#fff"
        ctx.fillRect(camPD.x, camPD.y, camPD.w, camPD.h)
    }

    drawPlayer() {
        let camPD = this.getPos_Dim(player.position.x, player.position.y, player.dimension.width, player.dimension.height)

        ctx.fillStyle = player.color
        ctx.fillRect(camPD.x, camPD.y, camPD.w, camPD.h)
    }
}
