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

const DIMENSION_BLOCK = 50
const LENGTH_BLOCK = 50
const DIMENSION_LINES_COLUMNS = 0.5
const DIMENSION_MAP_WIDTH = DIMENSION_BLOCK * LENGTH_BLOCK
const DIMENSION_MAP_HEIGHT = DIMENSION_BLOCK * LENGTH_BLOCK

const DIMENSION_PLAYER = 25
const SPEED_PLAYER = 5

const MINIMAP_DIMENSION = .15
const MINIMAP_RECUO = 20

let player, map, minimap, camera
let animateFrame

function setup() {
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
                player.speed.y = 0
                break
            case "s":
                player.speed.y = 0
                break
            case "d":
                player.speed.x = 0
                break
            case "a":
                player.speed.x = 0
                break
        }
    })

    initial()
}

function initial() {
    // Map
    let dimensionMap = { width: DIMENSION_MAP_WIDTH, height: DIMENSION_MAP_HEIGHT }
    map = new MapM(dimensionMap)

    // MiniMap
    let dimensionMiniMap = { width: () => { return DIMENSION_WINDOW.width() * MINIMAP_DIMENSION }, height: () => { return DIMENSION_WINDOW.width() * MINIMAP_DIMENSION } }
    let positionMiniMap = { x: () => { return MINIMAP_RECUO }, y: () => { return (DIMENSION_CANVAS.height() - dimensionMiniMap.height()) - MINIMAP_RECUO } }
    minimap = new MiniMap(positionMiniMap, dimensionMiniMap)

    // Player
    let dimensionPlayer = { width: DIMENSION_PLAYER, height: DIMENSION_PLAYER }
    let positionPlayer = { x: (DIMENSION_MAP_WIDTH - dimensionPlayer.width) / 2, y: (DIMENSION_MAP_HEIGHT - dimensionPlayer.height) / 2 }
    let colorPlayer = "#ff0000"
    let speedPlayer = { x: 0, y: 0 }
    player = new Player(positionPlayer, dimensionPlayer, colorPlayer, speedPlayer)

    // Camera
    let dimensionCamera = { width: () => { return DIMENSION_CANVAS.width() }, height: () => { return DIMENSION_CANVAS.height() } }

    camera = new Camera(dimensionCamera)

    animate()
}

function resizeCanvas() {
    canvas.width = DIMENSION_WINDOW.width()
    canvas.height = DIMENSION_WINDOW.height()
}

function draw() {
    ctx.clearRect(0, 0, DIMENSION_CANVAS.width(), DIMENSION_CANVAS.height())

    map.draw()
    player.draw()
    minimap.draw()
}

function update() {
    player.update()
}

function animate() {
    if (DIMENSION_CANVAS.height() != DIMENSION_WINDOW.height() || DIMENSION_CANVAS.width() != DIMENSION_WINDOW.width()) resizeCanvas()

    update()
    draw()

    animateFrame = requestAnimationFrame(animate)
}

window.onload = setup
