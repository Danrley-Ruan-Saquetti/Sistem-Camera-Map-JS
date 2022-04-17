class Player {
    constructor(position, dimension, color, speed) {
        this.position = position
        this.dimension = dimension
        this.color = color
        this.speed = speed
    }

    draw() {
        ctx.fillStyle = this.color

        let x = this.position.x - camera.getXMaster(player.position.x, player.dimension.width, camera.dimension.width())
        let y = this.position.y - camera.getYMaster(player.position.y, player.dimension.height, camera.dimension.height())
        let w = this.dimension.width
        let h = this.dimension.height
        ctx.fillRect(x, y, w, h)
    }

    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}
