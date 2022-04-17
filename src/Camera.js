class Camera {
    constructor(dimension) {
        this.dimension = dimension
    }

    getPosition(posObject) {
        const x = posObject.x - this.getXMaster(player.position.x, player.dimension.width, this.dimension.width())
        const y = posObject.y - this.getYMaster(player.position.y, player.dimension.height, this.dimension.height())

        return { x, y }
    }
}

Camera.prototype.getXMaster = (xPlayer, widthPlayer, widthCam) => {
    return (xPlayer + (widthPlayer / 2)) - (widthCam / 2)
}

Camera.prototype.getYMaster = (yPlayer, heightPlayer, heightCam) => {
    return (yPlayer + (heightPlayer / 2)) - (heightCam / 2)
}
