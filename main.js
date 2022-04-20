/**
 * @author Dan Ruan
 */

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const DIMENSION_WINDOW = {
    width: () => {
        return innerWidth
    },
    height: () => {
        return innerHeight
    }
}
const DIMENSION_CANVAS = {
    width: () => {
        return canvas.clientWidth
    },
    height: () => {
        return canvas.clientHeight
    }
}

resizeCanvas()

// Config Map
const DIMENSION_BLOCK = 50
const LENGTH_BLOCK = 100
const DIMENSION_LINES_COLUMNS = .5
const DIMENSION_MAP_WIDTH = DIMENSION_BLOCK * LENGTH_BLOCK
const DIMENSION_MAP_HEIGHT = DIMENSION_BLOCK * LENGTH_BLOCK

// Config Player
const DIMENSION_PLAYER = DIMENSION_BLOCK
const SPEED_PLAYER = 10

// Config MiniMap
const MINIMAP_DIMENSION_PERCENTAGE = .15
const MINIMAP_RECUO = 20

let player, map, minimap, camera
let animateFrame

function setup() {

    // Move Player
    addEventListener("keydown", (ev) => {
        switch (ev.key) {
            case "w":
                player.speed.y = -SPEED_PLAYER
                break
            case "s":
                player.speed.y = SPEED_PLAYER
                break
            case "d":
                player.speed.x = SPEED_PLAYER
                break
            case "a":
                player.speed.x = -SPEED_PLAYER
                break
        }

    })
    addEventListener("keyup", (ev) => {
        switch (ev.key) {
            case "w":
            case "s":
                player.speed.y = 0
                break
            case "d":
            case "a":
                player.speed.x = 0
                break
        }
    })

    initial()
}

function initial() {
    // Instance Map
    let dimensionMap = { width: DIMENSION_MAP_WIDTH, height: DIMENSION_MAP_HEIGHT }
    map = new MapM(dimensionMap)

    // Instance MiniMap
    let dimensionMiniMap = {
        width: () => { return (DIMENSION_WINDOW.width() * MINIMAP_DIMENSION_PERCENTAGE) + (DIMENSION_WINDOW.height() * MINIMAP_DIMENSION_PERCENTAGE) / 2 },
        height: () => { return (DIMENSION_WINDOW.width() * MINIMAP_DIMENSION_PERCENTAGE) + (DIMENSION_WINDOW.height() * MINIMAP_DIMENSION_PERCENTAGE) / 2 }
    }
    let positionMiniMap = { x: () => { return MINIMAP_RECUO }, y: () => { return (DIMENSION_CANVAS.height() - dimensionMiniMap.height()) - MINIMAP_RECUO } }
    minimap = new MiniMap(positionMiniMap, dimensionMiniMap)

    // Instance Player
    let dimensionPlayer = { width: DIMENSION_PLAYER, height: DIMENSION_PLAYER }
    let positionPlayer = { x: (DIMENSION_MAP_WIDTH - dimensionPlayer.width) / 2, y: (DIMENSION_MAP_HEIGHT - dimensionPlayer.height) / 2 }
    let colorPlayer = "#ff0000"
    let speedPlayer = { x: 0, y: 0 }
    player = new Player(positionPlayer, dimensionPlayer, colorPlayer, speedPlayer)

    // Instance Camera
    let dimensionCamera = { width: () => { return DIMENSION_CANVAS.width() }, height: () => { return DIMENSION_CANVAS.height() } }

    camera = new Camera(dimensionCamera)

    animate()
}

function resizeCanvas() {
    canvas.width = DIMENSION_WINDOW.width()
    canvas.height = DIMENSION_WINDOW.height()
}

function draw() {
    // Draw Objects
    ctx.clearRect(0, 0, DIMENSION_CANVAS.width(), DIMENSION_CANVAS.height())

    map.draw()
    player.draw()
    minimap.draw()
}

function update() {
    // Update states
    player.update()
}

function animate() {
    if (DIMENSION_CANVAS.height() != DIMENSION_WINDOW.height() || DIMENSION_CANVAS.width() != DIMENSION_WINDOW.width()) resizeCanvas()

    update()
    draw()

    animateFrame = requestAnimationFrame(animate)
}

window.onload = setup
