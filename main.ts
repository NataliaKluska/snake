controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    for (let index = 0; index <= 1; index++) {
        index += 1
        pause(5000)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f 5 5 5 f f . . . . . 
            . . . . f f 5 5 5 f f . . . . . 
            . . . . f f f 5 f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    }
    for (let index = 0; index < 1; index++) {
        snakeEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 5 5 5 5 5 8 . . . . . 
            . . . . 8 5 f 5 f 5 8 . . . . . 
            . . . . 8 5 5 5 5 5 8 . . . . . 
            . . . . 8 2 2 2 2 2 8 . . . . . 
            . . . . 8 2 . . . 2 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(snakeEnemy, sprites.castle.tilePath5)
        snakeEnemy.follow(mySprite, 30)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    score += 1
    mySprite2.destroy()
    PlayerY = mySprite.y
    PlayerX = mySprite.x
    pause(1000)
    tiles.setTileAt(tiles.getTileLocation(PlayerY, PlayerX), assets.tile`myTile`)
})
let PlayerX = 0
let PlayerY = 0
let score = 0
let snakeEnemy: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let myScore = 0
let maxScore = 100
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 . 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 . 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 . 3 3 3 3 3 . 3 . . . 
    . . . . . 3 3 . 3 3 3 3 3 3 . . 
    . . . . . . . 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 5 5 f f . . . . . 
    . . . . f f 5 5 5 f f . . . . . 
    . . . . f f f 5 f f f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite2, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
