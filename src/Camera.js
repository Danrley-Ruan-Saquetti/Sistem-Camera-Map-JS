class Camera {
    constructor(dimension) {
        this.dimension = dimension
    }

    getPosition(posObject) {
        const x = posObject.x - this.getXMaster()
        const y = posObject.y - this.getYMaster()

        return { x, y }
    }
    getXMaster() {
        let xM = (player.position.x + (player.dimension.width / 2)) - (this.dimension.width() / 2)
        if (xM < 0) xM = 0
        else if (xM + this.dimension.width() > DIMENSION_MAP_WIDTH) xM = DIMENSION_MAP_WIDTH - this.dimension.width()

        return xM
    }

    getYMaster() {
        let yM = (player.position.y + (player.dimension.height / 2)) - (this.dimension.height() / 2)
        if (yM < 0) yM = 0
        else if (yM + this.dimension.height() > DIMENSION_MAP_WIDTH) yM = DIMENSION_MAP_WIDTH - this.dimension.height()

        return yM
    }
}
