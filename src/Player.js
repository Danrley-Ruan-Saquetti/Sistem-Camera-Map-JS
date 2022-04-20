class Player {
    constructor(position, dimension, color, speed) {
        this.position = position
        this.dimension = dimension
        this.color = color
        this.speed = speed
    }

    draw() {
        ctx.fillStyle = this.color

        let x = this.position.x - camera.getXMaster()
        let y = this.position.y - camera.getYMaster()
        let w = this.dimension.width
        let h = this.dimension.height

        ctx.fillRect(x, y, w, h)
    }

    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if (this.position.x < 0) this.position.x = 0
        else if (this.position.x + this.dimension.width > DIMENSION_MAP_WIDTH) this.position.x = DIMENSION_MAP_WIDTH - this.dimension.width
        if (this.position.y < 0) this.position.y = 0
        else if (this.position.y + this.dimension.height > DIMENSION_MAP_HEIGHT) this.position.y = DIMENSION_MAP_HEIGHT - this.dimension.height
    }
}
